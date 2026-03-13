import Link from "next/link";
import PageTop from "../components/page-top";
import { Metadata } from "next";
import WorkCard from "../components/work-card";
import { LuArrowUpRight } from "react-icons/lu";

export const metadata: Metadata = {
    title: 'Kane Lariviere | Work',
    description: 'Kane Lariviere • Software Engineer • Work',
}

export default function Work() {
    return (
        <div className="max-w-2xl mx-auto">
            <PageTop 
                title="Work"
                desc="Shipping things that matter."
            />

            <div className="flex flex-col text-sm">
                
            <WorkCard
                img="/ro-logo.png"
                role="QA Engineer"
                company="@ Rather Outdoors"
                period="2025 - Present"
                description="Architecting the systems that make shipping boring — testing infrastructure, developer tools, and the automation that lets teams move fast without breaking things."
                tags={[]}
                featured={true}
            />

            <WorkCard
                img="/era-logo.png"
                role="Software Engineer + Product"
                company="@ eraWorks Studio"
                period="2022 - 2025"
                description="Worked with a range of small to medium businesses, agencies, start-ups, and individuals to build products, experiences, and improve technical direction."
                tags={[]}
                featured={false}
            />

            </div>

            <Link href="https://github.com/knlrvr" className="group flex items-center gap-1 text-xs group w-fit mt-8 border border-mist-400 dark:border-mist-700 px-4 py-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-150">
                <p className="text-neutral-700 dark:text-neutral-300">
                    View My GitHub
                </p>
                <LuArrowUpRight className="mt-0.5 text-mist-400 dark:text-mist-700 group-hover:-translate-y-px group-hover:translate-x-px transition-transform duration-150" />
            </Link>

        </div>
    )
}