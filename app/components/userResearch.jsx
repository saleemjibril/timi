"use client";

import { useState } from "react";
import ClicHireSlide from "./clichireSlide";

const USER_RESEARCH_SLIDES = [
    {
        image: "/assets/clichireSlide.jpg",
        title: "Nneka works at a large enterprise with a dedicated recruitment team. She manages multiple job pipelines simultaneously, collaborates with different hiring teams, and reports to upper management. She also works with external clients through a white-label recruiting model.",
        name: "Nneka",
        role: "Recruiter",
    },
    {
        image: "/assets/clichireSlide2.png",
        title: "An HR manager at a marketing agency with 60+ employees. She's hiring across multiple departments and needs to manage job listings, track candidate stages, and involve department leads in evaluations. She's overwhelmed by manual scheduling and inconsistent candidate reviews.",
        name: "Tolu F",
        role: "HR manager",
    },
    {
        image: "/assets/clichireSlide3.png",
        title: "A co-founder at a 10-person fintech startup looking to hire their first product designer. Without an HR team, Ade needs a simple platform that allows her to post jobs, review candidates efficiently, and schedule interviews without back-and-forth emails. She wants a tool that's easy to use, helps her make quick decisions, and scales as her company grows.",
        name: "Ade R",
        role: "Co-founder",
    },
];

const CASE_SCENARIO_SLIDES = [
    { image: "/assets/clichireCaseScenarios.svg" },
    { image: "/assets/clichireCaseScenarios2.svg" },
];

const CARDS = [
    {
        title: "User Research",
        subtitle: (
            <>
                I had informal conversations with recruiters, HR professionals, and small business owners looking to simplify and improve their hiring process. Many expressed frustrations with the limitations of existing tools, especially when managing recruitment at different scales.
                <br />
                <br />
                These insights revealed recurring challenges and helped me craft fictional case scenarios that reflected real-world needs, which laid the foundation for designing user flows and features tailored to support flexible, efficient hiring across various business types.
            </>
        ),
        slides: USER_RESEARCH_SLIDES,
    },
    {
        title: "Case Scenarios & User Flows",
        subtitle: (
            <>
                With insights gathered from case scenarios, I mapped out key user flows to ensure a seamless experience across the platform. Each flow was designed to reflect the different user journeys, from job creation and candidate evaluation to scheduling interviews and managing recruitment stages.
                <br />
                <br />
                This helped establish a clear structure for both first-time users and advanced recruiters, ensuring the platform remained intuitive regardless of company size or hiring complexity.
            </>
        ),
        slides: CASE_SCENARIO_SLIDES,
    },
];

export default function UserResearch() {
    const [activeCard, setActiveCard] = useState(0);

    return (
        <div className="user-research">
            <div className="user-research__inner">
                {CARDS.map((card, index) => (
                    <button
                        key={card.title}
                        type="button"
                        className={`user-research__inner__card${activeCard === index ? " user-research__inner__card--active" : ""}`}
                        aria-pressed={activeCard === index}
                        onClick={() => setActiveCard(index)}
                    >
                        <div className="user-research__inner__card__title">
                            {card.title}
                        </div>
                        <div className="user-research__inner__card__subtitle">
                            {card.subtitle}
                        </div>
                    </button>
                ))}
            </div>
            <ClicHireSlide
                key={activeCard}
                slides={CARDS[activeCard].slides}
            />
        </div>
    );
}
