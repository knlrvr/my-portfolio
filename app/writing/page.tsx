import PageTop from "../components/page-top";

import React from 'react'

import getPostMetadata from '../utils/PostMetadata';
import PostPreview from "../components/post-preview";

import type { Metadata } from 'next';
import { Reveal } from "../components/effects/reveal";

export const metadata: Metadata = {
  title: 'Kane Lariviere | Writing',
  description: 'Kane Lariviere • Software Engineer • Writing',
}

export default function Writing() {

    const postMetadata = getPostMetadata().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const postPreviews = postMetadata.map((post, index) => (
    <Reveal key={post.slug} delay={0.16 * (index + 1)}>
        <PostPreview {...post} />
    </Reveal>
    ));

    return (
        <div className="max-w-sm mx-auto">
            <PageTop 
                title="Writing"
                desc="Thoughts on tech, tooling, and building things that work."
            />
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
                {postPreviews}  
            </div>
        </div>
    )
}