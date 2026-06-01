import Link from "next/link";
import { GridLayout, GridRow, GridSpacer } from "./gridlayout";
import { LuArrowUpRight } from "react-icons/lu";

export default function HeroSection() {
  return (
    <section className="">
      <GridLayout>

        <GridSpacer height="h-24" />

        <GridRow className=" relative">
          <p className="text-[11px] text-neutral-500 mx-2">
            about.
          </p>
        </GridRow>

        <GridRow className="py-12">
          <h1 className="mx-2 text-[clamp(36px,7vw,64px)] font-normal leading-[1.1] tracking-[-0.02em]">
            Hi, I&apos;m Kane
          </h1>
        </GridRow>

        <GridRow className="py-4">
          <p className="mx-2 text-sm text-neutral-600 dark:text-neutral-400">
            I&apos;m a software engineer, artist, and d&d nerd living in North Carolina. Currently working as a QA Engineer, building tools that help teams trust what they ship. 
          </p>
        </GridRow>

        <GridRow className="py-4">
            <Link 
                href="https://www.github.com/knlrvr"
                className="group flex items-center w-fit text-xs mx-2"    
            >
                <span className="px-4 py-2 rounded-full border border-[#F2F0E9] dark:border-[#F2F0E9]/5 text-neutral-700 dark:text-neutral-300 group-hover:bg-[#F2F0E9] dark:group-hover:bg-[#F2F0E9]/5 group-hover:border-[#F2F0E9] dark:group-hover:border-[#F2F0E9]/0 transition-colors duration-150">
                    Always Shipping
                </span>
                <div className="bg-[#F2F0E9] dark:bg-[#F2F0E9]/5 text-neutral-700 dark:text-neutral-300 p-2.5 rounded-full">
                    <LuArrowUpRight className="group-hover:-translate-y-px group-hover:translate-x-px transition-transform duration-150"/>
                </div>
            </Link>
        </GridRow>

      </GridLayout>
    </section>
  );
}

// hover:bg-[#F2F0E9] dark:hover:bg-[#F2F0E9]/5