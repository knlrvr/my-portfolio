"use client"

import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import { Grain } from "./effects/grain"

interface PostModalProps {
  children: React.ReactNode
  useBackNavigation?: boolean
}

export function PostModal({ children, useBackNavigation = false }: PostModalProps) {
  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog && !dialog.open) {
      dialog.showModal()
    }

    // Lock page scroll while the modal is open.
    // Compensate for the removed scrollbar so the page behind doesn't shift.
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    const prevOverflow = document.body.style.overflow
    const prevPaddingRight = document.body.style.paddingRight

    document.body.style.overflow = "hidden"
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    return () => {
      document.body.style.overflow = prevOverflow
      document.body.style.paddingRight = prevPaddingRight
    }
  }, [])

  function handleClose() {
    if (useBackNavigation) {
      router.back()
    } else {
      router.push("/writing")
    }
  }

  // Close on backdrop click
  function handleBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
    if (e.target === dialogRef.current) {
      handleClose()
    }
  }

  // Handle native dialog close (e.g., Escape key)
  function handleDialogClose() {
    handleClose()
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={handleDialogClose}
      onClick={handleBackdropClick}
      className="backdrop:bg-black/20 backdrop:backdrop-blur-sm bg-transparent p-0 m-0 max-w-none w-full h-full open:flex items-center justify-center"
    >
      <article className="hide-scroll bg-neutral-50 dark:bg-[#111] border border-neutral-500/10 rounded-lg w-full max-w-sm max-h-[90vh] overflow-y-auto px-8 pt-2 pb-12 mx-4 relative shadow-sm">
        <div className="sticky top-0 z-99 flex justify-end h-fit">
          <button
            onClick={handleClose}
            aria-label="Close"
            className="cursor-pointer mt-2 -mr-4 shadow-sm border-2 border-mist-500/30 rounded-full p-1 text-mist-500/80 bg-neutral-50 dark:bg-[#111]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <Grain />
        {children}
      </article>
    </dialog>
  )
}