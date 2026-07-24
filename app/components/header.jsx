"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/lib/scrollToSection";

const NAV_LINKS = [
  { href: "/#projects", id: "projects", label: "Projects" },
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/#socials", id: "socials", label: "Socials" },
];

export default function Header() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveId(null);
      return;
    }

    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (NAV_LINKS.some((link) => link.id === hash)) {
        setActiveId(hash);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.id)
    ).filter(Boolean);

    if (sections.length === 0) {
      return () => window.removeEventListener("hashchange", syncFromHash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      observer.disconnect();
    };
  }, [pathname]);

  const handleSectionClick = (event, id) => {
    if (pathname !== "/") return;

    event.preventDefault();
    window.history.pushState(null, "", `/#${id}`);
    setActiveId(id);
    scrollToSection(id);
  };

  return (
    <header className="header">
      <div className="header__inner">
        <Link href="/" className="header__inner__logo">
          <Image
            src="/assets/icons/logo.svg"
            width={33}
            height={51}
            alt="Home"
          />
        </Link>

        <nav>
          <div className="header__inner__links">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={(event) => handleSectionClick(event, link.id)}
                className={
                  activeId === link.id
                    ? "header__inner__links__item header__inner__links__item--active"
                    : "header__inner__links__item"
                }
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://docs.google.com/document/d/1TaltWbSKNNtVtG7-znS3x-63BfbBoI7_flRs30nA1Rw/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="header__inner__links__item"
            >
              Resume
            </a>
          </div>
          <Image src="/assets/icons/lightMode.svg" width={24} height={24} alt="" />
          <Link
            href="/contact"
            className={
              pathname === "/contact" ? "header__contact header__contact--active" : "header__contact"
            }
          >
            Contact me
          </Link>
        </nav>
      </div>
    </header>
  );
}
