import { notFound } from "next/navigation";
import getPostMetadata from '@/app/utils/PostMetadata';

import fs from 'fs'
import matter from "gray-matter";

import { MDXRemote } from 'next-mdx-remote/rsc'
import { Code } from "@/app/components/blog/code";

import Callout from '@/app/components/blog/callout';
import Edit from '@/app/components/blog/edit';

import Link from 'next/link';

import { RxArrowTopRight } from "react-icons/rx"; 
import PageTop from "@/app/components/page-top";
import Sticker from "@/app/components/blog/sticker";
import readingTime from "reading-time";

const getPostContent = (slug: string) => {
    const folder = "posts";
    const file = `${folder}/${slug}.mdx`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    const readTime = readingTime(matterResult.content).text;
    
    return { ...matterResult, readTime };
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
                className='inline-flex items-center underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:decoration-neutral-300 transition-colors duration-150'>
                {children}
            </Link>
        )
    }

    return (
        <Link href={href} target='_blank' rel="noopener noreferrer" 
            className="underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:decoration-neutral-300 transition-colors duration-150">
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
        code: Code,
        Callout,
        Edit,
        BlogLink,
        InlineCode
    }
    
    if (!post) {
        notFound;
    }

    return (
        <section className="pb-6 max-w-2xl mx-auto">
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
            <div className="relative">
                <div className="relative">
                    <PageTop 
                        title={`${post.data.title}`}
                        desc={`${post.data.description}`}
                        date={`${post.data.date} • ${post.readTime}`}
                    />
                    <Sticker src={`${post.data.sticker}`}/>
                </div>
                <article className="mt-10 dark:text-neutral-300 
                                    blog prose prose-headings:text-[#111] dark:prose-headings:text-neutral-200 
                                    prose-strong:text-[#111] dark:prose-strong:text-neutral-200 max-w-full
                                    prose-sm prose-code:text-xs prose-pre:text-neutral-700 prose-pre:bg-neutral-100 dark:prose-pre:bg-[#151515] dark:prose-pre:text-neutral-300 prose-pre:mb-1
                                    prose-h6:text-xs prose-h6:text-neutral-400 dark:prose-h6:text-neutral-600 prose-p:font-normal
                                    prose-h4:text-lg prose-h4:tracking-wide prose-h4:font-normal
                                    prose-h3:text-xl prose-h3:font-bold prose-h3:tracking-normal
                                    prose-h2:font-bold prose-h2:tracking-tighter prose-h2:text-2xl
                                    prose-hr:border-neutral-500 dark:prose-a:text-neutral-300
                                    prose-sup md:prose-img:max-w-none prose-img:-mb-1 prose-img:md:-mx-6 prose-img:md:w-[calc(100%+3.25rem)] prose-img:transition-all
                                    prose-li:marker:text-neutral-300 dark:prose-li:marker:text-neutral-600
                                    prose-ul:list-image-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%20-5%2024%2024%22%20fill=%22none%22%20stroke=%22%23d4d4d4%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%3Cpath%20d=%22M20%206%209%2017l-5-5%22/%3E%3C/svg%3E')]
                                    dark:prose-ul:list-image-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%20-5%2024%2024%22%20fill=%22none%22%20stroke=%22%23525252%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%3Cpath%20d=%22M20%206%209%2017l-5-5%22/%3E%3C/svg%3E')]                ">
                    <MDXRemote
                        source={post.content}
                        components={{...components}}
                    /> 
                </article>
            </div>
        </section>
    )
}