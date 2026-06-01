import Image from "next/image";

interface WorkCardProps {
  role: string;
  company: string;
  img: string;
  period: string;
  featured?: boolean;
  desc: string;
}

export default function WorkCard({
  role,
  company,
  img,
  period,
  featured,
  desc
}: WorkCardProps) {

  return (
    <div className="flex flex-col gap-2 mx-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Image 
              src={img}
              alt={`${company} logo`}
              width={250} 
              height={250} 
              className="w-4 h-fit inline-flex dark:invert"
          />
          <p className="font-medium tracking-tighter text-sm">{company}</p>
          {featured && (
              <span className="ml-2 text-[0.625rem] font-mono uppercase font-bold bg-neutral-500/20 text-neutral-600 dark:text-neutral-400 rounded-full px-3 py-1">current</span>
          )}
        </div>
        <p className="text-xs text-neutral-500">{period}</p>
      </div>
      <div className="flex flex-col gap-1 text-sm">
        <p className="">{role}</p>
      </div>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">{desc}</p>
    </div>
  );
}