import Image from "next/image"
import Link from "next/link"
import { LuArrowRight } from "react-icons/lu"
import { Reveal } from "./effects/reveal"

// width/height are post-EXIF-rotation; only their ratio is used.
const frames = [
  { src: "/gallery/bird.jpg", caption: "Bird", width: 3024, height: 3024 },
  { src: "/gallery/clear-autumn.jpeg", caption: "Clear autumn day", width: 4032, height: 3024 },
  { src: "/gallery/near-the-congaree.jpeg", caption: "Near the Congaree", width: 3024, height: 3024 },
  { src: "/gallery/grain-belt-sign.jpeg", caption: "Grain Belt sign", width: 3562, height: 2902 },
]

const ratioOf = (f: { width: number; height: number }) => f.width / f.height

// The row's aspect ratio is the sum of the photos' ratios, so they fill the
// frame's width uncropped at a shared height.
const totalRatio = frames.reduce((sum, f) => sum + ratioOf(f), 0)

/**
 * Strip of photos between the hero and the first section, spanning the frame.
 *
 * Every photo shares one height and takes a width proportional to its aspect
 * ratio (flex-grow = ratio, basis 0), so the row is justified edge to edge.
 * Width/height are post-EXIF-rotation; only their ratio is used.
 * On mobile it becomes a fixed-height horizontal scroller.
 */
export default function Frames() {
  return (
    <section aria-label="Recent photos" className="-mx-6 border-t border-(--rule)">
      <Reveal delay={0.08}>
        <div
          style={{ "--total": totalRatio } as React.CSSProperties}
          className="hide-scroll flex h-64 snap-x snap-mandatory gap-px overflow-x-auto border-b border-(--rule) bg-(--rule) sm:aspect-(--total) sm:h-auto sm:overflow-hidden"
        >
          {frames.map((frame) => {
            const ratio = ratioOf(frame)
            return (
            <Link
              key={frame.src}
              href="/photos"
              style={{ "--ratio": ratio, flexGrow: ratio } as React.CSSProperties}
              className="group relative h-full w-[calc(16rem*var(--ratio))] shrink-0 snap-start overflow-hidden bg-(--frame) sm:w-auto sm:shrink sm:basis-0"
            >
              <Image
                src={frame.src}
                alt={frame.caption}
                fill
                sizes="(min-width: 640px) 240px, 340px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100" />
              <span className="absolute bottom-2.5 left-3 text-[11px] text-white/90 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                {frame.caption}
              </span>
            </Link>
            )
          })}
        </div>
      </Reveal>

      <Reveal delay={0.24}>
        <div className="flex items-center justify-end px-6 py-3 font-mono text-[11px] tracking-tighter sm:px-10">
          <Link
            href="/photos"
            className="group flex items-center gap-1 text-neutral-500 transition-colors duration-150 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            More
            <LuArrowRight className="transition-transform duration-150 group-hover:translate-x-px" />
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
