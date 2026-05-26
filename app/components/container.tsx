import { Reveal } from "./effects/reveal";

export function Container({
    title,
    icon,
    iconColor,
    children,
}:{
    title: string;
    icon: React.ReactNode;
    iconColor: string;
    children: React.ReactNode;
}) {
    return (
        <Reveal delay={0.16}>
            <div className="
                max-w-sm mx-auto rounded-lg bg-neutral-200/5 dark:bg-neutral-700/5 border border-b- border-r-2 border-neutral-500/10
                p-8 my-8 shadow-sm
                flex flex-col gap-4
            ">
                <div className="flex items-center gap-4">
                    <div className={`w-fit ${iconColor} `}>
                        {icon}
                    </div>
                    <p className="text-sm tracking-tighter font-medium text-neutral-600 dark:text-neutral-400">{title}</p>
                </div>

                <div className="text-sm pt-4">
                    {children}
                </div>
            </div>
        </Reveal>
    )
}

export function NoIconContainer({
    children,
    title,
}:{
    children: React.ReactNode;
    title: string;
}) {
    return (
        <Reveal delay={0.16}>
            <div className="
                max-w-sm mx-auto rounded-lg bg-neutral-200/5 dark:bg-neutral-700/5 border border-b-2 border-r-2 border-neutral-500/10
                p-8 my-8 shadow-sm
                flex flex-col gap-4
            ">
                <div className="flex items-center gap-4">
                    <p className="text-sm tracking-tighter font-medium text-neutral-600 dark:text-neutral-400">{title}</p>
                </div>

                <div className="text-sm pt-4">
                    {children}
                </div>
            </div>
        </Reveal>   
    )
}

export function EmptyContainer({
    children,
}:{
    children: React.ReactNode;
}) {
    return (
        <Reveal delay={0.16}>
            <div className="
                max-w-sm mx-auto rounded-lg bg-neutral-200/5 dark:bg-neutral-700/5 border border-b-2 border-r-2 border-neutral-500/10
                p-8 my-8 shadow-sm
                flex flex-col gap-4
            ">
                <div className="text-sm pt-4">
                    {children}
                </div>
            </div>
        </Reveal>
    )
}