interface PageTopProps {
  title: string;
  desc: string;
  date?: string;
}

export default function PageTop({ title, desc, date }: PageTopProps) {
  return (
    <div className="pt-28 pb-14">
      <h1 className="text-[clamp(2rem,5vw,3.25rem)] font-medium tracking-[-0.045em] leading-[1.08]">
        {title}
      </h1>
      <p className="text-[0.9375rem] text-mist-600 dark:text-mist-400 mt-2 leading-relaxed max-w-120">
        {desc}
      </p>
      {date && (
        <p className="text-[0.6875rem] text-mist-400 dark:text-mist-600 mt-2 font-mono tracking-wide border-l-2 pl-2 border-neutral-200 dark:border-neutral-800">
          {date}
        </p>
      )}
    </div>
  );
}