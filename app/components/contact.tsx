import Link from "next/link"
import { BsEnvelope } from "react-icons/bs"
import { FaGithub, FaLinkedin, FaTwitch } from "react-icons/fa"
import { LuArrowUpRight } from "react-icons/lu"
import { Reveal } from "./effects/reveal"
import SectionStrip from "./section-strip"

export default function Contact() {
    return (
        <>
        <SectionStrip label="contact" number="04" />
        <div id="contact" className="divide-y divide-[#F2F0E9] dark:divide-[#F2F0E9]/5 text-sm">
            <Reveal delay={0.16}>
                <Link
                    href="mailto:hello@knlrvr.dev"
                    className="group flex justify-between py-6 px-2 hover:bg-[#F2F0E9] dark:hover:bg-[#F2F0E9]/5 transition-colors duration-150"
                    target="_blank"
                >
                    <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                        <BsEnvelope />
                        <p className="">Email <span className="italic">(preferred)</span></p>
                    </div>
                    <div className="flex items-center gap-2 group-hover:text-orange transition-colors duration-150">
                        <p className="font-medium tracking-tighter">hello@knlrvr.dev</p>
                        <LuArrowUpRight className="group-hover:text-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"/>
                    </div>
                </Link>
            </Reveal>

            <Reveal delay={0.24}>
                <Link
                    href="https://www.linkedin.com/in/kane-lariviere"
                    className="group flex justify-between py-6 px-2 hover:bg-[#F2F0E9] dark:hover:bg-[#F2F0E9]/5 transition-colors duration-150"
                    target="_blank"    
                >
                    <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                        <FaLinkedin />
                        <span className="">LinkedIn</span>
                    </div>                
                    <div className="flex items-center gap-2 group-hover:text-orange transition-colors duration-150">
                        <p className="font-medium tracking-tighter">kane-lariviere</p>
                        <LuArrowUpRight className="group-hover:text-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"/>
                    </div>
                </Link>
            </Reveal>

            <Reveal delay={0.32}>
                <Link
                    href="https://www.github.com/knlrvr"
                    className="group flex justify-between py-6 px-2 hover:bg-[#F2F0E9] dark:hover:bg-[#F2F0E9]/5 transition-colors duration-150"
                    target="_blank"    
                >
                    <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                        <FaGithub />
                        <span className="">GitHub</span>
                    </div> 
                    <div className="flex items-center gap-2 group-hover:text-orange transition-colors duration-150">
                        <p className="font-medium tracking-tighter">@knlrvr</p>
                        <LuArrowUpRight className="group-hover:text-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"/>
                    </div>
                </Link>
            </Reveal>

            <Reveal delay={0.40}>
                <Link
                    href="https://www.twitch.tv/knlrvr"
                    className="group flex justify-between py-6 px-2 hover:bg-[#F2F0E9] dark:hover:bg-[#F2F0E9]/5 transition-colors duration-150"
                    target="_blank"    
                >
                    <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                        <FaTwitch />
                        <span className="">Twitch</span>
                    </div> 
                    <div className="flex items-center gap-2 group-hover:text-orange transition-colors duration-150">
                        <p className="font-medium tracking-tighter">@knlrvr</p>
                        <LuArrowUpRight className="group-hover:text-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"/>
                    </div>
                </Link>
            </Reveal>
        </div>
        </>
    )
}