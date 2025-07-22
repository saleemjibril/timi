import Image from "next/image";

export default function DemicareDesignApproach(params) {
    return (
        <div className="demicare__design-approach">
        <div className="demicare__design-approach__inner">
            <div className="demicare__design-approach__inner__title">
                Design Approach
            </div>
            <div className="demicare__design-approach__inner__subtitle">
                Before building DemiCare’s core features, I defined key objectives, which aim is to help users track and understand how their skin responds to their skincare routines. I conducted a competitive analysis of existing skincare apps, identifying a gap in personalized, AI-powered progress tracking.

                I also held interviews with skincare users to understand their frustrations and goals. These insights informed the creation of two key user personas: the Skincare Enthusiast and the Curious Beginner. This research laid the foundation for DemiCare’s user flows, features, and AI-powered scanning system.
            </div>

            <button className="demicare__design-approach__inner__button">View Hi-Fi <Image src="/assets/icons/downArrow.svg" width={24} height={24} />
            </button>

            <div className="demicare__design-approach__inner__tab-label">
                <div className="demicare__design-approach__inner__tab-label__active">User personas</div>
                <Image src="/assets/icons/divider.svg" width={24} height={24} />
                <div>Competitive analysis</div>
            </div>

            <div className="demicare__design-approach__inner__cards">
                <div className="demicare__design-approach__inner__cards__card">
                    <div className="demicare__design-approach__inner__cards__card__user">
                        <Image src="/assets/avatar1.svg" width={64} height={64} />

                        <div>
                            <div className="demicare__design-approach__inner__cards__card__user__name">Adaeze Jones</div>
                            <div className="demicare__design-approach__inner__cards__card__user__age">28 yrs</div>
                            <div className="demicare__design-approach__inner__cards__card__user__role">Content Creator</div>
                            <div className="demicare__design-approach__inner__cards__card__user__location">Lagos, Nigeria</div>
                        </div>
                    </div>

                    <div className="demicare__design-approach__inner__cards__title">
                        About Adaeze
                    </div>
                    <div className="demicare__design-approach__inner__cards__subtitle">
                        Adaeze is a skincare lover who has been using multiple products for years. She enjoys learning about new trends, but often finds it hard to know if the products she’s using are actually making a difference. She values visual proof of her progress and wants tools that make it easy to stay on top of her routine.
                    </div>

                    <div className="demicare__design-approach__inner__cards__title">
                        Pain Points:
                    </div>
                    <ul className="demicare__design-approach__inner__cards__list">
                        <li>Struggles to track whether her skincare routine is effective.</li>
                        <li>Finds it difficult to stay motivated without seeing clear results.</li>
                        <li>Gets overwhelmed by the endless flow of skincare advice online.</li>
                    </ul>

                    <div className="demicare__design-approach__inner__cards__title">
                        Goals:
                    </div>
                    <ul className="demicare__design-approach__inner__cards__list">
                        <li>Track skincare progress with data she can trust.</li>
                        <li>Stay consistent with her routine and keep streaks going.</li>
                        <li>Discover ways to optimize her routine and improve skin health.</li>
                    </ul>

                </div>
                <div className="demicare__design-approach__inner__cards__divider"></div>
                <div className="demicare__design-approach__inner__cards__card">
                    <div className="demicare__design-approach__inner__cards__card__user">
                        <Image src="/assets/avatar2.svg" width={64} height={64} />

                        <div>
                            <div className="demicare__design-approach__inner__cards__card__user__name">Tobi Romad</div>
                            <div className="demicare__design-approach__inner__cards__card__user__age">21 yrs</div>
                            <div className="demicare__design-approach__inner__cards__card__user__role">University Student</div>
                            <div className="demicare__design-approach__inner__cards__card__user__location">Abuja, Nigeria</div>
                        </div>
                    </div>

                    <div className="demicare__design-approach__inner__cards__title">
                        About Tobi
                    </div>
                    <div className="demicare__design-approach__inner__cards__subtitle">
                        Tobi is new to skincare and wants to build a simple, effective routine without getting lost in complicated advice. He’s eager to learn but often forgets to apply products regularly. He appreciates tools that make skincare fun, interactive, and easy to follow.
                    </div>

                    <div className="demicare__design-approach__inner__cards__title">
                        Pain Points:
                    </div>
                    <ul className="demicare__design-approach__inner__cards__list">
                        <li>Unsure where to start or what products to use.</li>
                        <li>Struggles to stay consistent with his skincare routine.</li>
                        <li>Needs clear, simple guidance and motivation.</li>
                    </ul>

                    <div className="demicare__design-approach__inner__cards__title">
                        Goals:
                    </div>
                    <ul className="demicare__design-approach__inner__cards__list">
                        <li>Build a basic routine and follow it consistently.</li>
                        <li>Learn skincare tips in a fun, engaging way.</li>
                        <li>Stay motivated with reminders, streaks, and progress tracking.</li>
                    </ul>

                </div>
            </div>

            <div className="demicare__design-approach__inner__subtitle">
                Based on insights from interviews with our target users, I developed two user personas: the Skincare Enthusiast and the Skincare Beginner. These personas helped clarify the specific challenges and goals of each user group.
                From the feedback gathered, I identified the features users also need which will help them stay consistent with using <span>DemiCare</span>, which are:
            </div>

            <ul className="demicare__design-approach__inner__list">
                <li>A streak feature to motivate beginners and skincare enthusiasts alike, helping them stay consistent with their routines over time</li>
                <li>
                    A consistency card that visually tracks and displays how often users complete their routines, encouraging accountability and building healthy habits.
                </li>
                <li>
                    A routine completion rate that shows users their progress in real-time by prompting them to mark routines as done throughout the day.
                </li>
                <li>Daily reminders and progress notifications to ensure users stay on track with their personalized skincare journey.</li>
            </ul>
        </div>
        </div>
    )
}