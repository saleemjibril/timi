import Image from "next/image";

export default function Me() {
    return (
        <div className="home__me">
            <div className="home__me__grid">
                <Image src="/assets/me1.svg" width={644} height={400} />
                <Image src="/assets/me2.svg" width={644} height={400} />
            </div>

            <div className="home__me__title">
                Where I’ve shaped ideas into Experiences.
            </div>

            <div className="home__me__card">
                <div className="home__me__card__timeline">
                    October 2023 - Present
                </div>

                <div className="home__me__card__inner">
                    <div className="home__me__card__inner__title">
                        Netzence Sustainability Ltd
                    </div>
                    <div className="home__me__card__inner__role">
                        Product Designer
                    </div>
                    <div className="home__me__card__inner__subtitle">
                        At Netzence, I led the design of CloseCarbon product , a sustainability-focused platform helping organizations track and reduce their carbon footprint while earning carbon incentives. From building out the MVP to launching a robust design system, my work helped drive 85% adoption within 6 months. I also optimized admin dashboards, crafted a seamless onboarding experience, and designed the marketing website to retain users and boost platform trust.
                    </div>

                </div>

            </div>

            <div className="home__me__subtitle">
                Hard Skillset
            </div>

            <div className="home__me__skillset">
                <Image src="/assets/skillset1.svg" width={612} height={278} />
                <Image src="/assets/skillset2.svg" width={612} height={278} />
                <Image src="/assets/skillset3.svg" width={612} height={278} />
                <Image src="/assets/skillset4.svg" width={612} height={278} />
                <Image src="/assets/skillset5.svg" width={612} height={278} />
                <Image src="/assets/skillset6.svg" width={612} height={278} />
            </div>

            <div className="home__me__subtitle">
                Soft Skillset
            </div>

            <div className="home__me__soft-grid-cover">
            <div className="home__me__soft-grid">
                <div className="home__me__soft-card">
                    <Image src="/assets/icons/problem.svg" width={42} height={42} />
                    <div className="home__me__soft-card__title">
                        Problem solving
                    </div>

                </div>
                <div className="home__me__soft-card">
                    <Image src="/assets/icons/time.svg" width={42} height={42} />
                    <div className="home__me__soft-card__title">
                        Time management
                    </div>

                </div>
                <div className="home__me__soft-card">
                    <Image src="/assets/icons/empathy.svg" width={42} height={42} />
                    <div className="home__me__soft-card__title">
                        Empathy
                    </div>

                </div>
                <div className="home__me__soft-card">
                    <Image src="/assets/icons/collaboration.svg" width={42} height={42} />
                    <div className="home__me__soft-card__title">
                        Collaboration
                    </div>

                </div>
            </div>
            <div className="home__me__soft-grid-mini">
                <div className="home__me__soft-card">
                    <Image src="/assets/icons/stakeholder.svg" width={42} height={42} />
                    <div className="home__me__soft-card__title">
                        Stakeholder management
                    </div>

                </div>
                <div className="home__me__soft-card">
                    <Image src="/assets/icons/communication.svg" width={42} height={42} />
                    <div className="home__me__soft-card__title">
                        Effective communication
                    </div>

                </div>

            </div>
            </div>

        </div>
    )
}