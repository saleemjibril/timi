"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function EazInviteProblem(params) {
    const sliderRef = useRef(null);
    const indicatorsRef = useRef([]);
    const slides = 3; // Number of slides
    const currentSlide = useRef(0);

    useGSAP(() => {
        const slider = sliderRef.current;
        const indicators = indicatorsRef.current;
        
        if (slider && indicators.length > 0) {
            // Set initial state
            gsap.set(slider, { x: 0 });
            
            // Update indicators
            const updateIndicators = (activeIndex) => {
                indicators.forEach((indicator, index) => {
                    if (indicator) {
                        gsap.to(indicator, {
                            opacity: index === activeIndex ? 1 : 0.5,
                            scale: index === activeIndex ? 1.2 : 1,
                            duration: 0.3,
                        });
                    }
                });
            };

            // Auto-slide function
            const autoSlide = () => {
                currentSlide.current = (currentSlide.current + 1) % slides;
                
                // Calculate the correct transform value
                // Each slide is 33.333% of the slider width, so we move by that amount
                const translateX = -currentSlide.current * (100 / slides);
                
                gsap.to(slider, {
                    x: translateX + "%",
                    duration: 0.8,
                    ease: "power2.inOut",
                });
                
                updateIndicators(currentSlide.current);
            };

            // Initialize indicators
            updateIndicators(0);

            // Start auto-slide
            const interval = setInterval(autoSlide, 4000); // Change slide every 4 seconds

            // Cleanup
            return () => {
                clearInterval(interval);
            };
        }
    });

    return (
       <div className="eazinvite__problem">
       <div className="eazinvite__problem__title">
       The Problem
        </div>
       <div className="eazinvite__problem__subtitle">
       With events becoming more digital, one major challenge has been the disjointed way invitations and guest management are handled. Event planners often juggle multiple tools to send invites, track RSVPs, and manage guest updates which leads to missed responses, poor coordination, and last-minute confusion.
<br />
<br />
As a result, hosts face low engagement, frustrated guests, and disorganized events that fall short of expectations.
        </div>


        <div className="eazinvite__problem__bg">
            <div className="eazinvite__problem__slider-container">
                <div className="eazinvite__problem__slider" ref={sliderRef}>
                    <div className="eazinvite__problem__slide">
                        <Image src={"/assets/eazinviteProblem.svg"} width={796} height={569} />
                    </div>
                    <div className="eazinvite__problem__slide">
                        <Image src={"/assets/eazinviteProblem.svg"} width={796} height={569} />
                    </div>
                    <div className="eazinvite__problem__slide">
                        <Image src={"/assets/eazinviteProblem.svg"} width={796} height={569} />
                    </div>
                </div>
            </div>
            
            <div className="eazinvite__problem__indicators">
                <div 
                    className="eazinvite__problem__indicator" 
                    ref={el => indicatorsRef.current[0] = el}
                ></div>
                <div 
                    className="eazinvite__problem__indicator" 
                    ref={el => indicatorsRef.current[1] = el}
                ></div>
                <div 
                    className="eazinvite__problem__indicator" 
                    ref={el => indicatorsRef.current[2] = el}
                ></div>
            </div>
        </div>

       
       </div>
    )
}