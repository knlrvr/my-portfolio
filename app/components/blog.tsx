import Link from "next/link";
import getPostMetadata from "../utils/PostMetadata";
import PostPreview from "./post-preview";
import { LuArrowUpRight, LuPen, LuPencilLine } from "react-icons/lu";
import { Reveal } from "./effects/reveal";
import { Container } from "./container";

function AllPostsButton() {
    return (
        <Reveal delay={0.24}>
            <Link href="/writing" className="group flex items-center gap-1 text-xs w-fit mt-8 rounded-md px-4 py-2 bg-orange-400 transition-colors duration-150">
                <span className="text-[#111]">
                    All Posts
                </span>
                <LuArrowUpRight className="mt-0.5 text-[#111] group-hover:-translate-y-px group-hover:translate-x-px transition-transform duration-150" />
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
            <Container
                title="Writing"
                icon={<LuPencilLine size={20} />}
                iconColor="text-orange-400"
            >
                {postPreviews}
                <AllPostsButton />
            </Container>
        </div>
    )
}