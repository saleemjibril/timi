"use client";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const slidesData = [
    {
        image: "/assets/clichireSlide.jpg",
        title: "Nneka works at a large enterprise with a dedicated recruitment team. She manages multiple job pipelines simultaneously, collaborates with different hiring teams, and reports to upper management. She also works with external clients through a white-label recruiting model.",
        name: "Nneka",
        role: "Recruiter",
    },
    {
        image: "/assets/5cd0d6e17d8fb4d876bc806b23457b35e00e5f63.jpg",
        title: "An HR manager at a marketing agency with 60+ employees. She's hiring across multiple departments and needs to manage job listings, track candidate stages, and involve department leads in evaluations. She's overwhelmed by manual scheduling and inconsistent candidate reviews.",
        name: "Tolu F",
        role: "HR manager",
    },
    {
        image: "/assets/24f9c4758779b69fa3dd6ae0341abfabc7024ae9.jpg",
        title: "A co-founder at a 10-person fintech startup looking to hire their first product designer. Without an HR team, Ade needs a simple platform that allows her to post jobs, review candidates efficiently, and schedule interviews without back-and-forth emails. She wants a tool that's easy to use, helps her make quick decisions, and scales as her company grows.",
        name: "Ade R",
        role: "Co-founder",
    },
];

export default function ClicHireSlide() {
    const trackRef = useRef(null);
    const indicatorsRef = useRef([]);
    const currentSlide = useRef(0);
    const slides = slidesData.length;

    useGSAP(() => {
        const track = trackRef.current;
        const indicators = indicatorsRef.current.filter(Boolean);

        if (!track || indicators.length === 0) return;

        gsap.set(track, { x: 0 });

        const updateIndicators = (activeIndex) => {
            indicators.forEach((indicator, index) => {
                gsap.to(indicator, {
                    opacity: index === activeIndex ? 1 : 0.5,
                    scale: index === activeIndex ? 1.2 : 1,
                    duration: 0.3,
                });
            });
        };

        const goToSlide = (index) => {
            currentSlide.current = (index + slides) % slides;
            gsap.to(track, {
                x: -currentSlide.current * (100 / slides) + "%",
                duration: 0.8,
                ease: "power2.inOut",
            });
            updateIndicators(currentSlide.current);
        };

        updateIndicators(0);

        indicators.forEach((indicator, index) => {
            indicator._handleClick = () => goToSlide(index);
            indicator.addEventListener("click", indicator._handleClick);
        });

        const interval = setInterval(() => {
            goToSlide(currentSlide.current + 1);
        }, 4000);

        return () => {
            clearInterval(interval);
            indicators.forEach((indicator) => {
                if (indicator._handleClick) {
                    indicator.removeEventListener("click", indicator._handleClick);
                }
            });
        };
    }, { dependencies: [] });

    return (
        <div className="clichire-slide">
            <div className="clichire-slide__viewport">
                <div className="clichire-slide__track" ref={trackRef}>
                    {slidesData.map((slide, index) => (
                        <div className="clichire-slide__slide" key={index}>
                            <Image src={slide.image} alt={slide.name} fill style={{ objectFit: "cover" }} />
                            <div className="clichire-slide__card">
                                <div className="clichire-slide__card__title">
                                    {slide.title}
                                </div>
                                <div className="clichire-slide__card__name">{slide.name}</div>
                                <div className="clichire-slide__card__role">{slide.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="clichire-slide__indicators">
                {slidesData.map((_, index) => (
                    <div
                        className="clichire-slide__indicator"
                        key={index}
                        ref={(el) => (indicatorsRef.current[index] = el)}
                    ></div>
                ))}
            </div>
        </div>
    );
}
