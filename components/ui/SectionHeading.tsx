import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal className="mb-12 flex flex-col gap-3">
      <span className="font-mono text-sm text-accent">
        <span className="text-muted">/</span> {eyebrow}
      </span>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <span className="mt-1 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
    </Reveal>
  );
}
