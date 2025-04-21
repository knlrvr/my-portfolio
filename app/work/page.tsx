import Link from "next/link";
import PageTop from "../components/page-top";
import ProjectCard from "../components/project-card";
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
                    org="eraWorks"
                    role="Founder + Software Engineer"
                    start="2025"
                    end="Present"
                    desc="Leading the design & development of web projects &mdash; helping businesses express themselves online."
                />

                <WorkCard
                    org="Freelance"
                    role="Software Engineer"
                    start="2022"
                    end="Present"
                    desc="Worked with a range of small to medium businesses, agencies, start-ups, and individuals to build products, experiences, and improve technical direction."
                />

            </div>

            <Link href="https://github.com/knlrvr" target="_blank" className="flex items-center gap-1 text-sm text-neutral-500 group w-fit my-16">
                <span className="text-xs text-neutral-500 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:decoration-neutral-300 transition duration-100">View My GitHub</span>
            </Link>

        </div>
    )
}