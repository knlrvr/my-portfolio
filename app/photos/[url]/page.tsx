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
    "image-one": {
      title: "Near The Congaree",
      location: "South Carolina",
      num: '1',
      taken: "iPhone 13 Pro Max",
      specs: "Wide Camera — 26mm ƒ1.5",
      date: "Sep 20, 2022",
      prev: "image-five",
      curr: "image-one",
      next: "image-two"
    },
    "image-two": {
      title: "The Field & The Shed",
      location: "North Carolina",
      num: '2',
      taken: "iPhone 13 Pro Max",
      specs: "Wide Camera — 26mm ƒ1.8",
      date: "Sep 21, 2022",
      prev: "image-one",
      curr: "image-two",
      next: "image-three"
    },
    "image-three": {
      title: "Northern Lights Over The South",
      location: "North Carolina",
      num: '3',
      taken: "iPhone 14 Pro",
      specs: "Wide Camera — 24mm ƒ1.78",
      date: "Dec 15, 2019",
      prev: "image-two",
      curr: "image-three",
      next: "image-four"
    },
    "image-four": {
        title: "The Frozen Waterfall",
        location: "Minnesota",
        num: '4',
        taken: "iPhone XS Max",
        specs: "Wide Camera — 26mm ƒ1.8",
        date: "Dec 15, 2019",
        prev: "image-three",
        curr: "image-four",
        next: "image-five"
      },
      "image-five": {
        title: "Moss From An Oak",
        location: "Florida",
        num: '5',
        taken: "iPhone 12 Pro Max",
        specs: "Wide Camera — 26mm ƒ1.6",
        date: "Feb 18, 2022",
        prev: "image-four",
        curr: "image-five",
        next: "image-one"
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

        <div className="text-neutral-400 text-xs flex justify-end items-center gap-2 mb-4">
            <Link href={`/photos/${photo.prev}`}>
                <BsArrowLeft />            
            </Link>
            <span>
                0{photo.num} / 05
            </span>
            <Link href={`/photos/${photo.next}`}>
                <BsArrowRight />            
            </Link>
        </div>

        <Section>
            <div className="mt-8 text-sm">
                <div className="flex justify-between items-center">
                    <p className="font-medium tracking-tight">{photo.title}</p>
                    <p className="text-neutral-500">{photo.date}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-medium tracking-tight">{photo.location}</p>
                    <p className="text-neutral-500">{photo.taken}</p>
                </div>
                <div className="flex justify-end mt-4">
                    <p className="text-xs text-neutral-400">{photo.specs}</p>
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

