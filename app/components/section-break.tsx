import { Reveal } from "./effects/reveal";

interface SectionBreakProps {
  label: string;
}

export default function SectionBreak({ label }: SectionBreakProps) {
  return (
    <Reveal delay={0.08}>
      <div className="mt-20 mb-6">
        <div className="flex items-center gap-2 text-mist-300 dark:text-mist-700">
          {/* <p className=" font-mono mb-0.5">*</p> */}
          <span className="font-mono text-sm font-medium tracking-tighter">
            / {label}
          </span>
        </div>
      </div>
    </Reveal>
  );
}

export function SectionBreakSmall({ label }: SectionBreakProps) {
  return (
    <Reveal delay={0.08}>
      <div className="mt-12 mb-4">
        <div className="flex items-center gap-2 text-mist-200 dark:text-mist-800">
          {/* <p className="font-mono mb-0.5">*</p> */}
          <span className="font-mono text-sm font-medium tracking-tighter">
            / {label}
          </span>
        </div>
      </div>
    </Reveal>
  )
}