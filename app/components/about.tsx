"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

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
                <span className="font-bold">{greeting}</span>
                <p className="text-neutral-600 dark:text-neutral-400 blog">
                    I&apos;m a <span className="underline underline-offset-2 decoration-neutral-500">software engineer</span>,
                    artist, and d&d nerd living in North Carolina. Currently working as a <span className="text-[#111] dark:text-neutral-200 underline underline-offset-2 decoration-neutral-500">QA Analyst</span>.
                    Focused on crafting engaging and memorable experiences while exploring sustainability and advocating 
                    for a greener web. <Link href="https://github.com/knlrvr" className="underline underline-offset-2 decoration-neutral-500 hover:decoration-neutral-300 transition-colors duration-150">Always shipping</Link>.
                </p>
            </div>
        </div>
    )
}