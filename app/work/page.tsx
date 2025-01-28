import Link from "next/link";
import PageTop from "../components/page-top";
import ProjectCard from "../components/project-card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Kane Lariviere | Work',
    description: 'Kane Lariviere • Software Developer • Work',
}

export default function Work() {
    return (
        <div className="max-w-2xl mx-auto">
            <PageTop 
                title="Kane Lariviere"
                desc="Experience & Selected Works"
            />

            <div className="flex flex-col space-y-8 mt-8 text-sm pb-4">
                
                <div className="space-y-1">
                    <span className="font-medium tracking-tight">Fenili Apparel</span>
                    <div className="flex items-center justify-between">
                        <p className="font-light">Software Developer</p>
                        <p className="text-neutral-500 font-light">2024 &mdash; Present</p>
                    </div>
                    <p className="text-neutral-500">
                        Lead the design & development of e-commerce storefront & admin tools. Collaborating closely with CEO & Product Team to track objectives & ship frequently.                    
                    </p>
                </div>

                <div className="space-y-1">
                    <span className="font-medium tracking-tight">Freelance</span>
                    <div className="flex items-center justify-between">
                        <p className="font-light">Software Developer</p>
                        <p className="text-neutral-500 font-light">2022 &mdash; Present</p>
                    </div>                    
                    <p className="text-neutral-500">
                        Worked with a range of small to medium businesses, agencies, start-ups, and individuals to build products, experiences, and improve technical direction.
                    </p>
                </div>

                <hr className="border-neutral-400" />

                <ProjectCard
                    title="Fenili Apparel"
                    desc="An ecommerce storefront for the Fenili apparel & lifestyle brand."
                    date="2024 ~"
                    url="/fenili"
                />
                <ProjectCard
                    title="Studico"
                    desc="A web-based music production assistance suite that empowers teams of all sizes to create, collaborate, and share their music."
                    date="2024 ~"
                    url="/studico"
                />
                <ProjectCard
                    title="The Sky Is Fake"
                    desc="An image sharing platform dedicated to pictures of the sky that just don't seem real."
                    date="2024"
                    url="/theskyisfake"
                />
            </div>
            <Link href="https://github.com/knlrvr" target="_blank" className="flex items-center gap-1 text-sm text-neutral-500 group w-fit mt-4 mb-8">
                <span className="text-xs underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">View More on GitHub</span>
            </Link>
        </div>
    )
}