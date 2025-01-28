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