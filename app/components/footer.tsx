import Link from "next/link";
import { BsEnvelope, BsGithub, BsLinkedin, BsTwitch } from "react-icons/bs";


export default function Footer() {
    return (
        <footer className="max-w-2xl mx-auto text-xs mt-4 text-neutral-500">
            <hr className="border-neutral-400" />

            <div className="mt-4 flex justify-between items-center">
                <p>&copy; 2025 Kane Lariviere.</p>

                <ul className="flex items-center gap-4">
                    <li>
                        <Link href="/colophon"
                            className="hover:underline underline-offset-2"
                        >
                            Colophon
                        </Link>
                    </li>
                    <li>
                        <Link href="mailto:hello@knlrvr.com" target="_blank"
                            className="hover:underline underline-offset-2"
                        >
                            <BsEnvelope />
                        </Link>
                    </li> 
                    <li>
                        <Link href="https://github.com/knlrvr" target="_blank">
                            <BsGithub />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://linkedin.com/in/kane-lariviere" target="_blank">
                            <BsLinkedin />    
                        </Link>
                    </li>
                    <li>
                        <Link href="https://twitch.tv/knlrvr" target="_blank">
                            <BsTwitch />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}