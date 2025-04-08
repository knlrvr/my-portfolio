import Link from "next/link";
import getPostMetadata from "../utils/PostMetadata";
import PostPreview from "./post-preview";
import Section from "./section";

export default function Blog() {

    const postMetadata = getPostMetadata().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const filteredPostMetadata = postMetadata.filter((p) => p.slug)

    const postPreviews = filteredPostMetadata.slice(0, 3).map((filteredPost) => (
        <PostPreview key={filteredPost.slug} {...filteredPost} />
    ));

    return (
        <Section>
            <div className="py-6 h-fit">
                <div className="max-w-2xl mx-auto">
                    <div className="space-y-16">{postPreviews}</div>
                    <Link href="/writing" className="flex items-center gap-1 text-sm text-neutral-500 group w-fit mt-8">
                        <span className="text-xs underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:decoration-neutral-300 transition-colors duration-150">All Posts</span>
                    </Link>
                </div>
            </div>
        </Section>
    )
}