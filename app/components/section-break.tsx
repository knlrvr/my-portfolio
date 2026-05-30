import { Reveal } from "./effects/reveal";

interface SectionBreakProps {
  label: string;
  num: string;
}

export default function SectionBreak({ label, num }: SectionBreakProps) {
  return (
    <Reveal delay={0.08}>
      <div className="mt-24 mb-6">
        <div className="flex items-center gap-1 font-mono tracking-tighter">
          <p className="text-xl text-mist-500/10">{num}</p>
          <p className="text-xs text-mist-200 dark:text-mist-800 mt-0.75">{label}</p>
        </div>
      </div>
    </Reveal>
  );
}

export function SectionBreakSmall({ label, num }: SectionBreakProps) {
  return (
    <Reveal delay={0.08}>
      <div className="mt-12 mb-4">
        <div className="flex items-center gap-1 font-mono tracking-tighter">
          <p className="text-lg text-mist-500/10">{num}</p>
          <p className="text-xs text-mist-200 dark:text-mist-800 mt-0.75">{label}</p>
        </div>
      </div>
    </Reveal>
  )
}