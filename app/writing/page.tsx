import React from 'react'

import getPostMetadata from '../utils/PostMetadata';
import PostPreview from "../components/post-preview";

import type { Metadata } from 'next';
import { Reveal } from "../components/effects/reveal";
import { EmptyContainer, LgIconContainer } from "../components/container";
import { BiBookAlt } from "react-icons/bi";

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
        <div className="max-w-sm mx-auto mt-28">
            <LgIconContainer
                title="Writing"
                icon={<BiBookAlt size={28} />}
                iconColor="text-emerald-400"
                >
                <div className="text-neutral-700 dark:text-neutral-300">
                    Thoughts on tech, tooling, and building things that work.
                </div>
            </LgIconContainer>
            <EmptyContainer>
                {postPreviews}  
            </EmptyContainer>
        </div>
    )
}