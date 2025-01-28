import Link from "next/link";
import ProjectCard from "./project-card";
import Section from "./section";
import { BsArrowRight } from "react-icons/bs";

export default function Projects() {
    return (
        <Section>
            <div className="py-4 flex flex-col space-y-8">
                <ProjectCard
                    title="Fenili Apparel"
                    date="2024 ~"
                    desc="An ecommerce storefront for the Fenili apparel & lifestyle brand."
                    url="/"
                />
                <ProjectCard
                    title="Studico"
                    date="2024 ~"
                    desc="A web-based music production assistance suite that empowers teams of all sizes to create, collaborate, and share their music."
                    url="/"
                />
            </div>
            <Link href="/work" className="flex items-center gap-1 text-sm text-neutral-500 group w-fit my-4">
                <span className="text-xs underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">All Works</span>
            </Link>
        </Section>
    )
}