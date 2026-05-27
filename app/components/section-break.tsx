import { Reveal } from "./effects/reveal";

interface SectionBreakProps {
  label: string;
}

export default function SectionBreak({ label }: SectionBreakProps) {
  return (
    <Reveal delay={0.08}>
      <div className="mt-24 mb-6">
        <div className={`flex items-center font-mono text-xs font-medium tracking-tighter text-mist-300 dark:text-mist-700`}>
          <span className={`underline underline-offset-4 decoration-mist-300 dark:decoration-mist-700`}>
            {label}
          </span>
          <span className="inline-flex">.</span>
        </div>
      </div>
    </Reveal>
  );
}

export function SectionBreakSmall({ label }: SectionBreakProps) {
  return (
    <Reveal delay={0.08}>
      <div className="mt-12 mb-4">
        <div className={`flex items-center font-mono text-xs font-medium tracking-tighter text-mist-300 dark:text-mist-700`}>
          <span className={`underline underline-offset-4 decoration-mist-300 dark:decoration-mist-700`}>
            {label}
          </span>
          <span className="inline-flex">.</span>
        </div>
      </div>
    </Reveal>
  )
}