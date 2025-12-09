'use client'

import Link from "next/link";
import { Metadata } from "next";

import PageTop from "../components/page-top";
import { useMutation, useQuery } from 'convex/react'
import { api } from "@/convex/_generated/api";
import { useState } from "react";
import { SignInButton, SignOutButton, useClerk, useUser } from "@clerk/clerk-react";
import { RxArrowRight } from "react-icons/rx";

// export const metadata: Metadata = {
//     title: 'Kane Lariviere | Colophon',
//     description: 'Kane Lariviere • Software Developer • Colophon',
// }

export default function Colophon() {

    const notes = useQuery(api.notes.getNotes); 
    const createNote = useMutation(api.notes.createNote);
    const [text, setText] = useState<string>('');

    const { user } = useUser();

    return (
        <div className="max-w-2xl mx-auto mb-12">
            <PageTop 
                title="Kane Lariviere"
                desc="Visitors"
            />

            <div className="pt-12">

            {!user && (
                <div className="rounded-full text-sm mb-[2.15rem] w-fit">
                    <SignInButton mode='modal' forceRedirectUrl={window.location.pathname}>
                        <div className="group cursor-pointer flex items-center gap-2">
                            <span className="text-neutral-500 text-xs underline underline-offset-2 decoration-neutral-300 group-hover:decoration-neutral-500 dark:decoration-neutral-500 dark:group-hover:decoration-neutral-300 transition-colors duration-150">Sign In To Leave A Message</span>
                            <span className="text-neutral-500 group-hover:translate-x-1 transition-all duration-150">
                                <RxArrowRight />
                            </span>
                        </div>
                    </SignInButton>
                </div>
            )}

            {user && (
                <div className="mb-10">
                    <form 
                    onSubmit={e => {
                        e.preventDefault();
                        createNote({
                        body: text,
                        author: user?.fullName || user?.username || '',
                        });
                        setText('')
                    }}
                    className="w-full flex flex-col py-2"
                    >

                    <textarea
                        rows={3}
                        value={text} 
                        onChange={e => setText(e.target.value)}
                        className="bg-transparent rounded-md w-[101%] placeholder:text-neutral-500 mr-3 py-2 text-sm border px-2"
                        required
                        placeholder='Leave a note here'
                    />
                    <div className="">
                        <button
                            className="cursor-pointer mt-4 px-6 py-1.5 w-full flex justify-center items-center font-medium text-sm rounded-md bg-[#111] dark:bg-neutral-100 text-neutral-100 dark:text-[#111] hover:bg-neutral-800 dark:hover:bg-neutral-300 transition-colors duration-150">
                                Send
                        </button>
                    </div>
                    </form>
                    <SignOutButton redirectUrl="/visitors">
                        <button
                            className="mt-2 cursor-pointer px-6 py-1.5 w-full flex justify-center items-center font-medium text-sm rounded-md border border-neutral-500 dark:border-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-500 transition-colors duration-200">
                                Sign Out
                        </button>
                    </SignOutButton>
                </div>
                )}

                {notes?.map(note => {
                    return <div key={note._id} className="flex flex-col">
                    <div className="text-sm my-2"> 
                        <span className="text-neutral-600 dark:text-neutral-400">{note.author}:</span>
                        <span className="text-[#111] dark:text-neutral-100 mt-4">&nbsp;{note.body}</span> 
                    </div>
                    </div>
                })}
            </div>
        </div>
    )
}