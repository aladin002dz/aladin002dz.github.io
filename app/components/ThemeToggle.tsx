"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Laptop } from "lucide-react";

type Theme = "light" | "dark" | "system";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("system");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem("theme") as Theme | null;
        const initial = saved ?? "system";
        setTheme(initial);
        applyTheme(initial);
    }, []);

    const applyTheme = (t: Theme) => {
        const isDark = t === "dark" || (t === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
        document.documentElement.classList.toggle("dark", isDark);
    };

    const toggleTheme = () => {
        const next: Theme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
        setTheme(next);
        localStorage.setItem("theme", next);
        applyTheme(next);
    };

    if (!mounted) return <div className="h-[34px] w-[34px]" />;

    const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Laptop;
    return (
        <button onClick={toggleTheme} aria-label="Toggle theme" title={`Theme: ${theme}`}
            className="grid h-[34px] w-[34px] place-items-center rounded-btn border border-line text-ink transition-colors duration-150 hover:bg-sunken">
            <Icon className="h-4 w-4" />
        </button>
    );
}
