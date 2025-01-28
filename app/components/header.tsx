"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

const items = [
    {label: 'work', href: '/work'},
    {label: 'writing', href: '/writing'},
    {label: 'uses', href: '/uses'},
]

export default function PathHeader() {
    const pathname = usePathname()
    const pathSegments = pathname.split("/").filter((segment) => segment !== "")

    return (
        <header className="text-xs max-w-2xl mx-auto">
        <nav className="flex justify-between items-center">
            <ol className="flex flex-wrap items-center" aria-label="Breadcrumb">
            <li className="flex items-center">
                <Link href="/" className="text-neutral-500">
                knlrvr.dev
                </Link>
                <span className="mx-1">/</span>
            </li>
            {pathSegments.map((segment, index) => (
                <li key={index} className="flex items-center">
                <Link
                    href={`/${pathSegments.slice(0, index + 1).join("/")}`}
                    className=""
                >
                    {segment}
                </Link>
                {index < pathSegments.length - 1 && <span className="mx-1">/</span>}
                </li>
            ))}
            {pathSegments.length === 0 && (
                <li>
                <span className="">home</span>
                </li>
            )}
            </ol>

            <ol className="flex items-center gap-4">
                {items.map((item) => (
                    <li key={item.href} className="">
                        <Link href={item.href} className="hover:underline underline-offset-2">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
        </header>
    )
}

