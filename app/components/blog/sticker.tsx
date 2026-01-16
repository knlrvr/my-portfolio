export default function Sticker({
    src
}: {
    src: string,
}) {
    return (
        <div className="absolute bottom-4 right-0 text-neutral-600 dark:text-neutral-400">
            <div dangerouslySetInnerHTML={{ __html: src }}></div>
        </div>
    )
}