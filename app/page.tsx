import Image from "next/image";
import { Github, Linkedin, Mail, Menu, Terminal, Droplet, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import InteractiveBackground from "./components/InteractiveBackground";

export default function Home() {
  const projects = [
    {
      title: "DonateBlood",
      description: "A React Native and Firebase application to connect blood donors in Algeria, facilitating urgent donations.",
      icon: <Droplet className="w-8 h-8 text-red-500" />,
      buttons: [
        { label: "GitHub", url: "https://github.com/aladin002dz/DonateBlood", color: "bg-green-500" },
        { label: "Demo/App", url: "https://github.com/aladin002dz/DonateBlood", color: "bg-purple-600" },
      ],
    },
    {
      title: "ar.reactjs.org",
      description: "Open-source contribution translating the official React documentation into Arabic for the community.",
      icon: <div className="w-8 h-8 text-blue-400 font-bold flex items-center justify-center border-2 border-blue-400 rounded-full">⚛</div>,
      buttons: [
        { label: "Website", url: "https://ar.reactjs.org/", color: "bg-blue-500" },
        { label: "Source", url: "https://github.com/aladin002dz", color: "bg-orange-500" },
      ],
    },
    {
      title: "react-library-2025",
      description: "A modern CLI tool built with TypeScript to scaffold best-practice React libraries instantly.",
      icon: <Terminal className="w-8 h-8 text-gray-700 dark:text-gray-300" />,
      buttons: [
        { label: "GitHub", url: "https://github.com/aladin002dz/react-library-2025", color: "bg-orange-600" },
        { label: "NPM", url: "https://github.com/aladin002dz/react-library-2025", color: "bg-pink-600" },
      ],
    },
  ];

  return (
    <div className="min-h-screen font-sans choice-bg text-gray-900 pb-20 relative">
      <InteractiveBackground />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="flex items-center gap-2">
          <div className="text-blue-500 font-bold text-2xl flex items-center justify-center">
            ⚛
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
          <Link href="#" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="#about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="#projects" className="hover:text-blue-600 transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </nav>

        <a
          href="mailto:mahfoudh.arous@example.com"
          className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-400 to-orange-400 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
        >
          Contact
        </a>

        <button className="md:hidden p-2 text-gray-800">
          <Menu className="w-6 h-6" />
        </button>
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
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/80 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-2xl">👋</span>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
                Mahfoudh Arous
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 font-medium opacity-90">
                Senior Software Engineer & Full-stack Developer
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/mahfoudh-arous/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <Linkedin className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Projects Section */}
        <section id="projects" className="mt-24">
          <div className="flex items-center justify-between mb-8 px-2">
            <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col bg-white/40 backdrop-blur-md border border-white/40 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="mb-4 p-3 bg-white/60 rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-700 mb-8 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-3 mt-auto">
                  {project.buttons.map((btn, btnIndex) => (
                    <a
                      key={btnIndex}
                      href={btn.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-2.5 px-4 rounded-xl text-center text-white text-sm font-semibold shadow-md hover:opacity-90 transition-opacity ${btn.color}`}
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating Contact Button (Mobile) */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
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
        <p>© 2025 Mahfoudh Arous. All rights reserved.</p>
      </footer>
    </div>
  );
}
