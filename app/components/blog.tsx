import Link from "next/link";
import getPostMetadata from "../utils/PostMetadata";
import PostPreview from "./post-preview";
import { LuArrowUpRight } from "react-icons/lu";
import { Reveal } from "./effects/reveal";

function AllPostsButton() {
    return (
        <Reveal delay={0.24}>
            <Link 
                href="/writing"
                className="group flex items-center w-fit mt-8 text-xs"    
            >
                <span className="px-4 py-2 rounded-full border border-mist-200 dark:border-mist-800 text-mist-700 dark:text-mist-300 group-hover:bg-mist-300 dark:group-hover:bg-mist-700 group-hover:border-mist-200/20 dark:group-hover:border-mist-700/20 transition-colors duration-150">
                    All Posts
                </span>
                <div className="bg-mist-300 dark:bg-mist-700 text-mist-700 dark:text-mist-300 p-2.5 rounded-full">
                    <LuArrowUpRight className="group-hover:-translate-y-px group-hover:translate-x-px transition-transform duration-150"/>
                </div>
            </Link>
        </Reveal>

    )
}

export default function Blog() {

    const postMetadata = getPostMetadata().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const filteredPostMetadata = postMetadata.filter((p) => p.slug)

    const postPreviews = filteredPostMetadata.slice(0, 3).map((filteredPost, index) => (
    <Reveal key={filteredPost.slug} delay={0.16 * (index + 1)}>
        <PostPreview {...filteredPost} />
    </Reveal>
    ));

    return (
        <div className="max-w-sm mx-auto">
            <div className="">{postPreviews}</div>
            <AllPostsButton />
        </div>
    )
}