import Link from "next/link";

export default function About() {
    return (
        <div className="text-sm my-8">
            <div className="flex flex-col gap-4 pb-4">
                <span className="font-medium">Hello!</span>
                <p className="text-neutral-600 blog">
                    I&apos;m a <span className="underline underline-offset-2 decoration-neutral-300">software engineer</span>,
                    artist, and d&d nerd living in Charlotte, NC.
                    I&apos;m currently working at <Link href="/work/fenili" className="underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">Fenili Apparel</Link> as a software engineer.
                    Crafting engaging and memorable experiences while exploring sustainability and advocating 
                    for a greener web. <Link href="https://github.com/knlrvr" className="underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">Always shipping</Link>.
                </p>
            </div>

            <Link href="/work" className="flex items-center gap-1 text-sm w-fit my-4">
                <span className="text-neutral-500 text-xs underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">View My Work</span>
            </Link>
        </div>
    )
}