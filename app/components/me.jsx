"use client";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Me() {
  const cardRef = useRef(null);
  const marqueeRef = useRef(null);

  useGSAP(() => {
    let marqueeAnimation;

    // Create scroll-triggered marquee animation
    ScrollTrigger.create({
      trigger: cardRef.current,
      start: "top 80%",
      onEnter: () => {
        // Start ping-pong marquee animation when card comes into view
        marqueeAnimation = gsap.to(marqueeRef.current, {
          y: () => {
            const marqueeHeight = marqueeRef.current.scrollHeight;
            const containerHeight = marqueeRef.current.parentElement.clientHeight;
            const lastCardHeight = marqueeRef.current.lastElementChild.offsetHeight;
            
            // Move enough to show the last card completely, plus a small buffer
            return -(marqueeHeight - containerHeight + lastCardHeight * 0.3);
          },
          duration: 8,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true, // Reverse direction on each repeat
        });
      },
      onLeave: () => {
        // Stop animation when leaving viewport
        if (marqueeAnimation) {
          marqueeAnimation.kill();
        }
      },
      onEnterBack: () => {
        // Restart ping-pong animation when coming back into view
        marqueeAnimation = gsap.to(marqueeRef.current, {
          y: () =>
            -(
              marqueeRef.current.scrollHeight -
              marqueeRef.current.parentElement.clientHeight
            ), // Move to end of actual content
          duration: 8,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true, // Reverse direction on each repeat
        });
      },
      onLeaveBack: () => {
        // Stop animation when leaving viewport from top
        if (marqueeAnimation) {
          marqueeAnimation.kill();
        }
      },
    });

    // Add hover controls
    const handleMouseEnter = () => {
      if (marqueeAnimation) {
        marqueeAnimation.pause();
      }
    };

    const handleMouseLeave = () => {
      if (marqueeAnimation) {
        marqueeAnimation.resume();
      }
    };

    const cardElement = cardRef.current;
    if (cardElement) {
      cardElement.addEventListener("mouseenter", handleMouseEnter);
      cardElement.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup
    return () => {
      if (cardElement) {
        cardElement.removeEventListener("mouseenter", handleMouseEnter);
        cardElement.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (marqueeAnimation) {
        marqueeAnimation.kill();
      }
    };
  });

  return (
    <div className="home__me">
      <div className="home__me__grid">
        <Image src="/assets/me1.svg" width={644} height={400} />
        <Image src="/assets/me2.svg" width={644} height={400} />
      </div>

      <div className="home__me__title" id="experience">
        Where I’ve shaped ideas into Experiences.
      </div>

      <div className="home__me__card" ref={cardRef}>
        <div className="home__me__card-marquee" ref={marqueeRef}>
          {/* Original content */}
          <div className="home__me__card-item">
            <div className="home__me__card__timeline">
              October 2023 - Present
            </div>

            <div className="home__me__card__inner">
              <div className="home__me__card__inner__title">
                Netzence Sustainability Ltd
              </div>
              <div className="home__me__card__inner__role">
                Product Designer
              </div>
              <div className="home__me__card__inner__subtitle">
                At Netzence, I led the design of CloseCarbon product , a
                sustainability-focused platform helping organizations track and
                reduce their carbon footprint while earning carbon incentives.
                From building out the MVP to launching a robust design system,
                my work helped drive 85% adoption within 6 months. I also
                optimized admin dashboards, crafted a seamless onboarding
                experience, and designed the marketing website to retain users
                and boost platform trust.
              </div>
            </div>
          </div>
          <div className="home__me__card-item">
            <div className="home__me__card__timeline">
            March 2023 - August 2023
            </div>

            <div className="home__me__card__inner">
              <div className="home__me__card__inner__title">
              Clichire and Company
              </div>
              <div className="home__me__card__inner__role">
                Product Designer
              </div>
              <div className="home__me__card__inner__subtitle">
              I single-handedly designed Clichire, a recruitment tool that simplifies hiring for companies of all sizes. I created a scalable three-tier subscription model and launched features like a Dynamic Scoring System and automated interview scheduling, cutting time-to-hire significantly. I also built a comprehensive admin platform and redesigned the website resulting in a 70% spike in sign-ups within three months.
              </div>
            </div>
          </div>
          <div className="home__me__card-item">
            <div className="home__me__card__timeline">
            August 2022 - January 2023
            </div>

            <div className="home__me__card__inner">
              <div className="home__me__card__inner__title">
              ANP (Enterprise Support Service Center)
              </div>
              <div className="home__me__card__inner__role">
                Product Designer
              </div>
              <div className="home__me__card__inner__subtitle">
              As the second designer on a B2B oil and gas procurement platform for ANP, I designed intuitive experiences for contractors, suppliers, and project owners. I contributed to the design of the Goods & Services Catalog, improving product discovery speed by 30%, and led key flows for joint venture bidding, invitations, and document uploads—reducing bidding errors by 40%. I also supported the E-Procurement and Contract Management interface, shaping RFQ/RFP creation, bid submissions, and contract workflows, which led to a 45% increase in successful submissions.
              </div>
            </div>
          </div>
          <div className="home__me__card-item">
            <div className="home__me__card__timeline">
            February 2022 - July 2022
            </div>

            <div className="home__me__card__inner">
              <div className="home__me__card__inner__title">
              Prateve and Company
              </div>
              <div className="home__me__card__inner__role">
                Product Designer
              </div>
              <div className="home__me__card__inner__subtitle">
              At Prateve, I helped build a fintech platform focused on enhancing financial data visualization. I rolled out an automated approval system that cut manual processing by 80%, designed dashboards that improved business insights by 45%, and conducted user research that led to a noticeable boost in feature adoption and engagement.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home__me__subtitle">Hard Skillset</div>

      <div className="home__me__skillset">
        <Image src="/assets/skillset1.svg" width={612} height={278} />
        <Image src="/assets/skillset2.svg" width={612} height={278} />
        <Image src="/assets/skillset3.svg" width={612} height={278} />
        <Image src="/assets/skillset4.svg" width={612} height={278} />
        <Image src="/assets/skillset5.svg" width={612} height={278} />
        <Image src="/assets/skillset6.svg" width={612} height={278} />
      </div>

      <div className="home__me__subtitle">Soft Skillset</div>

      <div className="home__me__soft-grid-cover">
        <div className="home__me__soft-grid">
          <div className="home__me__soft-card">
            <Image src="/assets/icons/problem.svg" width={42} height={42} />
            <div className="home__me__soft-card__title">Problem solving</div>
          </div>
          <div className="home__me__soft-card">
            <Image src="/assets/icons/time.svg" width={42} height={42} />
            <div className="home__me__soft-card__title">Time management</div>
          </div>
          <div className="home__me__soft-card">
            <Image src="/assets/icons/empathy.svg" width={42} height={42} />
            <div className="home__me__soft-card__title">Empathy</div>
          </div>
          <div className="home__me__soft-card">
            <Image
              src="/assets/icons/collaboration.svg"
              width={42}
              height={42}
            />
            <div className="home__me__soft-card__title">Collaboration</div>
          </div>
        </div>
        <div className="home__me__soft-grid-mini">
          <div className="home__me__soft-card">
            <Image src="/assets/icons/stakeholder.svg" width={42} height={42} />
            <div className="home__me__soft-card__title">
              Stakeholder management
            </div>
          </div>
          <div className="home__me__soft-card">
            <Image
              src="/assets/icons/communication.svg"
              width={42}
              height={42}
            />
            <div className="home__me__soft-card__title">
              Effective communication
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
