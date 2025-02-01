import Link from "next/link";
import PageTop from "../components/page-top";
import ProjectCard from "../components/project-card";
import { Metadata } from "next";
import WorkCard from "../components/work-card";

export const metadata: Metadata = {
    title: 'Kane Lariviere | Work',
    description: 'Kane Lariviere • Software Developer • Work',
}

export default function Work() {
    return (
        <div className="max-w-2xl mx-auto">
            <PageTop 
                title="Kane Lariviere"
                desc="Experience & Selected Work"
            />

            <div className="flex flex-col space-y-12 mt-8 text-sm">
                
                <WorkCard 
                    org="Fenili Apparel"
                    role="Software Developer"
                    start="2024"
                    end="Present"
                    desc="Lead the design & development of e-commerce storefront & admin tools. Collaborating closely with CEO & Product Team to track objectives & ship frequently."
                />

                <WorkCard
                    org="Freelance"
                    role="Software Developer"
                    start="2022"
                    end="2024"
                    desc="Worked with a range of small to medium businesses, agencies, start-ups, and individuals to build products, experiences, and improve technical direction."
                />

                <hr className="border-neutral-400" />

                <div className="space-y-16">
                    <ProjectCard
                        img="/fenili-brand.png"
                        title="Fenili Apparel"
                        desc="An ecommerce storefront for the Fenili apparel & lifestyle brand."
                        date="2024 ~"
                        url="/fenili"
                    />
                    <ProjectCard
                        img="/studico-brand.png"
                        title="Studico"
                        desc="A web-based music production assistance suite that empowers teams of all sizes to create, collaborate, and share their music."
                        date="2024 ~"
                        url="/studico"
                    />
                    <ProjectCard
                        img="/tsif-brand.png"
                        title="The Sky Is Fake"
                        desc="An image sharing platform dedicated to pictures of the sky that just don't seem real."
                        date="2024"
                        url="/theskyisfake"
                    />
                </div>
            </div>
            <Link href="https://github.com/knlrvr" target="_blank" className="flex items-center gap-1 text-sm text-neutral-500 group w-fit mt-16 mb-8">
                <span className="text-xs underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">View More on GitHub</span>
            </Link>
        </div>
    )
}