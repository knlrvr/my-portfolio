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
    <div className="flex">
      <div className="flex items-start gap-2 w-full">
        <Image 
            src={img}
            alt={`${company} logo`}
            width={250} 
            height={250} 
            className="w-8 h-fit inline-flex mt-1 dark:invert"
        />
        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center gap-2">
            <span className="text-sm tracking-tighter font-medium">{company}</span>
            {featured && (
              <span className="ml-2 text-[0.625rem] font-mono uppercase font-bold bg-red-400/10 text-red-400 rounded-md px-2 py-1">current</span>
            )}
          </div>
          <div className="flex items-center justify-between text-neutral-700 dark:text-neutral-300">
            <p className="tracking-tighter font-medium">{role}</p>
            <p className="text-xs">{period}</p>
          </div>
          <p className="text-neutral-500">{desc}</p>
        </div>
      </div>
    </div>
  );
}