import Link from 'next/link'
import { LuArrowUpRight } from 'react-icons/lu'
import getPostMetadata from '../utils/PostMetadata'
import { GridLayout, GridRow, GridSpacer } from './gridlayout'

export default function Writing() {
  const posts = getPostMetadata()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((p) => p.slug)
    .slice(0, 3)

  return (
    <section id="writing">

      <GridLayout>

        <GridSpacer height="h-24" />

        <GridRow className="relative">
          <p className="text-[11px] text-neutral-500 mx-2">
            writing.
          </p>
        </GridRow>

        {posts.map((post, i) => (
            <GridRow
                key={i}
                className=''
            >
                <Link
                    href={`/writing/${post.slug}`}
                    className={`
                    flex flex-col py-8
                    hover:bg-[#F2F0E9] dark:hover:bg-[#F2F0E9]/5 transition-colors duration-150
                    group
                    ${i < posts.length - 1 ? 'border-b border-[#F2F0E9] dark:border-[#F2F0E9]/5' : ''}
                    `}
                >
                    <div className="flex items-center justify-between mx-2">
                        <div className="flex flex-col gap-1">
                            <p className="text-[11px] text-neutral-400 dark:text-neutral-600">
                            {post.prevDate}&nbsp;&bull;&nbsp;{post.readTime}
                            </p>
                            <span className="text-sm font-medium tracking-tighter group-hover:text-neutral-500 transition-colors duration-150">
                            {post.title}
                            </span>
                            {post.description && (
                            <p className="text-neutral-600 dark:text-neutral-400 text-xs">{post.description}</p>
                            )}
                        </div>
                        <span className="pt-1 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-500 transition-all duration-200">
                            <LuArrowUpRight />
                        </span>
                    </div>
                </Link>
            </GridRow>
        ))}

        <GridRow className="py-4">
            <Link 
                href="/writing"
                className="group flex items-center w-fit text-xs mx-2"    
            >
                <span className="px-4 py-2 rounded-full border border-[#F2F0E9] dark:border-[#F2F0E9]/5 text-neutral-700 dark:text-neutral-300 group-hover:bg-[#F2F0E9] dark:group-hover:bg-[#F2F0E9]/5 group-hover:border-[#F2F0E9] dark:group-hover:border-[#F2F0E9]/0 transition-colors duration-150">
                    All Posts
                </span>
                <div className="bg-[#F2F0E9] dark:bg-[#F2F0E9]/5 text-neutral-700 dark:text-neutral-300 p-2.5 rounded-full">
                    <LuArrowUpRight className="group-hover:-translate-y-px group-hover:translate-x-px transition-transform duration-150"/>
                </div>
            </Link>
        </GridRow>
      </GridLayout>
    </section>
  )
}