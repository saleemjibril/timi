"use client";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hideout() {
  const groupRef = useRef(null);
  const imageRefs = useRef([]);
  useGSAP(
    () => {
      const images = imageRefs.current.filter(Boolean);
      const group = groupRef.current;
  
      if (!group || images.length === 0) return;
  
      // Set initial state
      gsap.set(images, {
        x: 0,
        scale: 1,
        transformOrigin: "center center",
      });
  
      // Create the spread out animation timeline
      const spreadTimeline = gsap.timeline({ paused: true });
  
      // Animate each image to spread out to the right with elastic bounce
      images.forEach((image, index) => {
        const spreadDistance = index * 51;
  
        spreadTimeline.to(
          image,
          {
            x: spreadDistance,
            scale: 1.05,
            duration: 3,
            ease: "elastic.out(1.5, 0.5)",
            rotate: "5deg",
          },
          0
        );
      });
  
      // Mouse enter event - spread out with elastic bounce
      const handleMouseEnter = () => {
        spreadTimeline.restart();
      };
  
      // Mouse leave event - return to original position
      const handleMouseLeave = () => {
        spreadTimeline.kill();
  
        gsap.to(images, {
          x: 0,
          scale: 1,
          rotate: "0deg",
          duration: 3,
          ease: "power2.inOut",
          ease: "elastic.out(1.5, 0.5)",
          stagger: 0.05,
        });
      };
  
      // Add event listeners
      group.addEventListener("mouseenter", handleMouseEnter);
      group.addEventListener("mouseleave", handleMouseLeave);
  
      // Cleanup
      return () => {
        group.removeEventListener("mouseenter", handleMouseEnter);
        group.removeEventListener("mouseleave", handleMouseLeave);
        spreadTimeline.kill();
      };
    },
    { dependencies: [] }
  );
  return (
    <div className="home__hideout">
      <div className="home__hideout__group" ref={groupRef}>
        <Image
          src="/assets/instagram.svg"
          width={905}
          height={268}
          ref={(el) => (imageRefs.current[0] = el)}
        />
        <Image
          src="/assets/tiktok.svg"
          width={905}
          height={268}
          ref={(el) => (imageRefs.current[1] = el)}
        />
        <Image
          src="/assets/behance.svg"
          width={905}
          height={268}
          ref={(el) => (imageRefs.current[2] = el)}
        />
        <Image
          src="/assets/x.svg"
          width={905}
          height={268}
          ref={(el) => (imageRefs.current[3] = el)}
        />
        <Image
          src="/assets/linkedin.svg"
          width={905}
          height={268}
          ref={(el) => (imageRefs.current[4] = el)}
        />
      </div>
      <Image src="/assets/hideout2.png" width={407} height={170} />
    </div>
  );
}
