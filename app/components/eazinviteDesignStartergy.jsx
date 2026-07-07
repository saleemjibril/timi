"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function EazinviteDesignStartergy() {
  const slider1Ref = useRef(null);
  const indicators1Ref = useRef([]);
  const slider2Ref = useRef(null);
  const indicators2Ref = useRef([]);
  const tasksContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const slides = 3; // Number of slides for each slider
  const currentSlide1 = useRef(0);
  const currentSlide2 = useRef(0);

  useGSAP(() => {
    const slider1 = slider1Ref.current;
    const indicators1 = indicators1Ref.current;
    const slider2 = slider2Ref.current;
    const indicators2 = indicators2Ref.current;

    let interval1, interval2;

    // Slider 1 logic
    if (slider1 && indicators1.length > 0) {
      gsap.set(slider1, { x: 0 });

      const updateIndicators1 = (activeIndex) => {
        indicators1.forEach((indicator, index) => {
          if (indicator) {
            gsap.to(indicator, {
              opacity: index === activeIndex ? 1 : 0.5,
              scale: index === activeIndex ? 1.2 : 1,
              duration: 0.3,
            });
          }
        });
      };

      const autoSlide1 = () => {
        currentSlide1.current = (currentSlide1.current + 1) % slides;
        const translateX = -currentSlide1.current * (100 / slides);

        gsap.to(slider1, {
          x: translateX + "%",
          duration: 0.8,
          ease: "power2.inOut",
        });

        updateIndicators1(currentSlide1.current);
      };

      updateIndicators1(0);
      interval1 = setInterval(autoSlide1, 4000);
    }

    // Slider 2 logic
    if (slider2 && indicators2.length > 0) {
      gsap.set(slider2, { x: 0 });

      const updateIndicators2 = (activeIndex) => {
        indicators2.forEach((indicator, index) => {
          if (indicator) {
            gsap.to(indicator, {
              opacity: index === activeIndex ? 1 : 0.5,
              scale: index === activeIndex ? 1.2 : 1,
              duration: 0.3,
            });
          }
        });
      };

      const autoSlide2 = () => {
        currentSlide2.current = (currentSlide2.current + 1) % slides;
        const translateX = -currentSlide2.current * (100 / slides);

        gsap.to(slider2, {
          x: translateX + "%",
          duration: 0.8,
          ease: "power2.inOut",
        });

        updateIndicators2(currentSlide2.current);
      };

      updateIndicators2(0);
      interval2 = setInterval(autoSlide2, 4500); // Slightly different timing
    }

    // Card stacking is handled purely with CSS `position: sticky` (see _eazinviteDesignStartergy.scss),
    // which keeps each card flush as it pins to the top on scroll.

    // Cleanup function
    return () => {
      if (interval1) clearInterval(interval1);
      if (interval2) clearInterval(interval2);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, { dependencies: [] });

  return (
    <div className="eazinvite__problem">
      <div className="eazinvite__problem__title-group">
        <div className="eazinvite__problem__title-group__title">
          Design Strategy
        </div>

        <div>
          <div className="eazinvite__problem__title-group__subtitle">
            My approach began by analyzing the PRD and aligning it with business
            goals to simplifying digital invitation processes. I worked closely
            with stakeholder inputs to map out the user roles for hosts, guests,
            and admins for the unique needs of each. This helped me design an
            dashboard that manage users, monitor events, and track RSVP data
            efficiently. With insights from the problem areas, I built a clear
            user flow for event creation, guest list management, and analytics
            tracking. From there, I developed mid-to-high fidelity wireframes to
            visualize and validate the structure of the entire experience.
          </div>

          <button className="eazinvite__problem__title-group__button">
            View Hi-Fi{" "}
            <Image src="/assets/icons/downArrow.svg" width={24} height={24} />
          </button>
        </div>
      </div>

      <div className="eazinvite__problem__tasks" ref={tasksContainerRef}>
        <div className="eazinvite__problem__tasks__title">
          Tasks I carried out
        </div>

        <div 
          className="eazinvite__problem__tasks__card"
          ref={(el) => (cardRefs.current[0] = el)}
        >
          <div>
            <div className="eazinvite__problem__tasks__card__title">
              PRD Alignment
            </div>
            <div className="eazinvite__problem__tasks__card__subtitle">
              I aligned the expectations with business goals, particularly
              around simplifying the digital invitation process. This ensured
              that the direction of the product would solve key pain points like
              invitation tracking, RSVP data accuracy, and event monitoring.
            </div>
          </div>

          <Image src="/assets/eazinviteDesign1.svg" width={656} height={523} />
        </div>

        <div 
          className="eazinvite__problem__tasks__card"
          ref={(el) => (cardRefs.current[1] = el)}
        >
          <div>
            <div className="eazinvite__problem__tasks__card__title">
              User Role Mapping
            </div>
            <div className="eazinvite__problem__tasks__card__subtitle">
              I worked closely with stakeholders to define the distinct roles of
              users hosts, guests, and admins. Each role had unique needs and
              access levels, which helped in structuring the platform's flow,
              permissions, and interface logic. This clarity played a vital role
              in developing a system that offers a tailored experience for each
              user type.
            </div>
          </div>

          <Image src="/assets/eazinviteDesign2.svg" width={656} height={523} />
        </div>
        
        <div 
          className="eazinvite__problem__tasks__card"
          ref={(el) => (cardRefs.current[2] = el)}
        >
          <div>
            <div className="eazinvite__problem__tasks__card__title">
              User Flow Design
            </div>
            <div className="eazinvite__problem__tasks__card__subtitle">
              To ensure smooth navigation and clarity of operations, I developed
              detailed user flows for critical features like event creation,
              guest list management, and admin analytics. This visual mapping
              allowed stakeholders to see how users would interact with each
              part of the system and supported a streamlined experience across
              the board.
            </div>
          </div>

          <div className="eazinvite__problem__tasks__card__bg">
            <div className="eazinvite__problem__tasks__card__bg__slider-container">
              <div
                className="eazinvite__problem__tasks__card__bg__slider"
                ref={slider1Ref}
              >
                <div className="eazinvite__problem__tasks__card__bg__slide">
                  <Image
                    src="/assets/eazinviteDesign3.svg"
                    width={520}
                    height={485.7894592285156}
                  />
                </div>
                <div className="eazinvite__problem__tasks__card__bg__slide">
                  <Image
                    src="/assets/eazinviteDesign3.svg"
                    width={520}
                    height={485.7894592285156}
                  />
                </div>
                <div className="eazinvite__problem__tasks__card__bg__slide">
                  <Image
                    src="/assets/eazinviteDesign3.svg"
                    width={520}
                    height={485.7894592285156}
                  />
                </div>
              </div>
            </div>

            <div className="eazinvite__problem__tasks__card__bg__indicators">
              <div
                className="eazinvite__problem__tasks__card__bg__indicator"
                ref={(el) => (indicators1Ref.current[0] = el)}
              ></div>
              <div
                className="eazinvite__problem__tasks__card__bg__indicator"
                ref={(el) => (indicators1Ref.current[1] = el)}
              ></div>
              <div
                className="eazinvite__problem__tasks__card__bg__indicator"
                ref={(el) => (indicators1Ref.current[2] = el)}
              ></div>
            </div>
          </div>
        </div>
        
        <div 
          className="eazinvite__problem__tasks__card"
          ref={(el) => (cardRefs.current[3] = el)}
        >
          <div>
            <div className="eazinvite__problem__tasks__card__title">
              Wireframes & Structure
            </div>
            <div className="eazinvite__problem__tasks__card__subtitle">
              I created mid-to-high fidelity wireframes to visualize how the
              dashboard and other key features would look and function. This
              process helped validate structure early, ensuring visual
              hierarchy, discoverability of insights, and ease of task
              completion especially for busy event planners managing multiple
              events.
            </div>
          </div>

          <div className="eazinvite__problem__tasks__card__bg2">
            <div className="eazinvite__problem__tasks__card__bg2__slider-container">
              <div
                className="eazinvite__problem__tasks__card__bg2__slider"
                ref={slider2Ref}
              >
                <div className="eazinvite__problem__tasks__card__bg2__slide">
                  <Image
                    src="/assets/eazinviteDesign4.svg"
                    width={520}
                    height={369.77777099609375}
                  />
                </div>
                <div className="eazinvite__problem__tasks__card__bg2__slide">
                  <Image
                    src="/assets/eazinviteDesign4.svg"
                    width={520}
                    height={369.77777099609375}
                  />
                </div>
                <div className="eazinvite__problem__tasks__card__bg2__slide">
                  <Image
                    src="/assets/eazinviteDesign4.svg"
                    width={520}
                    height={369.77777099609375}
                  />
                </div>
              </div>
            </div>

            <div className="eazinvite__problem__tasks__card__bg2__indicators">
              <div
                className="eazinvite__problem__tasks__card__bg2__indicator"
                ref={(el) => (indicators2Ref.current[0] = el)}
              ></div>
              <div
                className="eazinvite__problem__tasks__card__bg2__indicator"
                ref={(el) => (indicators2Ref.current[1] = el)}
              ></div>
              <div
                className="eazinvite__problem__tasks__card__bg2__indicator"
                ref={(el) => (indicators2Ref.current[2] = el)}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="eazinvite__problem__title-group">
        <div className="eazinvite__problem__title-group__title">Solution</div>

        <div>
          <div className="eazinvite__problem__title-group__subtitle">
            After conducting a series of research and aligning with business
            objectives, I identified the core features needed to solve the
            problem areas around digital event management. These features were
            designed with clarity and usability in mind, and are broken into
            four core sections: Template Customization, RSVP Tracking,
            Invitation Management, Guest Management, each tailored to ensure
            smooth coordination between Hosts (Event planner/managers) and
            guest.
          </div>

          <button className="eazinvite__problem__title-group__button">
            View Hi-Fi{" "}
            <Image src="/assets/icons/downArrow.svg" width={24} height={24} />
          </button>
        </div>
      </div>

      <div className="eazinvite__problem__cards">
        <div className="eazinvite__problem__cards__card">
          <Image
            src="/assets/icons/templateCustomization.svg"
            width={48}
            height={48}
          />

          <div className="eazinvite__problem__cards__card__title">
            Template Customization
          </div>
          <div className="eazinvite__problem__cards__card__subtitle">
            Users can choose from a library of pre-designed templates and
            personalize them to suit their event theme, tone, or style without
            needing to create from scratch.
          </div>
        </div>
        <div className="eazinvite__problem__cards__card">
          <Image src="/assets/icons/rsvpTracking.svg" width={48} height={48} />

          <div className="eazinvite__problem__cards__card__title">
            RSVP Tracking
          </div>
          <div className="eazinvite__problem__cards__card__subtitle">
            This feature allows users view real-time RSVP data, send reminders
            to non-responders, and download RSVP reports in CSV format to stay
            fully in control.
          </div>
        </div>
        <div className="eazinvite__problem__cards__card">
          <Image src="/assets/icons/rsvpTracking.svg" width={48} height={48} />

          <div className="eazinvite__problem__cards__card__title">
            Invitation Management
          </div>
          <div className="eazinvite__problem__cards__card__subtitle">
            It makes it easy to send out personalized digital invitations,
            monitor delivery status, and track how many have been opened or
            interacted with in real time.
          </div>
        </div>
        <div className="eazinvite__problem__cards__card">
          <Image
            src="/assets/icons/guestManagement.svg"
            width={48}
            height={48}
          />

          <div className="eazinvite__problem__cards__card__title">
            Guest Management
          </div>
          <div className="eazinvite__problem__cards__card__subtitle">
            Add, edit, and organize your guest list with ease. Tag VIPs, track
            individual RSVP status, and ensure smooth event planning with
            centralized guest information.
          </div>
        </div>
      </div>
    </div>
  );
}


