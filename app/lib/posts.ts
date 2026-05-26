import fs from "fs"
import matter from "gray-matter"
import readingTime from "reading-time"

export const getPostContent = (slug: string) => {
  const file = `posts/${slug}.mdx`
  if (!fs.existsSync(file)) return null

  const content = fs.readFileSync(file, "utf8")
  const matterResult = matter(content)
  const readTime = readingTime(matterResult.content).text

  return { ...matterResult, readTime }
}

export type Post = NonNullable<ReturnType<typeof getPostContent>>