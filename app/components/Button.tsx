import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    className?: string;
    target?: string;
    rel?: string;
}

const Button = ({
    children,
    href,
    onClick,
    variant = "primary",
    className = "",
    target,
    rel
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0";

    const variants = {
        primary: "bg-gradient-to-r from-blue-400 to-orange-400 text-white shadow-lg hover:shadow-xl",
        secondary: "bg-white/10 backdrop-blur-md border border-white/20 text-gray-800 hover:bg-white/20",
        outline: "border-2 border-blue-500 text-blue-600 hover:bg-blue-50",
        ghost: "text-gray-600 hover:text-blue-600 bg-transparent hover:bg-black/5"
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        if (href.startsWith("http")) {
            return (
                <a
                    href={href}
                    className={combinedClassName}
                    target={target}
                    rel={rel}
                >
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={combinedClassName}>
            {children}
        </button>
    );
};

export default Button;
