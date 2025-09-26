import Link from "next/link";

export default function About() {
    return (
        <div className="text-sm my-8">
            <div className="flex flex-col gap-4 pb-4">
                <span className="font-black">Hello!</span>
                <p className="text-neutral-600 dark:text-neutral-400 blog">
                    I&apos;m a <span className="underline underline-offset-2 decoration-neutral-500">software engineer</span>,
                    artist, and d&d nerd living in North Carolina. Currently working as a <span className="underline underline-offset-2 decoration-neutral-500">QA Analyst</span>.
                    Focused on crafting engaging and memorable experiences while exploring sustainability and advocating 
                    for a greener web. <Link href="https://github.com/knlrvr" className="underline underline-offset-2 decoration-neutral-500 hover:decoration-neutral-300 transition-colors duration-150">Always shipping</Link>.
                </p>
            </div>
        </div>
    )
}