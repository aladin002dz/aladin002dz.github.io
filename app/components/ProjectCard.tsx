import { ReactNode } from "react";

interface ProjectButton {
    label: string;
    url: string;
    color: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    buttons: ProjectButton[];
}

const ProjectCard = ({ title, description, icon, buttons }: ProjectCardProps) => {
    return (
        <div className="flex flex-col bg-white/40 backdrop-blur-md border border-white/40 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group h-full">
            <div className="mb-4 p-3 bg-white/60 rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                {icon}
            </div>

            <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-700 mb-8 flex-1 leading-relaxed">
                {description}
            </p>

            <div className="flex gap-3 mt-auto">
                {buttons.map((btn, index) => (
                    <a
                        key={index}
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
    );
};

export default ProjectCard;
