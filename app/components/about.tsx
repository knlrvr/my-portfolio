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
        <div className="text-sm my-8">
            <div className="flex flex-col gap-4 pb-4">
                <span className="font-bold text-neutral-500">{greeting}</span>
                <p className="blog">
                    I&apos;m a <span className="text-neutral-600 dark:text-neutral-400 underline underline-offset-4 decoration-neutral-500">software engineer</span>,
                    artist, and d&d nerd living in North Carolina. Currently working as a <span className="text-neutral-600 dark:text-neutral-400 underline underline-offset-4 decoration-neutral-500">QA Analyst</span>.
                    Focused on crafting engaging and memorable experiences while exploring sustainability and advocating 
                    for a greener web. <Link href="https://github.com/knlrvr" className="text-neutral-600 dark:text-neutral-400 inline-flex items-center gap-0.5 underline underline-offset-4 decoration-neutral-500 hover:decoration-neutral-300 transition-colors duration-150">Always Shipping<LuArrowUpRight className="mt-0.5" /></Link>.
                </p>
            </div>
        </div>
    )
}