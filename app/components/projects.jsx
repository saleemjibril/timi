"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const bgRef = useRef(null);

  useGSAP(() => {
    // Set initial states - cards from left, images from right
    gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], {
      x: -100,
      opacity: 0,
    });

    gsap.set([image1Ref.current, image2Ref.current], {
      x: 100,
      opacity: 0,
    });

    gsap.set(bgRef.current, {
      x: 100,
      opacity: 0,
    });

    // Create scroll-triggered animations for each card
    const cards = [
      { card: card1Ref.current, image: image1Ref.current },
      { card: card2Ref.current, image: image2Ref.current },
      { card: card3Ref.current, image: bgRef.current },
    ];

    cards.forEach(({ card, image }, index) => {
      if (card && image) {
        // Create timeline for each card
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card.closest(".home__projects__card"),
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });

        // Animate card from left and image from right
        tl.to(card, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }).to(
          image,
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        ); // Start 0.6 seconds before card animation ends

        // Eazinvite hover is handled via CSS on .home__projects__card__bg
        if (index === 2) return;

        // Add hover animations for images
        const handleMouseEnter = () => {
          gsap.to(image, {
            borderRadius: "24px",
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(image, {
            borderRadius: "0px",
            duration: 0.3,
            ease: "power2.out",
          });
        };

        image.addEventListener("mouseenter", handleMouseEnter);
        image.addEventListener("mouseleave", handleMouseLeave);

        // Store cleanup functions for later use
        image._hoverCleanup = () => {
          image.removeEventListener("mouseenter", handleMouseEnter);
          image.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    });

    // Cleanup function for hover events
    return () => {
      [image1Ref.current, image2Ref.current].forEach(
        (image) => {
          if (image && image._hoverCleanup) {
            image._hoverCleanup();
          }
        }
      );
    };
  });

  return (
    <div className="home__projects">
      <div className="home__projects__title">Projects and More</div>

      <div className="home__projects__card">
        <div className="home__projects__card__card1" ref={card1Ref}>
          <div className="home__projects__card__card1__subsubtitle">
            (Web based platform)
          </div>
          <div className="home__projects__card__card1__title">Clichire</div>
          <div className="home__projects__card__card1__subtitle">
            Clichire is an end-to-end recruitment platform designed to simplify
            and streamline the hiring process for businesses of all sizes. It
            serves as a digital tool for recruiters, HR professionals, and
            business owners to manage job postings, evaluate candidates,
            schedule interviews, and onboard clients.
          </div>

          <Link
            href="/clichire"
            prefetch={true}
            className="home__projects__card__card1__button"
          >
            <button>
              View Project
              <Image
                src={"/assets/icons/rightArrow.svg"}
                width={18}
                height={18}
              />
            </button>
          </Link>
        </div>

        <Image
          src={"/assets/clichire.svg"}
          width={715}
          height={770}
          ref={image1Ref}
        />
      </div>
      <div className="home__projects__card">
        <Image
          src={"/assets/demicare.svg"}
          width={715}
          height={770}
          ref={image2Ref}
        />

        <div className="home__projects__card__card1" ref={card2Ref}>
          <div className="home__projects__card__card1__subsubtitle">
            (Mobile app)
          </div>
          <div className="home__projects__card__card1__title">DemiCare</div>
          <div className="home__projects__card__card1__subtitle">
            DemiCare is an AI-powered skincare platform designed to help users
            track and improve their skin health over time. It serves as a
            digital tool that allows users to log their skincare routines, scan
            their face every 14 days, and receive AI-driven insights.{" "}
          </div>

          <Link
            href="/demicare"
            className="home__projects__card__card1__button"
          >
            <button>
              View Project
              <Image
                src={"/assets/icons/rightArrow.svg"}
                width={18}
                height={18}
              />
            </button>
          </Link>
        </div>
      </div>
      <div className="home__projects__card">
        <div className="home__projects__card__card1" ref={card3Ref}>
          <div className="home__projects__card__card1__subsubtitle">
            (Web based platform)
          </div>
          <div className="home__projects__card__card1__title">Eazinvite</div>
          <div className="home__projects__card__card1__subtitle">
            EazInvites is an end-to-end digital event invitation and management
            platform built to modernize how events are planned and experienced.
            It empowers event organizers, planners, and hosts to design stunning
            invitations, manage guest lists, track RSVPs, send reminders, and
            monitor real-time event performance, all from one centralized
            dashboard.{" "}
          </div>

          <Link
            href="/eazinvite"
            className="home__projects__card__card1__button"
          >
            <button>
              View Project
              <Image
                src={"/assets/icons/rightArrow.svg"}
                width={18}
                height={18}
              />
            </button>
          </Link>
        </div>

        <div className="home__projects__card__bg" ref={bgRef}>

        <Image
          src={"/assets/eazinvite.png"}
          width={820}
          height={615}
        />
        </div>
      </div>
    </div>
  );
}
