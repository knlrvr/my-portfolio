import Link from "next/link";
import { Metadata } from "next";
import { LuArrowUpRight } from "react-icons/lu";
import { LgIconContainer, NoIconContainer } from "../components/container";
import { BiPen } from "react-icons/bi";

export const metadata: Metadata = {
    title: 'Kane Lariviere | Colophon',
    description: 'Kane Lariviere • Software Developer • Colophon',
  }

export default function Colophon() {
    return (
        <div className="max-w-sm mx-auto mt-28">
            <LgIconContainer
                title="Colophon"
                icon={<BiPen size={28} />}
                iconColor="text-mist-500"
            >
                <div className="text-neutral-700 dark:text-neutral-300">
                    How this site was built & the decisions behind it.
                </div>
            </LgIconContainer>


            <NoIconContainer
                title="Ethos"
            >
                <p className="text-sm">
                    I&apos;m a better dev than designer, so I tend to err on the side of simplicity. I like when things are straight forward and easily understood. That being said, I try to break this portfolio as often as I can by trying new technologies and patterns, and staying aligned with best practices in the ecosystem. I would encourage anyone with a personal portfolio to do the same. 
                </p>
            </NoIconContainer>

            <NoIconContainer
                title="Typography"
            >
                <p className="text-sm">
                    This site uses the Inter typeface because it looks <em>great</em> and is less for me to worry about.
                </p>
            </NoIconContainer>
            
            <NoIconContainer
                title="Tech Stack"
            >
                <div>
                    <p className="text-sm">
                        This site is built with <Link href="https://nextjs.org/" className="underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">Next.js</Link> with TypeScript and <Link href="https://tailwindcss.com/" className="underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">Tailwind </Link> v4. It&apos;s hosted on <Link href="https://vercel.com" className="underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">Vercel</Link>. 
                    </p>

                    <Link href="https://github.com/knlrvr/my-portfolio" className="group flex items-center gap-1 text-xs w-fit mt-8 rounded-md px-4 py-2 bg-neutral-600 dark:bg-neutral-400 hover:bg-neutral-600/80 dark:hover:bg-neutral-400/80 transition-colors duration-150">
                        <span className="text-neutral-100 dark:text-[#111]">
                            GitHub Repo
                        </span>
                        <LuArrowUpRight className="mt-0.5 text-neutral-100 dark:text-[#111] group-hover:-translate-y-px group-hover:translate-x-px transition-transform duration-150" />
                    </Link>  
                </div>
            </NoIconContainer>

            <NoIconContainer
                title="TypeScript"
            >
                <p className="text-sm">
                    <em>Obviously</em>.
                </p>
            </NoIconContainer>

            <NoIconContainer
                title="Tailwind"
            >
                <p className="text-sm">
                    Tailwind let&apos;s you do two things &mdash; develop quickly and create a cohesive design system. Building with Tailwind means saving time without sacrificing meaningful work. 
                </p>
            </NoIconContainer>

            <NoIconContainer
                title="Next.js & Vercel"
            >
                <p className="text-sm">
                    Next.js is the best, if not the easiest, way to build web applications with React. It only makes sense to host a Next.js application with the team that maintains it. 
                </p> 
            </NoIconContainer>

            <NoIconContainer
                title="Domain Name"
            >
                <p className="text-sm">
                    The domain name is just my name without any vowels. I first created it as my GitHub username, and it only made sense to continue using it for anything dev related.
                </p>
            </NoIconContainer>
        </div>
    )
}