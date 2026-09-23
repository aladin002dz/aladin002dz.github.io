import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "ghost" | "video";
    size?: "sm" | "md" | "lg";
    className?: string;
    target?: string;
    rel?: string;
}

const base = "inline-flex items-center justify-center font-medium whitespace-nowrap rounded-btn border transition-[background-color,border-color,transform] duration-150 ease-out active:translate-y-px";

const sizes = {
    sm: "h-8 px-3 gap-1.5 text-sm",
    md: "h-[42px] px-[18px] gap-2 text-base",
    lg: "h-[52px] px-6 gap-2.5 text-[17px]",
};

const variants = {
    primary: "bg-accent hover:bg-accent-hover text-on-accent border-transparent",
    secondary: "bg-transparent hover:bg-sunken text-ink border-line-strong",
    ghost: "bg-transparent hover:bg-sunken text-ink border-transparent",
    video: "bg-clay hover:opacity-90 text-on-accent border-transparent",
};

export default function Button({ children, href, onClick, variant = "primary", size = "md", className = "", target, rel }: ButtonProps) {
    const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
    if (href) {
        if (href.startsWith("http") || href.startsWith("mailto:")) {
            return <a href={href} className={cls} target={target} rel={rel}>{children}</a>;
        }
        return <Link href={href} className={cls}>{children}</Link>;
    }
    return <button onClick={onClick} className={cls}>{children}</button>;
}
