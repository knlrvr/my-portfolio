"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { Reveal } from "./effects/reveal";

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

                <Reveal delay={0.16}>
                    <p className="text-sm text-mist-600 dark:text-mist-400">
                        <span className="inline-flex tracking-tighter font-medium mb-1 text-[#111] dark:text-neutral-100">{greeting}</span> <br />
                        I&apos;m a software engineer,
                        artist, and d&d nerd living in North Carolina. Currently working as a QA Engineer, building tools that help teams trust what they ship.&nbsp;              
                    </p>
                </Reveal>

                <Reveal delay={0.24}>
                    <Link href="https://github.com/knlrvr" className="group flex items-center gap-1 text-xs w-fit mt-8 rounded-md px-4 py-2 border border-mist-200 dark:border-mist-800 hover:bg-mist-500/5 transition-colors duration-150">
                        <span className="text-mist-700 dark:text-mist-300">
                            Always Shipping
                        </span>
                        <LuArrowUpRight className="mt-0.5 text-mist-700 dark:text-mist-300 group-hover:-translate-y-px group-hover:translate-x-px transition-transform duration-150" />
                    </Link>  
                </Reveal>
            </div>
        </div>
    )
}