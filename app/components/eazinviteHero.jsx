"use client";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function EazInviteHero(params) {
    const imageRef = useRef(null);

    useGSAP(() => {
        const image = imageRef.current;
        
        if (image) {
            const handleMouseEnter = () => {
                gsap.to(image, {
                    scale: 1.05,
                    borderRadius: "24px",
                    duration: 0.3,
                    ease: "power2.out",
                });
            };

            const handleMouseLeave = () => {
                gsap.to(image, {
                    scale: 1,
                    borderRadius: "0px",
                    duration: 0.3,
                    ease: "power2.out",
                });
            };

            image.addEventListener('mouseenter', handleMouseEnter);
            image.addEventListener('mouseleave', handleMouseLeave);

            // Cleanup
            return () => {
                image.removeEventListener('mouseenter', handleMouseEnter);
                image.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    });

    return (
        <div className="eazinvite__hero">
            <div className="eazinvite__hero__inner">
                <div>
                    <div className="eazinvite__hero__inner__title">

                        An <span>Event Management</span> tool for creating, sending, and tracking invitations.
                    </div>
                    <div className="eazinvite__hero__inner__subtitle">
                        Eazinvite simplifies how events are planned, managed, and experienced. From creating beautiful digital invitations to managing guest lists, tracking RSVPs, sending reminders, and monitoring event performance in real-time, the platform empowers hosts and admins with the tools they need to run organized, engaging, and stress-free events.
                    </div>

                    <button className="eazinvite__hero__inner__button">Work with me <Image src={"/assets/icons/rightArrow.svg"} width={18} height={18} /></button>

                </div>

                <Image src={"/assets/eazinviteHero.svg"} width={600} height={646.15380859375} ref={imageRef} />
            </div>
        </div>
    )
}