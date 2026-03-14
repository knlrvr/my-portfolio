import Image from "next/image";

interface WorkCardProps {
  role: string;
  company: string;
  period: string;
  featured?: boolean;
}

export default function WorkCard({
  role,
  company,
  period,
  featured,
}: WorkCardProps) {

  return (
    <>
    <div className="py-4 text-sm space-y-1">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <p className="font-medium tracking-tighter">{company}</p>
                {featured && (
                    <span className="text-[0.625rem] font-mono uppercase font-bold bg-mist-400/20 text-mist-500 rounded-md px-2 py-1">current</span>
                )}
            </div>
            <p className="text-mist-500 font-mono text-[11px] text-right">{period}</p>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300">{role}</p>
    </div>
    </>
  );
}