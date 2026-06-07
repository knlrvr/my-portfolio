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
                className='inline-flex items-center underline underline-offset-2 decoration-neutral-300 hover:decoration-olive dark:hover:decoration-orange transition-colors duration-150'>
                {children}
            </Link>
        )
    }

    return (
        <Link href={href} target='_blank' rel="noopener noreferrer" 
            className="underline underline-offset-2 decoration-neutral-500 hover:decoration-olive dark:hover:decoration-orange transition-colors duration-150">
            {children} 
            <RxArrowTopRight className="inline-block text-olive dark:text-orange" />
        </Link>
    );
}