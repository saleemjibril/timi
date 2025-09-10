"use client";
import Image from "next/image";

export default function DemicareWhatsNext() {
    return (
        <div className="demicare__whats-next">
            <div className="demicare__whats-next__inner">
                <div>
                <div className="demicare__whats-next__inner__title">
                What’s Next
                </div>
                <div className="demicare__whats-next__inner__subtitle">
                   To further boost engagement and retention, I proposed introducing a gamification system, the concept includes:

                   <ul>
                    <li>A randomized, time-sensitive trivia game with a countdown timer, where users answer skincare-related questions (e.g., myth-busting, product identification, or quick lifestyle tasks like uploading a 25-second video of themselves drinking water).</li>
                    <li>Participation in the game is based on luck and timing, users who are online when the countdown starts have a chance to play.</li>
                    <li>Coins are earned for participating, which can later be redeemed for rewards, with potential for future integration into a skincare marketplace.</li>
                   </ul>

                   This system aims to keep users engaged through fun, educational content while reinforcing healthy habits and fostering a sense of community within the platform.

                 
                </div>
                <button className="demicare__whats-next__inner__button"
                 onClick={() =>   window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })}
                >Back to Top <Image src="/assets/icons/upArrow.svg" width={24} height={24} />
                </button>
                </div>
                <Image src="/assets/demicareWhatsNext.svg" width={451} height={462} />

            
            </div>

        </div>
    )
}