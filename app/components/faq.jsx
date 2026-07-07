"use client";
import Image from "next/image";
import { useState } from "react";

const FAQ_DATA = [
    {
        question: "What kind of design service do I offer?",
        answer: "I specialize in product design for web and mobile platforms, including websites, apps, dashboards, and eCommerce platforms with a strong focus on user experience and business impact. I also provide design systems, user flows, wireframes, and high-fidelity prototypes, everything needed to bring your idea to life."
    },
    {
        question: "Do you work with startups or bigger teams?",
        answer: "Both! I enjoy working with early-stage startups who need direction, and with growing teams that need a designer who can jump in and contribute without friction. My process scales either way."
    },
    {
        question: "What if I'm not sure what I need yet?",
        answer: "Totally okay. I'll help you unpack your ideas, clarify your goals, and suggest what's best based on where you are. You don't need to have it all figured out, that's part of my job."
    },
    {
        question: "How long does a typical project take?",
        answer: "Timelines depend on project complexity. After our initial chat, I'll provide a detailed timeline based on your goals and deliverables."
    },
    {
        question: "Can you collaborate with developers or teams I already have?",
        answer: "Absolutely. I love working alongside developers, product managers, and other creatives. I make sure my designs are developer-friendly, well-documented, and easy to implement."
    },
    {
        question: "How much does a project cost?",
        answer: "Pricing varies depending on scope and deliverables. I offer both fixed project rates and flexible packages. After a quick discovery call, I'll send you a tailored quote that suits your goals and budget."
    }
];

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
                {FAQ_DATA.map((faq, index) => (
                    <div key={index} className={`home__faq__inner__card ${openCards[index] ? "open" : ''}`}>
                        <div className="home__faq__inner__card__title-group" onClick={() => toggleCard(index)}>
                            <div>{faq.question}</div>
                            <Image 
                                src={openCards[index] ? "/assets/icons/cancel.svg" : "/assets/icons/plus.svg"} 
                                width={36} 
                                height={36} 
                            />
                        </div>

                        <div className={`home__faq__inner__card__subtitle`}>
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}