"use client";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function DesignTools() {
    const mainContainerRef = useRef(null);
    const containerRef = useRef(null);
    const cardRefs = useRef([]);

    useGSAP(() => {
        const cards = cardRefs.current.filter(Boolean);
        const container = containerRef.current;
        
        if (!container || cards.length === 0) return;
    
        // Set initial positions
        gsap.set(cards, {
            y: 0,
            scale: 1,
            transformOrigin: "center top"
        });
    
        // Create individual ScrollTriggers for each card
        cards.forEach((card, index) => {
            if (index > 0) {
                gsap.to(card, {
                    y: () => -(index * 140), // Move up by the gap amount * index
                    scale: 1 - (index * 0.02),
                    ease: "none",
                    scrollTrigger: {
                        trigger: mainContainerRef.current,
                        start: "top top",
                        end: `+=${window.innerHeight * 2}`,
                        scrub: 1,
                        pin: index === 1 ? true : false, // Only pin on first card animation
                        anticipatePin: 1,
                    }
                });
            }
        });
    
        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, { dependencies: [] });

    return (
        <div className="home__design-tools" ref={mainContainerRef}>
            <div className="home__design-tools__card1">
                My Design Tools
            </div>
            <div className="home__design-tools__card2" ref={containerRef}>
                <div 
                    className="home__design-tools__card2__card" 
                    ref={(el) => (cardRefs.current[0] = el)}
                >
                    <Image src={"/assets/icons/figma.svg"} width={64} height={64} />
                    <div>
                        <div className="home__design-tools__card2__card__title">
                            Figma
                        </div>
                        <div className="home__design-tools__card2__card__subtitle">
                            For creating web, mobile interfaces and interactive prototypes.
                        </div>
                    </div>
                </div>
                <div 
                    className="home__design-tools__card2__card" 
                    ref={(el) => (cardRefs.current[1] = el)}
                >
                    <Image src={"/assets/icons/framer.svg"} width={64} height={64} />
                    <div>
                        <div className="home__design-tools__card2__card__title">
                            Framer
                        </div>
                        <div className="home__design-tools__card2__card__subtitle">
                            For production-ready websites and web applications
                        </div>
                    </div>
                </div>
                <div 
                    className="home__design-tools__card2__card" 
                    ref={(el) => (cardRefs.current[2] = el)}
                >
                    <Image src={"/assets/icons/figma.svg"} width={64} height={64} />
                    <div>
                        <div className="home__design-tools__card2__card__title">
                            FigJam
                        </div>
                        <div className="home__design-tools__card2__card__subtitle">
                            Used for early-stage ideation, user flow mapping.
                        </div>
                    </div>
                </div>
                <div 
                    className="home__design-tools__card2__card" 
                    ref={(el) => (cardRefs.current[3] = el)}
                >
                    <Image src={"/assets/icons/figma.svg"} width={64} height={64} />
                    <div>
                        <div className="home__design-tools__card2__card__title">
                            Maze
                        </div>
                        <div className="home__design-tools__card2__card__subtitle">
                            Used to simplify the process of identifying what works and what doesn't in design.
                        </div>
                    </div>
                </div>
                <div 
                    className="home__design-tools__card2__card" 
                    ref={(el) => (cardRefs.current[4] = el)}
                >
                    <Image src={"/assets/icons/team.svg"} width={64} height={64} />
                    <div>
                        <div className="home__design-tools__card2__card__title">
                            Jira, Teams & Slack
                        </div>
                        <div className="home__design-tools__card2__card__subtitle">
                            Used for communication, collaboration and manage workflows.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}