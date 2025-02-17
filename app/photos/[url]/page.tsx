import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import PageTop from "@/app/components/page-top"
import Section from "@/app/components/section"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import Link from "next/link"

interface PhotoData {
  title: string
  location: string
  num: string
  taken: string
  specs: string
  date: string
  prev: string
  curr: string
  next: string
}

export const metadata: Metadata = {
    title: 'Kane Lariviere | Photos',
    description: 'Kane Lariviere • Software Developer • Photos',
  }

async function fetchPhotoData(url: string): Promise<PhotoData | null> {
  const photosDataMap: { [key: string]: PhotoData } = {
    "near-the-congaree": {
      title: "Near The Congaree",
      location: "South Carolina",
      num: '1',
      taken: "iPhone 13 Pro Max",
      specs: "Wide Camera — 26mm ƒ1.5",
      date: "Sep 20, 2022",
      prev: "clear-autumn",
      curr: "near-the-congaree",
      next: "the-frozen-waterfall"
    },
    "the-frozen-waterfall": {
      title: "The Frozen Waterfall",
      location: "Minnesota",
      num: '2',
      taken: "iPhone XS Max",
      specs: "Wide Camera — 26mm ƒ1.8",
      date: "Dec 15, 2019",
      prev: "near-the-congaree",
      curr: "frozen-waterfall",
      next: "moss-from-an-oak"
    },
    "moss-from-an-oak": {
      title: "Moss From An Oak",
      location: "Florida",
      num: '3',
      taken: "iPhone 12 Pro Max",
      specs: "Wide Camera — 26mm ƒ1.6",
      date: "Feb 18, 2022",
      prev: "the-frozen-waterfall",
      curr: "moss-from-an-oak",
      next: "clear-autumn"
    },
    "clear-autumn": {
        title: "Clear Autumn",
        location: "North Carolina",
        num: '4',
        taken: "iPhone 14 Pro",
        specs: "Main Camera — 24mm ƒ1.78",
        date: "Nov 22, 2024",
        prev: "moss-from-an-oak",
        curr: "clear-autumn",
        next: "near-the-congaree"
      },
  }

  return photosDataMap[url] || null
}

type Params = Promise<{url: string}>;

export default async function PhotoPage({ 
    params
 }: { 
    params: Params 
}) {

  const photo = await fetchPhotoData((await params).url)

  if (!photo) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto">
        <PageTop 
            title='Kane Lariviere' 
            desc='Photos'
        />

      <div className="my-8">
        <Image
          src={`/gallery/${photo.curr}.jpeg`}
          alt={photo.title}
          width={1000}
          height={1000}
          className="w-full h-auto pb-8"
        />

        <div className="text-neutral-400 text-xs flex justify-end items-center gap-2 mb-8">
            <Link href={`/photos/${photo.prev}`}>
                <BsArrowLeft />            
            </Link>
            <span>
                0{photo.num} / 04
            </span>
            <Link href={`/photos/${photo.next}`}>
                <BsArrowRight />            
            </Link>
        </div>

        <Section>
            <div className="mt-8 text-sm">
                <div className="flex justify-between items-center">
                    <p className="font-medium tracking-tight">{photo.title}</p>
                    <p className="text-neutral-400 font-light">{photo.date}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="tracking-tighter">{photo.location}</p>
                </div>
                <div className="flex mt-4 text-xs text-neutral-500 flex gap-2">
                    <p>{photo.taken}</p>
                    <span>|</span>
                    <p>{photo.specs}</p>
                </div>
            </div>
        </Section>

      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return [
    { url: "image-one" },
    { url: "image-two" },
    { url: "image-three" },
    { url: "image-four" },
    { url: "image-five" },
  ]
}

