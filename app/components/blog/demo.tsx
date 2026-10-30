import fs from "fs"
import path from "path"
import DemoFrame from "./demo-frame"

interface DemoProps {
    src?: string
    html?: string
    css?: string
}

// Loads posts/demos/<src>.html + .css on the server so demos live in real files instead of MDX strings.
// Inline html/css still work for small demos.
export default function Demo({ src, html = "", css = "" }: DemoProps) {
    if (src) {
        const read = (ext: string) => {
            const file = path.join(process.cwd(), "posts", "demos", `${src}.${ext}`)
            return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : ""
        }
        html = read("html")
        css = read("css")
    }

    return <DemoFrame html={html} css={css} />
}
