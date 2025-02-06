import { PostMetadata } from '../utils/PostMetadata';

import Link from 'next/link'

const PostPreview = (props: PostMetadata) => {
    return (
      <Link key={props.slug} className="flex flex-col text-sm group"
        href={`/writing/${props.slug}`}>
        <p className="border-l-2 border-neutral-500 font-light text-neutral-500 pl-2 text-xs my-1">{props.date}</p>
        <p className="font-medium tracking-tight">{props.title}</p>
        <p className="text-neutral-600">{props.description}</p>
        
        <span className="text-neutral-500 text-xs underline underline-offset-2 decoration-neutral-300 group-hover:decoration-neutral-500 transition-colors duration-150 mt-4">Read More</span>
      </Link>
    )
}

export default PostPreview