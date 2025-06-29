import Image from "next/image";

export default function DesignProcess() {
    return (
        <div className="design-process">
            <div className="design-process__inner">
                <div className="design-process__inner__image">
                <Image src={"/assets/card1.png"} objectFit="cover" layout="fill" />
                </div>
           
                <div className="design-process__inner__card">
                    <div className="design-process__inner__card__title">
                        My Design Process
                    </div>
                    <div className="design-process__inner__card__subtitle">
                        The first approach I adopted for this project was to conduct a competitive analysis to understand how existing recruitment platforms approached hiring challenges across different business sizes. However, most existing solutions lacked the flexibility structure and didn’t fully cater to the needs of both small businesses and enterprise-level organizations.
                        <br />
                        <br />
                        As a result, I shifted focus to building out user flows using fictional case scenarios derived from conversations with recruiters, HR professionals, and business owners. These scenarios helped me uncover real-world hiring pain points, such as scoring candidates fairly, managing multiple job pipelines, and reducing back-and-forth with clients which shaped the foundation for features like the Dynamic Scoring System and Client management.
                    </div>

                    <button>View Hi-Fi <Image src="/assets/icons/downArrow.svg" width={24} height={24} />
                    </button>
                </div>
            </div>
        </div>
    )
}