"use client"

import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { Reveal } from "./effects/reveal";
import { useEffect, useState } from "react";
import PageTop from "./page-top";

export default function Hero() {

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) setGreeting("Good morning!");
    else if (currentHour < 18) setGreeting("Good afternoon!");
    else setGreeting("Good evening!");
  }, []);

  return (
    <>

    <PageTop
      title="Hi, I'm Kane"
      description="Software Engineer • NC, US"
      back={false}
    />

    <section
      id="hero"
      className=""
    >
        <div className="pb-1.5">
          <Reveal delay={0.16}>
            <p className="text-[14px] leading-[1.75] text-neutral-600 dark:text-neutral-400 mb-8">
              <span className="font-medium tracking-tighter text-neutral-700 dark:text-neutral-300">{greeting}</span> I&apos;m a software engineer, artist, and d&amp;d nerd living in North Carolina.
              Currently working as a QA Engineer, building tools that help teams
              trust what they ship.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <Link 
              href="https://github.com/knlrvr"
              className="group flex gap-2 items-center w-fit mt-12 text-xs pl-4 pr-2 py-2 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full"    
            >
              <span className="font-medium tracking-tighter">Always Shipping</span>
              <div className="bg-neutral-800 dark:bg-neutral-200 text-neutral-100 dark:text-neutral-800 rounded-full p-2">
                <LuArrowUpRight className="group-hover:-translate-y-px group-hover:translate-x-px transition-transform duration-150"/>
              </div>
            </Link>
          </Reveal>
        </div>
    </section>
    </>
  )
}