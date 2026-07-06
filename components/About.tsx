import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading eyebrow="01" title={about.heading} />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {about.highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-surface/50 p-5 transition hover:border-accent/40">
                <div className="text-3xl font-bold text-accent">{h.value}</div>
                <div className="mt-1 text-sm text-muted">{h.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
