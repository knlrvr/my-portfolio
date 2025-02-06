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
  next: string
}

export const metadata: Metadata = {
    title: 'Kane Lariviere | Photos',
    description: 'Kane Lariviere • Software Developer • Photos',
  }

async function fetchPhotoData(url: string): Promise<PhotoData | null> {
  const photosDataMap: { [key: string]: PhotoData } = {
    "image-one": {
      title: "Moss From An Oak",
      location: "Florida",
      num: '1',
      taken: "iPhone 12 Pro Max",
      specs: "Wide Camera — 26mm ƒ1.6",
      date: "Feb 18, 2022",
      prev: "image-twelve",
      next: "image-two"
    },
    "image-two": {
        title: "Nicollet Island",
        location: "Minnesota",
        num: '2',
        taken: "iPhone 13 Pro Max",
        specs: "Wide Camera — 26mm ƒ1.6",
        date: "May 12, 2021",
        prev: "image-one",
        next: "image-three"
      },
      "image-three": {
        title: "The Sky Is Fake, I",
        location: "North Carolina",
        num: '3',
        taken: "iPhone 14 Pro",
        specs: "Main Camera — 24mm ƒ1.78",
        date: "Nov 26, 2023",
        prev: "image-two",
        next: "image-four"
      },
      "image-four": {
        title: "The Sky Is Fake, II",
        location: "North Carolina",
        num: '4',
        taken: "iPhone 14 Pro",
        specs: "Main Camera — 24mm ƒ1.78",
        date: "Oct 18, 2023",
        prev: "image-three",
        next: "image-five"
      },
      "image-five": {
        title: "The Sky Is Fake, III",
        location: "North Carolina",
        num: '5',
        taken: "iPhone 14 Pro",
        specs: "Main Camera — 24mm ƒ1.78",
        date: "Nov 15, 2023",
        prev: "image-four",
        next: "image-six"
      },
      "image-six": {
        title: "The Sky Is Fake, IV",
        location: "Georgia",
        num: '6',
        taken: "iPhone 12 Pro Max",
        specs: "Wide Camera — 26mm ƒ1.6",
        date: "Oct 9, 2021",
        prev: "image-five",
        next: "image-seven"
      },
      "image-seven": {
        title: "Downtown Asheville",
        location: "North Carolina",
        num: '7',
        taken: "iPhone XR",
        specs: "Rear Camera — 26mm ƒ1.8",
        date: "Jul 3, 2019",
        prev: "image-six",
        next: "image-eight"
      },
      "image-eight": {
        title: "The Valley Sky",
        location: "North Carolina",
        num: '8',
        taken: "iPhone XR",
        specs: "Rear Camera — 26mm ƒ1.8",
        date: "Jul 2, 2019",
        prev: "image-seven",
        next: "image-nine"
      },
      "image-nine": {
        title: "Clouds Over Appalachia",
        location: "North Carolina",
        num: '9',
        taken: "iPhone 11 Pro Max",
        specs: "Wide Camera — 26mm ƒ1.8",
        date: "Oct 23, 2020",
        prev: "image-eight",
        next: "image-ten"
      },
      "image-ten": {
        title: "The Frozen Waterfall",
        location: "Minnesota",
        num: '10',
        taken: "iPhone XS Max",
        specs: "Wide Camera — 26mm ƒ1.8",
        date: "Dec 15, 2019",
        prev: "image-nine",
        next: "image-eleven"
      },
      "image-eleven": {
        title: "Under The Canopy",
        location: "North Carolina",
        num: '11',
        taken: "iPhone XR",
        specs: "Rear Camera — 26mm ƒ1.8",
        date: "Jul 1, 2019",
        prev: "image-ten",
        next: "image-twelve"
      },
      "image-twelve": {
        title: "Fog At The Shoreline",
        location: "Florida",
        num: '12',
        taken: "iPhone 12 Pro Max",
        specs: "Wide Camera — 26mm ƒ1.6",
        date: "Feb 19, 2022",
        prev: "image-eleven",
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
          src={`/gallery/${photo.num}.jpeg`}
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
                {photo.num} / 12
            </span>
            <Link href={`/photos/${photo.next}`}>
                <BsArrowRight />            
            </Link>
        </div>

        <Section>
            <div className="mt-8 text-sm">
                <div className="flex justify-between items-center">
                    <p className="font-medium tracking-tight">{photo.title}</p>
                    <p className="">{photo.date}</p>
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
  ]
}

