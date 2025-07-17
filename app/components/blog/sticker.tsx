export default function Sticker({
    src
}: {
    src: string,
}) {
    return (
        <div className="absolute bottom-4 right-0">
            <div dangerouslySetInnerHTML={{ __html: src }}></div>
        </div>
    )
}