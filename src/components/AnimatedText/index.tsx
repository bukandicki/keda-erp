"use client";

import { memo, useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import sanitizeHtml from "sanitize-html";
import gsap from "gsap";

import "./AnimatedText.style.scss";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function AnimatedText({
  value,
  duration,
  stagger,
}: {
  duration?: number;
  stagger?: number;
  value: string;
}) {
  const animatedTextRef = useRef<HTMLDivElement>(null);

  const splitedWords = useMemo(() => value.split(/(\s+)/), [value]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.to(".word", {
          scrollTrigger: {
            trigger: ".mask",
            start: "center bottom",
            end: "bottom bottom",
          },
          y: 0,
          ease: (x) => {
            return x < 0.5
              ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
              : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
          },
          duration: duration || 1,
          stagger: stagger !== undefined ? stagger : 0.05,
        });
      });
    },
    { scope: animatedTextRef }
  );

  return (
    <span ref={animatedTextRef} className="animated-text">
      {splitedWords.map((word, idx) =>
        word === " " ? (
          " "
        ) : (
          <span className="mask" key={idx}>
            <span
              className="word"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(word),
              }}
            ></span>
          </span>
        )
      )}
    </span>
  );
}

export default memo(AnimatedText);
