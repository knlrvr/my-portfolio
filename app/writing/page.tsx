import Link from 'next/link'
import { LuArrowUpRight } from 'react-icons/lu'
import getPostMetadata from '../utils/PostMetadata'
import type { Metadata } from 'next'
import { Reveal } from '../components/effects/reveal'

export const metadata: Metadata = {
  title: 'knlrvr | Writing',
  description: 'Thoughts on tech, tooling, and building things that work.',
}

export default function WritingPage() {
  const posts = getPostMetadata()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((p) => p.slug)

  return (
    <div className="max-w-sm mx-auto">
      <section id="hero" className="pt-32">
        <div className="flex flex-col gap-10">
          <Reveal delay={0.08}>
            <h1 className="text-[clamp(52px,8vw,80px)] font-light leading-[0.98] tracking-[-0.03em]">
              <span className="bg-orange text-white not-italic px-2 ml-1">
                Writing.
              </span>
            </h1>
          </Reveal>

          <div className="pb-1.5">
            <Reveal delay={0.16}>
              <p className="text-[14px] leading-[1.75] text-neutral-600 dark:text-neutral-400 mb-8">
                Thoughts on tech, tooling, and building things that work.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <main>
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={0.16 * (i + 1)}>
            <Link
              href={`/writing/${post.slug}`}
              className={`
                flex flex-col py-8 px-2
                hover:bg-[#F2F0E9] dark:hover:bg-[#F2F0E9]/5 transition-colors duration-150
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
          </Reveal>
        ))}
      </main>
    </div>
  )
}