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
    title: "Home",
    description:
      "Project Management, Engineering Construction & Design, Supply of Integrated Services, Supervision, Environmental Consultancy",
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
     image={"/assets/headshot2.svg"}
     title={"Just before you go..."}
     subtitle={"If you’ve made it this far, I trust it’s clear that I bring the skills, creativity, and insight to elevate your product and drive real results. Ready when you are."}
     />
    </div>
  );
}
