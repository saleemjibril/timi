"use client";
import Image from "next/image";
import { useState } from "react";

const competitors = [
    {
        name: "SkinAssist",
        logo: "/assets/icons/companalysis1.svg",
        meta: ["Mobile App", "Over 10,000 downloads", "4.5 Ratings"],
        aboutTitle: "About SkinAssist",
        about:
            "AI-powered skincare app offering face scanning, product recommendations, and ingredient safety analysis.",
        strengths: [
            "Advanced AI face scanning for skin analysis.",
            "Extensive product database for tailored recommendations.",
            "Includes ingredient safety checks for informed decision-making.",
        ],
        weaknesses: [
            "Core features behind a paywall (PRO subscription).",
            "Complex interface may be intimidating for beginners.",
            "Overly focused on product suggestions, which can overwhelm users.",
        ],
    },
    {
        name: "Lóvi",
        logo: "/assets/icons/companalysis2.svg",
        meta: ["Mobile App", "Over 24,000 downloads", "4.5 Ratings"],
        aboutTitle: "About Lóvi",
        about:
            "Lóvi is an AI-powered skincare app offering personalized product recommendations, an ingredient scanner, and advanced face scanning to help users track skin health over time. It aims to simplify skincare by combining science-backed insights with user-friendly features.",
        strengths: [
            "Advanced face scanning and ingredient analysis tools.",
            "Large product database for tailored recommendations.",
            "Professional, science-backed skincare advice.",
        ],
        weaknesses: [
            "Focuses heavily on product recommendations, which can overwhelm users.",
            "Lacks flexible progress tracking tools for users who prefer DIY routines.",
        ],
    },
];

function renderCompetitor(competitor) {
    return (
        <>
            <div className="demicare__design-approach__inner__competitive__header">
                <div className="demicare__design-approach__inner__competitive__meta">
                    <div className="demicare__design-approach__inner__competitive__name">
                        {competitor.name}
                    </div>
                    {competitor.meta.map((item) => (
                        <div
                            key={item}
                            className="demicare__design-approach__inner__competitive__detail"
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className="demicare__design-approach__inner__competitive__logo">
                    <Image
                        src={competitor.logo}
                        alt={competitor.name}
                        width={64}
                        height={64}
                    />
                </div>
            </div>

            <div className="demicare__design-approach__inner__competitive__section">
                <div className="demicare__design-approach__inner__competitive__section-title">
                    {competitor.aboutTitle}
                </div>
                <p className="demicare__design-approach__inner__competitive__text">
                    {competitor.about}
                </p>
            </div>

            <div className="demicare__design-approach__inner__competitive__section">
                <div className="demicare__design-approach__inner__competitive__section-title">
                    Strengths:
                </div>
                <ul className="demicare__design-approach__inner__competitive__list">
                    {competitor.strengths.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="demicare__design-approach__inner__competitive__section">
                <div className="demicare__design-approach__inner__competitive__section-title">
                    Weaknesses:
                </div>
                <ul className="demicare__design-approach__inner__competitive__list">
                    {competitor.weaknesses.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default function DemicareDesignApproach() {
    const [activeTab, setActiveTab] = useState("personas");

    return (
        <div className="demicare__design-approach">
            <div className="demicare__design-approach__inner">
                <div className="demicare__design-approach__inner__title">
                    Design Approach
                </div>
                <div className="demicare__design-approach__inner__subtitle">
                    Before building DemiCare's core features, I defined key objectives, which aim is to help users track and understand how their skin responds to their skincare routines. I conducted a competitive analysis of existing skincare apps, identifying a gap in personalized, AI-powered progress tracking.
                    <br />
                    <br />
                    I also held interviews with skincare users to understand their frustrations and goals. These insights informed the creation of two key user personas: the Skincare Enthusiast and the Curious Beginner. This research laid the foundation for DemiCare's user flows, features, and AI-powered scanning system.
                </div>

                <button className="demicare__design-approach__inner__button">
                    View Hi-Fi{" "}
                    <Image
                        src="/assets/icons/downArrow.svg"
                        width={24}
                        height={24}
                    />
                </button>

                <div className="demicare__design-approach__inner__tab-label">
                    <button
                        type="button"
                        className={
                            activeTab === "personas"
                                ? "demicare__design-approach__inner__tab-label__active"
                                : ""
                        }
                        onClick={() => setActiveTab("personas")}
                    >
                        User personas
                    </button>
                    <Image
                        src="/assets/icons/divider.svg"
                        width={24}
                        height={24}
                    />
                    <button
                        type="button"
                        className={
                            activeTab === "competitive"
                                ? "demicare__design-approach__inner__tab-label__active"
                                : ""
                        }
                        onClick={() => setActiveTab("competitive")}
                    >
                        Competitive analysis
                    </button>
                </div>

                {activeTab === "personas" ? (
                    <>
                        <div className="demicare__design-approach__inner__cards">
                            <div className="demicare__design-approach__inner__cards__card">
                                <div className="demicare__design-approach__inner__cards__card__user">
                                    <Image
                                        src="/assets/avatar1.svg"
                                        width={64}
                                        height={64}
                                    />

                                    <div>
                                        <div className="demicare__design-approach__inner__cards__card__user__name">
                                            Adaeze Jones
                                        </div>
                                        <div className="demicare__design-approach__inner__cards__card__user__age">
                                            28 yrs
                                        </div>
                                        <div className="demicare__design-approach__inner__cards__card__user__role">
                                            Content Creator
                                        </div>
                                        <div className="demicare__design-approach__inner__cards__card__user__location">
                                            Lagos, Nigeria
                                        </div>
                                    </div>
                                </div>

                                <div className="demicare__design-approach__inner__cards__title">
                                    About Adaeze
                                </div>
                                <div className="demicare__design-approach__inner__cards__subtitle">
                                    Adaeze is a skincare lover who has been using multiple products for years. She enjoys learning about new trends, but often finds it hard to know if the products she's using are actually making a difference. She values visual proof of her progress and wants tools that make it easy to stay on top of her routine.
                                </div>

                                <div className="demicare__design-approach__inner__cards__title">
                                    Pain Points:
                                </div>
                                <ul className="demicare__design-approach__inner__cards__list">
                                    <li>
                                        Struggles to track whether her skincare routine is effective.
                                    </li>
                                    <li>
                                        Finds it difficult to stay motivated without seeing clear results.
                                    </li>
                                    <li>
                                        Gets overwhelmed by the endless flow of skincare advice online.
                                    </li>
                                </ul>

                                <div className="demicare__design-approach__inner__cards__title">
                                    Goals:
                                </div>
                                <ul className="demicare__design-approach__inner__cards__list">
                                    <li>
                                        Track skincare progress with data she can trust.
                                    </li>
                                    <li>
                                        Stay consistent with her routine and keep streaks going.
                                    </li>
                                    <li>
                                        Discover ways to optimize her routine and improve skin health.
                                    </li>
                                </ul>
                            </div>
                            <div className="demicare__design-approach__inner__cards__divider"></div>
                            <div className="demicare__design-approach__inner__cards__card">
                                <div className="demicare__design-approach__inner__cards__card__user">
                                    <Image
                                        src="/assets/avatar2.svg"
                                        width={64}
                                        height={64}
                                    />

                                    <div>
                                        <div className="demicare__design-approach__inner__cards__card__user__name">
                                            Tobi Romad
                                        </div>
                                        <div className="demicare__design-approach__inner__cards__card__user__age">
                                            21 yrs
                                        </div>
                                        <div className="demicare__design-approach__inner__cards__card__user__role">
                                            University Student
                                        </div>
                                        <div className="demicare__design-approach__inner__cards__card__user__location">
                                            Abuja, Nigeria
                                        </div>
                                    </div>
                                </div>

                                <div className="demicare__design-approach__inner__cards__title">
                                    About Tobi
                                </div>
                                <div className="demicare__design-approach__inner__cards__subtitle">
                                    Tobi is new to skincare and wants to build a simple, effective routine without getting lost in complicated advice. He's eager to learn but often forgets to apply products regularly. He appreciates tools that make skincare fun, interactive, and easy to follow.
                                </div>

                                <div className="demicare__design-approach__inner__cards__title">
                                    Pain Points:
                                </div>
                                <ul className="demicare__design-approach__inner__cards__list">
                                    <li>Unsure where to start or what products to use.</li>
                                    <li>
                                        Struggles to stay consistent with his skincare routine.
                                    </li>
                                    <li>Needs clear, simple guidance and motivation.</li>
                                </ul>

                                <div className="demicare__design-approach__inner__cards__title">
                                    Goals:
                                </div>
                                <ul className="demicare__design-approach__inner__cards__list">
                                    <li>
                                        Build a basic routine and follow it consistently.
                                    </li>
                                    <li>Learn skincare tips in a fun, engaging way.</li>
                                    <li>
                                        Stay motivated with reminders, streaks, and progress tracking.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="demicare__design-approach__inner__subtitle">
                            Based on insights from interviews with our target users, I developed two user personas: the Skincare Enthusiast and the Skincare Beginner. These personas helped clarify the specific challenges and goals of each user group.
                            From the feedback gathered, I identified the features users also need which will help them stay consistent with using <span>DemiCare</span>, which are:
                        </div>

                        <ul className="demicare__design-approach__inner__list">
                            <li>
                                A streak feature to motivate beginners and skincare enthusiasts alike, helping them stay consistent with their routines over time
                            </li>
                            <li>
                                A consistency card that visually tracks and displays how often users complete their routines, encouraging accountability and building healthy habits.
                            </li>
                            <li>
                                A routine completion rate that shows users their progress in real-time by prompting them to mark routines as done throughout the day.
                            </li>
                            <li>
                                Daily reminders and progress notifications to ensure users stay on track with their personalized skincare journey.
                            </li>
                        </ul>
                    </>
                ) : (
                    <>
                        <div className="demicare__design-approach__inner__competitive">
                            <div className="demicare__design-approach__inner__competitive__column">
                                {renderCompetitor(competitors[0])}
                            </div>
                            <div className="demicare__design-approach__inner__cards__divider"></div>
                            <div className="demicare__design-approach__inner__competitive__column">
                                {renderCompetitor(competitors[1])}
                            </div>
                        </div>

                        <div className="demicare__design-approach__inner__competitive-summary">
                            <p>
                                After reviewing both competitors, I found key gaps that <em>DemiCare</em> could address. Lóvi offers advanced AI scanning and product recommendations but focuses heavily on suggesting products, which can overwhelm users who simply want to monitor their skin&apos;s health. SkinAssist offers advanced AI analysis but leans too much into product recommendations, often overwhelming users who just want to track their skincare habits.
                            </p>
                            <p>
                                <em>DemiCare</em> aims to simplify this by combining routine logging, AI scans, and clear progress tracking, helping users understand how their skin responds over time, without the noise.
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
