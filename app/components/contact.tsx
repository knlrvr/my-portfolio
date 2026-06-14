import Link from "next/link"
import { BsEnvelope } from "react-icons/bs"
import { FaGithub, FaLinkedin, FaTwitch } from "react-icons/fa"
import { LuArrowUpRight } from "react-icons/lu"
import { Reveal } from "./effects/reveal"
import SectionStrip from "./section-strip"

export default function Contact() {
    return (
        <>
        <SectionStrip label="get in touch" number="04" />
        <div id="contact" className="divide-y divide-neutral-200 dark:divide-neutral-800 text-sm">
            <Reveal delay={0.16}>
                <Link
                    href="mailto:hello@knlrvr.dev"
                    className="group flex justify-between py-6 transition-colors duration-150"
                    target="_blank"
                >
                    <div className="flex items-center gap-2 group-hover:text-neutral-400 dark:group-hover:text-neutral-500 transition-colors duration-150">
                        <BsEnvelope />
                        <p className="">Email <span className="italic">(preferred)</span></p>
                    </div>
                    <div className="flex items-center gap-2">
                        <LuArrowUpRight className="group-hover:text-neutral-400 dark:group-hover:text-neutral-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"/>
                    </div>
                </Link>
            </Reveal>

            <Reveal delay={0.24}>
                <Link
                    href="https://www.linkedin.com/in/kane-lariviere"
                    className="group flex justify-between py-6 transition-colors duration-150"
                    target="_blank"    
                >
                    <div className="flex items-center gap-2 group-hover:text-neutral-400 dark:group-hover:text-neutral-500 transition-colors duration-150">
                        <FaLinkedin />
                        <span className="">LinkedIn</span>
                    </div>                
                    <div className="flex items-center gap-2">
                        <LuArrowUpRight className="group-hover:text-neutral-400 dark:group-hover:text-neutral-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"/>
                    </div>
                </Link>
            </Reveal>

            <Reveal delay={0.32}>
                <Link
                    href="https://www.github.com/knlrvr"
                    className="group flex justify-between py-6  transition-colors duration-150"
                    target="_blank"    
                >
                    <div className="flex items-center gap-2 group-hover:text-neutral-400 dark:group-hover:text-neutral-500 transition-colors duration-150">
                        <FaGithub />
                        <span className="">GitHub</span>
                    </div> 
                    <div className="flex items-center gap-2">
                        <LuArrowUpRight className="group-hover:text-neutral-400 dark:group-hover:text-neutral-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"/>
                    </div>
                </Link>
            </Reveal>

            <Reveal delay={0.40}>
                <Link
                    href="https://www.twitch.tv/knlrvr"
                    className="group flex justify-between py-6 transition-colors duration-150"
                    target="_blank"    
                >
                    <div className="flex items-center gap-2 group-hover:text-neutral-400 dark:group-hover:text-neutral-500 transition-colors duration-150">
                        <FaTwitch />
                        <span className="">Twitch</span>
                    </div> 
                    <div className="flex items-center gap-2">
                        <LuArrowUpRight className="group-hover:text-neutral-400 dark:group-hover:text-neutral-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"/>
                    </div>
                </Link>
            </Reveal>
        </div>
        </>
    )
}