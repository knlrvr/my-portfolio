// app/@modal/(.)writing/[slug]/page.tsx
import { notFound } from "next/navigation"

import { PostModal } from "@/app/components/post-modal"
import { PostContent } from "@/app/components/post-content"
import { getPostContent } from "@/app/lib/posts"

type Params = Promise<{ slug: string }>

export default async function InterceptedPostPage({ params }: { params: Params }) {
  const { slug } = await params
  const post = getPostContent(slug)
  if (!post) notFound()

  return (
    <PostModal useBackNavigation>
      <PostContent post={post} variant="modal" />
    </PostModal>
  )
}