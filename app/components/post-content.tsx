// components/post-content.tsx
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { RxArrowTopRight } from "react-icons/rx"
import { LuArrowLeft } from "react-icons/lu"

import { Code } from "@/app/components/blog/code"
import { BlogLink } from "./blog/blog-link"
import { InlineCode } from "./blog/inline-code"
import Callout from "@/app/components/blog/callout"
import Edit from "@/app/components/blog/edit"
import PageTop from "@/app/components/page-top"
import Sticker from "@/app/components/blog/sticker"
import { Reveal } from "@/app/components/effects/reveal"
import type { Post } from "../lib/posts"


const components = { code: Code, Callout, Edit, BlogLink, InlineCode }

const proseClassName = `mt-10 dark:text-neutral-100
  blog prose prose-headings:text-neutral-800 dark:prose-headings:text-neutral-200
  prose-strong:text-[#111] dark:prose-strong:text-neutral-200 max-w-full
  prose-sm prose-code:text-xs prose-pre:text-neutral-700 prose-pre:bg-neutral-100 dark:prose-pre:bg-[#151515] dark:prose-pre:text-neutral-300 prose-pre:mb-1
  prose-h6:text-xs prose-h6:text-neutral-400 dark:prose-h6:text-neutral-600 prose-p:font-normal
  prose-h4:text-lg prose-h4:tracking-wide prose-h4:font-normal
  prose-h3:text-xl prose-h3:font-medium prose-h3:tracking-normal
  prose-h2:font-medium prose-h2:tracking-tighter prose-h2:text-2xl
  prose-hr:border-neutral-200 dark:prose-hr:border-neutral-800 dark:prose-a:text-neutral-300
  prose-sup md:prose-img:max-w-none prose-img:-mb-1 prose-img:md:-mx-6 prose-img:md:w-[calc(100%+3.25rem)] prose-img:transition-all
  prose-li:marker:text-neutral-300 dark:prose-li:marker:text-neutral-600
  prose-ul:list-image-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%20-5%2024%2024%22%20fill=%22none%22%20stroke=%22%237b8d92%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%3Cpath%20d=%22M20%206%209%2017l-5-5%22/%3E%3C/svg%3E')]
  dark:prose-ul:list-image-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%20-5%2024%2024%22%20fill=%22none%22%20stroke=%22%237b8d92%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%3Cpath%20d=%22M20%206%209%2017l-5-5%22/%3E%3C/svg%3E')]`

interface PostContentProps {
  post: Post
  variant?: "modal" | "full"
}

export function PostContent({ post, variant = "full" }: PostContentProps) {
  const isFull = variant === "full"

  const body = (
    <Reveal delay={0.24}>
      <article className={proseClassName}>
        <MDXRemote source={post.content} components={{ ...components }} />
      </article>
    </Reveal>
  )

  if (!isFull) {
    return (
      <>
        <div className="relative">
        <PageTop
          title={`${post.data.title}`}
          desc={`${post.data.description}`}
          date={`${post.data.date} • ${post.readTime}`}
        />
        <Sticker src={post.data.sticker} />
        </div>
        {body}
      </>
    )
  }

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
      <div className="relative">
        <div className="relative">
          <PageTop
            title={`${post.data.title}`}
            desc={`${post.data.description}`}
            date={`${post.data.date} • ${post.readTime}`}
          />
          <Sticker src={`${post.data.sticker}`} />
          <Link href="/writing" className="group absolute top-16 flex items-center gap-2">
            <LuArrowLeft
              size={11}
              className="group-hover:text-mist-500 group-hover:-translate-x-0.5 transition-all duration-150"
            />
            <p className="text-xs text-mist-600 dark:text-mist-400">All Posts</p>
          </Link>
        </div>
        {body}
      </div>
    </>
  )
}