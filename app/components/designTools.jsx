"use client";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BASE_GAP = 140;
const GAP_STEP = 20;
const STACK_PEEK = 12;

export default function DesignTools() {
    const mainContainerRef = useRef(null);
    const containerRef = useRef(null);
    const cardRefs = useRef([]);

    useGSAP(() => {
        const cards = cardRefs.current.filter(Boolean);
        const container = containerRef.current;
        const mainContainer = mainContainerRef.current;

        if (!container || !mainContainer || cards.length === 0) return;

        const getSpreadPositions = () => {
            let top = 0;
            return cards.map((card, index) => {
                const position = top;
                top += card.offsetHeight;
                if (index < cards.length - 1) top += BASE_GAP + index * GAP_STEP;
                return position;
            });
        };

        const getSpreadHeight = () => {
            const positions = getSpreadPositions();
            const lastIndex = cards.length - 1;
            return positions[lastIndex] + cards[lastIndex].offsetHeight;
        };

        const getStackedHeight = () =>
            cards[0].offsetHeight + (cards.length - 1) * STACK_PEEK;

        const applySpreadLayout = () => {
            const positions = getSpreadPositions();

            // The container height is driven by the timeline, so we only
            // reset the cards to their spread positions here.
            cards.forEach((card, index) => {
                gsap.set(card, {
                    top: positions[index],
                    y: 0,
                    scale: 1,
                });
            });
        };

        cards.forEach((card, index) => {
            gsap.set(card, {
                position: "absolute",
                left: "auto",
                right: 0,
                zIndex: index + 1,
                transformOrigin: "right top",
            });
        });

        applySpreadLayout();
        gsap.set(container, { height: getSpreadHeight() });

        ScrollTrigger.addEventListener("refreshInit", applySpreadLayout);

        // No pinning: the section height is left to follow the cards
        // container, so the whole section collapses to fit the stacked
        // cards (fit-content) and the content below flows up with it.
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mainContainer,
                start: "top 80%",
                end: "top 20%",
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });

        tl.to(
            container,
            {
                height: getStackedHeight,
                ease: "none",
                duration: 1,
            },
            0
        );

        cards.forEach((card, index) => {
            if (index === 0) return;

            tl.to(
                card,
                {
                    top: index * STACK_PEEK,
                    scale: 1 - index * 0.02,
                    ease: "none",
                    duration: 1,
                },
                0
            );
        });

        const handleResize = () => {
            applySpreadLayout();
            ScrollTrigger.refresh();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            ScrollTrigger.removeEventListener("refreshInit", applySpreadLayout);
            tl.scrollTrigger?.kill();
            tl.kill();
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
                            Used to simplify the process of identifying what works and what doesn&apos;t in design.
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
