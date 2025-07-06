import Image from "next/image";

export default function StyleGuide() {
   return (
    <div className="style-guide">
    <div className="style-guide__title">
    Style Guide
        </div>
    <div className="style-guide__subtitle">
    For Clichire, I developed a comprehensive style guide to ensure visual consistency and ease of use across the platform. The guide defined key elements such as color palettes, typography, spacing, and iconography—creating a cohesive foundation for both the user interface and the overall brand experience. This helped maintain clarity, scalability, and accessibility throughout the design system.
        </div>

        <button>Back to Top <Image src="/assets/icons/upArrow.svg" width={24} height={24} />
</button>

<div className="style-guide__grid">
<Image src="/assets/icongraphy.png" width={644} height={568} />
<Image src="/assets/coloscheme.png" width={644} height={568} />
</div>


<Image className="style-guide__typography" src="/assets/typography.png" width={644} height={568} />

<Image className="style-guide__uicomponents" src="/assets/uicomponents.svg" width={644} height={568} />
    </div>
   )
}