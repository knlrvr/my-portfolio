import Image from "next/image";

interface WorkCardProps {
    org: string;
    img: string;
    role: string;
    start: string;
    end: string;
    desc: string;
}

export default function WorkCard({ org, img, role, start, end, desc}: WorkCardProps) {
    return (
        <div className="flex flex-col">
            <div className="flex gap-2">
                <Image
                    src={img}
                    alt={`${org} logo`}
                    width={1000}
                    height={1000}
                    className="w-10 h-10 rounded-full border-2 border-neutral-100/50 dark:border-[#111]"
                />
                <div className="flex flex-col w-full">
                    <p className="font-black">{role}</p>
                    <div className="flex items-center justify-between w-full">
                        <p className="text-neutral-500">{org}</p>
                        <p className="text-neutral-500 font-light">{start} &mdash; {end}</p>
                    </div>
                </div>
                
            </div>
            <p className="pt-6 blog text-neutral-600 dark:text-neutral-400">
                {desc}
            </p>
        </div>
    )
}