import Link from 'next/link'
import SectionStrip from './section-strip'
import { LuArrowUpRight } from 'react-icons/lu'
import getPostMetadata from '../utils/PostMetadata'

export default function Writing() {
  const posts = getPostMetadata()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((p) => p.slug)
    .slice(0, 4)

  return (
    <section id="writing">
      <SectionStrip label="Writing" number="003" />

      {posts.map((post, i) => (
        <Link
          key={post.slug}
          href={`/writing/${post.slug}`}
          className={`
            flex flex-col py-8 px-2
            hover:bg-[#F2F0E9] dark:hover:bg-[#F2F0E9]/10 transition-colors duration-150
            group
            ${i < posts.length - 1 ? 'border-b border-neutral-200 dark:border-neutral-800' : ''}
          `}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-[11px] text-neutral-400 dark:text-neutral-600">
                {post.prevDate}&nbsp;&bull;&nbsp;{post.readTime}
              </p>
              <span className="text-sm font-medium tracking-tighter">
                {post.title}
              </span>
              {post.description && (
                <p className="text-neutral-600 dark:text-neutral-400 text-xs">{post.description}</p>
              )}
            </div>
            <span className="pt-1 shrink-0 ml-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-orange)] transition-all duration-200">
              <LuArrowUpRight />
            </span>
          </div>
        </Link>
      ))}

      <div className="pt-8 px-2">
        <Link
          href="/writing"
          className="group flex items-center w-fit text-xs"
        >
          <span className="px-4 py-2 rounded-full border border-orange group-hover:bg-orange transition-colors duration-150">
            All Posts
          </span>
          <div className="bg-orange p-2.5 rounded-full">
            <LuArrowUpRight className="group-hover:-translate-y-px group-hover:translate-x-px transition-transform duration-150" />
          </div>
        </Link>
      </div>
    </section>
  )
}