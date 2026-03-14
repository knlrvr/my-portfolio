import Link from "next/link";
import getPostMetadata from "../utils/PostMetadata";
import PostPreview from "./post-preview";
import { LuArrowUpRight } from "react-icons/lu";

function AllPostsButton() {
    return (
        <Link href="/writing" className="group flex items-center gap-1 text-xs group w-fit mt-8 border border-mist-400 dark:border-mist-700 px-4 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-150">
            <p className="text-neutral-700 dark:text-neutral-300">
                All Posts 
            </p>
            <LuArrowUpRight className="mt-0.5 text-mist-400 dark:text-mist-700 group-hover:-translate-y-px group-hover:translate-x-px transition-transform duration-150" />
        </Link>
    )
}

export default function Blog() {

    const postMetadata = getPostMetadata().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const filteredPostMetadata = postMetadata.filter((p) => p.slug)

    const postPreviews = filteredPostMetadata.slice(0, 3).map((filteredPost) => (
        <PostPreview key={filteredPost.slug} {...filteredPost} />
    ));

    return (
        <div className="max-w-2xl mx-auto">
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800">{postPreviews}</div>
            <AllPostsButton />
        </div>
    )
}