"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
        <div className="demicare__scan-face" ref={containerRef}>
            <Image
                src="/assets/demicarehighFidelity2.svg"
                width={1184}
                height={704}
                alt="Scan face screen designs"
            />
            <div
                className="demicare__scan-face__viewfinder"
                ref={viewfinderRef}
                aria-hidden="true"
            >
                <div className="demicare__scan-face__glare" ref={glareRef}>
                    <img src="/assets/scan-face-glare.svg" alt="" />
                </div>
            </div>
        </div>
    );
}
