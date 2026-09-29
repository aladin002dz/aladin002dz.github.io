import Image from "next/image";

interface TalkPhoto { src: string; width: number; height: number; alt: string }

interface TalkCardProps {
    event: string;
    year: number;
    role: string;
    description: string;
    photos: TalkPhoto[];
}

export default function TalkCard({ event, year, role, description, photos }: TalkCardProps) {
    const [cover, ...rest] = photos;
    return (
        <article className="flex h-full flex-col gap-3 rounded-card border border-line bg-surface p-6 transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card">
            {cover && (
                <div className="flex flex-col gap-2">
                    <a href={cover.src} target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden rounded-panel border border-line bg-sunken">
                        <Image src={cover.src} alt={cover.alt} width={cover.width} height={cover.height} loading="lazy"
                            sizes="(min-width: 1120px) 340px, (min-width: 768px) 45vw, 100vw" className="h-full w-full object-cover" />
                    </a>
                    {rest.length > 0 && (
                        <div className="grid grid-cols-4 gap-2">
                            {rest.map((p) => (
                                <a key={p.src} href={p.src} target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden rounded-btn border border-line bg-sunken">
                                    <Image src={p.src} alt={p.alt} width={p.width} height={p.height} loading="lazy"
                                        sizes="90px" className="h-full w-full object-cover" />
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            )}
            <div className="flex items-center gap-1.5 font-mono text-xs text-subtle rtl:font-arabic">
                <bdi dir="ltr">{year}</bdi>
                <span aria-hidden="true">·</span>
                <span>{role}</span>
            </div>
            <h3 dir="ltr" className="text-start font-sans text-[22px] font-semibold leading-tight tracking-[-0.01em]">{event}</h3>
            <p className="text-[15px] leading-relaxed text-muted text-pretty">{description}</p>
        </article>
    );
}
