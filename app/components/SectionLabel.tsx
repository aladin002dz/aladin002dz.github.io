import { ReactNode } from "react";

export default function SectionLabel({ index, tone = "accent", children }: { index?: string; tone?: "accent" | "clay"; children: ReactNode }) {
    return (
        <div className={`flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.08em] ${tone === "clay" ? "text-clay" : "text-accent-ink"}`}>
            {index && <span dir="ltr">{index}</span>}
            {index && <span className="h-px w-6 bg-current" />}
            {/* Plex Mono has no Arabic glyphs, and tracking breaks Arabic letter joining. */}
            <span className="rtl:font-arabic rtl:tracking-normal">{children}</span>
        </div>
    );
}
