import { Reveal } from "../effects/reveal";

export default function Sticker({
    src
}: {
    src: string,
}) {
    return (
        <div className="absolute right-0 bottom-14 text-neutral-400 sm:right-4 dark:text-neutral-600">
            <Reveal delay={0.2}>
                <div dangerouslySetInnerHTML={{ __html: src }}></div>
            </Reveal>
        </div>
    )
}