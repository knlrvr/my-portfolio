interface PageTopProps {
    title: string,
    desc: string,
    date?: string,
}

export default function PageTop({title, desc, date}: PageTopProps) {
    return (
        <>
        <div className="my-36">
            <p className="font-bold tracking-tight text-sm">{title}</p>
            <p className="font-light text-neutral-600 dark:text-neutral-400 text-sm my-2">{desc}</p>
            <p className="border-l-2 border-neutral-500 font-light text-neutral-500 pl-2 text-xs">{date}</p>
        </div>
        <hr className="border-neutral-400" />
        </>
    )
}