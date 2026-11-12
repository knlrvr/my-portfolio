// lib/posts.ts
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { imageSize } from "image-size"
import { getReadTime } from "@/app/utils/read-time"

/**
 * Optional cover image, set in frontmatter as `cover: /blog-images/foo.png`
 * (a path under /public) with an optional `coverAlt`. Dimensions are read
 * from the file so the layout can reserve the right ratio.
 */
const getCover = (data: Record<string, unknown>) => {
  if (typeof data.cover !== "string" || !data.cover) return null

  const alt = typeof data.coverAlt === "string" ? data.coverAlt : ""
  try {
    const { width, height } = imageSize(fs.readFileSync(path.join(process.cwd(), "public", data.cover)))
    return { src: data.cover, alt, width, height }
  } catch {
    // Missing or unreadable file: fall back to 16:9 rather than failing the build.
    return { src: data.cover, alt, width: 16, height: 9 }
  }
}

export const getPostContent = (slug: string) => {
  // Absolute path against cwd — relative "posts/..." can resolve differently in prod.
  const file = path.join(process.cwd(), "posts", `${slug}.mdx`)
  if (!fs.existsSync(file)) return null

  const content = fs.readFileSync(file, "utf8")
  const matterResult = matter(content)
  const readTime = getReadTime(matterResult.content)

  return { ...matterResult, readTime, cover: getCover(matterResult.data) }
}

export type Post = NonNullable<ReturnType<typeof getPostContent>>