import Link from "next/link";
import getPostMetadata from "../utils/PostMetadata";
import PostPreview from "./post-preview";
import { LuArrowUpRight } from "react-icons/lu";
import { Reveal } from "./effects/reveal";

function AllPostsButton() {
    return (
        <Reveal delay={0.24}>
            <Link href="/writing" className="group flex items-center gap-1 text-xs w-fit mt-8 rounded-md px-4 py-2 bg-mist-600 dark:bg-mist-400 hover:bg-mist-600/80 dark:hover:bg-mist-400/80 transition-colors duration-150">
                <span className="text-mist-100 dark:text-mist-900">
                    All Posts
                </span>
                <LuArrowUpRight className="mt-0.5 text-mist-100 dark:text-mist-900 group-hover:-translate-y-px group-hover:translate-x-px transition-transform duration-150" />
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
        <div className="max-w-2xl mx-auto">
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800">{postPreviews}</div>
            <AllPostsButton />
        </div>
    )
}