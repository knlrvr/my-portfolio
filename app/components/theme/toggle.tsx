"use client"

import * as React from "react"
import { BiMoon, BiSun } from "react-icons/bi"
import { useTheme } from "next-themes"

export function Toggle() {
  const { setTheme } = useTheme()

  return (
    <>
        <div className="">
            <button onClick={() => setTheme("dark")}>
                <BiMoon className="inline-block dark:hidden cursor-pointer" />
            </button>

            <button onClick={() => setTheme("light")}>
                <BiSun className="hidden dark:inline-block cursor-pointer" />
            </button>

            <span className="sr-only">Toggle theme</span>
        </div>
    </>
  )
}
