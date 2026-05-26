import { LuArrowRight } from 'react-icons/lu';
import { PostMetadata } from '../utils/PostMetadata';

import Link from 'next/link'

const PostPreview = (props: PostMetadata) => {
    return (
      <Link 
        key={props.slug} 
        href={`/writing/${props.slug}`}
        className="group text-sm flex flex-col space-y-1 border border-neutral-200/80 dark:border-neutral-800/50 rounded-md p-4 my-2 hover:bg-neutral-500/5 dark:hover:bg-neutral-900/20 hover:border-neutral-500/5 dark:hover:border-neutral-900/20 transition-colors duration-150">
          <div className="flex flex-col gap-1">
            <p className='text-[11px] text-neutral-500'>{props.prevDate} &nbsp;&bull;&nbsp; {props.readTime}</p>
            <div className="flex justify-between items-center">
              <p className="font-medium tracking-tighter group-hover:text-neutral-400 transition-colors duration-150">{props.title}</p>
              <LuArrowRight className='group-hover:text-neutral-500 group-hover:translate-x-1 transition-all duration-150'/>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300">{props.description}</p>
          </div>
      </Link>
    )
}

export default PostPreview