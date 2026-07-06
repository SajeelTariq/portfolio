import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/lib/content";
import { ArrowUpRightIcon, GitHubIcon } from "@/components/icons";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading eyebrow="03" title="Selected projects" />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.1}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/50 p-6 transition hover:border-accent/40">
              {/* accent glow on hover */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-3xl transition group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <div className="flex gap-1.5 text-muted">
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} repository`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-border transition hover:border-accent/50 hover:text-accent"
                    >
                      <GitHubIcon width={17} height={17} />
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} live`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-border transition hover:border-accent/50 hover:text-accent"
                    >
                      <ArrowUpRightIcon width={17} height={17} />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {p.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
