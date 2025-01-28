import Link from "next/link";
import PageTop from "../components/page-top";

export default function Colophon() {
    return (
        <div className="max-w-2xl mx-auto">
            <PageTop 
                title="Kane Lariviere"
                desc="Colophon"
            />

            <div className="flex flex-col space-y-8 mt-4 text-sm">
                
                <div className="">
                    <span className="font-medium tracking-tight">Ethos</span>
                    <p className="text-neutral-500">
                        I&apos;m a better dev than designer, so I tend to err on the side of simplicity. I like when things are straight forward and easily understood. That being said, I try to break this portfolio as often as I can by trying new technologies and patterns, and staying aligned with best practices in the ecosystem. I would encourage anyone with a personal portfolio to do the same. 
                    </p>
                </div>

                <div className="">
                    <span className="font-medium tracking-tight">Typography</span>
                    <p className="text-neutral-500">
                        This site uses Inter typeface because it looks <em>great</em> and is less for me to worry about.
                    </p>
                </div>

                <div className="">
                    <span className="font-medium tracking-tight">Tech Stack</span>
                    <p className="text-neutral-500">
                        This site is built with <Link href="https://nextjs.org/" className="underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">Next.js</Link> with TypeScript and <Link href="https://tailwindcss.com/" className="underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">Tailwind </Link> v4. It&apos;s hosted on <Link href="https://vercel.com" className="underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">Vercel</Link>. 
                    </p>

                    <div className="mt-3">
                        <Link href="https://vercel.com" className="text-neutral-500 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">GitHub Repo</Link>
                    </div>
                </div>

                <div className="">
                    <span className="font-medium tracking-tight">TypeScript</span>
                    <p className="text-neutral-500">
                        <em>Obviously</em>.
                    </p>
                </div>

                <div className="">
                    <span className="font-medium tracking-tight">Tailwind</span>
                    <p className="text-neutral-500">
                        Tailwind let&apos;s you do two things &mdash; develop quickly and create a cohesive design system. Building with Tailwind means saving time without sacrificing meaningful work. 
                    </p>
                </div>

                <div className="">
                    <span className="font-medium tracking-tight">Next.js & Vercel</span>
                    <p className="text-neutral-500">
                        Next.js is the best, if not the easiest, way to build web applications with React. It only makes sense to host a Next.js application with the team that maintains it. 
                    </p>
                </div>

                <div className="">
                    <span className="font-medium tracking-tight">Domain name</span>
                    <p className="text-neutral-500">
                        The domain name is just my name without any vowels. I first created it as my GitHub username, and it only made sense to continue using it for anything dev related.
                    </p>
                </div>

            </div>
        </div>
    )
}