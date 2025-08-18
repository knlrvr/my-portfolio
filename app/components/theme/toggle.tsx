"use client"

import * as React from "react"
import { BiMoon, BiSun } from "react-icons/bi"
import { useTheme } from "next-themes"
import Image from "next/image";

export function Toggle() {
  const { setTheme } = useTheme();
  const [showImage, setShowImage] = React.useState<boolean>(false);
  const [isVisible, setIsVisible] = React.useState<boolean>(false)

  const handleImage = () => {
    setTheme("light")
    setShowImage(true)
    setIsVisible(true)

    setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    setTimeout(() => {
      setShowImage(false)
    }, 3000)
  }

  return (
    <div className="relative">
      <div className="">
        <button onClick={() => {
          setTheme("dark");
          setShowImage(false);
        }}>
          <BiMoon className="inline-block dark:hidden cursor-pointer" />
        </button>

        <button onClick={handleImage}>
          <BiSun className="hidden dark:inline-block cursor-pointer" />
        </button>

        <span className="sr-only">Toggle theme</span>
      </div>

      {showImage && (
        <div
          className={`absolute z-[9999] w-32 h-fit right-0 top-8 transition-opacity duration-300 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src="/myeyes.png"
            alt="light mode activated"
            width={1000}
            height={1000}
            className="grayscale bg-white bg-blend-multiply"
          />
        </div>
      )}
    </div>
  )
}
