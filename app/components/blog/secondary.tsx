// I made this for the footnote characters but it might be useful elsewhere

export function SecondaryText({
    children,
}:{
    children: React.ReactNode
}) {
    return (
        <sup className="text-neutral-500">&thinsp;{children}</sup>
    )
}