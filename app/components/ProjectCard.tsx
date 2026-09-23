import { ArrowUpRight } from "lucide-react";

interface ProjectLink { label: string; url: string }

interface ProjectCardProps {
    title: string;
    eyebrow?: string;
    description: string;
    tags?: string[];
    links: ProjectLink[];
}

export default function ProjectCard({ title, eyebrow, description, tags = [], links }: ProjectCardProps) {
    return (
        <article className="flex h-full flex-col gap-3 rounded-card border border-line bg-surface p-6 transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card">
            {eyebrow && <div className="font-mono text-xs text-subtle rtl:font-arabic">{eyebrow}</div>}
            <h3 dir="ltr" className="text-start font-sans text-[22px] font-semibold leading-tight tracking-[-0.01em]">{title}</h3>
            <p className="text-[15px] leading-relaxed text-muted text-pretty">{description}</p>
            {tags.length > 0 && (
                <div dir="ltr" className="flex flex-wrap gap-1.5 pt-1">
                    {tags.map((t) => (
                        <span key={t} className="inline-flex h-6 items-center rounded-tag bg-accent-soft px-2 font-mono text-xs font-medium text-accent-ink">{t}</span>
                    ))}
                </div>
            )}
            <div className="mt-auto flex gap-5 border-t border-line-subtle pt-3">
                {links.map((l) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors duration-150 hover:text-accent">
                        {l.label}
                        <ArrowUpRight className="h-3.5 w-3.5 text-subtle rtl:-scale-x-100" />
                    </a>
                ))}
            </div>
        </article>
    );
}
