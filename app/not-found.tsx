import Link from "next/link";
import { Reveal } from "./components/effects/reveal";
import PageTop from "./components/page-top";

export default function NotFound() { 
    return ( 
        <div className="max-w-md mx-auto"> 
        
            <Reveal delay={0.08}>
                <PageTop
                    title="Not Found."
                    description="Oh no! It looks like this page doesn't exist!"
                    back={true}
                    backHref="/"
                />
            </Reveal>

            <div className="pb-1.5">
            <Reveal delay={0.16}>
                <p className="text-[14px] leading-[1.75] text-neutral-600 dark:text-neutral-400 mb-8">
                    Oh no! It looks like this page doesn&apos;t exist!
                </p>
            </Reveal>
            </div>

        <div className="my-8">
            <Reveal delay={0.24}>
                <p className="text-sm ">
                    You can check the URL and try again, click one of the links below,
                    or return to the <Link href="/" className="underline underline-offset-2 decoration-neutral-500 hover:decoration-neutral-400 dark:hover:decoration-neutral-600 transition-colors duration-150">home page</Link>.
                </p>
            </Reveal>
        </div>
    </div>
)
}