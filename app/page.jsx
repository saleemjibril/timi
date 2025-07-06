import DesignProcess from "./components/designProcess";
import Hero from "./components/hero";
import ProjectOverview from "./components/projectOverview";
import LowFidelity from "./components/lowFidelity";
import UserResearch from "./components/userResearch";
import HighFidelity from "./components/highFidelity";
import Achievements from "./components/achievements";
import StyleGuide from "./components/styleGuide";
import HireMe from "./components/hireMe";
import Footer from "./components/footer";

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
    <UserResearch />
    <LowFidelity />
    <HighFidelity />
    <Achievements />
    <StyleGuide />
    <HireMe />
    <Footer />
    </>
  );
}
