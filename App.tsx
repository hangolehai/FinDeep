import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { Features } from "./components/Features";
import { Architecture } from "./components/Architecture";
import { Roadmap } from "./components/Roadmap";
import { Outcomes } from "./components/Outcomes";
import { Footer } from "./components/Footer";
import AppPage from "./app/page";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"landing" | "app">("landing");

  if (currentPage === "app") {
    return <AppPage onNavigateToLanding={() => setCurrentPage("landing")} />;
  }

  return (
    <div className="min-h-screen">
      <Navigation onNavigateToApp={() => setCurrentPage("app")} />
      <main>
        <Hero onNavigateToApp={() => setCurrentPage("app")} />
        <div id="features">
          <Highlights />
          <Features />
        </div>
        <div id="architecture">
          <Architecture />
        </div>
        <div id="roadmap">
          <Roadmap />
        </div>
        <div id="outcomes">
          <Outcomes />
        </div>
      </main>
      <Footer />
    </div>
  );
}
