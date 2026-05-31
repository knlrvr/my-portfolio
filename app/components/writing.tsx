import Link from 'next/link'
import SectionStrip from './section-strip'
import { LuArrowRight, LuArrowUpRight } from 'react-icons/lu'
import getPostMetadata from '../utils/PostMetadata'
import { Reveal } from './effects/reveal'

export default function Writing() {
  const posts = getPostMetadata()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((p) => p.slug)
    .slice(0, 3)

  return (
    <section id="writing">
      <SectionStrip label="writing" number="03" />

      {posts.map((post, i) => (
        <Reveal key={post.slug} delay={0.16 * (i + 1)}>
          <Link
            href={`/writing/${post.slug}`}
            className={`
              flex flex-col py-8 px-2
              hover:bg-[#F2F0E9] dark:hover:bg-[#F2F0E9]/5 transition-colors duration-150
              group
              ${i < posts.length - 1 ? 'border-b border-[#F2F0E9] dark:border-[#F2F0E9]/5' : ''}
            `}
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-[11px] text-neutral-400 dark:text-neutral-600">
                  {post.prevDate}&nbsp;&bull;&nbsp;{post.readTime}
                </p>
                <span className="text-sm font-medium tracking-tighter group-hover:text-orange transition-colors duration-150">
                  {post.title}
                </span>
                {post.description && (
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs">{post.description}</p>
                )}
              </div>
              <span className="pt-1 shrink-0 ml-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange transition-all duration-200">
                <LuArrowUpRight />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}

      <div className="py-8 px-2">
        <Reveal delay={0.24}>
          <Link
            href="/writing"
            className="group flex items-center w-fit text-xs"
          >
            <span className="px-4 py-2 rounded-full border border-orange group-hover:bg-orange transition-colors duration-150">
              All Posts
            </span>
            <div className="bg-orange p-2.5 rounded-full">
              <LuArrowRight className="group-hover:translate-x-px transition-transform duration-150" />
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}