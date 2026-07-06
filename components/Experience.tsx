"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { timeline } from "@/lib/content";

export default function Experience() {
  const listRef = useRef<HTMLDivElement>(null);

  // Progress of the timeline as it scrolls through the viewport.
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 60%", "end 65%"],
  });

  // Smooth the raw scroll progress so the line/dot glide instead of snapping.
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const dotTop = useTransform(progress, [0, 1], ["0%", "100%"]);
  const dotOpacity = useTransform(progress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
    >
      <SectionHeading eyebrow="04" title="My career & experience" />

      {/*
        Line lives at the LEFT edge on mobile and the CENTER on desktop.
        --line: the horizontal position both the track/fill and the dot share.
      */}
      <div
        ref={listRef}
        className="relative [--line:0.5rem] md:[--line:50%]"
      >
        {/* Dim track */}
        <div className="absolute top-0 h-full w-px -translate-x-1/2 bg-border left-[var(--line)]" />

        {/* Animated fill that grows as you scroll */}
        <motion.div
          style={{ scaleY: progress }}
          className="absolute top-0 h-full w-px origin-top -translate-x-1/2 bg-gradient-to-b from-accent via-accent to-accent/50 left-[var(--line)]"
        />

        {/* Glowing dot riding the leading edge — soft, layered bloom */}
        <motion.div
          style={{ top: dotTop, opacity: dotOpacity }}
          className="absolute z-20 grid -translate-x-1/2 -translate-y-1/2 place-items-center left-[var(--line)]"
        >
          {/* Outer diffuse halo — widest, softest */}
          <span className="absolute h-24 w-24 rounded-full bg-[radial-gradient(circle,rgb(var(--accent)/0.28),transparent_65%)] blur-2xl" />
          {/* Mid bloom */}
          <span className="absolute h-12 w-12 rounded-full bg-[radial-gradient(circle,rgb(var(--accent)/0.5),transparent_68%)] blur-md" />
          {/* Inner glow */}
          <span className="absolute h-6 w-6 rounded-full bg-[radial-gradient(circle,rgb(var(--accent)/0.85),transparent_70%)] blur-[3px]" />
          {/* Bright core */}
          <span className="relative h-3.5 w-3.5 rounded-full bg-accent shadow-[0_0_10px_1px_rgb(var(--accent)/0.9)]" />
          {/* Hot center highlight */}
          <span className="absolute h-1.5 w-1.5 rounded-full bg-white/90 blur-[0.5px]" />
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-24">
          {timeline.map((entry, i) => (
            <Reveal key={`${entry.title}-${i}`} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-y-3 pl-10 md:grid-cols-2 md:items-center md:gap-x-24 md:pl-0">
                {/* LEFT: title + subtitle + big year */}
                <div className="grid grid-cols-[1fr_auto] items-start gap-4 md:pr-16">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold leading-tight md:text-3xl">
                      {entry.title}
                    </h3>
                    <p className="mt-1.5 text-lg font-medium text-accent">
                      {entry.subtitle}
                    </p>
                  </div>
                  <div className="order-1 text-right font-bold leading-none text-muted/50 md:order-2 text-4xl md:text-6xl">
                    {entry.year}
                  </div>
                </div>

                {/* RIGHT: description */}
                <div className="md:pl-16">
                  <p className="text-base leading-relaxed text-muted">
                    {entry.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
