import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import BackToTop from "@/components/portfolio/BackToTop";
import CursorGlow from "@/components/portfolio/CursorGlow";
import LoadingScreen from "@/components/portfolio/LoadingScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hemanth S Gowda — AI/ML Engineer & Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Hemanth S Gowda — BE CSE (AI & ML) student at Malnad College of Engineering. AI/ML enthusiast, software & web developer building intelligent systems.",
      },
      { property: "og:title", content: "Hemanth S Gowda — AI/ML Engineer Portfolio" },
      {
        property: "og:description",
        content: "AI/ML enthusiast and developer building intelligent systems and elegant software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <LoadingScreen />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
