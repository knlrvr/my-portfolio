import Link from "next/link";
import PageTop from "../components/page-top";
import { Metadata } from "next";
import WorkCard from "../components/work-card";

export const metadata: Metadata = {
    title: 'Kane Lariviere | Work',
    description: 'Kane Lariviere • Software Engineer • Work',
}

export default function Work() {
    return (
        <div className="max-w-2xl mx-auto">
            <PageTop 
                title="Kane Lariviere"
                desc="Work"
            />

            <div className="flex flex-col space-y-12 mt-8 text-sm">
                
                <WorkCard 
                    org="Rather Outdoors"
                    role="QA Analyst"
                    start="2025"
                    end="Present"
                    desc="Design and execute test plans, write and maintain automated and manual test cases, and work closely with development team to ensure software meets functional, performance, and usability standards."
                />

                <WorkCard
                    org="eraWorks Studio"
                    role="Software Engineer + Product"
                    start="2022"
                    end="2025"
                    desc="Worked with a range of small to medium businesses, agencies, start-ups, and individuals to build products, experiences, and improve technical direction."
                />

            </div>

            <Link href="https://github.com/knlrvr" target="_blank" className="flex items-center gap-1 text-sm text-neutral-500 group w-fit my-16">
                <span className="text-xs text-neutral-500 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:decoration-neutral-300 transition duration-100">View My GitHub</span>
            </Link>

        </div>
    )
}