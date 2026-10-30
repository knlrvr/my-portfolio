import { Reveal } from "../effects/reveal";

export default function Sticker({
    src
}: {
    src: string,
}) {
    return (
        <div className="absolute -bottom-8 right-0 text-neutral-600 dark:text-neutral-400">
            <Reveal delay={0.2}>
                <div dangerouslySetInnerHTML={{ __html: src }}></div>
            </Reveal>
        </div>
    )
}