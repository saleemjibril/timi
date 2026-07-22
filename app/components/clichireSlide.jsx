"use client";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { assetUrl } from "@/lib/assetUrl";

const DEFAULT_SLIDES = [
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

export default function ClicHireSlide({ slides = DEFAULT_SLIDES }) {
    const trackRef = useRef(null);
    const indicatorsRef = useRef([]);
    const currentSlide = useRef(0);
    const slideCount = slides.length;

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
            currentSlide.current = (index + slideCount) % slideCount;
            gsap.to(track, {
                x: -currentSlide.current * (100 / slideCount) + "%",
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
    }, { dependencies: [slideCount] });

    return (
        <div className="clichire-slide">
            <div className="clichire-slide__viewport">
                <div
                    className="clichire-slide__track"
                    ref={trackRef}
                    style={{ "--slide-count": slideCount }}
                >
                    {slides.map((slide) => (
                        <div
                            className={`clichire-slide__slide${slide.title ? "" : " clichire-slide__slide--full"}`}
                            key={slide.image}
                        >
                            {slide.title ? (
                                <Image
                                    src={slide.image}
                                    alt={slide.name}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            ) : (
                                <img
                                    src={assetUrl(slide.image, {
                                        // 2× the 1312 CSS slide width
                                        width: 2624,
                                    })}
                                    alt="Case scenario slide"
                                    className="clichire-slide__slide-image"
                                />
                            )}
                            {slide.title && (
                                <div className="clichire-slide__card">
                                    <div className="clichire-slide__card__title">
                                        {slide.title}
                                    </div>
                                    <div className="clichire-slide__card__name">
                                        {slide.name}
                                    </div>
                                    <div className="clichire-slide__card__role">
                                        {slide.role}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="clichire-slide__indicators">
                {slides.map((slide, index) => (
                    <div
                        className="clichire-slide__indicator"
                        key={slide.image}
                        ref={(el) => (indicatorsRef.current[index] = el)}
                    ></div>
                ))}
            </div>
        </div>
    );
}
