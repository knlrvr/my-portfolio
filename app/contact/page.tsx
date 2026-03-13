import Link from "next/link";
import PageTop from "../components/page-top";
import { Metadata } from "next";
import { SectionBreakSmall } from "../components/section-break";

export const metadata: Metadata = {
    title: 'Kane Lariviere | Contact',
    description: 'Kane Lariviere • Software Engineer • Contact',
  }

export default function Contact() {
    return (
        <div className="max-w-2xl mx-auto mb-12">
            <PageTop 
                title="Contact"
                desc="How to get in touch with me."
            />

            <div className="flex flex-col text-sm ">
                
                <div className="">
                    <SectionBreakSmall label="Personal" />
                    <ul className="mt-1">
                        <li className="flex justify-between items-center">
                           <p>Email <em>(preferred)</em></p>
                            <Link className="text-neutral-700 dark:text-neutral-300 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:decoration-neutral-300 transition duration-100" 
                                href="mailto:hello@knlrvr.com">
                                hello@knlrvr.com
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="">
                    <SectionBreakSmall label="Professional" />
                    <ul className="mt-1 space-y-1">
                        <li className="flex justify-between items-center">
                           <p className="">LinkedIn</p>
                            <Link className="text-neutral-700 dark:text-neutral-300 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:decoration-neutral-300 transition duration-100" 
                                href="https://www.linkedin.com/in/kane-lariviere">
                                kane-lariviere
                            </Link>
                        </li>
                        <li className="flex justify-between items-center">
                           <p className="">GitHub</p>
                            <Link className="text-neutral-700 dark:text-neutral-300 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:decoration-neutral-300 transition duration-100" 
                                href="https://www.github.com/knlrvr">
                                @knlrvr
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="">
                    <SectionBreakSmall label="Social" />
                    <ul className="mt-1 space-y-1">
                        <li className="flex justify-between items-center">
                           <p className="">Twitch</p>
                            <Link className="text-neutral-700 dark:text-neutral-300 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:decoration-neutral-300 transition duration-100" 
                                href="https://www.twitch.tv/knlrvr">
                                knlrvr
                            </Link>
                        </li>
                        <li className="flex justify-between items-center">
                           <p className="">Bluesky</p>
                            <Link className="text-neutral-700 dark:text-neutral-300 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:decoration-neutral-300 transition duration-100" 
                                href="https://bsky.app/profile/knlrvr.dev">
                                @knlrvr.dev
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="">
                    <SectionBreakSmall label="Music" />
                    <ul className="mt-1 space-y-1">
                        <li className="flex justify-between items-center">
                           <p className="">Spotify</p>
                            <Link className="text-neutral-700 dark:text-neutral-300 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:decoration-neutral-300 transition duration-100" 
                                href="https://open.spotify.com/track/6mKFrX61Q81ie7KA5iXVcu?si=71e3bdf3b35a4879">
                                glasslight
                            </Link>
                        </li>
                        <li className="flex justify-between items-center">
                           <p className="">Apple Music</p>
                            <Link className="text-neutral-700 dark:text-neutral-300 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-500 dark:hover:decoration-neutral-300 transition duration-100" 
                                href="https://music.apple.com/us/album/seasonal-single/1676331337">
                                glasslight
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}