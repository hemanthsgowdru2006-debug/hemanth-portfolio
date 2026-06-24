import { useEffect, useRef } from "react";
import * as THREE from "three";

// Interactive 3D neural network. Nodes drift; lines form between
// nearby nodes and between nodes near the mouse cursor.
export default function NeuralBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 55;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const NODE_COUNT = 90;
    const SPREAD = 70;
    const positions: THREE.Vector3[] = [];
    const velocities: THREE.Vector3[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      positions.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * SPREAD,
          (Math.random() - 0.5) * SPREAD,
          (Math.random() - 0.5) * SPREAD * 0.6,
        ),
      );
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.02,
        ),
      );
    }

    // Nodes as points
    const nodeGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(NODE_COUNT * 3);
    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const nodeMaterial = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: 0.6,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const points = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(points);

    // Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x7c4dff,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(NODE_COUNT * NODE_COUNT * 6);
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage),
    );
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    const mouse = new THREE.Vector3(0, 0, 0);
    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * SPREAD;
      mouse.y = -((e.clientY - rect.top) / rect.height - 0.5) * SPREAD;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    let raf = 0;
    const CONNECT_DIST = 12;
    const MOUSE_DIST = 18;

    const animate = () => {
      // Update positions
      for (let i = 0; i < NODE_COUNT; i++) {
        const p = positions[i];
        const v = velocities[i];
        p.add(v);
        // Mouse attraction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < MOUSE_DIST * MOUSE_DIST) {
          p.x += dx * 0.002;
          p.y += dy * 0.002;
        }
        // Bounds
        if (Math.abs(p.x) > SPREAD / 2) v.x *= -1;
        if (Math.abs(p.y) > SPREAD / 2) v.y *= -1;
        if (Math.abs(p.z) > SPREAD / 3) v.z *= -1;

        posArray[i * 3] = p.x;
        posArray[i * 3 + 1] = p.y;
        posArray[i * 3 + 2] = p.z;
      }
      nodeGeometry.attributes.position.needsUpdate = true;

      // Build lines
      let linePtr = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        const a = positions[i];
        // mouse line
        const mdx = a.x - mouse.x;
        const mdy = a.y - mouse.y;
        if (mdx * mdx + mdy * mdy < MOUSE_DIST * MOUSE_DIST) {
          linePositions[linePtr++] = a.x;
          linePositions[linePtr++] = a.y;
          linePositions[linePtr++] = a.z;
          linePositions[linePtr++] = mouse.x;
          linePositions[linePtr++] = mouse.y;
          linePositions[linePtr++] = 0;
        }
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const b = positions[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dz = a.z - b.z;
          if (dx * dx + dy * dy + dz * dz < CONNECT_DIST * CONNECT_DIST) {
            linePositions[linePtr++] = a.x;
            linePositions[linePtr++] = a.y;
            linePositions[linePtr++] = a.z;
            linePositions[linePtr++] = b.x;
            linePositions[linePtr++] = b.y;
            linePositions[linePtr++] = b.z;
          }
        }
      }
      // Clear remaining
      for (let k = linePtr; k < linePositions.length; k++) linePositions[k] = 0;
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.setDrawRange(0, linePtr / 3);

      scene.rotation.y += 0.0008;
      scene.rotation.x += 0.0003;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
      nodeGeometry.dispose();
      lineGeometry.dispose();
      nodeMaterial.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    />
  );
}
