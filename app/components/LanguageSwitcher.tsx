"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
    const pathname = usePathname();

    // Minimal language maps
    const languages = [
        { code: "en", label: "En" },
        { code: "fr", label: "Fr" },
        { code: "ar", label: "Ar" }
    ];

    const redirectedPathName = (locale: string) => {
        if (!pathname) return "/";
        const segments = pathname.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <div className="flex gap-2 bg-white/20 backdrop-blur-sm rounded-lg p-1 border border-white/30">
            {languages.map((lang) => (
                <Link
                    key={lang.code}
                    href={redirectedPathName(lang.code)}
                    className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${currentLang === lang.code
                            ? "bg-white text-gray-900 shadow-sm"
                            : "text-gray-700 hover:bg-white/50"
                        }`}
                >
                    {lang.label}
                </Link>
            ))}
        </div>
    );
}
