"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Laptop } from "lucide-react";

type Theme = "light" | "dark" | "system";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("system");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        if (savedTheme) {
            setTheme(savedTheme);
            applyTheme(savedTheme);
        } else {
            applyTheme("system");
        }
    }, []);

    const applyTheme = (newTheme: Theme) => {
        const root = document.documentElement;
        const isDark =
            newTheme === "dark" ||
            (newTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    };

    const toggleTheme = () => {
        let newTheme: Theme;
        if (theme === "light") newTheme = "dark";
        else if (theme === "dark") newTheme = "system";
        else newTheme = "light";

        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    };

    if (!mounted) {
        return <div className="w-9 h-9" />; // Placeholder to avoid mismatch
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-800 dark:text-gray-200 backdrop-blur-sm border border-white/20 transition-all duration-300"
            aria-label="Toggle theme"
            title={`Theme: ${theme}`}
        >
            {theme === "light" && <Sun className="w-5 h-5" />}
            {theme === "dark" && <Moon className="w-5 h-5" />}
            {theme === "system" && <Laptop className="w-5 h-5" />}
        </button>
    );
}
