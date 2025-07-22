import DesignProcess from "../components/designProcess";
import Hero from "../components/hero";
import ProjectOverview from "../components/projectOverview";
import LowFidelity from "../components/lowFidelity";
import UserResearch from "../components/userResearch";
import HighFidelity from "../components/highFidelity";
import Achievements from "../components/achievements";
import StyleGuide from "../components/styleGuide";
import HireMe from "../components/hireMe";

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
      <Achievements
        subtitle={"From my collaboration with stakeholders, we set goals to onboard 30 businesses and achieve 60% feature engagement in the first quarter. By focusing on user-centered design and clear value propositions, we exceeded expectations: 70% recruiter adoption, a 35% reduction in time-to-hire, and a 70% increase in platform sign-ups within three months."}
        numbers={[
          {
            title: 70,
            subtitle: "Recruiter Adoption"
          },
          {
            title: 35,
            subtitle: "Reduction in time-to-hire"
          },
          {
            title: 70,
            subtitle: "Increase in platform sign-ups"
          },
        ]}
      />
      <StyleGuide
        subtitle={"For Clichire, I developed a comprehensive style guide to ensure visual consistency and ease of use across the platform. The guide defined key elements such as color palettes, typography, spacing, and iconography—creating a cohesive foundation for both the user interface and the overall brand experience. This helped maintain clarity, scalability, and accessibility throughout the design system."}
        images={
          [
            "/assets/icongraphy.svg",
            "/assets/colorscheme.svg",
            "/assets/typography.svg",
            "/assets/uicomponents.svg"
          ]
        }
      />
      <HireMe />
    </>
  );
}
