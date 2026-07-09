import Image from "next/image";
import HomeHero from "./components/homeHero";
import Projects from "./components/projects";
import DesignExploration from "./components/designExploration";
import Me from "./components/me";
import WorkTogether from "./components/workTogether";
import DesignTools from "./components/designTools";
import Gallery from "./components/gallery";
import Hideout from "./components/hideout";
import Faq from "./components/faq";
import HomeHireMe from "./components/homeHireMe";

export async function generateMetadata() {
  return {
    title: {
      absolute: "Ololade.designs — Timilehin | Product Designer",
    },
    description:
      "Product designer helping businesses move from idea to launch. Explore case studies in recruitment, skincare, and event management — plus design exploration, tools, and process.",
  };
}


export default function Home() {
  return (
    <div className="home">
     <HomeHero />
     <Projects />
     <DesignExploration />
     <Me />
     <WorkTogether />
     <DesignTools />
     <Gallery />
     <Hideout />
     <Faq />
     <HomeHireMe 
     image={"/assets/timi.gif"}
     title={"Just before you go..."}
     subtitle={"If you’ve made it this far, I trust it’s clear that I bring the skills, creativity, and insight to elevate your product and drive real results. Ready when you are."}
     />
    </div>
  );
}
