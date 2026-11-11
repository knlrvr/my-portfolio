"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Dimensions are post-EXIF-rotation so the masonry columns reserve the right space before load.
const IMAGES: GalleryImage[] = [
  { id: "clear-autumn", src: "/gallery/clear-autumn.jpeg", alt: "Clear autumn day", width: 4032, height: 3024 },
  { id: "aurora-nc", src: "/gallery/aurora-nc.jpeg", alt: "Aurora over North Carolina", width: 3024, height: 4032 },
  { id: "grain-belt-sign", src: "/gallery/grain-belt-sign.jpeg", alt: "Grain Belt sign", width: 3562, height: 2902 },
  { id: "near-the-congaree", src: "/gallery/near-the-congaree.jpeg", alt: "Near the Congaree", width: 3024, height: 3024 },
  { id: "bird", src: "/gallery/bird.jpg", alt: "Bird", width: 3024, height: 3024 },
  { id: "chimney-and-sky", src: "/gallery/chimney-and-sky.jpg", alt: "Chimney against the sky", width: 5712, height: 4284 },
  { id: "moss-from-an-oak", src: "/gallery/moss-from-an-oak.jpeg", alt: "Moss hanging from an oak", width: 4032, height: 3024 },
];

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
          className="max-h-[85vh] max-w-[92vw] object-contain shadow-2xl"
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image"
          className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
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

// Target sum of aspect ratios per row on desktop. Higher = more, shorter photos per row.
const ROW_TARGET = 3.2;

const ratioOf = (img: GalleryImage) => img.width / img.height;

/** Greedily pack images into rows whose ratios sum to about ROW_TARGET. */
function toRows(images: GalleryImage[]) {
  const rows: GalleryImage[][] = [];
  let row: GalleryImage[] = [];
  let sum = 0;
  for (const img of images) {
    row.push(img);
    sum += ratioOf(img);
    if (sum >= ROW_TARGET) {
      rows.push(row);
      row = [];
      sum = 0;
    }
  }
  // A short leftover row joins the previous one rather than sitting alone.
  if (row.length) {
    if (rows.length && sum < ROW_TARGET * 0.6) rows[rows.length - 1].push(...row);
    else rows.push(row);
  }
  return rows;
}

/**
 * Justified rows: every photo in a row shares one height, widths follow each
 * photo's ratio (same technique as the home Frames strip). A short final row
 * is padded with an empty spacer so it isn't blown up to full width.
 * On mobile each photo stacks full-width at its own ratio.
 */
export default function Gallery() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const close = useCallback(() => setActiveImage(null), []);

  return (
    <section aria-label="Image gallery" className="flex flex-col gap-px bg-(--rule)">
      {toRows(IMAGES).map((row) => {
        const sum = row.reduce((t, img) => t + ratioOf(img), 0);
        const total = Math.max(sum, ROW_TARGET);
        return (
          <div
            key={row[0].id}
            style={{ "--total": total } as React.CSSProperties}
            className="flex flex-col gap-px sm:aspect-(--total) sm:flex-row"
          >
            {row.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveImage(image)}
                style={{ "--ratio": ratioOf(image), flexGrow: ratioOf(image) } as React.CSSProperties}
                className="group relative aspect-(--ratio) w-full cursor-zoom-in overflow-hidden bg-(--frame) focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-inset sm:aspect-auto sm:w-auto sm:basis-0"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 360px, 100vw"
                  draggable={false}
                  className="select-none object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-2.5 left-3 text-[11px] text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {image.alt}
                </span>
              </button>
            ))}
            {sum < ROW_TARGET && (
              <div aria-hidden className="hidden bg-(--frame) sm:block" style={{ flexGrow: ROW_TARGET - sum }} />
            )}
          </div>
        );
      })}

      <AnimatePresence>
        {activeImage && <ImageModal image={activeImage} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}
