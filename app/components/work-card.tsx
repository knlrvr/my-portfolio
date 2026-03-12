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
        <div className="flex gap-2">
            <Image
                src={img}
                alt="Company image"
                width={1000}
                height={1000}
                className="h-10 w-10 rounded-full"
            />
            <div className="flex items-end justify-between w-full">
                <div className="flex flex-col">
                    <div className="flex gap-4">
                        <p className="font-bold tracking-tight">{role}</p>
                    </div>
                    <p className="text-neutral-500">{company}</p>
                </div>
                <div className="">
                    <p className="font-mono text-xs text-neutral-500">{period}</p>
                </div>
            </div>
        </div>
        <div className="">
            <p className="blog text-neutral-700 dark:text-neutral-300">{description}</p>
        </div>
    </div>
  );
}