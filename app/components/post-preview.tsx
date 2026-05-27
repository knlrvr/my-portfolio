import { LuArrowRight } from 'react-icons/lu';
import { PostMetadata } from '../utils/PostMetadata';

import Link from 'next/link'

const PostPreview = (props: PostMetadata) => {
    return (
      <Link 
        key={props.slug} 
        href={`/writing/${props.slug}`}
        className="group text-sm flex flex-col border border-neutral-200/80 dark:border-neutral-800/50 rounded-md p-4 mb-4 hover:bg-emerald-400/5 hover:border-emerald-400/2 transition-colors duration-150">
          
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="font-medium tracking-tighter group-hover:text-neutral-400 transition-colors duration-150">{props.title}</p>
              <div className="border border-neutral-200/80 dark:border-neutral-800/80 rounded-full p-1 ">
                <LuArrowRight className="group-hover:-rotate-45 group-hover:text-emerald-400 transition-all duration-150"/>
              </div>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 my-2">{props.description}</p>
            <p className='text-[11px] text-neutral-500'>{props.prevDate} &nbsp;&bull;&nbsp; {props.readTime}</p>
          </div>
      </Link>
    )
}

export default PostPreview