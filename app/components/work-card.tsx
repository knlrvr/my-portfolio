interface WorkCardProps {
    org: string;
    role: string;
    start: string;
    end: string;
    desc: string;
}

export default function WorkCard({ org, role, start, end, desc}: WorkCardProps) {
    return (
        <div className="space-y-1">
            <span className="font-medium tracking-tight">{org}</span>
            <div className="flex items-center justify-between">
                <p className="font-light text-neutral-500">{role}</p>
                <p className="text-neutral-500 font-light">{start} &mdash; {end}</p>
            </div>
            <p className="blog dark:text-neutral-300">
                {desc}
            </p>
        </div>
    )
}