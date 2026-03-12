"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";

export default function About() {

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) setGreeting("Good morning!");
    else if (currentHour < 18) setGreeting("Good afternoon!");
    else setGreeting("Good evening!");
  }, []);

    return (
        <div className="text-sm">
            <div className="flex flex-col gap-4 pb-4">

                <p className="text-sm">
                    <span className="inline-flex tracking-tight font-medium">{greeting}</span> <br />
                    I&apos;m a software engineer,
                    artist, and d&d nerd living in North Carolina. Currently working as a QA Engineer, building tools that make teams faster.&nbsp;
                    <Link href="https://github.com/knlrvr" className="group inline-flex items-center gap-1 text-xs group w-fit border border-neutral-300 dark:border-neutral-700 px-2 py-0.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-150">
                        <span className="text-neutral-700 dark:text-neutral-300">
                            Always Shipping
                        </span>
                        <LuArrowUpRight className="mt-0.5 text-[#FF2D20] group-hover:-translate-y-px group-hover:translate-x-px transition-transform duration-150" />
                    </Link>                
                </p>
            </div>
        </div>
    )
}