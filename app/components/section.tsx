export default function Section({
    children
}: {
    children: React.ReactNode,
}) {
    return (
        <section>
            <hr className="border-neutral-400" />
            <div className="mt-4">
                {children}
            </div>
        </section>
    )
}

export function InfoSection({
    title, 
    children
}: {
    title: string,
    children: React.ReactNode,
}) {
    return (
        <div className="flex flex-col gap-2 text-sm">
            <div className="">
                <p className="tracking-tight">{title}</p>
            </div>
            <div className="text-neutral-500">{children}</div>
        </div>
    )
}