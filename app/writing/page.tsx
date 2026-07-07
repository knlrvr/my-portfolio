import Link from 'next/link'
import { LuArrowRight, LuArrowUpRight } from 'react-icons/lu'
import getPostMetadata from '../utils/PostMetadata'
import type { Metadata } from 'next'
import { Reveal } from '../components/effects/reveal'
import PageTop from '../components/page-top'

export const metadata: Metadata = {
  title: 'knlrvr | Writing',
  description: 'Thoughts on tech, tooling, and building things that work.',
}

export default function WritingPage() {
  const posts = getPostMetadata()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((p) => p.slug)

  return (
    <div className="max-w-md mx-auto">

      <PageTop
        title="Writing"
        description="Thoughts on tech, tooling, and building things that work."
        back={false}
      />

      <main>
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={0.16 * (i + 1)}>
            <Link
              href={`/writing/${post.slug}`}
              className={`
                flex flex-col py-8
                transition-colors duration-150
                group
                ${i < posts.length - 1 ? 'border-b border-neutral-200 dark:border-neutral-800' : ''}
              `}
            >
              <div className="">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium tracking-tighter group-hover:text-neutral-400 dark:group-hover:text-neutral-500 transition-colors duration-150">
                      {post.title}
                    </span>
                    <span className="pt-1 shrink-0 ml-4 group-hover:translate-x-px group-hover:text-neutral-400 dark:group-hover:text-neutral-500 transition-all duration-200">
                      <LuArrowRight />
                    </span>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm blog">{post.description}</p>
                  <p className="text-[11px] font-mono text-neutral-500">
                    {post.prevDate}&nbsp;&bull;&nbsp;{post.readTime}
                  </p>
                  {post.tags.map((tag, index) => (
                    <p 
                      key={index}
                      className='font-mono text-[10px] uppercase text-neutral-400 dark:text-neutral-600 mt-0.5'
                    >
                      &#47;&#47; {tag}
                    </p>
                  ))}
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </main>
    </div>
  )
}