import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
}

const NavLink = ({ href, children, className = "" }: NavLinkProps) => {
    return (
        <Link
            href={href}
            className={`hover:text-blue-600 transition-colors relative group py-2 ${className}`}
        >
            {children}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
        </Link>
    );
};

export default NavLink;
