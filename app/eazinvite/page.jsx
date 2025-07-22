import EazinviteDesignStartergy from "../components/eazinviteDesignStartergy";
import EazInviteHero from "../components/eazinviteHero";
import EazInviteHighFidelity from "@/app/components/eazInviteHighFidelity";
import EazInviteProblem from "../components/eazinviteProblem";
import HomeHireMe from "../components/homeHireMe";
import StyleGuide from "../components/styleGuide";

export default function EazInvite(params) {
    return (
       <>
       <EazInviteHero />
       <EazInviteProblem />
       <EazinviteDesignStartergy />
       <EazInviteHighFidelity />
       <StyleGuide
        subtitle={"In designing Eazinvites, I followed a thoughtfully crafted style guide that defined the visual language of the platform. It included consistent design principles, color schemes, typography, and iconography to ensure a cohesive and seamless user experience across all interfaces."}
        images={
          [
            "/assets/eazinviteIcongraphy.svg",
            "/assets/eazinviteColorScheme.svg",
            "/assets/eazinviteTypography.svg",
            "/assets/eazinviteUIComponents.svg"
          ]
        }
      />
       <HomeHireMe
     image={"/assets/headshot4.svg"}
     title={"Thank you for sticking till the very end!"}
     subtitle={"You’ve seen the work, now imagine what we can build together. Let’s make your next big idea beautifully real."}
     />
       </>
    )
}