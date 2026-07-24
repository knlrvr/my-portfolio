"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import { createPortal } from "react-dom";

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

const TOP_ROW: GalleryImage[] = [
  { id: "top-1", src: "/gallery/clear-autumn.jpeg", alt: "..." },
  { id: "top-2", src: "/gallery/frozen-waterfall.jpeg", alt: "..." },
  { id: "top-3", src: "/gallery/foggy-shed.jpeg", alt: "..." },
  { id: "top-4", src: "/gallery/grain-belt-sign.jpeg", alt: "..."},
  { id: "top-5", src: "/gallery/moss-from-an-oak.jpeg", alt: "..." },
  { id: "top-6", src: "/gallery/near-the-congaree.jpeg", alt: "..." },
  { id: "top-7", src: "/gallery/sea-of-clouds.jpeg", alt: "..." },
  { id: "top-8", src: "/gallery/sunset-over-water.jpeg", alt: "..." },
  { id: "top-9", src: "/gallery/aurora-nc.jpeg", alt: "..."},
];

// const BOTTOM_ROW: GalleryImage[] = [
// { id: "bottom-1", src: "/gallery/...", alt: "..." },
// ];

type MarqueeRowProps = {
  images: GalleryImage[];
  direction: "left" | "right";
  /** pixels per second */
  speed?: number;
  paused: boolean;
  onImageClick: (image: GalleryImage) => void;
};

function MarqueeRow({
  images,
  direction,
  speed = 55,
  paused,
  onImageClick,
}: MarqueeRowProps) {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [loopWidth, setLoopWidth] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => setLoopWidth(track.scrollWidth / 2);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (paused || prefersReducedMotion || !loopWidth) return;

    const moveBy = (speed * delta) / 1000;
    let next = x.get() + (direction === "left" ? -moveBy : moveBy);

    // Wrap seamlessly: both halves of the track are identical.
    if (next <= -loopWidth) next += loopWidth;
    if (next > 0) next -= loopWidth;

    x.set(next);
  });

  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-3 sm:gap-4">
        {doubled.map((image, i) => (
          <button
            key={`${image.id}-${i}`}
            type="button"
            onClick={() => onImageClick(image)}
            className="group relative shrink-0 overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            // Duplicate copies are decorative; hide them from AT & tab order.
            aria-hidden={i >= images.length}
            tabIndex={i >= images.length ? -1 : 0}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              draggable={false}
              className="h-28 w-auto select-none object-cover transition-transform duration-300 group-hover:scale-105 sm:h-40 md:h-52 lg:h-60"
            />
          </button>
        ))}
      </motion.div>
    </div>
  );
}


type ModalProps = {
  image: GalleryImage;
  onClose: () => void;
};

function ImageModal({ image, onClose }: ModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    // Prevent background scroll while open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 8 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        className="relative max-h-[85vh] max-w-[92vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[85vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image"
          className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </motion.div>
    </motion.div>,
    document.body
  );
}

export default function MarqueeGallery() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const close = useCallback(() => setActiveImage(null), []);

  const paused = activeImage !== null;

  return (
    <section aria-label="Image gallery" className="relative left-1/2 w-[98vw] -translate-x-1/2 overflow-x-clip py-8 mt-16">
      <div className="flex flex-col gap-3 sm:gap-4">
        <MarqueeRow
          images={TOP_ROW}
          direction="left"
          paused={paused}
          onImageClick={setActiveImage}
        />
        {/* <MarqueeRow
          images={BOTTOM_ROW}
          direction="right"
          paused={paused}
          onImageClick={setActiveImage}
        /> */}
      </div>

      <AnimatePresence>
        {activeImage && <ImageModal image={activeImage} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}