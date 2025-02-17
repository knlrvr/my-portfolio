import Image from "next/image"
import Link from "next/link"

const images = [
  { id: 1, src: "/gallery/near-the-congaree.jpeg", alt: "near the congaree", href: "/photos/near-the-congaree" },
  { id: 2, src: "/gallery/frozen-waterfall.jpeg", alt: "the frozen waterfall", href: "/photos/frozen-waterfall" },
  { id: 3, src: "/gallery/moss-from-an-oak.jpeg", alt: "mossy oak tree", href: "/photos/moss-from-an-oak" },
  { id: 4, src: "/gallery/clear-autumn.jpeg", alt: "clear autumn sky", href: "/photos/clear-autumn" },

]

export default function PhotosGrid() {
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 gap-16">
        {images.map((image) => (
          <Link key={image.id} href={image.href} className="block">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  )
};