import Image from "next/image"
import Link from "next/link"

const images = [
  { id: 1, src: "/gallery/image-one.jpeg", alt: "near the congaree", href: "/photos/image-one" },
  { id: 2, src: "/gallery/image-two.jpeg", alt: "the field & the shed", href: "/photos/image-two" },
  { id: 3, src: "/gallery/image-three.jpeg", alt: "the northern lights over the south", href: "/photos/image-three" },
  { id: 4, src: "/gallery/image-four.jpeg", alt: "the frozen waterfall", href: "/photos/image-four" },
  { id: 5, src: "/gallery/image-five.jpeg", alt: "mossy tree in Florida", href: "/photos/image-five" },
]

export default function PhotosGrid() {
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 gap-8">
        {images.map((image) => (
          <Link key={image.id} href={image.href} className="block">
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