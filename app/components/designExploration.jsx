// Design Exploration - Fixed Animation
"use client";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTheme } from "./themeProvider";

const MOBILE_EXPLORATIONS = Array.from(
  { length: 27 },
  (_, i) => `/assets/exp${i + 1}.svg`
);

const LANDING_COUNT = 15;

export default function DesignExploration() {
  const { theme } = useTheme();
  const mobileGridRef = useRef(null);
  const landingGridRef = useRef(null);

  const landingSuffix = theme === "light" ? "Light" : "Dark";
  const landingPages = Array.from(
    { length: LANDING_COUNT },
    (_, i) => `/assets/land${i + 1}${landingSuffix}.svg`
  );

  useGSAP(
    () => {
      // Mobile grid animation - 27 unique images, so move by exactly 27 image widths + gaps
      if (mobileGridRef.current) {
        const mobileFirstImg = mobileGridRef.current.querySelector("img");
        const mobileImageWidth = mobileFirstImg
          ? mobileFirstImg.offsetWidth
          : 480; // Measured so the loop stays seamless at any screen size
        const mobileGap = 24; // Gap between images
        const mobileUniqueImages = 27; // Number of unique images
        const mobileDistanceToMove =
          mobileUniqueImages * (mobileImageWidth + mobileGap);

        gsap.to(mobileGridRef.current, {
          x: -mobileDistanceToMove, // Move by exact distance of unique images
          duration: 60, // Changed from 30 to 60 (2x slower)
          ease: "none",
          repeat: -1,
        });
      }

      // Landing page grid animation - 15 unique images
      if (landingGridRef.current) {
        gsap.set(landingGridRef.current, { x: 0 });
        const landingFirstImg = landingGridRef.current.querySelector("img");
        const landingImageWidth = landingFirstImg
          ? landingFirstImg.offsetWidth
          : 891; // Measured so the loop stays seamless at any screen size
        const landingGap = 24; // Gap between images
        const landingDistanceToMove =
          LANDING_COUNT * (landingImageWidth + landingGap);

        gsap.to(landingGridRef.current, {
          x: -landingDistanceToMove, // Move by exact distance of unique images
          duration: 70, // Changed from 35 to 70 (2x slower)
          ease: "none",
          repeat: -1,
        });
      }
    },
    { dependencies: [theme] }
  );

  return (
    <div className="home__design-exploration">
      <div className="home__design-exploration__inner">
        <div className="home__design-exploration__inner__title">
          Design Exploration
        </div>

        <div className="home__design-exploration__inner__link">
          Mobile (Web3 & Web2)
        </div>
        <div className="home__design-exploration__inner__grid">
          <div ref={mobileGridRef} className="marquee-container">
            {[...MOBILE_EXPLORATIONS, ...MOBILE_EXPLORATIONS].map((src, i) => (
              <Image
                key={`${src}-${i}`}
                src={src}
                width={480}
                height={450}
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="home__design-exploration__inner__link">
          Landing Page Design
        </div>
        <div className="home__design-exploration__inner__grid-mini">
          <div ref={landingGridRef} className="marquee-container">
            {[...landingPages, ...landingPages].map((src, i) => (
              <Image
                key={`${src}-${i}`}
                src={src}
                width={891}
                height={586}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
