"use client"
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hideout() {
    const groupRef = useRef(null);
    const imageRefs = useRef([]);

    useGSAP(() => {
        const images = imageRefs.current.filter(Boolean);
        const group = groupRef.current;
        
        if (!group || images.length === 0) return;

        // Set initial state
        gsap.set(images, {
            x: 0,
            scale: 1,
            transformOrigin: "center center"
        });

        // Create the spread out animation timeline
        const spreadTimeline = gsap.timeline({ paused: true });
        
        // Animate each image to spread out to the right only
        images.forEach((image, index) => {
            const spreadDistance = index * 40; // Each image moves right by index * 120px
            
            spreadTimeline.to(image, {
                x: spreadDistance,
                scale: 1.05,
                duration: 0.6,
                ease: "back.out(1.2)",
                rotate: '5deg',
            }, 0); // All animations start at the same time
        });

        // Create the yoyo retract animation
        const retractTimeline = gsap.timeline({ paused: true });
        
        images.forEach((image, index) => {
            const retractDistance = index * 60; // Retract to half the spread distance
            
            retractTimeline.to(image, {
                x: retractDistance,
                scale: 1.02,
                duration: 0.4,
                ease: "power2.out"
            }, 0);
        });

        // Mouse enter event - spread out then retract
        const handleMouseEnter = () => {
            spreadTimeline.restart();
            
            // After spread animation completes, do the retract
            spreadTimeline.eventCallback("onComplete", () => {
                setTimeout(() => {
                    retractTimeline.restart();
                }, 100); // Small delay before retract
            });
        };

        // Mouse leave event - return to original position
        const handleMouseLeave = () => {
            // Kill any running animations
            spreadTimeline.kill();
            retractTimeline.kill();
            
            // Animate back to original positions
            gsap.to(images, {
                x: 0,
                scale: 1,
                duration: 0.5,
                ease: "power2.inOut",
                stagger: 0.05 // Slight stagger for smooth return
            });
        };

        // Add event listeners
        group.addEventListener('mouseenter', handleMouseEnter);
        group.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup
        return () => {
            group.removeEventListener('mouseenter', handleMouseEnter);
            group.removeEventListener('mouseleave', handleMouseLeave);
            spreadTimeline.kill();
            retractTimeline.kill();
        };
    }, { dependencies: [] });

    return (
        <div className="home__hideout">
            <div className="home__hideout__group" ref={groupRef}>
                <Image 
                    src="/assets/instagram.svg" 
                    width={905} 
                    height={321}
                    ref={(el) => (imageRefs.current[0] = el)}
                />
                <Image 
                    src="/assets/tiktok.svg" 
                    width={905} 
                    height={321}
                    ref={(el) => (imageRefs.current[1] = el)}
                />
                <Image 
                    src="/assets/behance.svg" 
                    width={905} 
                    height={321}
                    ref={(el) => (imageRefs.current[2] = el)}
                />
                <Image 
                    src="/assets/x.svg" 
                    width={905} 
                    height={321}
                    ref={(el) => (imageRefs.current[3] = el)}
                />
                <Image 
                    src="/assets/linkedin.svg" 
                    width={905} 
                    height={321}
                    ref={(el) => (imageRefs.current[4] = el)}
                />
            </div>
            <Image src="/assets/hideout2.svg" width={407} height={170} />
        </div>
    );
}