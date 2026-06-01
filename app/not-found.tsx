import Link from "next/link";
import { Reveal } from "./components/effects/reveal";

export default function NotFound() { 
    return ( 
        <div className="max-w-sm mx-auto"> 
        
            <section id="hero" className="pt-32">
                <div className="flex flex-col gap-10">
                    <Reveal delay={0.08}>
                    <h1 className="text-[clamp(52px,8vw,80px)] font-light leading-[0.98] tracking-[-0.03em]">
                        <span className="bg-orange text-white not-italic px-2 ml-1">
                        Not Found.
                        </span>
                    </h1>
                    </Reveal>
        
                    <div className="pb-1.5">
                    <Reveal delay={0.16}>
                        <p className="text-[14px] leading-[1.75] text-neutral-600 dark:text-neutral-400 mb-8">
                            Oh no! It looks like this page doesn&apos;t exist!
                        </p>
                    </Reveal>
                    </div>
                </div>
            </section>

        <div className="my-8">
            <p className="text-sm ">
                You can check the URL and try again, click one of the links below,
                or return to the <Link href="/" className="underline underline-offset-2 decoration-neutral-300 hover:decoration-orange transition-colors duration-150">home page</Link>.
            </p>
        </div>
    </div>
)
}