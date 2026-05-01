"use client";

import { Reveal } from "./effects/reveal";
import { SlLocationPin } from "react-icons/sl";

export function Hero() {
  return (
    <section className="pt-20 pb-16">
      <Reveal>
        <h1 className="text-4xl font-light leading-tight mb-4">
          Kane Lariviere
        </h1>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="flex items-center gap-2 text-sm">
            <p className="text-mist-600 dark:text-mist-400">Software Engineer</p>
            <span className="text-mist-500">&bull;</span>
            <p className="text-mist-600 dark:text-mist-400">QA Analyst</p>
            <span className="text-mist-500">&bull;</span>
            <div className="flex items-center gap-1 text-mist-600 dark:text-mist-400">
                <SlLocationPin />
                <p>North Carolina</p>    
            </div>
        </div>
      </Reveal>
    </section>
  );
}
