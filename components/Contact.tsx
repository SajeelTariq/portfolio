import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { site, socials } from "@/lib/content";
import { SocialIcon, ArrowUpRightIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading eyebrow="05" title="Let's build something" />

      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/50 p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold sm:text-3xl">
                Have a project or role in mind?
              </h3>
              <p className="mt-3 text-muted">
                I&apos;m open to AI engineering and backend opportunities, freelance
                work, and interesting collaborations. Drop me a line — I reply fast.
              </p>

              <a
                href={`mailto:${site.email}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition hover:opacity-90"
              >
                {site.email}
                <ArrowUpRightIcon />
              </a>
            </div>

            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-12 w-12 place-items-center rounded-full border border-border text-muted transition hover:border-accent/50 hover:text-accent"
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
