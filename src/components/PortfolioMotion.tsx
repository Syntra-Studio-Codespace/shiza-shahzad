"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PortfolioMotion() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cleanupFns: Array<() => void> = [];

    document.documentElement.classList.add("motion-ready");

    if (reduceMotion.matches) {
      return () => {
        document.documentElement.classList.remove("motion-ready");
      };
    }

    const context = gsap.context(() => {
      const heroTimeline = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      heroTimeline
        .from(".site-header", {
          y: -18,
          autoAlpha: 0,
          duration: 0.55,
        })
        .from("[data-hero-reveal]", {
          y: 24,
          autoAlpha: 0,
          clipPath: "inset(0 0 100% 0)",
          duration: 0.82,
          stagger: 0.075,
        }, "-=0.18")
        .from(".hero-actions .button", {
          y: 14,
          autoAlpha: 0,
          duration: 0.52,
          stagger: 0.07,
          ease: "power3.out",
        }, "-=0.42");

      gsap.to(".molecular-field", {
        y: -18,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.7,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-motion-section]").forEach((section) => {
        const revealItems = section.querySelectorAll("[data-section-reveal]");

        if (revealItems.length) {
          gsap.from(revealItems, {
            y: 22,
            autoAlpha: 0,
            duration: 0.78,
            stagger: 0.085,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              once: true,
            },
          });
        }
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger-reveal]").forEach((container) => {
        gsap.from(container.children, {
          y: 18,
          autoAlpha: 0,
          duration: 0.62,
          stagger: 0.075,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 82%",
            once: true,
          },
        });
      });

      gsap.from(".research-section", {
        backgroundColor: "#521824",
        duration: 0.8,
        ease: "sine.out",
        scrollTrigger: {
          trigger: ".research-section",
          start: "top 82%",
          once: true,
        },
      });
    });

    if (cursorRef.current && cursorFollowerRef.current) {
      const cursor = cursorRef.current;
      const follower = cursorFollowerRef.current;
      const setCursorX = gsap.quickTo(cursor, "x", { duration: 0.12, ease: "power3.out" });
      const setCursorY = gsap.quickTo(cursor, "y", { duration: 0.12, ease: "power3.out" });
      const setFollowerX = gsap.quickTo(follower, "x", { duration: 0.42, ease: "power3.out" });
      const setFollowerY = gsap.quickTo(follower, "y", { duration: 0.42, ease: "power3.out" });

      document.body.classList.add("motion-cursor-active");
      gsap.set(cursor, {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
      gsap.set(follower, {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });

      const moveCursor = (event: PointerEvent | MouseEvent) => {
        document.body.classList.add("cursor-ready");
        setCursorX(event.clientX);
        setCursorY(event.clientY);
        setFollowerX(event.clientX);
        setFollowerY(event.clientY);
      };

      const pressCursor = () => document.body.classList.add("cursor-pressed");
      const releaseCursor = () => document.body.classList.remove("cursor-pressed");
      const enterTarget = () => document.body.classList.add("cursor-target");
      const leaveTarget = () => document.body.classList.remove("cursor-target");
      const revealCursor = () => document.body.classList.add("cursor-ready");

      window.addEventListener("pointermove", moveCursor, { passive: true });
      window.addEventListener("mousemove", moveCursor, { passive: true });
      window.addEventListener("mouseenter", revealCursor, { passive: true });
      window.addEventListener("pointerdown", pressCursor, { passive: true });
      window.addEventListener("pointerup", releaseCursor, { passive: true });

      document
        .querySelectorAll("a, button, .readiness-item, .content-state")
        .forEach((element) => {
          element.addEventListener("pointerenter", enterTarget);
          element.addEventListener("pointerleave", leaveTarget);
          cleanupFns.push(() => {
            element.removeEventListener("pointerenter", enterTarget);
            element.removeEventListener("pointerleave", leaveTarget);
          });
        });

      cleanupFns.push(() => {
        window.removeEventListener("pointermove", moveCursor);
        window.removeEventListener("mousemove", moveCursor);
        window.removeEventListener("mouseenter", revealCursor);
        window.removeEventListener("pointerdown", pressCursor);
        window.removeEventListener("pointerup", releaseCursor);
        document.body.classList.remove(
          "motion-cursor-active",
          "cursor-ready",
          "cursor-pressed",
          "cursor-target",
        );
      });
    }

    return () => {
      cleanupFns.forEach((cleanup) => cleanup());
      context.revert();
      document.documentElement.classList.remove("motion-ready");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div ref={cursorFollowerRef} className="custom-cursor-follower" aria-hidden="true" />
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
    </>
  );
}
