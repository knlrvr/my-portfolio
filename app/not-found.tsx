import Link from "next/link";
import PageList from "./components/page-list";
import PageTop from "./components/page-top";

export default function NotFound() { 
    return ( 
        <div className="max-w-2xl mx-auto"> 
            <PageTop 
                title="Not Found!" 
                desc="Oh no. What did you do?" 
            />

        <div className="my-8">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                <span className="underline underline-offset-2 decoration-neutral-300">Sorry about that</span>! There doesn&apos;t seem to be anything here. You can check the URL and try again, click one of the links below,
                or return to the <Link href="/" className="underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">home page</Link>.
            </p>
        </div>

        <PageList />


    </div>
)
}