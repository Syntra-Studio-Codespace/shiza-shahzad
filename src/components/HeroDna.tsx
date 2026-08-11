"use client";

import { type CSSProperties, useEffect, useRef } from "react";
import gsap from "gsap";

const basePairs = Array.from({ length: 22 }, (_, index) => {
  const progress = index / 21;
  const angle = progress * Math.PI * 4.4;
  const left = 50 + Math.sin(angle) * 25;
  const right = 50 + Math.sin(angle + Math.PI) * 25;
  const x = Math.min(left, right);
  const width = Math.abs(right - left);

  return {
    id: `pair-${index}`,
    y: progress * 100,
    left,
    right,
    x,
    width,
    depth: Math.cos(angle),
  };
});

function asStyle(values: Record<string, string | number>): CSSProperties {
  return values as CSSProperties;
}

export function HeroDna() {
  const figureRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scope = figureRef.current;

    if (!scope) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      gsap.set(scope.querySelectorAll(".dna-node, .dna-rung, .dna-loop"), {
        clearProps: "all",
        opacity: 1,
      });
      return;
    }

    const context = gsap.context(() => {
      const nodes = gsap.utils.toArray<HTMLElement>(
        scope.querySelectorAll(".dna-node"),
      );
      const rungs = gsap.utils.toArray<HTMLElement>(
        scope.querySelectorAll(".dna-rung"),
      );
      const loop = scope.querySelector<HTMLElement>(".dna-loop");

      gsap.from(scope, {
        autoAlpha: 0,
        scale: 0.94,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(nodes, {
        opacity: 0,
        scale: 0.58,
        duration: 0.65,
        stagger: 0.016,
        ease: "power3.out",
      });

      gsap.from(rungs, {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "50% 50%",
        duration: 0.7,
        stagger: 0.024,
        ease: "power4.out",
      });

      if (loop) {
        gsap.to(loop, {
          yPercent: -50,
          duration: 11,
          repeat: -1,
          ease: "none",
        });
      }

      gsap.to(nodes, {
        x: (index) => (index % 2 === 0 ? 6 : -6),
        duration: 3.4,
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.07,
          repeat: -1,
        },
        ease: "sine.inOut",
      });
    }, scope);

    return () => context.revert();
  }, []);

  return (
    <figure
      ref={figureRef}
      className="dna-field molecular-field"
      aria-label="Decorative abstract DNA loop"
    >
      <div className="field-grid" />
      <div className="dna-window" aria-hidden="true">
        <div className="dna-loop">
          {[0, 1].map((loop) => (
            <div className="dna-sequence" key={loop}>
              {basePairs.map((pair) => (
                <div
                  className="dna-pair"
                  key={`${loop}-${pair.id}`}
                  style={asStyle({
                    "--y": `${pair.y}%`,
                    "--left-x": `${pair.left}%`,
                    "--right-x": `${pair.right}%`,
                    "--rung-x": `${pair.x}%`,
                    "--rung-width": `${pair.width}%`,
                    "--depth": pair.depth.toFixed(3),
                    "--opacity": 0.5 + Math.abs(pair.depth) * 0.42,
                  })}
                >
                  <span className="dna-node dna-node-left" />
                  <span className="dna-rung" />
                  <span className="dna-node dna-node-right" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="cell cell-one" aria-hidden="true" />
      <div className="cell cell-two" aria-hidden="true" />
      <figcaption>
        Fig. 01 / Abstract DNA loop and microscopy-inspired field. Decorative,
        not experimental data.
      </figcaption>
    </figure>
  );
}
