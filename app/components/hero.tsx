"use client"

import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { Reveal } from "./effects/reveal";
import { useEffect, useState } from "react";

const facts = [
  { label: "Based in", value: "NC, US" },
] as const

export default function Hero() {

  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) setGreeting("Good morning");
    else if (currentHour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  return (
    <section id="hero" className="pt-20 pb-14 sm:px-4 sm:pt-28">
      <Reveal delay={0.08}>
        <h1 className="text-[1.875rem] leading-tight font-normal tracking-tight sm:text-[2.25rem]">
          I&apos;m Kane
        </h1>
      </Reveal>

      <Reveal delay={0.16}>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed tracking-tight text-neutral-500">
          <span className="font-medium text-neutral-700 dark:text-neutral-300">{greeting}!</span>{" "}
          I&apos;m a software engineer, artist, and d&amp;d nerd. Currently building tools
          that help teams <span className="text-neutral-900 dark:text-neutral-100">trust what they ship.</span>
        </p>
      </Reveal>

      <Reveal delay={0.24}>
        <dl className="mt-14 grid grid-cols-2 gap-y-6 border-t border-(--rule) pt-6 sm:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1.5">
              <dt className="font-mono text-[11px] tracking-tighter text-neutral-400 dark:text-neutral-600">
                {fact.label}
              </dt>
              <dd className="text-xs font-medium tracking-tight">{fact.value}</dd>
            </div>
          ))}
          <div className="flex flex-col gap-1.5">
            <dt className="font-mono text-[11px] tracking-tighter text-neutral-400 dark:text-neutral-600">
              Status
            </dt>
            <dd className="text-xs">
              <Link
                href="https://github.com/knlrvr"
                target="_blank"
                className="group inline-flex items-center gap-1 text-xs font-medium tracking-tight transition-colors duration-150 hover:text-neutral-400 dark:hover:text-neutral-500"
              >
                Always shipping
                <LuArrowUpRight className="transition-transform duration-150 group-hover:translate-x-px group-hover:-translate-y-px" />
              </Link>
            </dd>
          </div>
        </dl>
      </Reveal>
    </section>
  )
}
