"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CANVAS = { w: 1184, h: 704 };

const PHONES = [
    {
        id: "left",
        src: "/assets/scanFaceScreen1.svg",
        x: 124,
        y: 64,
        w: 280,
    },
    {
        id: "middle",
        src: "/assets/scanFaceScreen2.svg",
        x: 452,
        y: 64,
        w: 280,
    },
    {
        id: "right",
        src: "/assets/scanFaceScreen3.svg",
        x: 780,
        y: 64,
        w: 280,
    },
];

// Viewfinder within scanFaceScreen2.svg (280×577)
const VIEWFINDER = {
    x: 73.0645,
    y: 165.434,
    w: 137.139,
    h: 143.249,
};

// Hero image on phone 3 — fixed; everything below scrolls until the tab bar
const PHONE3_IMAGE = { y: 86.0073, h: 103.873 };
const PHONE3_TAB_BAR = { y: 496.25, h: 68.386 };
const PHONE3_CONTENT_END = 486.948; // divider above tab bar in scanFaceScreen3.svg
const PHONE3_SCREEN = { x: 13.2051, y: 13.3643, h: 551.272 };

const SCROLL_REGION = {
    x: PHONE3_SCREEN.x,
    y: PHONE3_IMAGE.y + PHONE3_IMAGE.h,
    w: 254.59,
    h: PHONE3_TAB_BAR.y - (PHONE3_IMAGE.y + PHONE3_IMAGE.h),
};

const FULL_SCREEN_SCROLL_START = 119 + 153;
const FULL_SCREEN_TAB_BAR_Y = 1581;

const mapPhoneYToFullScreen = (y) => {
    const scrollStartPhone = PHONE3_IMAGE.y + PHONE3_IMAGE.h;
    const t = (y - scrollStartPhone) / (PHONE3_TAB_BAR.y - scrollStartPhone);
    return FULL_SCREEN_SCROLL_START + t * (FULL_SCREEN_TAB_BAR_Y - FULL_SCREEN_SCROLL_START);
};

// Full-height screen content (375×1682); exclude the tab bar baked into the SVG
const FULL_SCREEN = {
    w: 375,
    h: 1682,
    scrollStartY: FULL_SCREEN_SCROLL_START,
    scrollEndY: mapPhoneYToFullScreen(PHONE3_CONTENT_END),
};

const SCROLLABLE_HEIGHT = FULL_SCREEN.scrollEndY - FULL_SCREEN.scrollStartY;

const PHONE = { w: 280, h: 577 };

export default function DemicareScanFaceScreen() {
    const containerRef = useRef(null);
    const viewfinderRef = useRef(null);
    const glareRef = useRef(null);

    useGSAP(
        () => {
            const viewfinder = viewfinderRef.current;
            const glare = glareRef.current;

            if (!viewfinder || !glare) return;

            let tl;

            const startAnimation = () => {
                if (tl) tl.kill();

                const viewfinderHeight = viewfinder.offsetHeight;
                const travel = viewfinderHeight * (111.175 / 143.249);

                if (travel <= 0) return;

                gsap.set(glare, { y: 0, scaleY: 1, transformOrigin: "center center" });

                tl = gsap.timeline({ repeat: -1 });

                tl.to(glare, {
                    y: travel,
                    duration: 2.5,
                    ease: "power1.inOut",
                })
                    .set(glare, { scaleY: -1 })
                    .to(glare, {
                        y: 0,
                        duration: 2.5,
                        ease: "power1.inOut",
                    })
                    .set(glare, { scaleY: 1 });
            };

            startAnimation();

            const resizeObserver = new ResizeObserver(startAnimation);
            resizeObserver.observe(viewfinder);

            return () => {
                tl?.kill();
                resizeObserver.disconnect();
            };
        },
        { scope: containerRef }
    );

    return (
        <div
            className="demicare__scan-face"
            ref={containerRef}
            style={{ aspectRatio: `${CANVAS.w} / ${CANVAS.h}` }}
        >
            {PHONES.map((phone) => (
                <div
                    key={phone.id}
                    className={`demicare__scan-face__phone demicare__scan-face__phone--${phone.id}`}
                    style={{
                        left: `${(phone.x / CANVAS.w) * 100}%`,
                        top: `${(phone.y / CANVAS.h) * 100}%`,
                        width: `${(phone.w / CANVAS.w) * 100}%`,
                    }}
                >
                    <img src={phone.src} alt="Scan face screen design" />

                    {phone.id === "middle" && (
                        <div
                            className="demicare__scan-face__viewfinder"
                            ref={viewfinderRef}
                            aria-hidden="true"
                            style={{
                                left: `${(VIEWFINDER.x / PHONE.w) * 100}%`,
                                top: `${(VIEWFINDER.y / PHONE.h) * 100}%`,
                                width: `${(VIEWFINDER.w / PHONE.w) * 100}%`,
                                height: `${(VIEWFINDER.h / PHONE.h) * 100}%`,
                            }}
                        >
                            <div className="demicare__scan-face__glare" ref={glareRef}>
                                <img src="/assets/scan-face-glare.svg" alt="" />
                            </div>
                        </div>
                    )}

                    {phone.id === "right" && (
                        <div
                            className="demicare__scan-face__scroll"
                            style={{
                                left: `${(SCROLL_REGION.x / PHONE.w) * 100}%`,
                                top: `${(SCROLL_REGION.y / PHONE.h) * 100}%`,
                                width: `${(SCROLL_REGION.w / PHONE.w) * 100}%`,
                                height: `${(SCROLL_REGION.h / PHONE.h) * 100}%`,
                            }}
                        >
                            <div
                                className="demicare__scan-face__scroll-inner"
                                style={{
                                    aspectRatio: `${FULL_SCREEN.w} / ${SCROLLABLE_HEIGHT}`,
                                }}
                            >
                                <img
                                    src="/assets/scanFaceScreenFullScreen.svg"
                                    alt="Scan face form scrollable content"
                                    style={{
                                        top: `calc(-${FULL_SCREEN.scrollStartY} / ${SCROLLABLE_HEIGHT} * 100%)`,
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
