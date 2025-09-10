"use client";
import Image from "next/image";
import { useState } from "react";

export default function Faq(params) {
    const [openCards, setOpenCards] = useState({});

    const toggleCard = (index) => {
        setOpenCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="home__faq">
            <div className="home__faq__inner">
                <div className="home__faq__inner__title">
                    Wondering about a few things
                </div>
                <div className="home__faq__inner__card">
                    <div className="home__faq__inner__card__title-group" onClick={() => toggleCard(0)}>
                        <div>What kind of design service do I offer?</div>
                        <Image 
                            src={openCards[0] ? "/assets/icons/cancel.svg" : "/assets/icons/plus.svg"} 
                            width={36} 
                            height={36} 
                        />
                    </div>

                    <div className={`home__faq__inner__card__subtitle ${openCards[0] ? 'open' : ''}`}>
                        I specialize in product design for web and mobile platforms, including websites, apps, dashboards, and eCommerce platforms with a strong focus on user experience and business impact. I also provide design systems, user flows, wireframes, and high-fidelity prototypes, everything needed to bring your idea to life.
                    </div>
                </div>
                <div className="home__faq__inner__card">
                    <div className="home__faq__inner__card__title-group" onClick={() => toggleCard(1)}>
                        <div>Do you work with startups or bigger teams?</div>
                        <Image 
                            src={openCards[1] ? "/assets/icons/cancel.svg" : "/assets/icons/plus.svg"} 
                            width={36} 
                            height={36} 
                        />
                    </div>

                    <div className={`home__faq__inner__card__subtitle ${openCards[1] ? 'open' : ''}`}>
                        Both! I enjoy working with early-stage startups who need direction, and with growing teams that need a designer who can jump in and contribute without friction. My process scales either way.
                    </div>
                </div>
                <div className="home__faq__inner__card">
                    <div className="home__faq__inner__card__title-group" onClick={() => toggleCard(2)}>
                        <div>What if I'm not sure what I need yet?</div>
                        <Image 
                            src={openCards[2] ? "/assets/icons/cancel.svg" : "/assets/icons/plus.svg"} 
                            width={36} 
                            height={36} 
                        />
                    </div>

                    <div className={`home__faq__inner__card__subtitle ${openCards[2] ? 'open' : ''}`}>
                        Totally okay. I'll help you unpack your ideas, clarify your goals, and suggest what's best based on where you are. You don't need to have it all figured out, that's part of my job.
                    </div>
                </div>
                <div className="home__faq__inner__card">
                    <div className="home__faq__inner__card__title-group" onClick={() => toggleCard(3)}>
                        <div>How long does a typical project take?</div>
                        <Image 
                            src={openCards[3] ? "/assets/icons/cancel.svg" : "/assets/icons/plus.svg"} 
                            width={36} 
                            height={36} 
                        />
                    </div>

                    <div className={`home__faq__inner__card__subtitle ${openCards[3] ? 'open' : ''}`}>
                        Timelines depend on project complexity. After our initial chat, I'll provide a detailed timeline based on your goals and deliverables.
                    </div>
                </div>
                <div className="home__faq__inner__card">
                    <div className="home__faq__inner__card__title-group" onClick={() => toggleCard(4)}>
                        <div>Can you collaborate with developers or teams I already have?</div>
                        <Image 
                            src={openCards[4] ? "/assets/icons/cancel.svg" : "/assets/icons/plus.svg"} 
                            width={36} 
                            height={36} 
                        />
                    </div>

                    <div className={`home__faq__inner__card__subtitle ${openCards[4] ? 'open' : ''}`}>
                        Absolutely. I love working alongside developers, product managers, and other creatives. I make sure my designs are developer-friendly, well-documented, and easy to implement.
                    </div>
                </div>
                <div className="home__faq__inner__card">
                    <div className="home__faq__inner__card__title-group" onClick={() => toggleCard(5)}>
                        <div>How much does a project cost?</div>
                        <Image 
                            src={openCards[5] ? "/assets/icons/cancel.svg" : "/assets/icons/plus.svg"} 
                            width={36} 
                            height={36} 
                        />
                    </div>

                    <div className={`home__faq__inner__card__subtitle ${openCards[5] ? 'open' : ''}`}>
                        Pricing varies depending on scope and deliverables. I offer both fixed project rates and flexible packages. After a quick discovery call, I'll send you a tailored quote that suits your goals and budget.
                    </div>
                </div>
            </div>
        </div>
    )
}