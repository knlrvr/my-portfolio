import Link from 'next/link'
import type { Metadata } from 'next'
import { LuArrowUpRight } from 'react-icons/lu'
import getPostMetadata, { type PostMetadata } from '../utils/PostMetadata'
import { Reveal } from '../components/effects/reveal'
import PageTop from '../components/page-top'
import PostRow from '../components/post-row'
import Section from '../components/section'

export const metadata: Metadata = {
  title: 'knlrvr | Writing',
  description: 'Thoughts on tech, tooling, and building things that work.',
}

// Frontmatter dates look like "Friday, October 30 2026"; the year is the last token.
const yearOf = (post: PostMetadata) => post.date.match(/\d{4}\s*$/)?.[0].trim() ?? 'Undated'

export default function WritingPage() {
  const posts = getPostMetadata()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((p) => p.slug)

  // Posts are already newest-first, so insertion order keeps years descending.
  const years = new Map<string, PostMetadata[]>()
  for (const post of posts) {
    const year = yearOf(post)
    years.set(year, [...(years.get(year) ?? []), post])
  }

  return (
    <main>
      <PageTop
        title="Writing"
        description="Thoughts on tech, tooling, and building things that work."
        back={false}
        meta={[
          { label: 'Posts', value: posts.length },
          { label: 'Latest', value: posts[0]?.prevDate ?? '—' },
          {
            label: 'Feed',
            value: (
              <Link
                href="/rss"
                className="group inline-flex items-center gap-1 transition-colors duration-150 hover:text-neutral-400 dark:hover:text-neutral-500"
              >
                RSS
                <LuArrowUpRight className="transition-transform duration-150 group-hover:translate-x-px group-hover:-translate-y-px" />
              </Link>
            ),
          },
        ]}
      />

      {[...years].map(([year, yearPosts]) => (
        <Section
          key={year}
          index={year}
          label={`${yearPosts.length} post${yearPosts.length === 1 ? '' : 's'}.`}
        >
          {yearPosts.map((post, i) => (
            <Reveal key={post.slug} delay={0.08 * (i + 1)}>
              <PostRow post={post} first={i === 0} last={i === yearPosts.length - 1} />
            </Reveal>
          ))}
        </Section>
      ))}
    </main>
  )
}
