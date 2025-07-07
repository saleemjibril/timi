import Image from "next/image";
import HomeHero from "./components/homeHero";
import Projects from "./components/projects";


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
    </div>
  );
}
