import { LuArrowRight } from 'react-icons/lu';
import { PostMetadata } from '../utils/PostMetadata';

import Link from 'next/link'

const PostPreview = (props: PostMetadata) => {
    return (
      <Link 
        key={props.slug} 
        href={`/writing/${props.slug}`}
        className="group text-sm flex flex-col space-y-1 border border-mist-200 dark:border-mist-800 rounded-md p-4 my-4 hover:bg-mist-500/5 dark:hover:bg-mist-500/5 hover:border-mist-500/5 dark:hover:border-mist-900/50 transition-colors duration-150">
          <div className="flex flex-col gap-1">
            <p className='text-[11px] text-mist-500'>{props.prevDate} &nbsp;&bull;&nbsp; {props.readTime}</p>
            <div className="flex justify-between items-center">
              <p className="font-medium tracking-tighter group-hover:text-mist-400 transition-colors duration-150">{props.title}</p>
              <LuArrowRight className='group-hover:text-mist-500 group-hover:translate-x-1 transition-all duration-150'/>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300">{props.description}</p>
          </div>
      </Link>
    )
}

export default PostPreview