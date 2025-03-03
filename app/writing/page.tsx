import PageTop from "../components/page-top";

import React from 'react'

import getPostMetadata from '../utils/PostMetadata';
import PostPreview from "../components/post-preview";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kane Lariviere | Writing',
  description: 'Kane Lariviere • Software Engineer • Writing',
}

export default function Writing() {

    const postMetadata = getPostMetadata().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const postPreviews = postMetadata.map((post) => (
      <PostPreview key={post.slug} {...post}/>
    ));

    return (
        <div className="max-w-2xl mx-auto">
            <PageTop 
                title="Kane Lariviere"
                desc="Writing"
            />
            <div className="space-y-16 my-8">
                {postPreviews}  
            </div>
        </div>
    )
}