export function InlineCode({ children }: { children: React.ReactNode}) {
    return (
        <>
            <span className="font-mono text-xs text-mist-700 dark:text-mist-300">`{children}`</span>
        </>
    )
}