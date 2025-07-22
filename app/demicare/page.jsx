import Achievements from "../components/achievements";
import DemicareDesignApproach from "../components/demicareDesignApproach";
import  DemicareHero from "../components/demicareHero";
import DemicarehighFidelity from "../components/demicarehighFidelity";
import DemicareIntroduction from "../components/demicareIntroduction";
import DemicarelowFidelity from "../components/demicarelowFidelity";
import DemicareWhatsNext from "../components/demicareWhatsNext";
import HomeHireMe from "../components/homeHireMe";
import StyleGuide from "../components/styleGuide";

export default function Demicare() {
    return (
       <>
       
       <DemicareHero />
       <DemicareIntroduction />
       <DemicareDesignApproach />
       <DemicarelowFidelity />
       <DemicarehighFidelity />
       <Achievements
    subtitle={"DemiCare launched successfully as an AI-powered skincare platform, helping users track, analyze, and understand how their skin responds to their skincare routines. In the first three months post-launch, the platform achieved:  65% active users, 40% increase in routine consistency, 55% users completed at least 2 scans within their first month."}
    numbers={[
      {
        title: 65,
        subtitle: "Active users"
      },
      {
        title: 40,
        subtitle: "Routine consistency"
      },
      {
        title: 55,
        subtitle: "Scan completion"
      },
      {
        title: 85,
        subtitle: "Positive feedback"
      }
    ]}
    bg={"#000000"}
    />

    <DemicareWhatsNext />

    <StyleGuide
        subtitle={"To design the mobile app, I followed a thoughtfully curated style guide that established the visual language and interface elements of the platform. This guide defined the core design principles, color palette, typography, and iconography, ensuring a consistent, intuitive, and user-friendly experience across every screen."}
        images={
          [
            "/assets/demicareIcongraphy.svg",
            "/assets/demicareColorScheme.svg",
            "/assets/demicareTypography.svg",
            "/assets/demicareUIComponents.svg"
          ]
        }
      />
       <HomeHireMe
     image={"/assets/headshot3.svg"}
     title={"This is your cue to Hire Me!"}
     subtitle={"Big ideas deserve great designs. Let me bring that idea to life."}
     />
       </>
    )
}