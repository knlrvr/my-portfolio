import Link from "next/link";
import PageTop from "../components/page-top";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Kane Lariviere | Contact',
    description: 'Kane Lariviere • Software Developer • Contact',
  }

export default function Contact() {
    return (
        <div className="max-w-2xl mx-auto mb-12">
            <PageTop 
                title="Kane Lariviere"
                desc="Contact"
            />

            <div className="flex flex-col space-y-16 my-4 text-sm">
                
                <div className="">
                    <span className="font-medium tracking-tight">Personal</span>
                    <ul className="mt-1">
                        <li className="flex justify-between items-center">
                           <p>Email <em className="text-neutral-500">(preferred)</em></p>
                            <Link className="text-neutral-500 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150" 
                                href="mailto:hello@knlrvr.com">
                                hello@knlrvr.com
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="">
                    <span className="font-medium tracking-tight">Work</span>
                    <ul className="mt-1 space-y-1">
                        <li className="flex justify-between items-center">
                           <p>LinkedIn</p>
                            <Link className="text-neutral-500 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150" 
                                href="https://www.linkedin.com/in/kane-lariviere">
                                kane-lariviere
                            </Link>
                        </li>
                        <li className="flex justify-between items-center">
                           <p>GitHub</p>
                            <Link className="text-neutral-500 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150" 
                                href="https://www.github.com/knlrvr">
                                @knlrvr
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="">
                    <span className="font-medium tracking-tight">Misc</span>
                    <ul className="mt-1 space-y-1">
                        <li className="flex justify-between items-center">
                           <p>Twitch</p>
                            <Link className="text-neutral-500 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150" 
                                href="https://www.twitch.tv/knlrvr">
                                knlrvr
                            </Link>
                        </li>
                        <li className="flex justify-between items-center">
                           <p>Bluesky</p>
                            <Link className="text-neutral-500 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150" 
                                href="https://bsky.app/profile/knlrvr.dev">
                                @knlrvr.dev
                            </Link>
                        </li>
                        <li className="flex justify-between items-center">
                           <p>Music</p>
                            <Link className="text-neutral-500 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150" 
                                href="https://open.spotify.com/track/6mKFrX61Q81ie7KA5iXVcu?si=71e3bdf3b35a4879">
                                spotify
                            </Link>
                        </li>
                        <li className="flex justify-between items-center">
                           <p>Music</p>
                            <Link className="text-neutral-500 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150" 
                                href="https://music.apple.com/us/album/seasonal-single/1676331337">
                                apple music
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}