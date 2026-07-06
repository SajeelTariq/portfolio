import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { timeline } from "@/lib/content";
import { BriefcaseIcon, GraduationIcon } from "@/components/icons";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
    >
      <SectionHeading eyebrow="04" title="Experience & education" />

      <div className="relative border-l border-border pl-8 sm:pl-10">
        {timeline.map((entry, i) => {
          const Icon = entry.type === "work" ? BriefcaseIcon : GraduationIcon;
          return (
            <Reveal key={`${entry.title}-${i}`} delay={i * 0.08}>
              <div className="relative pb-10 last:pb-0">
                <span className="absolute -left-[41px] grid h-8 w-8 place-items-center rounded-full border border-border bg-surface text-accent sm:-left-[49px]">
                  <Icon width={16} height={16} />
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-accent">
                  {entry.period}
                </span>
                <h3 className="mt-1.5 text-lg font-semibold">
                  {entry.title}
                  <span className="text-muted"> · {entry.org}</span>
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {entry.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
