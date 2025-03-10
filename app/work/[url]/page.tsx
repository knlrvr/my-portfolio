import Link from 'next/link'
import Image from 'next/image';

import type { Metadata } from 'next'

import { InfoSection } from '@/app/components/section';

export const metadata: Metadata = {
  title: 'Kane Lariviere | Work',
  description: 'Kane Lariviere • Software Engineer • Work',
}

import {
    RxArrowTopRight
} from 'react-icons/rx'
import PageTop from '@/app/components/page-top';

interface Work {
    url: string;
    brand?: {
      src: string;
      alt: string;
      width: number;
      height: number;
      className: string;
    };
    num: string;
    git?: string;
    live?: string;
    title: string;
    category: string;
    overview: string;
    tags?: string[];
    year: string;
    next: string;
}

const toParagraphs = (text: string) => {
  // Split the text by one or more newline characters
  const paragraphs = text.split(/\n{2,}/)
  
  return paragraphs.map((paragraph, index) => (
    <p key={index} className="blog text-sm mt-4" style={{ marginTop: index > 0 ? '1.5rem' : '1rem' }}>
      {paragraph}
    </p>
  ))
}

type Params = Promise<{url: string}>;

export default async function WorksPage(
{
    params, 
}: {
    params: Params;
}) {

    const projects = fetchWorksData((await params).url);

    return (
        <div className="max-w-2xl mx-auto">  

        <PageTop 
            title={`${projects?.title}`}
            desc={`${projects?.category}`}
            date={`${projects.year}`}
        />
          
          {projects?.brand && (
              <div className={`flex justify-center mt-8`}>

                <Image 
                  src={projects?.brand.src}
                  alt={projects?.brand.alt}
                  width={projects?.brand.width}
                  height={projects?.brand.height}
                  className={projects?.brand.className}
                />
              </div>
          )}
  
            <hr className="border-neutral-400 mt-8" />

            <div className="flex flex-col space-y-8 mt-8">
              <div className="font-light">
                  <div key={projects?.title} className="blog text-sm">
                    {toParagraphs(projects?.overview)}
                  </div>
              </div>

              <hr className="border-neutral-400" 
              />

              <div className="grid grid-cols-3 mb-4">

                <InfoSection title="Year">
                  <span className="font-light">{projects?.year}</span>
                </InfoSection>

                <InfoSection title="Tech">
                  {projects?.tags && projects?.tags.map((tag, index) => (
                    <span key={index} className="mb-1 text-sm flex font-light">
                      {tag}
                    </span>
                  ))}
                </InfoSection>

                <InfoSection title="View">
                  <div className="space-y-1">
                    {projects?.git && ( 
                      <Link href={`${projects?.git}`} target="_blank"
                        className="flex items-center group">
                        <span className="font-light group-hover:underline underline-offset-2 transition duration-100">Open Code</span>
                        <RxArrowTopRight
                          className="ml-3 text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition duration-100"/>
                      </Link>
                    )}
                    {projects?.live && (
                      <Link href={`${projects?.live}`} target="_blank"
                        className="flex items-center group">
                        <span className="font-light group-hover:underline underline-offset-2 transition duration-100">Open Live</span>
                        <RxArrowTopRight
                          className="ml-[1.17rem] text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition duration-200"/>
                      </Link>
                    )}
                  </div>
                </InfoSection>
              </div>
             
            </div>
        </div>
  )
}


export async function generateStaticParams() {
    return [
        { url: "fenili" },
        { url: "studico" },
        { url: "theskyisfake" },
        { url: "personalportfolio" },
    ] 
}

const fetchWorksData = (url: string): Work => {
    const projectDataMap: { [key: string]: Work } = {
      
      fenili: {
        url: 'fenili',
        brand: {
          src: '/fenili-brand.png',
          alt: 'fenili logo',
          width: 1000,
          height: 1000,
          className: 'w-full h-full rounded-md'
        },
        num: '01',
        live: 'https://fenili.store/',
        title: 'Fenili Apparel',
        category: 'Ecommerce',
        overview: 'Fenili is an apparel and lifestyle brand specializing in custom, made-to-order clothing. This site is a high-performance, server-rendered Next.js application that uses Shopify as a headless CMS and takes full advantage of React Server Components, Server Actions, Suspense, useOptimistic, and more from Next.js to ensure a seamless user & admin experience. \n\n This site is still under construction and is actively contributed to every week.',
        tags: ['TypeScipt', 'React', 'Next.js', 'Tailwind', 'Shopify', 'ngrok', 'Sentry'],
        year: '2024 ~',
        next: '/studico'
      },

      studico: {
        url: 'studico',
        brand: {
          src: '/studico-brand.png',
          alt: 'studico logo',
          width: 1000,
          height: 1000,
          className: 'w-full h-full rounded-md'
        },
        num: '02',
        git: 'https://github.com/knlrvr/studico',
        live: 'https://studico.vercel.app/',
        title: 'Studico',
        category: 'Music Production',
        overview: 'Studico is a web-based music production assistance suite that empowers users to create, collaborate, and share their music. Studico offers a robust tracking system for various aspects of music production, including tasks, file upload and storage, and messaging. Studico is meant for small to medium-sized teams, and allows them to have everything they need in one place. \n\n If you\'re interested in a demo of the site, demo login details can be found in the github repository.',
        tags: ['TypeScipt', 'React', 'Next.js', 'Tailwind', 'shadcn/ui', 'Convex', 'Clerk'],
        year: '2024 ~',
        next: '/theskyisfake'
      },

      theskyisfake: {
        url: 'theskyisfake',
        brand: {
          src: '/tsif-brand.png',
          alt: 'The Sky Is Fake',
          width: 1000,
          height: 1000,
          className: 'w-full h-full rounded-md'
        },
        num: '03',
        git: 'https://github.com/knlrvr/theskyisfake',
        live: 'https://www.theskyisfake.org',
        title: 'The Sky Is Fake',
        category: 'Social Media',
        overview: 'The Sky Is Fake is a full stack social media/image sharing app. Users can sign in through a variety of platforms via Clerk and upload pictures to be featured in the gallery. The gallery showcases images of the sky that seem just a little too picturesque to be real. Users can also like the pictures that are featured in the gallery.',
        tags: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Convex', 'Clerk'],
        year: '2023 ~',
        next: '/personalportfolio'
      },
  
      personalportfolio: {
        url: 'personalportfolio',
        brand: {
          src: '/knlrvr.png',
          alt: 'knlrvr',
          width: 1000,
          height: 1000,
          className: 'w-full h-full rounded-md'
        },
        num: '04',
        git: 'https://github.com/knlrvr/portfolio-2024',
        title: 'Personal Portfolio',
        category: 'Portfolio',
        overview: 'This is my personal portfolio. I try to break it as often as I can by trying new technologies and patterns, and staying aligned with best practices in the ecosystem. I would encourage anyone to do the same. Feel free to fork it and hack around!',
        tags: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Convex', 'MDX', 'PostHog'],
        year: '2024 ~',
        next: '/fenili'
      },
    };

    const projectData = projectDataMap[url];
  
    return projectData;
  };