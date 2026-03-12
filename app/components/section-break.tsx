interface SectionBreakProps {
  label: string;
}

export default function SectionBreak({ label }: SectionBreakProps) {
  return (
    <div className="mt-18 mb-6">
      <div className="flex items-center gap-2">
        <p className="text-[#FF2D20] font-mono mb-0.5">*</p>
        <span className="font-mono text-[0.625rem] font-bold uppercase tracking-wide text-neutral-500">
          {label}
        </span>
      </div>
    </div>
  );
}

export function SectionBreakSmall({ label }: SectionBreakProps) {
  return (
    <div className="mt-9 mb-5">
      <div className="flex items-center gap-2">
        <p className="text-[#FF2D20] font-mono mb-0.5">*</p>
        <span className="font-mono text-[0.625rem] font-bold uppercase tracking-wide text-neutral-500">
          {label}
        </span>
      </div>
    </div>
  )
}