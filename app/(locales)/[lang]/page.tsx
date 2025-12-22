import Image from "next/image";
import { Github, Linkedin, Mail, Menu, Terminal, Droplet } from "lucide-react";
import InteractiveBackground from "../../components/InteractiveBackground";
import ProjectCard from "../../components/ProjectCard";
import NavLink from "../../components/NavLink";
import Button from "../../components/Button";
import Link from "next/link";
import { getDictionary } from "../../../lib/dictionary";
import LanguageSwitcher from "../../components/LanguageSwitcher";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    const projects = [
        {
            title: "DonateBlood",
            description: dict.projects.donateblood.description,
            icon: <Droplet className="w-8 h-8 text-red-500" />,
            buttons: [
                { label: dict.projects.donateblood.buttons.github, url: "https://github.com/aladin002dz/DonateBlood", color: "bg-green-500" },
                { label: dict.projects.donateblood.buttons.demo, url: "https://www.soltana-dam.online/", color: "bg-purple-600" },
            ],
        },
        {
            title: "ar.reactjs.org",
            description: dict.projects.reactar.description,
            icon: <div className="w-8 h-8 text-blue-400 font-bold flex items-center justify-center border-2 border-blue-400 rounded-full">⚛</div>,
            buttons: [
                { label: dict.projects.reactar.buttons.website, url: "https://ar.reactjs.org/", color: "bg-blue-500" },
                { label: dict.projects.reactar.buttons.source, url: "https://github.com/aladin002dz", color: "bg-orange-500" },
            ],
        },
        {
            title: "react-library-2025",
            description: dict.projects.reactlib.description,
            icon: <Terminal className="w-8 h-8 text-gray-700 dark:text-gray-300" />,
            buttons: [
                { label: dict.projects.reactlib.buttons.github, url: "https://github.com/aladin002dz/react-library-2025", color: "bg-orange-600" },
                { label: dict.projects.reactlib.buttons.npm, url: "https://www.npmjs.com/package/aladin-ts-rc", color: "bg-pink-600" },
            ],
        },
    ];

    return (
        <div className={`min-h-screen ${lang === 'ar' ? 'font-arabic' : 'font-sans'} choice-bg text-gray-900 pb-20 relative`}>
            <InteractiveBackground />
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-white/10 backdrop-blur-md border-b border-white/20">
                <div className="flex items-center gap-2">
                    <div className="text-blue-500 font-bold text-2xl flex items-center justify-center">
                        ⚛
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
                    <NavLink href="#">{dict.home.nav.home}</NavLink>
                    <NavLink href="#about">{dict.home.nav.about}</NavLink>
                    <NavLink href="#projects">{dict.home.nav.projects}</NavLink>
                    <NavLink href="#contact">{dict.home.nav.contact}</NavLink>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <LanguageSwitcher currentLang={lang} />
                    <Button
                        href="mailto:mahfoudh.arous@example.com"
                        className=""
                    >
                        {dict.home.nav.contact}
                    </Button>
                </div>

                <div className="md:hidden flex items-center gap-4">
                    <LanguageSwitcher currentLang={lang} />
                    <button className="p-2 text-gray-800">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <main className="pt-32 pb-16 px-6 max-w-6xl mx-auto">
                <div className="glass-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl">
                    <div className="relative shrink-0">
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/40 rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="https://github.com/aladin002dz.png"
                                alt="Mahfoudh Arous"
                                width={256}
                                height={256}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                        <div className={`absolute -top-4 ${lang === 'ar' ? '-left-4' : '-right-4'} w-12 h-12 bg-white/80 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg animate-bounce`}>
                            <span className="text-2xl">👋</span>
                        </div>
                    </div>

                    <div className={`flex-1 text-center ${lang === 'ar' ? 'md:text-right' : 'md:text-left'} space-y-6`}>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
                                Mahfoudh Arous
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 font-medium opacity-90">
                                {dict.home.role}
                            </p>
                        </div>

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
                    </div>
                </div>

                {/* Projects Section */}
                <section id="projects" className="mt-24">
                    <div className="flex items-center justify-between mb-8 px-2">
                        <h2 className="text-3xl font-bold text-gray-900">{dict.home.projects}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </section>
            </main>

            {/* Floating Contact Button (Mobile) */}
            <div className={`fixed bottom-6 ${lang === 'ar' ? 'left-6' : 'right-6'} md:hidden z-50`}>
                <a
                    href="mailto:mahfoudh.arous@example.com"
                    className="flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-pink-500 to-orange-400 rounded-full shadow-lg text-white"
                >
                    <Mail className="w-6 h-6" />
                </a>
            </div>

            {/* Simple Footer */}
            <footer className="mt-12 text-center text-gray-600 text-sm pb-8">
                <div className="flex justify-center gap-6 mb-4">
                    <a href="https://github.com/aladin002dz" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/mahfoudh-arous/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                </div>
                <p>{dict.home.footer}</p>
            </footer>
        </div>
    );
}
