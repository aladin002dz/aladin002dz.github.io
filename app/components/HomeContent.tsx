import Image from "next/image";
import { Mail, ArrowUpRight } from "lucide-react";
import { Github, Linkedin, Facebook, Twitter, Bluesky, Youtube } from "./Icons";
import ProjectCard from "./ProjectCard";
import Button from "./Button";
import SectionLabel from "./SectionLabel";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { getDictionary } from "../../lib/dictionary";
import { CONTACT_EMAIL } from "../../lib/site";

const YT_FR = "https://www.youtube.com/@mahfoudh_arous";
const YT_AR = "https://www.youtube.com/@%D9%88%D8%B1%D8%B4%D8%A9_%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9_%D9%85%D8%B9_%D9%85%D8%AD%D9%81%D9%88%D8%B8";

export default async function HomeContent({ lang }: { lang: string }) {
    const dict = await getDictionary(lang);
    const isArabic = lang === "ar";

    const projects = [
        {
            title: "DonateBlood",
            eyebrow: dict.projects.donateblood.eyebrow,
            description: dict.projects.donateblood.description,
            tags: ["react-native", "firebase"],
            links: [
                { label: dict.projects.donateblood.buttons.github, url: "https://github.com/aladin002dz/DonateBlood" },
                { label: dict.projects.donateblood.buttons.demo, url: "https://www.soltana-dam.online/" },
            ],
        },
        {
            title: "ar.react.dev",
            eyebrow: dict.projects.reactar.eyebrow,
            description: dict.projects.reactar.description,
            tags: ["react", "i18n"],
            links: [
                { label: dict.projects.reactar.buttons.website, url: "https://ar.react.dev/" },
                { label: dict.projects.reactar.buttons.source, url: "https://github.com/reactjs/ar.react.dev" },
            ],
        },
        {
            title: "react-library-2025",
            eyebrow: dict.projects.reactlib.eyebrow,
            description: dict.projects.reactlib.description,
            tags: ["typescript", "cli", "npm"],
            links: [
                { label: dict.projects.reactlib.buttons.github, url: "https://github.com/aladin002dz/react-library-2025" },
                { label: dict.projects.reactlib.buttons.npm, url: "https://www.npmjs.com/package/aladin-ts-rc" },
            ],
        },
    ];

    const socials = [
        { label: "GitHub", href: "https://github.com/aladin002dz", Icon: Github },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/mahfoudh-arous/", Icon: Linkedin },
        { label: "YouTube FR", href: YT_FR, Icon: Youtube },
        { label: "YouTube AR", href: YT_AR, Icon: Youtube },
        { label: "Facebook", href: "https://www.facebook.com/mahfoudh.arous", Icon: Facebook },
        { label: "X", href: "https://x.com/mahfoudh_arous", Icon: Twitter },
        { label: "Bluesky", href: "https://bsky.app/profile/mahfoudharous.bsky.social", Icon: Bluesky },
    ];

    return (
        <div className={`min-h-screen bg-bg text-ink ${isArabic ? "font-arabic" : "font-sans"}`}>
            <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
                <div className="mx-auto flex max-w-[1120px] items-center gap-4 px-6 py-3.5">
                    <a href={isArabic ? "/ar" : lang === "fr" ? "/fr" : "/"} dir="ltr" className="font-sans text-[22px] font-semibold leading-none tracking-[-0.03em] text-ink">
                        Mahfoudh<span className="text-accent">.</span>
                    </a>
                    <div className="ms-auto flex items-center gap-2.5">
                        <LanguageSwitcher currentLang={lang} />
                        <ThemeToggle />
                    </div>
                </div>
            </header>

            <main>
                <section className="hairline-grid border-b border-line">
                    <div className="mx-auto grid max-w-[1120px] items-center gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr] md:gap-16 md:py-28">
                        <div className="flex flex-col gap-6">
                            <SectionLabel index="00">{dict.home.hello}</SectionLabel>
                            <h1 className={`text-[clamp(44px,7vw,80px)] font-semibold leading-[1.05] text-balance ${isArabic ? "" : "tracking-[-0.035em]"}`}>
                                {dict.home.name}<span className="text-accent">.</span>
                            </h1>
                            <p className="max-w-[30ch] text-[clamp(20px,2.4vw,26px)] leading-snug text-muted text-pretty">{dict.home.role}</p>
                            <div className="flex flex-wrap gap-3">
                                <Button href="https://www.linkedin.com/in/mahfoudh-arous/" target="_blank" rel="noopener noreferrer" size="lg">
                                    <Linkedin className="h-[18px] w-[18px]" />
                                    <span>{dict.home.connect}</span>
                                </Button>
                                <Button href={`mailto:${CONTACT_EMAIL}`} variant="secondary" size="lg">
                                    <Mail className="h-[18px] w-[18px]" />
                                    <span>{dict.home.email}</span>
                                </Button>
                            </div>
                        </div>
                        <div className="justify-self-center w-full max-w-[380px] aspect-[4/5] overflow-hidden rounded-card border border-line bg-sunken">
                            <Image src="/me.webp" alt="Mahfoudh Arous" width={460} height={575} className="h-full w-full object-cover" priority />
                        </div>
                    </div>
                </section>

                <section id="projects" className="mx-auto flex max-w-[1120px] flex-col gap-6 px-6 py-16 md:py-22">
                    <SectionLabel index="01">{dict.home.projects}</SectionLabel>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                        ))}
                    </div>
                </section>

                <section id="youtube" className="border-y border-line bg-sunken">
                    <div className="mx-auto grid max-w-[1120px] items-center gap-6 px-6 py-14 md:grid-cols-2 md:py-18">
                        <div className="flex flex-col gap-4">
                            <SectionLabel index="02" tone="clay">YouTube</SectionLabel>
                            <p className="text-[clamp(22px,2.6vw,28px)] font-semibold leading-tight text-pretty">{dict.home.teach}</p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                { code: "FR", label: dict.home.frChannel, href: YT_FR },
                                { code: "AR", label: dict.home.arChannel, href: YT_AR },
                            ].map((c) => (
                                <a key={c.code} href={c.href} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-3.5 rounded-panel border border-line bg-surface px-5 py-4 text-ink transition-colors duration-150 hover:border-clay">
                                    <span className="grid h-10 w-10 place-items-center rounded-btn bg-clay-soft font-mono text-[13px] font-semibold text-clay">{c.code}</span>
                                    <span className="flex-1 font-medium">{c.label}</span>
                                    <ArrowUpRight className="h-4 w-4 text-clay rtl:-scale-x-100" />
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-x-8 gap-y-5 px-6 py-8">
                <nav dir="ltr" className="flex flex-wrap gap-x-6 gap-y-3">
                    {socials.map(({ label, href, Icon }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                            className="inline-flex items-center gap-2 font-sans text-sm font-medium leading-none text-muted transition-colors duration-150 hover:text-accent">
                            <Icon className="h-[18px] w-[18px] shrink-0" />
                            {label}
                        </a>
                    ))}
                    <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email"
                        className="inline-flex items-center gap-2 font-sans text-sm font-medium leading-none text-muted transition-colors duration-150 hover:text-accent">
                        <Mail className="h-[18px] w-[18px] shrink-0" />
                        Email
                    </a>
                </nav>
                <p className="flex gap-1.5 font-mono text-xs font-medium leading-[1.2] text-subtle">
                    <bdi dir="ltr">© {new Date().getFullYear()}</bdi>
                    <span>{dict.home.footer}</span>
                </p>
            </footer>
        </div>
    );
}
