"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function DesignExploration() {
  const mobileGridRef = useRef(null);
  const landingGridRef = useRef(null);

  useGSAP(() => {
    // Create marquee animation for mobile grid (horizontal scroll)
    if (mobileGridRef.current) {
      gsap.to(mobileGridRef.current, {
        x: "-50%", // Move by 50% (half the duplicated content)
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    }

    // Create marquee animation for landing page grid (horizontal scroll)
    if (landingGridRef.current) {
      gsap.to(landingGridRef.current, {
        x: "-50%", // Move by 50% (half the duplicated content)
        duration: 25,
        ease: "none",
        repeat: -1,
      });
    }
  });

   return (
    <div className="home__design-exploration">
<div className="home__design-exploration__inner">
<div className="home__design-exploration__inner__title">
Design Exploration
</div>

<div className="home__design-exploration__inner__link">Mobile (Web3 & Web2)</div>
<div className="home__design-exploration__inner__grid">
    <div ref={mobileGridRef} className="marquee-container">
        <Image src="/assets/exploration1.svg" width={480} height={520} />
        <Image src="/assets/exploration2.svg" width={480} height={520} />
        <Image src="/assets/exploration3.svg" width={480} height={520} />
        <Image src="/assets/exploration4.svg" width={480} height={520} />
        <Image src="/assets/exploration5.svg" width={480} height={520} />
        <Image src="/assets/exploration6.svg" width={480} height={520} />
        <Image src="/assets/exploration7.svg" width={480} height={520} />
        <Image src="/assets/exploration8.svg" width={480} height={520} />
        <Image src="/assets/exploration9.svg" width={480} height={520} />
        <Image src="/assets/exploration10.svg" width={480} height={520} />
        <Image src="/assets/exploration11.svg" width={480} height={520} />
        <Image src="/assets/exploration12.svg" width={480} height={520} />
        <Image src="/assets/exploration13.svg" width={480} height={520} />
        <Image src="/assets/exploration14.svg" width={480} height={520} />
        <Image src="/assets/exploration15.svg" width={480} height={520} />
        <Image src="/assets/exploration16.svg" width={480} height={520} />
        <Image src="/assets/exploration17.svg" width={480} height={520} />
        <Image src="/assets/exploration18.svg" width={480} height={520} />
        <Image src="/assets/exploration19.svg" width={480} height={520} />
        <Image src="/assets/exploration20.svg" width={480} height={520} />
        <Image src="/assets/exploration21.svg" width={480} height={520} />
        <Image src="/assets/exploration22.svg" width={480} height={520} />
        <Image src="/assets/exploration23.svg" width={480} height={520} />
        <Image src="/assets/exploration24.svg" width={480} height={520} />
        <Image src="/assets/exploration25.svg" width={480} height={520} />
        <Image src="/assets/exploration26.svg" width={480} height={520} />
        <Image src="/assets/exploration27.svg" width={480} height={520} />
        {/* Duplicate for seamless loop */}
        <Image src="/assets/exploration1.svg" width={480} height={520} />
        <Image src="/assets/exploration2.svg" width={480} height={520} />
        <Image src="/assets/exploration3.svg" width={480} height={520} />
        <Image src="/assets/exploration4.svg" width={480} height={520} />
        <Image src="/assets/exploration5.svg" width={480} height={520} />
        <Image src="/assets/exploration6.svg" width={480} height={520} />
        <Image src="/assets/exploration7.svg" width={480} height={520} />
        <Image src="/assets/exploration8.svg" width={480} height={520} />
        <Image src="/assets/exploration9.svg" width={480} height={520} />
        <Image src="/assets/exploration10.svg" width={480} height={520} />
        <Image src="/assets/exploration11.svg" width={480} height={520} />
        <Image src="/assets/exploration12.svg" width={480} height={520} />
        <Image src="/assets/exploration13.svg" width={480} height={520} />
        <Image src="/assets/exploration14.svg" width={480} height={520} />
        <Image src="/assets/exploration15.svg" width={480} height={520} />
        <Image src="/assets/exploration16.svg" width={480} height={520} />
        <Image src="/assets/exploration17.svg" width={480} height={520} />
        <Image src="/assets/exploration18.svg" width={480} height={520} />
        <Image src="/assets/exploration19.svg" width={480} height={520} />
        <Image src="/assets/exploration20.svg" width={480} height={520} />
        <Image src="/assets/exploration21.svg" width={480} height={520} />
        <Image src="/assets/exploration22.svg" width={480} height={520} />
        <Image src="/assets/exploration23.svg" width={480} height={520} />
        <Image src="/assets/exploration24.svg" width={480} height={520} />
        <Image src="/assets/exploration25.svg" width={480} height={520} />
        <Image src="/assets/exploration26.svg" width={480} height={520} />
        <Image src="/assets/exploration27.svg" width={480} height={520} />
    </div>
</div>

<div className="home__design-exploration__inner__link">Landing Page Design</div>
<div className="home__design-exploration__inner__grid-mini">
    <div ref={landingGridRef} className="marquee-container">
        <Image src="/assets/landingpages1.svg" width={891} height={586} />
        <Image src="/assets/landingpages2.svg" width={891} height={586} />
        <Image src="/assets/landingpages2.svg" width={891} height={586} />
        <Image src="/assets/landingpages3.svg" width={891} height={586} />
        <Image src="/assets/landingpages4.svg" width={891} height={586} />
        <Image src="/assets/landingpages5.svg" width={891} height={586} />
        <Image src="/assets/landingpages6.svg" width={891} height={586} />
        <Image src="/assets/landingpages7.svg" width={891} height={586} />
        <Image src="/assets/landingpages8.svg" width={891} height={586} />
        <Image src="/assets/landingpages9.svg" width={891} height={586} />
        <Image src="/assets/landingpages10.svg" width={891} height={586} />
        <Image src="/assets/landingpages11.svg" width={891} height={586} />
        <Image src="/assets/landingpages12.svg" width={891} height={586} />
        <Image src="/assets/landingpages13.svg" width={891} height={586} />
        <Image src="/assets/landingpages14.svg" width={891} height={586} />
        <Image src="/assets/landingpages15.svg" width={891} height={586} />
        <Image src="/assets/landingpages16.svg" width={891} height={586} />
        <Image src="/assets/landingpages17.svg" width={891} height={586} />
        <Image src="/assets/landingpages18.svg" width={891} height={586} />
        <Image src="/assets/landingpages19.svg" width={891} height={586} />
        <Image src="/assets/landingpages20.svg" width={891} height={586} />
        {/* Duplicate for seamless loop */}
        <Image src="/assets/landingpages1.svg" width={891} height={586} />
        <Image src="/assets/landingpages2.svg" width={891} height={586} />
        <Image src="/assets/landingpages2.svg" width={891} height={586} />
        <Image src="/assets/landingpages3.svg" width={891} height={586} />
        <Image src="/assets/landingpages4.svg" width={891} height={586} />
        <Image src="/assets/landingpages5.svg" width={891} height={586} />
        <Image src="/assets/landingpages6.svg" width={891} height={586} />
        <Image src="/assets/landingpages7.svg" width={891} height={586} />
        <Image src="/assets/landingpages8.svg" width={891} height={586} />
        <Image src="/assets/landingpages9.svg" width={891} height={586} />
        <Image src="/assets/landingpages10.svg" width={891} height={586} />
        <Image src="/assets/landingpages11.svg" width={891} height={586} />
        <Image src="/assets/landingpages12.svg" width={891} height={586} />
        <Image src="/assets/landingpages13.svg" width={891} height={586} />
        <Image src="/assets/landingpages14.svg" width={891} height={586} />
        <Image src="/assets/landingpages15.svg" width={891} height={586} />
        <Image src="/assets/landingpages16.svg" width={891} height={586} />
        <Image src="/assets/landingpages17.svg" width={891} height={586} />
        <Image src="/assets/landingpages18.svg" width={891} height={586} />
        <Image src="/assets/landingpages19.svg" width={891} height={586} />
        <Image src="/assets/landingpages20.svg" width={891} height={586} />
    </div>
</div>
    </div>
    </div>
    )}