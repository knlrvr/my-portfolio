interface PageTopProps {
    title: string,
    desc: string,
    date?: string,
}

export default function PageTop({title, desc, date}: PageTopProps) {
    return (
        <>
        <div className="my-36 text-sm">
            <p className="text-neutral-400 text-xs">{date}</p>
            <p className="font-medium tracking-tight my-1">{title}</p>
            <p className="font-light text-neutral-500 text-xs">{desc}</p>
        </div>
        <hr className="border-neutral-400" />
        </>
    )
}