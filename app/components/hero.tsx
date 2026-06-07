"use client"

import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { Reveal } from "./effects/reveal";
import { useEffect, useState } from "react";

export default function Hero() {

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) setGreeting("Good morning!");
    else if (currentHour < 18) setGreeting("Good afternoon!");
    else setGreeting("Good evening!");
  }, []);

  return (
    <section
      id="hero"
      className="pt-32 pb-24"
    >
      <div className="flex flex-col gap-10">
        <Reveal delay={0.08}>
          <h1 className="text-[clamp(52px,8vw,80px)] font-light leading-[0.98] tracking-[-0.03em]">
            <span className="block">Hi, I&apos;m</span>
            <span className="block">
              <span className="bg-olive dark:bg-orange text-white not-italic px-2 ml-px">
                Kane.
              </span>
            </span>
          </h1>
        </Reveal>

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
                  className="group flex gap-px items-center w-fit mt-8 text-xs"    
              >
                  <span className="px-4 py-2 rounded-full border border-olive dark:border-orange group-hover:bg-olive dark:group-hover:bg-orange group-hover:text-bg transition-colors duration-150">
                      Always Shipping
                  </span>
                  <div className="bg-olive dark:bg-orange text-bg p-3 rounded-full">
                      <LuArrowUpRight className="group-hover:-translate-y-px group-hover:translate-x-px transition-transform duration-150"/>
                  </div>
              </Link>
            </Reveal>
        </div>
      </div>
    </section>
  )
}