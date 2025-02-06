import Link from "next/link";
import { BsEnvelope, BsGithub, BsLinkedin, BsTwitch } from "react-icons/bs";


export default function Footer() {
    return (
        <footer className="max-w-2xl mx-auto text-xs mt-4 text-neutral-500">
            <hr className="border-neutral-400" />

            <div className="mt-4 flex justify-between items-center">
                <p>&copy; 2025 Kane Lariviere.</p>
            </div>
        </footer>
    )
}