import { MDXRemote } from "next-mdx-remote/rsc"

import { Code } from "@/app/components/blog/code"
import { BlogLink } from "./blog/blog-link"
import { InlineCode } from "./blog/inline-code"
import { SecondaryText } from "./blog/secondary"
import Callout from "@/app/components/blog/callout"
import Edit from "@/app/components/blog/edit"
import Sticker from "@/app/components/blog/sticker"
import Demo from "@/app/components/blog/demo"
import { Reveal } from "@/app/components/effects/reveal"
import type { Post } from "../lib/posts"
import PageTop, { MetaItem } from "./page-top"
import FrameImage from "./frame-image"


const components = { code: Code, Callout, Demo, Edit, BlogLink, InlineCode, SecondaryText }

const proseClassName = `
  text-neutral-800 dark:text-neutral-200
  blog prose prose-headings:text-neutral-800 dark:prose-headings:text-neutral-200
  prose-strong:text-[#111] dark:prose-strong:text-neutral-200 max-w-full
  prose-sm prose-code:text-xs prose-pre:text-neutral-700 prose-pre:bg-neutral-100 dark:prose-pre:bg-[#151515] dark:prose-pre:text-neutral-300 prose-pre:mb-1
  prose-h6:text-xs prose-h6:text-neutral-400 dark:prose-h6:text-neutral-600 prose-p:font-normal
  prose-h4:text-lg prose-h4:tracking-wide prose-h4:font-normal
  prose-h3:text-xl prose-h3:font-medium prose-h3:tracking-normal
  prose-h2:font-medium prose-h2:tracking-tighter prose-h2:text-2xl
  prose-hr:border-(--rule) dark:prose-a:text-neutral-300
  prose-sup prose-img:-mb-1 prose-img:w-full
  prose-li:marker:text-olive dark:prose-li:marker:text-orange
  prose-ul:list-image-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%20-5%2024%2024%22%20fill=%22none%22%20stroke=%22%23E8521A%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%3Cpath%20d=%22M20%206%209%2017l-5-5%22/%3E%3C/svg%3E')]
  dark:prose-ul:list-image-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%20-5%2024%2024%22%20fill=%22none%22%20stroke=%22%23E8521A%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%3Cpath%20d=%22M20%206%209%2017l-5-5%22/%3E%3C/svg%3E')]
`

interface PostContentProps {
  post: Post
}

export function PostContent({ post }: PostContentProps) {
  const tags: string[] = post.data.tags ?? []

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.data.title,
            description: post.data.description,
            author: { "@type": "Person", name: "Kane Lariviere" },
          }),
        }}
      />

      <PageTop
        title={post.data.title}
        description={post.data.description}
        back={true}
        backHref="/writing"
      >
        {post.data.sticker && <Sticker src={`${post.data.sticker}`} />}
      </PageTop>

      {post.cover && (
        <Reveal delay={0.24}>
          <FrameImage image={post.cover} priority />
        </Reveal>
      )}

      <div className="-mx-6 border-t border-(--rule)">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-10 px-6 py-12 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-0 sm:px-10 sm:py-16">
          <Reveal delay={0.16} className="sm:sticky sm:top-10 sm:self-start">
            <dl className="flex flex-wrap gap-x-10 gap-y-5 sm:flex-col">
              <MetaItem label="Published" value={post.data.prevDate ?? post.data.date} />
              <MetaItem label="Read time" value={post.readTime} />
              {tags.length > 0 && <MetaItem label="Filed under" value={tags.join(", ")} />}
            </dl>
          </Reveal>

          <Reveal delay={0.24}>
            <article className={proseClassName}>
              <MDXRemote source={post.content} components={{ ...components }} options={{ blockJS: false }} />
            </article>
          </Reveal>
        </div>
      </div>
    </>
  )
}
