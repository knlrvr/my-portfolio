import Link from "next/link"
import { LuArrowUpRight } from "react-icons/lu"
import { GridLayout, GridRow, GridSpacer } from "./gridlayout"
import { BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs"

export default function Contact() {
    return (
        <section className="">
            <GridLayout>

                <GridSpacer height="h-24" />

                <GridRow className="relative">
                <p className="text-[11px] text-neutral-500 mx-2">
                    contact.
                </p>
                </GridRow>

                <GridRow className="">
                    <Link href="mailto:hello@knlrvr.dev"
                        className="group py-6 flex items-center justify-between hover:bg-[#F2F0E9] dark:hover:bg-[#F2F0E9]/5 transition-colors duration-150"
                    >
                        <div className="flex items-center mx-2 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-500 transition-colors duration-150">
                            <BsEnvelope />
                            <p className="text-sm font-medium tracking-tighter mx-2">
                                Email
                            </p>
                        </div>
                        <span className="mx-2 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-500 transition-all duration-200">
                            <LuArrowUpRight />
                        </span>
                    </Link>
                </GridRow>

                <GridRow className="">
                    <Link href="https://www.linkedin.com/in/kane-lariviere"
                        className="group py-6 flex items-center justify-between hover:bg-[#F2F0E9] dark:hover:bg-[#F2F0E9]/5 transition-colors duration-150"
                    >
                        <div className="flex items-center mx-2 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-500 transition-colors duration-150">
                            <BsLinkedin />
                            <p className="text-sm font-medium tracking-tighter mx-2">
                                LinkedIn
                            </p>
                        </div>
                        <span className="mx-2 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-500 transition-all duration-200">
                            <LuArrowUpRight />
                        </span>
                    </Link>
                </GridRow>

                <GridRow className="">
                    <Link href="https://www.github.com/knlrvr"
                        className="group py-6 flex items-center justify-between hover:bg-[#F2F0E9] dark:hover:bg-[#F2F0E9]/5 transition-colors duration-150"
                    >
                        <div className="flex items-center mx-2 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-500 transition-colors duration-150">
                            <BsGithub />
                            <p className="text-sm font-medium tracking-tighter mx-2">
                                GitHub
                            </p>
                        </div>
                        <span className="mx-2 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-500 transition-all duration-200">
                            <LuArrowUpRight />
                        </span>
                    </Link>
                </GridRow>

                <GridSpacer height="h-24" />
            </GridLayout>
        </section>
    )
}