import DesignProcess from "./components/designProcess";
import Hero from "./components/hero";
import ProjectOverview from "./components/projectOverview";

export async function generateMetadata() {
  return {
    title: "Home",
    description:
      "Project Management, Engineering Construction & Design, Supply of Integrated Services, Supervision, Environmental Consultancy",
  };
}


export default function Home() {
  return (
    <>
    <Hero />
    <ProjectOverview />
    <DesignProcess />
    </>
  );
}
