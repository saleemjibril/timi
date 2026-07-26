"use client";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTheme } from "./themeProvider";

const SOCIALS = [
  {
    src: "/assets/instagram",
    href: "https://www.instagram.com/sisi_lolade",
    label: "Instagram",
  },
  {
    src: "/assets/tiktok",
    href: "https://www.tiktok.com/@ololadeuxdesigner",
    label: "TikTok",
  },
  {
    src: "/assets/behance",
    href: null,
    label: "Behance",
  },
  {
    src: "/assets/x",
    href: "https://x.com/ololadedesign",
    label: "Twitter",
  },
  {
    src: "/assets/linkedin",
    href: "https://www.linkedin.com/in/oluwatimilehin-adekoye",
    label: "LinkedIn",
  },
];

export default function Hideout() {
  const { theme } = useTheme();
  const groupRef = useRef(null);
  const itemRefs = useRef([]);
  const suffix = theme === "light" ? "Light" : "";

  useGSAP(
    () => {
      const items = itemRefs.current.filter(Boolean);
      const group = groupRef.current;

      if (!group || items.length === 0) return;

      gsap.set(items, {
        x: 0,
        scale: 1,
        transformOrigin: "center center",
      });

      const spreadTimeline = gsap.timeline({ paused: true });

      items.forEach((item, index) => {
        const spreadDistance = index * 51;

        spreadTimeline.to(
          item,
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

      const handleMouseEnter = () => {
        spreadTimeline.restart();
      };

      const handleMouseLeave = () => {
        spreadTimeline.kill();

        gsap.to(items, {
          x: 0,
          scale: 1,
          rotate: "0deg",
          duration: 3,
          ease: "elastic.out(1.5, 0.5)",
          stagger: 0.05,
        });
      };

      group.addEventListener("mouseenter", handleMouseEnter);
      group.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        group.removeEventListener("mouseenter", handleMouseEnter);
        group.removeEventListener("mouseleave", handleMouseLeave);
        spreadTimeline.kill();
      };
    },
    { dependencies: [] }
  );

  return (
    <section className="home__hideout" id="socials" aria-label="Socials">
      <div className="home__hideout__group" ref={groupRef}>
        {SOCIALS.map((social, index) => {
          const image = (
            <Image
              src={`${social.src}${suffix}.svg`}
              width={905}
              height={268}
              alt={social.label}
            />
          );

          if (social.href) {
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                ref={(el) => (itemRefs.current[index] = el)}
              >
                {image}
              </a>
            );
          }

          return (
            <div
              key={social.label}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              {image}
            </div>
          );
        })}
      </div>
      <Image
        src={`/assets/hideout2${suffix}.png`}
        width={407}
        height={170}
        alt=""
      />
    </section>
  );
}
