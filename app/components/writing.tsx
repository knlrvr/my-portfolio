import Link from 'next/link'
import Section from './section'
import { LuArrowRight } from 'react-icons/lu'
import getPostMetadata from '../utils/PostMetadata'
import { Reveal } from './effects/reveal'
import PostRow from './post-row'

export default function Writing() {
  const posts = getPostMetadata()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((p) => p.slug)
    .slice(0, 3)

  return (
    <Section id="writing" index="002" label="writing.">
      <div className="flex flex-col">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={0.16 * (i + 1)}>
            <PostRow post={post} first={i === 0} last={i === posts.length - 1} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.24}>
        <Link
          href="/writing"
          className="group mt-8 flex w-fit items-center gap-1.5 text-xs font-medium tracking-tighter transition-colors duration-150 hover:text-neutral-400 dark:hover:text-neutral-500"
        >
          All posts
          <LuArrowRight className="transition-transform duration-150 group-hover:translate-x-0.5" />
        </Link>
      </Reveal>
    </Section>
  )
}
