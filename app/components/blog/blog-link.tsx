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
                className='inline-flex items-center underline underline-offset-2 decoration-mist-300 hover:decoration-mist-500 dark:decoration-mist-500 dark:hover:decoration-mist-300 transition-colors duration-150'>
                {children}
            </Link>
        )
    }

    return (
        <Link href={href} target='_blank' rel="noopener noreferrer" 
            className="underline underline-offset-2 decoration-mist-300 hover:decoration-mist-500 dark:decoration-mist-500 dark:hover:decoration-mist-300 transition-colors duration-150">
            {children} 
            <RxArrowTopRight className="inline-block" />
        </Link>
    );
}