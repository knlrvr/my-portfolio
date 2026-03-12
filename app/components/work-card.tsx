import Image from "next/image";

interface WorkCardProps {
  img: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags?: string[];
  featured?: boolean;
}

export default function WorkCard({
  img,
  role,
  company,
  period,
  description,
  tags,
  featured,
}: WorkCardProps) {

  return (
    <div className="text-sm flex flex-col gap-4 mb-12">
        <div className="flex items-center gap-2">
            <Image
                src={img}
                alt="Company image"
                width={1000}
                height={1000}
                className="h-10 w-10 rounded-full border-4 border-neutral-100 dark:border-neutral-700"
            />
            <div className="flex items-end justify-between w-full">
                <div className="flex flex-col">
                    <div className="flex items-center gap-4">
                        <p className="font-medium tracking-tight">{role}</p>
                        {featured && (
                            <span className="text-[0.625rem] font-mono uppercase font-bold bg-[#FF2D20]/5 text-[#FF2D20] rounded-md px-2 py-1">current</span>
                        )}
                    </div>
                    <p className="text-neutral-500">{company}</p>
                </div>
                <div className="">
                    <p className="font-mono text-[11px] text-neutral-500">{period}</p>
                </div>
            </div>
        </div>
        <div className="">
            <p className="text-neutral-700 dark:text-neutral-300 text-sm ">{description}</p>
        </div>
    </div>
  );
}