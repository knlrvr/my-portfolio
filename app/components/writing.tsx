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
              flex flex-col py-8
              transition-colors duration-150
              group
              ${i < posts.length - 1 ? 'border-b border-neutral-200 dark:border-neutral-800' : ''}
            `}
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium tracking-tighter group-hover:text-neutral-400 dark:group-hover:text-neutral-500 transition-colors duration-150">
                  {post.title}
                </span>
                {post.description && (
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">{post.description}</p>
                )}
              </div>
              <span className="pt-1 shrink-0 ml-4 group-hover:translate-x-px group-hover:text-neutral-400 dark:group-hover:text-neutral-500 transition-all duration-200">
                <LuArrowRight />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}

      <div className="py-8">
        <Reveal delay={0.24}>
            <Link 
              href="/writing"
              className="group flex gap-2 items-center w-fit text-xs pl-4 pr-2 py-2 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full"    
            >
              <span className="font-medium tracking-tighter">All Posts</span>
              <div className="bg-neutral-800 dark:bg-neutral-200 text-neutral-100 dark:text-neutral-800 rounded-full p-2">
                <LuArrowRight className="group-hover:translate-x-px transition-transform duration-150"/>
              </div>
            </Link>
        </Reveal>
      </div>
    </section>
  )
}