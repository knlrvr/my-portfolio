import Link from "next/link";
import Section from "./section";

export default function PageList() {
    return (
        <Section>
            <div className="text-sm my-8 grid grid-cols-1 sm:grid-cols-2">
                <ul className="space-y-1">
                    <li><Link href="/work"
                        className="text-neutral-600 dark:text-neutral-300 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:decoration-neutral-300 transition-colors duration-150 mt-4"
                    >
                        work
                    </Link></li>
                    <li><Link href="/writing"
                        className="text-neutral-600 dark:text-neutral-300 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:decoration-neutral-300 transition-colors duration-150 mt-4"
                    >
                        writing
                    </Link></li>
                    <li><Link href="/visitors"
                        className="text-neutral-600 dark:text-neutral-300 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:decoration-neutral-300 transition-colors duration-150 mt-4"
                    >
                        visitors
                    </Link></li>
                    <li><Link href="/uses"
                        className="text-neutral-600 dark:text-neutral-300 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:decoration-neutral-300 transition-colors duration-150 mt-4"
                    >
                        uses
                    </Link></li>
                </ul>
                <ul className="pt-1 sm:pt-0 space-y-1">
                    <li><Link href="/photos"
                        className="text-neutral-600 dark:text-neutral-300 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:decoration-neutral-300 transition-colors duration-150 mt-4"
                    >
                        photos
                    </Link></li>
                    <li><Link href="/contact"
                        className="text-neutral-600 dark:text-neutral-300 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:decoration-neutral-300 transition-colors duration-150 mt-4"
                    >
                        contact
                    </Link></li>
                    <li><Link href="/colophon"
                        className="text-neutral-600 dark:text-neutral-300 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:decoration-neutral-300 transition-colors duration-150 mt-4"
                    >
                        colophon
                    </Link></li>
                </ul>
            </div>
        </Section>
    )
}