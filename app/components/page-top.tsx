export default function PageTop({
    title,
    desc
}: {
    title: string,
    desc: string,
}) {
    return (
        <>
        <div className="my-36 text-sm">
            <p className="font-medium tracking-tight">{title}</p>
            <p className="font-light text-neutral-500">{desc}</p>
        </div>
        <hr className="border-neutral-400" />
        </>
    )
}