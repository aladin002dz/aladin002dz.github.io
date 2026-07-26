import { ReactNode } from "react";

interface ProjectButton {
    label: string;
    url: string;
    color: string;
    icon?: ReactNode;
}

interface ProjectCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    buttons: ProjectButton[];
}

const ProjectCard = ({ title, description, icon, buttons }: ProjectCardProps) => {
    return (
        <div className="flex flex-col bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/40 dark:border-white/10 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group h-full">
            <div className="mb-4 p-3 bg-white/60 dark:bg-white/10 rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                {icon}
            </div>

            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8 flex-1 leading-relaxed">
                {description}
            </p>

            <div className="flex gap-3 mt-auto">
                {buttons.map((btn, index) => (
                    <a
                        key={index}
                        href={btn.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 py-2.5 px-4 rounded-xl text-center text-white text-sm font-semibold shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 ${btn.color}`}
                    >
                        {btn.icon}
                        <span>{btn.label}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
