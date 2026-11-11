import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { Reveal } from "./components/effects/reveal";
import PageTop from "./components/page-top";
import Section from "./components/section";

const destinations = [
    { label: "home", href: "/" },
    { label: "writing", href: "/writing" },
    { label: "photos", href: "/photos" },
]

export default function NotFound() {
    return (
        <main>
            <PageTop
                title="Not Found."
                description="Oh no! It looks like this page doesn't exist! You can check the URL and try again, or head somewhere below."
                back={true}
                backHref="/"
            />

            <Section index="404" label="try instead." dense>
                <Reveal delay={0.16}>
                    <ul>
                        {destinations.map((d, i) => (
                            <li key={d.href}>
                                <Link
                                    href={d.href}
                                    className={`group flex items-center justify-between text-[13px] transition-colors duration-150 hover:text-neutral-400 dark:hover:text-neutral-500
                                        ${i === 0 ? "pb-2.5" : "py-2.5"}
                                        ${i < destinations.length - 1 ? "border-b border-(--rule)" : ""}`}
                                >
                                    {d.label}
                                    <LuArrowRight className="-translate-x-1 text-neutral-400 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </Section>
        </main>
    )
}
