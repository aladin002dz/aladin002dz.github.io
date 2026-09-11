import Image from "next/image";
import { Mail, Terminal, Droplet, ExternalLink, Globe, Package } from "lucide-react";
import { Github, Linkedin, Facebook, Twitter, Bluesky, Youtube } from "./Icons";
import InteractiveBackground from "./InteractiveBackground";
import ProjectCard from "./ProjectCard";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { getDictionary } from "../../lib/dictionary";
import { CONTACT_EMAIL } from "../../lib/site";

export default async function HomeContent({ lang }: { lang: string }) {
    const dict = await getDictionary(lang);
    const isArabic = lang === "ar";

    const projects = [
        {
            title: "DonateBlood",
            description: dict.projects.donateblood.description,
            icon: <Droplet className="w-8 h-8 text-red-500" />,
            buttons: [
                { label: dict.projects.donateblood.buttons.github, url: "https://github.com/aladin002dz/DonateBlood", color: "bg-green-500", icon: <Github className="w-4 h-4" /> },
                { label: dict.projects.donateblood.buttons.demo, url: "https://www.soltana-dam.online/", color: "bg-purple-600", icon: <ExternalLink className="w-4 h-4" /> },
            ],
        },
        {
            title: "ar.react.dev",
            description: dict.projects.reactar.description,
            icon: <div className="w-8 h-8 text-blue-400 font-bold flex items-center justify-center border-2 border-blue-400 rounded-full">⚛</div>,
            buttons: [
                { label: dict.projects.reactar.buttons.website, url: "https://ar.react.dev/", color: "bg-blue-500", icon: <Globe className="w-4 h-4" /> },
                { label: dict.projects.reactar.buttons.source, url: "https://github.com/reactjs/ar.react.dev", color: "bg-orange-500", icon: <Github className="w-4 h-4" /> },
            ],
        },
        {
            title: "react-library-2025",
            description: dict.projects.reactlib.description,
            icon: <Terminal className="w-8 h-8 text-gray-700 dark:text-gray-300" />,
            buttons: [
                { label: dict.projects.reactlib.buttons.github, url: "https://github.com/aladin002dz/react-library-2025", color: "bg-orange-600", icon: <Github className="w-4 h-4" /> },
                { label: dict.projects.reactlib.buttons.npm, url: "https://www.npmjs.com/package/aladin-ts-rc", color: "bg-pink-600", icon: <Package className="w-4 h-4" /> },
            ],
        },
    ];

    return (
        <div className={`min-h-screen ${isArabic ? "font-arabic" : "font-sans"} choice-bg text-gray-900 dark:text-gray-100 pb-20 relative transition-colors duration-300`}>
            <InteractiveBackground />
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-white/10 backdrop-blur-md border-b border-white/20">
                <div className="flex items-center gap-2">
                    <div dir="ltr" className="text-blue-500 font-bold text-2xl flex items-center justify-center">
                        Mahfoudh.
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <LanguageSwitcher currentLang={lang} />
                    <ThemeToggle />
                </div>
            </header>

            {/* Hero Section */}
            <main className="pt-32 pb-16 px-6 max-w-6xl mx-auto">
                <div className="glass-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl">
                    <div className="relative shrink-0">
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/40 rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/me.webp"
                                alt="Mahfoudh Arous"
                                width={460}
                                height={460}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                        <div className={`absolute -top-4 ${isArabic ? "-left-4" : "-right-4"} w-12 h-12 bg-white/80 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg animate-bounce`}>
                            <span className="text-2xl" role="img" aria-label="wave">👋</span>
                        </div>
                    </div>

                    <div className={`flex-1 text-center ${isArabic ? "md:text-right" : "md:text-left"} space-y-6`}>
                        <div>
                            <h1 dir="ltr" className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight text-center ${isArabic ? "md:text-right" : "md:text-left"}`}>
                                Mahfoudh Arous
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium opacity-90">
                                {dict.home.role}
                            </p>
                        </div>

                        <div className={`flex flex-wrap gap-3 justify-center ${isArabic ? "md:justify-end" : "md:justify-start"}`}>
                            <Button
                                href="https://www.linkedin.com/in/mahfoudh-arous/"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="primary"
                                className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600"
                            >
                                <Linkedin className="w-5 h-5" />
                                <span>{dict.home.connect}</span>
                            </Button>

                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/40 dark:border-white/20 text-gray-800 dark:text-gray-100 hover:bg-white/50 dark:hover:bg-white/20"
                            >
                                <Mail className="w-5 h-5" />
                                <span>{dict.home.email}</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Projects Section */}
                <section id="projects" className="mt-24">
                    <div className="flex items-center justify-between mb-8 px-2">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{dict.home.projects}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                        ))}
                    </div>
                </section>
            </main>

            {/* Floating Contact Button (Mobile) */}
            <div className={`fixed bottom-6 ${isArabic ? "left-6" : "right-6"} md:hidden z-50`}>
                <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    aria-label={dict.home.email}
                    className="flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-pink-500 to-orange-400 rounded-full shadow-lg text-white"
                >
                    <Mail className="w-6 h-6" />
                </a>
            </div>

            {/* Simple Footer */}
            <footer className="mt-12 text-center text-gray-600 dark:text-gray-400 text-sm pb-8">
                <div className="flex flex-wrap justify-center gap-6 mb-4">
                    <a href="https://github.com/aladin002dz" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-black dark:hover:text-white transition-colors">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/mahfoudh-arous/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://www.facebook.com/mahfoudh.arous" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 transition-colors">
                        <Facebook className="w-6 h-6" />
                    </a>
                    <a href="https://www.youtube.com/@mahfoudh_arous" target="_blank" rel="noopener noreferrer" aria-label="YouTube (French)" className="relative hover:text-red-600 transition-colors">
                        <Youtube className="w-6 h-6" />
                        <span className="absolute -bottom-1.5 -right-1.5 px-1 rounded bg-red-600 text-white text-[9px] leading-tight font-bold">FR</span>
                    </a>
                    <a href="https://www.youtube.com/@%D9%88%D8%B1%D8%B4%D8%A9_%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9_%D9%85%D8%B9_%D9%85%D8%AD%D9%81%D9%88%D8%B8" target="_blank" rel="noopener noreferrer" aria-label="YouTube (Arabic)" className="relative hover:text-red-600 transition-colors">
                        <Youtube className="w-6 h-6" />
                        <span className="absolute -bottom-1.5 -right-1.5 px-1 rounded bg-red-600 text-white text-[9px] leading-tight font-bold">AR</span>
                    </a>
                    <a href="https://x.com/mahfoudh_arous" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-black dark:hover:text-white transition-colors">
                        <Twitter className="w-6 h-6" />
                    </a>
                    <a href="https://bsky.app/profile/mahfoudharous.bsky.social" target="_blank" rel="noopener noreferrer" aria-label="Bluesky" className="hover:text-sky-500 transition-colors">
                        <Bluesky className="w-6 h-6" />
                    </a>
                    <a href={`mailto:${CONTACT_EMAIL}`} aria-label={dict.home.email} className="hover:text-pink-600 transition-colors">
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
                <p>© {new Date().getFullYear()} {dict.home.footer}</p>
            </footer>
        </div>
    );
}
