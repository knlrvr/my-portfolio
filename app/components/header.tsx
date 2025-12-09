"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Toggle } from "./theme/toggle"

import { 
    BiBookAlt, 
    BiBriefcase, 
    BiChevronRight, 
    BiCoffeeTogo, 
    BiEnvelope, 
    BiFile, 
    BiHome, 
    BiImage, 
    BiMessage, 
    BiPen, 
} from "react-icons/bi"

const items = [
    {label: 'work', href: '/work'},
    {label: 'writing', href: '/writing'},
    {label: 'visitors', href: '/visitors'}
]

const navItems = [
    { icon: <BiHome />, href: "/" },
    { icon: <BiBriefcase />, href: "/work" },
    { icon: <BiBookAlt />, href: "/writing" },
    { icon: <BiImage />, href: "/photos" },
    { icon: <BiCoffeeTogo />, href: "/uses" },
    { icon: <BiEnvelope />, href: "/contact" },
    { icon: <BiPen />, href: "/colophon" },
    { icon: <BiMessage />, href: "/visitors"}
]

export default function PathHeader() {
    const pathname = usePathname()
    const pathSegments = pathname.split("/").filter((segment) => segment !== "")

    const getIconForPath = (href: string) => {
        const item = navItems.find(nav => nav.href === href)
        return item?.icon
    }

    // On home page, just show "knlrvr.dev"
    if (pathSegments.length === 0) {
        return (
            <header className="text-xs max-w-2xl mx-auto">
                <nav className="flex justify-between items-center">
                    <ol className="flex flex-wrap items-center" aria-label="Breadcrumb">
                        <li className="flex items-center">
                            <Link href="/" className="text-neutral-500">
                                knlrvr.dev
                            </Link>
                        </li>
                    </ol>

                    <ol className="flex items-center gap-4">
                        {items.map((item) => (
                            <li key={item.href} className="">
                                <Link href={item.href} className="hover:underline underline-offset-2">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Toggle />
                        </li>
                    </ol>
                </nav>
            </header>
        )
    }

    // For non-home pages, show breadcrumb with icons
    return (
        <header className="text-xs max-w-2xl mx-auto">
            <nav className="flex justify-between items-center">
                <ol className="flex flex-wrap items-center" aria-label="Breadcrumb">
                    {/* Home icon */}
                    <li className="flex items-center">
                        <Link href="/" className="text-neutral-500">
                            <BiHome />
                        </Link>
                        <span className="mx-1"><BiChevronRight className="text-neutral-500"/></span>
                    </li>
                    
                    {pathSegments.map((segment, index) => {
                        const href = `/${pathSegments.slice(0, index + 1).join("/")}`
                        const icon = getIconForPath(href)
                        const isLastSegment = index === pathSegments.length - 1
                        
                        // For dynamic pages (pages deeper than main sections), show file icon
                        const isDynamicPage = !icon && isLastSegment
                        const displayIcon = isDynamicPage ? <BiFile /> : icon
                        
                        return (
                            <li key={index} className="flex items-center">
                                <Link
                                    href={href}
                                    className={`flex items-center gap-1 ${!isLastSegment ? 'text-neutral-500' : ''}`}
                                >
                                    {displayIcon}
                                    {isLastSegment && segment}
                                </Link>
                                {!isLastSegment && <span className={`mx-1 ${index < pathSegments.length - 2 ? 'text-neutral-500' : ''}`}><BiChevronRight className="text-neutral-500"/></span>}
                            </li>
                        )
                    })}
                </ol>

                <ol className="flex items-center gap-4">
                    {items.map((item) => (
                        <li key={item.href} className="">
                            <Link href={item.href} className="hover:underline underline-offset-2">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Toggle />
                    </li>
                </ol>
            </nav>
        </header>
    )
}