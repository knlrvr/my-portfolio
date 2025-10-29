import { PostMetadata } from '../utils/PostMetadata';

import Link from 'next/link'

const PostPreview = (props: PostMetadata) => {
    return (
      <Link key={props.slug} className="flex flex-col text-sm group"
        href={`/writing/${props.slug}`}>
        <p className="font-bold tracking-tight">{props.title}</p>
        <p className="text-neutral-600 dark:text-neutral-400 my-2">{props.description}</p>
        <p className="border-l-2 border-neutral-400 dark:border-neutral-600 text-neutral-500 pl-2 text-xs">{props.date}</p>

        <span className="text-neutral-500 text-xs underline underline-offset-2 decoration-neutral-300 group-hover:decoration-neutral-500 dark:decoration-neutral-500 dark:group-hover:decoration-neutral-300 transition-colors duration-150 mt-6">Read More</span>
      </Link>
    )
}

export default PostPreview