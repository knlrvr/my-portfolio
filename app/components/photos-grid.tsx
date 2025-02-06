import Image from "next/image"
import Link from "next/link"

const images = [
  { id: 1, src: "/gallery/1.jpeg", alt: "mossy tree in Florida", href: "/photos/image-one" },
  { id: 2, src: "/gallery/2.jpeg", alt: "Nicollet Island", href: "/photos/image-two" },
  { id: 3, src: "/gallery/3.jpeg", alt: "Blue and orange sky", href: "/photos/image-three" },
  { id: 4, src: "/gallery/4.jpeg", alt: "Blue sky with sparse clouds", href: "/photos/image-four" },
  { id: 5, src: "/gallery/5.jpeg", alt: "Violet sky", href: "/photos/image-five" },
  { id: 6, src: "/gallery/6.jpeg", alt: "Hill at sunset", href: "/photos/image-six" },
  { id: 7, src: "/gallery/7.jpg", alt: "Asheville sky", href: "/photos/image-seven" },
  { id: 8, src: "/gallery/8.jpg", alt: "Sky with many clouds", href: "/photos/image-eight" },
  { id: 9, src: "/gallery/9.jpeg", alt: "Appalachia", href: "/photos/image-nine" },
  { id: 10, src: "/gallery/10.jpeg", alt: "Frozen waterfall", href: "/photos/image-ten" },
  { id: 11, src: "/gallery/11.jpg", alt: "Tree with green leaves", href: "/photos/image-eleven" },
  { id: 12, src: "/gallery/12.jpeg", alt: "Foggy sky over the ocean", href: "/photos/image-twelve" },
]

export default function PhotosGrid() {
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 gap-8">
        {images.map((image) => (
          <Link key={image.id} href={image.href} className="block break-inside-avoid-column">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={1000}
              height={1000}
              className="w-full h-auto object-cover grayscale hover:filter-none transition-all duration-150"
            />
          </Link>
        ))}
      </div>
    </div>
  )
};