import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";

interface BlogLinkProps {
    href: string;
    children: React.ReactNode;
}

export function BlogLink({ href, children }: BlogLinkProps) {

    if (href.startsWith('/')) {
        return (
            <Link href={href}
                className='inline-flex items-center underline underline-offset-2 decoration-neutral-500 hover:decoration-neutral-400 dark:hover:decoration-neutral-600 transition-colors duration-150'>
                {children}
            </Link>
        )
    }

    return (
        <Link href={href} target='_blank' rel="noopener noreferrer" 
            className="underline underline-offset-2 decoration-neutral-500 hover:decoration-neutral-400 dark:hover:decoration-neutral-600 transition-colors duration-150">
            {children} 
            <RxArrowTopRight className="inline-block text-neutral-600 dark:text-neutral-400" />
        </Link>
    );
}