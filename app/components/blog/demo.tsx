"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface DemoProps {
    html?: string
    css?: string
}

// Renders html + css inside a shadow root so demo styles and site styles can't leak into each other.
// Inherited properties (font, color) still flow in. Target dark mode with `:host(.dark) .selector`.
export default function Demo({ html = "", css = "" }: DemoProps) {
    const hostRef = useRef<HTMLDivElement>(null)
    const { resolvedTheme } = useTheme()

    useEffect(() => {
        const host = hostRef.current
        if (!host) return
        const root = host.shadowRoot ?? host.attachShadow({ mode: "open" })
        root.innerHTML = `<style>:host { display: block; }\n${css}</style>${html}`
        // Set after mount — resolvedTheme is unknown on the server, so a className would mismatch on hydration
        host.classList.toggle("dark", resolvedTheme === "dark")
    }, [html, css, resolvedTheme])

    return (
        // Matches the prose-img sizing in post-content.tsx — wider than the column at md+, flush below
        <div className="relative my-6 md:-mx-6 md:w-[calc(100%+3.25rem)] bg-neutral-200/30 dark:bg-neutral-900/50 overflow-hidden">
            <div ref={hostRef} />
        </div>
    )
}
