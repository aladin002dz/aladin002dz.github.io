"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const languages = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "ar", label: "ع" },
];

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
    const pathname = usePathname();

    // English is served from the bare domain, the other locales from /<lang>.
    const redirectedPathName = (locale: string) => {
        if (locale === "en") return "/";
        if (!pathname || pathname === "/") return `/${locale}`;
        const segments = pathname.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <div dir="ltr" className="inline-flex gap-0.5 rounded-btn border border-line p-0.5">
            {languages.map((lang) => {
                const on = currentLang === lang.code;
                return (
                    <Link key={lang.code} href={redirectedPathName(lang.code)} aria-current={on ? "true" : undefined}
                        className={`grid h-7 min-w-9 place-items-center rounded px-2 text-xs font-medium transition-colors duration-150 ${lang.code === "ar" ? "font-arabic text-[13px]" : "font-mono"} ${on ? "bg-inverse text-on-inverse" : "text-muted hover:bg-sunken"}`}>
                        {lang.label}
                    </Link>
                );
            })}
        </div>
    );
}
