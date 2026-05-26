"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { LuArrowUpRight, LuLightbulb } from "react-icons/lu";
import { Reveal } from "./effects/reveal";
import { Container } from "./container";

export default function About() {

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) setGreeting("Good morning!");
    else if (currentHour < 18) setGreeting("Good afternoon!");
    else setGreeting("Good evening!");
  }, []);

    return (
    <Reveal delay={0.16}>
        <Container
        title="About"
        icon={<LuLightbulb size={20} />}
        iconColor="text-yellow-500"
        >
          <p className="text-sm text-neutral-700 dark:text-neutral-300 ">
              <span className="inline-flex tracking-tighter font-medium mb-1 text-[#111] dark:text-neutral-50">{greeting}</span> <br />
              I&apos;m a software engineer,
              artist, and d&d nerd living in North Carolina. Currently working as a QA Engineer, building tools that help teams trust what they ship.&nbsp;              
          </p>    

          <Link href="https://github.com/knlrvr" className="group flex shadow items-center gap-1 text-xs w-fit mt-8 rounded-sm px-4 py-2 bg-yellow-500 hover:bg-yellow-500/80 transition-colors duration-150">
              <span className="text-[#111]">
                  Always Shipping
              </span>
              <LuArrowUpRight className="mt-0.5 text-[#111] group-hover:-translate-y-px group-hover:translate-x-px transition-transform duration-150" />
          </Link> 
        </Container>
    </Reveal>
    )
}