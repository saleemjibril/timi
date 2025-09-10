"use client";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Footer() {
    const marqueeRef = useRef(null);

    useGSAP(() => {
       
        // Create marquee animation
        const marqueeAnimation = gsap.to(marqueeRef.current.querySelector('span'), {
          x: "-25%", // Move by 25% (one repetition of the text)
          duration: 10,
          ease: "none",
          repeat: -1,
        });
    
        // Add hover controls for marquee
        const marqueeElement = marqueeRef.current;
        
        const handleMouseEnter = () => {
          marqueeAnimation.pause();
        };
        
        const handleMouseLeave = () => {
          marqueeAnimation.resume();
        };
    
        marqueeElement.addEventListener('mouseenter', handleMouseEnter);
        marqueeElement.addEventListener('mouseleave', handleMouseLeave);
    
        // Cleanup function
        return () => {
          marqueeElement.removeEventListener('mouseenter', handleMouseEnter);
          marqueeElement.removeEventListener('mouseleave', handleMouseLeave);
        };
      });

    return (
        <div className="footer">
            <div className="footer__inner">
                <div className="footer__inner__title-group">
                    <Image src="/assets/icons/logo.svg" width={63} height={99} />

                    <div className="footer__inner__title-group__social-group">
                        <Image src="/assets/icons/home.svg" width={32} height={32} />
                        <Image src="/assets/icons/email.svg" width={32} height={32} />
                        <Image src="/assets/icons/linkedin.svg" width={32} height={32} />
                        <Image src="/assets/icons/twitter.svg" width={32} height={32} />
                        <Image src="/assets/icons/tiktok.svg" width={32} height={32} />
                        <Image src="/assets/icons/instagram.svg" width={32} height={32} />

                    </div>
                </div>

                <div className="footer__inner__group">
                    <div>
                        <div className="footer__inner__group__title">
                            Ololade.designs
                        </div>

                        <button className="footer__inner__group__button">
                            Work with me

                            <Image src={"/assets/icons/rightArrow.svg"} width={18} height={18} />
                        </button>
                    </div>

                    <div className="footer__inner__group__links">
                        <a href="">Home</a>
                        <a href="">Projects</a>
                        <a href="">Experience</a>
                        <a href="">Resume</a>
                    </div>
                </div>

                <div className="footer__inner__bg" ref={marqueeRef}>
          <span>
            <span className="marquee-text">Growth Focused</span>
            <span className="marquee-text">Growth Focused</span>
            <span className="marquee-text">Growth Focused</span>
            <span className="marquee-text">Growth Focused</span>
          </span>
        </div>            </div>


        </div>
    )
}