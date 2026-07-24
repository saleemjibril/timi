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

const RESUME_HREF =
  "https://docs.google.com/document/d/1TaltWbSKNNtVtG7-znS3x-63BfbBoI7_flRs30nA1Rw/edit?usp=sharing";

export default function Header() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleSectionClick = (event, id) => {
    closeMenu();

    if (pathname !== "/") return;

    event.preventDefault();
    window.history.pushState(null, "", `/#${id}`);
    setActiveId(id);
    scrollToSection(id);
  };

  const linkClassName = (id) =>
    activeId === id
      ? "header__inner__links__item header__inner__links__item--active"
      : "header__inner__links__item";

  return (
    <header className="header">
      <div className="header__inner">
        <Link href="/" className="header__inner__logo" onClick={closeMenu}>
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
                className={linkClassName(link.id)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={RESUME_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="header__inner__links__item"
            >
              Resume
            </a>
          </div>
          <Image
            className="header__theme"
            src="/assets/icons/lightMode.svg"
            width={24}
            height={24}
            alt=""
          />
          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "header__contact header__contact--active"
                : "header__contact"
            }
          >
            Contact me
          </Link>
          <button
            type="button"
            className="header__menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="header-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Image
              src="/assets/icons/hamburger.svg"
              width={24}
              height={24}
              alt=""
            />
          </button>
        </nav>
      </div>

      <div
        className={
          menuOpen
            ? "header__overlay header__overlay--open"
            : "header__overlay"
        }
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      <aside
        id="header-mobile-menu"
        className={
          menuOpen ? "header__sidebar header__sidebar--open" : "header__sidebar"
        }
        aria-hidden={!menuOpen}
      >
        <div className="header__sidebar__top">
          <button
            type="button"
            className="header__sidebar__close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <Image
              src="/assets/icons/cancel.svg"
              width={36}
              height={36}
              alt=""
            />
          </button>
        </div>

        <nav className="header__sidebar__nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={(event) => handleSectionClick(event, link.id)}
              className={linkClassName(link.id)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={RESUME_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="header__inner__links__item"
            onClick={closeMenu}
          >
            Resume
          </a>
          <Link
            href="/contact"
            className="header__sidebar__contact"
            onClick={closeMenu}
          >
            Contact me
          </Link>
        </nav>
      </aside>
    </header>
  );
}
