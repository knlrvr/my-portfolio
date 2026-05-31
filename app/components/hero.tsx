import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-24"
    >
      <div className="flex flex-col gap-10">
        <h1 className="text-[clamp(52px,8vw,100px)] font-light leading-[0.98] tracking-[-0.03em]">
          <span className="block">Hi, I&apos;m</span>
          <span className="block">
            <span className="bg-orange text-white not-italic px-2 ml-1">
              Kane.
            </span>
          </span>
        </h1>

        <div className="pb-1.5">
          <p className="text-[14px] leading-[1.75] text-neutral-600 dark:text-neutral-400 mb-8">
            Software engineer, artist, and d&amp;d nerd living in North Carolina.
            Currently working as a QA Engineer, building tools that help teams
            trust what they ship.
          </p>
          <Link 
                href="https://github.com/knlrvr"
                className="group flex items-center w-fit mt-8 text-xs"    
            >
                <span className="px-4 py-2 rounded-full border border-orange group-hover:bg-orange group-hover:text-bg transition-colors duration-150">
                    Always Shipping
                </span>
                <div className="bg-orange text-bg p-3 rounded-full">
                    <LuArrowUpRight className="group-hover:-translate-y-px group-hover:translate-x-px transition-transform duration-150"/>
                </div>
            </Link>
        </div>
      </div>
    </section>
  )
}