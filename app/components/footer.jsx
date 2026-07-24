"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { scrollToSection } from "@/lib/scrollToSection";

const FOOTER_SECTION_LINKS = [
  { href: "/#projects", id: "projects", label: "Projects" },
  { href: "/#experience", id: "experience", label: "Experience" },
];

const SOCIALS = [
  {
    src: "/assets/icons/home.svg",
    href: "/",
    label: "Home",
    external: false,
  },
  {
    src: "/assets/icons/email.svg",
    href: "mailto:ololadegrace.ot@gmail.com",
    label: "Email",
    external: false,
  },
  {
    src: "/assets/icons/linkedin.svg",
    href: "https://www.linkedin.com/in/oluwatimilehin-adekoye",
    label: "LinkedIn",
    external: true,
  },
  {
    src: "/assets/icons/twitter.svg",
    href: "https://x.com/ololadedesign",
    label: "Twitter",
    external: true,
  },
  {
    src: "/assets/icons/tiktok.svg",
    href: "https://www.tiktok.com/@ololadeuxdesigner",
    label: "TikTok",
    external: true,
  },
  {
    src: "/assets/icons/instagram.svg",
    href: "https://www.instagram.com/sisi_lolade",
    label: "Instagram",
    external: true,
  },
];

export default function Footer() {
  const marqueeRef = useRef(null);
  const pathname = usePathname();

  const handleSectionClick = (event, id) => {
    if (pathname !== "/") return;

    event.preventDefault();
    window.history.pushState(null, "", `/#${id}`);
    scrollToSection(id);
  };

  useGSAP(() => {
    const marqueeAnimation = gsap.to(
      marqueeRef.current.querySelector("span"),
      {
        x: "-25%",
        duration: 10,
        ease: "none",
        repeat: -1,
      }
    );

    const marqueeElement = marqueeRef.current;

    const handleMouseEnter = () => {
      marqueeAnimation.pause();
    };

    const handleMouseLeave = () => {
      marqueeAnimation.resume();
    };

    marqueeElement.addEventListener("mouseenter", handleMouseEnter);
    marqueeElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      marqueeElement.removeEventListener("mouseenter", handleMouseEnter);
      marqueeElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__inner__title-group">
          <Link href="/" aria-label="Home">
            <Image
              src="/assets/icons/logo.svg"
              width={63}
              height={99}
              alt="Ololade.designs"
            />
          </Link>

          <div className="footer__inner__title-group__social-group">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                {...(social.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Image
                  src={social.src}
                  width={32}
                  height={32}
                  alt={social.label}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__inner__group">
          <div>
            <div className="footer__inner__group__title">Ololade.designs</div>

            <Link
              href="/contact"
              className="footer__inner__group__button"
            >
              Work with me
              <Image
                src={"/assets/icons/rightArrow.svg"}
                width={18}
                height={18}
                alt=""
              />
            </Link>
          </div>

          <div className="footer__inner__group__links">
            <Link href="/">Home</Link>
            {FOOTER_SECTION_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={(event) => handleSectionClick(event, link.id)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://docs.google.com/document/d/1TaltWbSKNNtVtG7-znS3x-63BfbBoI7_flRs30nA1Rw/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="footer__inner__bg" ref={marqueeRef}>
          <span>
            <span className="marquee-text">Growth Focused</span>
            <span className="marquee-text">Growth Focused</span>
            <span className="marquee-text">Growth Focused</span>
            <span className="marquee-text">Growth Focused</span>
          </span>
        </div>
      </div>
    </div>
  );
}
