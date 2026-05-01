import Link from "next/link"
import { BsEnvelope } from "react-icons/bs"
import { FaGithub, FaLinkedin, FaTwitch } from "react-icons/fa"
import { LuArrowUpRight } from "react-icons/lu"

export default function Contact() {
    return (
        <div className="pt-4 divide-y divide-neutral-200 dark:divide-neutral-800 text-sm *:py-4">
            <Link
                href="mailto:hello@knlrvr.dev"
                className="group flex justify-between"
                target="_blank"
            >
                <div className="flex items-center gap-2 text-mist-600 dark:text-mist-400">
                    <BsEnvelope />
                    <p className="">Email <span className="italic">(preferred)</span></p>
                </div>
                <div className="flex items-center gap-2 group-hover:text-mist-400 transition-colors duration-150">
                    <p className="font-medium tracking-tighter">hello@knlrvr.dev</p>
                    <LuArrowUpRight />
                </div>
            </Link>

            <Link
                href="https://www.linkedin.com/in/kane-lariviere"
                className="group flex justify-between"
                target="_blank"    
            >
                <div className="flex items-center gap-2 text-mist-600 dark:text-mist-400">
                    <FaLinkedin />
                    <span className="">LinkedIn</span>
                </div>                
                <div className="flex items-center gap-2 group-hover:text-mist-400 transition-colors duration-150">
                    <p className="font-medium tracking-tighter">kane-lariviere</p>
                    <LuArrowUpRight />
                </div>
            </Link>
        
            <Link
                href="https://www.github.com/knlrvr"
                className="group flex justify-between"
                target="_blank"    
            >
                <div className="flex items-center gap-2 text-mist-600 dark:text-mist-400">
                    <FaGithub />
                    <span className="">GitHub</span>
                </div> 
                <div className="flex items-center gap-2 group-hover:text-mist-400 transition-colors duration-150">
                    <p className="font-medium tracking-tighter">@knlrvr</p>
                    <LuArrowUpRight />
                </div>
            </Link>

            <Link
                href="https://www.twitch.tv/knlrvr"
                className="group flex justify-between"
                target="_blank"    
            >
                <div className="flex items-center gap-2 text-mist-600 dark:text-mist-400">
                    <FaTwitch />
                    <span className="">Twitch</span>
                </div> 
                <div className="flex items-center gap-2 group-hover:text-mist-400 transition-colors duration-150">
                    <p className="font-medium tracking-tighter">@knlrvr</p>
                    <LuArrowUpRight />
                </div>
            </Link>

        </div>
    )
}