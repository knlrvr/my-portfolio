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

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const close = useCallback(() => setActiveImage(null), []);

  return (
    <section aria-label="Image gallery" className="columns-1 sm:columns-3 gap-2 sm:gap-3">
      {IMAGES.map((image) => (
        <button
          key={image.id}
          type="button"
          onClick={() => setActiveImage(image)}
          className="group relative mb-2 sm:mb-3 block w-full break-inside-avoid overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 640px) 33vw, 100vw"
            draggable={false}
            className="w-full h-auto select-none transition-transform duration-300 group-hover:scale-105"
          />
        </button>
      ))}

      <AnimatePresence>
        {activeImage && <ImageModal image={activeImage} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}
