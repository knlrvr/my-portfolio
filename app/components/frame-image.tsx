import Image from "next/image"

export interface FrameImageData {
  src: string
  /** Intrinsic size; only the ratio is used for layout. */
  width: number
  height: number
  alt: string
}

/** Image edge to edge within the frame at its own ratio, hairline above. */
export default function FrameImage({ image, priority = false }: { image: FrameImageData; priority?: boolean }) {
  return (
    <div className="-mx-6 border-t border-(--rule)">
      <div style={{ aspectRatio: `${image.width} / ${image.height}` }} className="relative w-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  )
}
