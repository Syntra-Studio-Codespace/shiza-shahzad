"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navItems = [
  { href: "#profile", label: "Profile" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const panel = panelRef.current;

    if (!panel) {
      return;
    }

    gsap.set(panel, {
      autoAlpha: 0,
      clipPath: "inset(0 0 100% 0)",
      pointerEvents: "none",
    });
  }, []);

  useEffect(() => {
    const panel = panelRef.current;

    if (!panel) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const menuItems = panel.querySelectorAll(".mobile-menu-link, .mobile-menu-meta");

    document.body.classList.toggle("nav-menu-open", isOpen);
    gsap.killTweensOf([panel, menuItems]);

    if (reduceMotion) {
      gsap.set(panel, {
        autoAlpha: isOpen ? 1 : 0,
        clipPath: isOpen ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
        pointerEvents: isOpen ? "auto" : "none",
      });
      gsap.set(menuItems, {
        autoAlpha: isOpen ? 1 : 0,
        y: 0,
      });
      return;
    }

    if (isOpen) {
      gsap.set(panel, {
        autoAlpha: 1,
        pointerEvents: "auto",
      });
      gsap.fromTo(
        panel,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 0.62, ease: "power4.out" },
      );
      gsap.fromTo(
        menuItems,
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.46, stagger: 0.055, ease: "power3.out", delay: 0.12 },
      );
    } else {
      gsap.to(menuItems, {
        autoAlpha: 0,
        y: -8,
        duration: 0.18,
        stagger: 0.025,
        ease: "power2.in",
      });
      gsap.to(panel, {
        autoAlpha: 0,
        clipPath: "inset(0 0 100% 0)",
        pointerEvents: "none",
        duration: 0.34,
        ease: "power3.inOut",
        delay: 0.08,
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("nav-menu-open");
    };
  }, []);

  return (
    <header className="site-header">
      <Link href="#top" className="wordmark" aria-label="Shiza Shahzad home" onClick={() => setIsOpen(false)}>
        Shiza Shahzad
      </Link>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <button
        ref={toggleRef}
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
      </button>
      <div ref={panelRef} className="mobile-menu-panel" id="mobile-menu" aria-hidden={!isOpen}>
        <p className="mobile-menu-meta">Navigation / Shiza Shahzad</p>
        <nav className="mobile-menu-links" aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <Link
              className="mobile-menu-link"
              href={item.href}
              key={item.href}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
