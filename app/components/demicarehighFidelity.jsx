"use client";
import Image from "next/image";

export default function DemicarehighFidelity() {
    return (
        <div className="demicare__high-fidelity">
            <div className="demicare__high-fidelity__inner">
                <div className="demicare__high-fidelity__inner__title">
                    High-Fidelity Designs
                </div>
                <div className="demicare__high-fidelity__inner__subtitle">
                    With the low-fidelity sketches in place, I had a clear direction for the high-fidelity designs. The focus here was to refine visual details, align interactions with user expectations, and bring the AI-driven experience to life.
                    <br />
                    <br />
                    Every screen was carefully designed to reflect the user’s journey, from logging skincare routines to tracking progress and staying consistent. The result was a clean, intuitive interface that balances functionality with simplicity, ensuring both beginners and skincare enthusiasts feel at home.
                </div>
                <button
                 onClick={() =>   window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })}
                >Back to Top <Image src="/assets/icons/upArrow.svg" width={24} height={24} />
                </button>
            <div className="demicare__high-fidelity__inner__card">
                <div className="demicare__high-fidelity__inner__card__title">

                    Sign Up & Login screens            </div>
                <div className="demicare__high-fidelity__inner__card__subtitle">
                    A look into the login and sign-up flow, designed to make onboarding smooth and intuitive for users. The process is quick and minimal, but also flexible, allowing users to create an account with ease or log in seamlessly to start their skincare journey.
                </div>

                <Image src="/assets/demicarehighFidelity1.svg" width={1184} height={704} />

            </div>
            <div className="demicare__high-fidelity__inner__card">
                <div className="demicare__high-fidelity__inner__card__title">

                Scan face screen (New user)           </div>
                <div className="demicare__high-fidelity__inner__card__subtitle">
                The Scan Face screen is the first step for new users after onboarding. Here, they’re prompted to scan their face so the AI can analyze their skin and provide insights. After a 60-second scan, users see their results. They can also choose to skip this step and return later.
                </div>

                <Image src="/assets/demicarehighFidelity2.svg" width={1184} height={704} />

            </div>
            <div className="demicare__high-fidelity__inner__card">
                <div className="demicare__high-fidelity__inner__card__title">Home screen </div>
                <div className="demicare__high-fidelity__inner__card__subtitle">
                The Home screen is the starting point for users each day. New users are prompted to create a routine, while existing users see reminders for their daily routines. It also features quick-access cards for Track Progress, View Analytics, and a curated section for Guided Topics.
                </div>

                <Image src="/assets/demicarehighFidelity3.svg" width={1184} height={704} />

            </div>
            <div className="demicare__high-fidelity__inner__card">
                <div className="demicare__high-fidelity__inner__card__title">Routine screen</div>
                <div className="demicare__high-fidelity__inner__card__subtitle">
                The Routine screen gives users a quick overview of their skincare habits, showing total streaks, daily streaks, and the status of routines, including active, completed, paused, and achieved. It’s designed to keep users on track and motivated in their skincare journey.
                </div>

                <Image src="/assets/demicarehighFidelity4.svg" width={1184} height={704} />

            </div>
            <div className="demicare__high-fidelity__inner__card">
                <div className="demicare__high-fidelity__inner__card__title">Analytics screen</div>
                <div className="demicare__high-fidelity__inner__card__subtitle">
                The Analytics screen provides users with a detailed overview of their skincare progress. It displays consistency, streaks, and routine completion, alongside AI-driven insights like scan results, skin health scores, and comparisons across Day 0, 14, and 21.
                </div>

                <Image src="/assets/demicarehighFidelity5.svg" width={1184} height={704} />

            </div>
            <div className="demicare__high-fidelity__inner__card">
                <div className="demicare__high-fidelity__inner__card__title">Track progress screen</div>
                <div className="demicare__high-fidelity__inner__card__subtitle">
                The Track Progress screens give users a snapshot of their skincare journey, showing their most recent scan results alongside visual insights on skin improvements. This feature helps users see how their routine is working, track trends over time, and stay motivated to keep going.
                </div>

                <Image src="/assets/demicarehighFidelity6.svg" width={1184} height={704} />

            </div>
            <div className="demicare__high-fidelity__inner__card">
                <div className="demicare__high-fidelity__inner__card__title">Settings & Profile screen</div>
                <div className="demicare__high-fidelity__inner__card__subtitle">
                The screens displayed here, users can view and update their personal details, manage their account information, and adjust their app preferences. The profile screen provides a snapshot of the user’s data and routine insights, while the settings screen allows them to customize app functionalities, manage notifications, and access support features. 
                </div>

                <Image src="/assets/demicarehighFidelity7.svg" width={1184} height={704} />

            </div>
            </div>

        </div>
    )
}