import Link from "next/link"
import { LuArrowRight } from "react-icons/lu"
import type { PostMetadata } from "../utils/PostMetadata"

/** One post in a list. Shared by the home Writing section and /writing. */
export default function PostRow({
  post,
  first,
  last,
}: {
  post: PostMetadata
  first: boolean
  last: boolean
}) {
  return (
    <Link
      href={`/writing/${post.slug}`}
      className={`
        group flex flex-col gap-1.5
        ${first ? 'pb-7' : 'py-7'}
        ${last ? '' : 'border-b border-(--rule)'}
      `}
    >
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-medium tracking-tighter transition-colors duration-150 group-hover:text-neutral-400 dark:group-hover:text-neutral-500">
          {post.title}
        </span>
        <LuArrowRight className="shrink-0 -translate-x-1 text-neutral-400 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
      <p className="blog max-w-md text-[13px] text-neutral-600 dark:text-neutral-400">
        {post.description}
      </p>
      <p className="mt-1 font-mono text-[11px] tracking-tighter text-neutral-400 dark:text-neutral-600">
        {post.prevDate}&nbsp;&bull;&nbsp;{post.readTime}
      </p>
    </Link>
  )
}
