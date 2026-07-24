import Image from "next/image";
import Link from "next/link";

export default function WorkTogether(params) {
    return (
       <div className="home__work-together">
         <div className="home__work-together__inner">
            <div className="home__work-together__inner__title">
            How we’ll work Together
            </div>
            <div className="home__work-together__inner__grid-mini">
                <div className="home__work-together__inner__card">
                <div className="home__work-together__inner__card__number">
                    1
                    </div>
                <div className="home__work-together__inner__card__title">
                Discovery
                    </div>
                <div className="home__work-together__inner__card__subtitle">
                We'll kick things off with a deep-dive session to understand your goals, users, and product vision. This is where I ask questions, absorb context, and align with your business needs.
                    </div>

                </div>
                <div className="home__work-together__inner__card">
                <div className="home__work-together__inner__card__number">
                    2
                    </div>
                <div className="home__work-together__inner__card__title">
                Define
                    </div>
                <div className="home__work-together__inner__card__subtitle">
                I’ll translate our findings into actionable insights, crafting personas, user flows, defining the product’s core features and user journey to ensure clarity from the start.
                    </div>

                </div>
            </div>
            <div className="home__work-together__inner__grid">
                <div className="home__work-together__inner__card">
                <div className="home__work-together__inner__card__number">
                    3
                    </div>
                <div className="home__work-together__inner__card__title">
                Design
                    </div>
                <div className="home__work-together__inner__card__subtitle">
                From low-fidelity wireframes to polished, high-fidelity screens. I design with users in mind and developers in view, ensuring every interface is both intuitive and functional.
                    </div>

                </div>
                <div className="home__work-together__inner__card">
                <div className="home__work-together__inner__card__number">
                    4
                    </div>
                <div className="home__work-together__inner__card__title">
                Collaborate
                    </div>
                <div className="home__work-together__inner__card__subtitle">
                We'll work closely together, refining designs through feedback loops and iterative improvements. Think of me as your design partner, not just a freelancer.
                    </div>

                </div>
                <div className="home__work-together__inner__card">
                <div className="home__work-together__inner__card__number">
                    5
                    </div>
                <div className="home__work-together__inner__card__title">
                Deliver & Support
                    </div>
                <div className="home__work-together__inner__card__subtitle">
                I’ll hand off dev-ready files, documentation, and assets while I also stick around to support implementation, QA, and future improvements if needed.
                    </div>

                </div>
            </div>

            <div className="home__work-together__inner__button-group">
            <Link href="/contact">
                Hire me

                <Image src={"/assets/icons/rightArrow.svg"} width={18} height={18} alt="" />
            </Link>
            <a href="mailto:ololadegrace.ot@gmail.com">
                Email

                <Image src={"/assets/icons/email.svg"} width={34} height={34} alt="" />
            </a>
            </div>
        </div>
       </div>
    )
}