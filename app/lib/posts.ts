// lib/posts.ts
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

export const getPostContent = (slug: string) => {
  // Absolute path against cwd — relative "posts/..." can resolve differently in prod.
  const file = path.join(process.cwd(), "posts", `${slug}.mdx`)
  if (!fs.existsSync(file)) return null

  const content = fs.readFileSync(file, "utf8")
  const matterResult = matter(content)
  const readTime = readingTime(matterResult.content).text

  return { ...matterResult, readTime }
}

export type Post = NonNullable<ReturnType<typeof getPostContent>>