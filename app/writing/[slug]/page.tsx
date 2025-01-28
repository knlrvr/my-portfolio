import { notFound } from "next/navigation";
import getPostMetadata from '@/app/utils/PostMetadata';

import fs from 'fs'
import matter from "gray-matter";

import { MDXRemote } from 'next-mdx-remote/rsc'

import { CodeBlock } from "@/app/components/blog/codeblock";
import Callout from '@/app/components/blog/callout';
import Edit from '@/app/components/blog/edit';

import Link from 'next/link';

import { RxArrowTopRight } from "react-icons/rx"; 
import PageTop from "@/app/components/page-top";

const getPostContent = (slug: string) => {
    const folder = "posts";
    const file = `${folder}/${slug}.mdx`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

type Params = Promise<{slug: string}>

export async function generateMetadata({ params }: { params: Params }) {
    
    
    const { slug } = await params;
    
    const post = getPostMetadata().find((post) => post.slug === slug);
    
    if (!post) {
        return;
    }

    const {
        title,
        date: publishedTime,
        description,
        image,
    } = post;

    const ogImage = image
    ? `https://knlrvr.dev${image}`
    : `https://knlrvr.dev/og?title=${title}`

    return {
        title, 
        description,
        openGraph: {
            title, 
            description,
            type: 'article',
            publishedTime,
            url: `https://knlrvr.dev/writing/${post.slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title, 
            description,
            images: [
                ogImage
            ]
        },
    };
}

interface BlogLinkProps {
    href: string;
    children: React.ReactNode;
}

function BlogLink({ href, children }: BlogLinkProps) {

    if (href.startsWith('/')) {
        return (
            <Link href={href}
                className='inline-flex items-center underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150'>
                {children}
            </Link>
        )
    }

    return (
        <Link href={href} target='_blank' rel="noopener noreferrer" 
            className="hunderline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">
            {children} 
            <RxArrowTopRight className="inline-block" />
        </Link>
    );
}

function InlineCode({ children }: { children: React.ReactNode}) {
    return (
        <>
            <span className="border border-neutral-500 font-mono rounded-sm px-1.5 py-0.5 text-xs">{children}</span>
        </>
    )
}

export default async function PostPage({params}: {params: Params}) {

    const { slug } = await params;
    const post = getPostContent(slug);

    const components = {
        code: ({ node, inline, className, children, ...props }: any) => (
            <CodeBlock language={props.language} value={children} />
        ),
        Callout,
        Edit,
        BlogLink,
        InlineCode
    }
    
    if (!post) {
        notFound;
    }

    function getTimeSincePost(postDate: string): string {
        const currentDate = new Date();
        const postDateObj = new Date(postDate);
        const timeDifference = currentDate.getTime() - postDateObj.getTime();

        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        const daysDifference = Math.floor(timeDifference / millisecondsPerDay);
        if (daysDifference < 30) {
            return `${daysDifference}d ago`
        }

        const monthsDifference = Math.floor(daysDifference / 30.44);
        if (monthsDifference < 12) {
            return `${monthsDifference}m ago`
        }

        const yearsDifference = Math.floor(daysDifference / 365.25); 
        return `${yearsDifference}y ago`;
    }

    return (
        <section className="max-w-2xl mx-auto pb-8">
            <script
                type='application/ld+json'
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        headline: post.data.title,
                        description: post.data.description,
                        author: {
                            '@type': 'Person',
                            name: 'Kane Lariviere',
                        }
                    })
                }}
            />
            <div className="">
                <PageTop 
                    title={`${post.data.title}`}
                    desc={`${post.data.description}`}
                    date={`${post.data.date}`}
                />
                <article className="mt-10
                                    blog prose prose-headings:text-[#111] prose-strong:text-[#111] max-w-full
                                    prose-sm prose-code:text-sm prose-pre:bg-[#151515] prose-pre:mb-1
                                    prose-h6:text-xs prose-h6:text-neutral-400 prose-p:font-normal
                                    prose-h4:text-lg prose-h4:tracking-wide prose-h4:font-normal
                                    prose-h3:text-xl prose-h3:font-semibold prose-h3:tracking-normal
                                    prose-h2:font-semibold prose-h2:tracking-tighter prose-h2:text-2xl
                                    prose-hr:border-neutral-500
                                    prose-img:rounded-sm prose-img:-mb-3
                                    prose-sup 
                ">
                    <MDXRemote
                        source={post.content}
                        components={{...components}}
                    /> 
                </article>
            </div>
        </section>
    )
}