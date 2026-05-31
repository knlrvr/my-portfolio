import { notFound } from "next/navigation"
import getPostMetadata from "@/app/utils/PostMetadata"

import { PostContent } from "@/app/components/post-content"
import { getPostContent } from "@/app/lib/posts"

export const generateStaticParams = async () => {
  return getPostMetadata().map((post) => ({ slug: post.slug }))
}

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const post = getPostMetadata().find((post) => post.slug === slug)
  if (!post) return

  const { title, date: publishedTime, description, image } = post
  const ogImage = image ? `https://knlrvr.dev${image}` : `https://knlrvr.dev/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://knlrvr.dev/writing/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  }
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params
  const post = getPostContent(slug)
  if (!post) notFound() // was `notFound;` in the original — a no-op that never triggered

  return (
    <section className="pb-6 max-w-sm mx-auto">
      <PostContent post={post} />
    </section>
  )
}