import Link from "next/link"
import { LuArrowRight } from "react-icons/lu"
import { GridLayout, GridRow, GridSpacer } from "./gridlayout"

export default function Links() {

    const sha = process.env.COMMIT_SHA;
    const shortSha = sha?.slice(0, 7);
    const commitUrl =
        sha && sha !== 'dev'
        ? `${process.env.REPO_URL}/commit/${sha}`
        : null;

    return (
        <section className="">
            <GridLayout>

                <GridRow className="relative">
                <p className="text-[11px] text-neutral-500 mx-2">
                    links.
                </p>
                </GridRow>

                <GridRow className="">
                    <Link href="/writing"
                        className="group py-6 flex items-center justify-between hover:bg-[#F2F0E9] dark:hover:bg-[#F2F0E9]/5 transition-colors duration-150"
                    >
                        <p className="text-sm font-medium tracking-tighter mx-2 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-500 transition-colors duration-150">
                            writing
                        </p>
                        <span className="mx-2 shrink-0 group-hover:translate-x-0.5 group-hover:text-neutral-500 transition-all duration-200">
                            <LuArrowRight />
                        </span>
                    </Link>
                </GridRow>

                <GridRow className="">
                    <Link href="/uses"
                        className="group py-6 flex items-center justify-between hover:bg-[#F2F0E9] dark:hover:bg-[#F2F0E9]/5 transition-colors duration-150"
                    >
                        <p className="text-sm font-medium tracking-tighter mx-2 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-500 transition-colors duration-150">
                            uses
                        </p>
                        <span className="mx-2 shrink-0 group-hover:translate-x-0.5 group-hover:text-neutral-500 transition-all duration-200">
                            <LuArrowRight />
                        </span>
                    </Link>
                </GridRow>

                <GridRow className="">
                    <Link href="/colophon"
                        className="group py-6 flex items-center justify-between hover:bg-[#F2F0E9] dark:hover:bg-[#F2F0E9]/5 transition-colors duration-150"
                    >
                        <p className="text-sm font-medium tracking-tighter mx-2 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-500 transition-colors duration-150">
                            colophon
                        </p>
                        <span className="mx-2 shrink-0 group-hover:translate-x-0.5 group-hover:text-neutral-500 transition-all duration-200">
                            <LuArrowRight />
                        </span>
                    </Link>
                </GridRow>

                <GridSpacer height="h-24" />

                <GridRow className="py-2">
                    <div className="flex items-center gap-2 text-[11px]">
                        <p className="mx-2 text-neutral-400 dark:text-neutral-600">&copy; 2026 Kane Lariviere.</p>
                        <p className="text-neutral-500 mb-0.5">&bull;</p>
                        {sha && (
                            commitUrl ? (
                            <Link
                                href={commitUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-[0.625rem] text-neutral-400 dark:text-neutral-600 hover:text-neutral-500 tracking-wider transition-colors duration-150"
                            >
                                {shortSha}
                            </Link>
                            ) : (
                            <span className="font-mono text-[0.625rem] text-neutral-400 dark:text-neutral-600 tracking-wider">
                                f00f00
                            </span>
                            )
                        )}
                    </div>
                </GridRow>

                <GridSpacer height="h-12" />

            </GridLayout>
        </section>
    )
}