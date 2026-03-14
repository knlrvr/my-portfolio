import { LuArrowRight } from 'react-icons/lu';
import { PostMetadata } from '../utils/PostMetadata';

import Link from 'next/link'

const PostPreview = (props: PostMetadata) => {
    return (
      <Link 
        key={props.slug} 
        href={`/writing/${props.slug}`}
        className="group text-sm flex flex-col space-y-1 py-4">
          <div className="flex items-center justify-between">
            <p className="font-medium tracking-tighter group-hover:text-mist-400 transition-colors duration-150">{props.title}</p>
            <LuArrowRight className='group-hover:text-mist-500 group-hover:translate-x-1 transition-all duration-150'/>
          </div>
          <div className="flex items-center justify-between text-sm gap-4">
            <p className="text-neutral-700 dark:text-neutral-300">{props.description}</p>
            <p className="text-mist-500 font-mono text-[11px] text-right mt-0.5">{props.prevDate}</p>
          </div>
          <p className="text-mist-400 dark:text-mist-600 text-[11px] font-mono">{props.readTime}</p>
      </Link>
    )
}

export default PostPreview