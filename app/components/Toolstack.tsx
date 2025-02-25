'use client';

import Image from 'next/image';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ToolCard {
    title: string;
    description: string;
    iconSrc: string;
}

const Toolstack = () => {
    const gridRef = useScrollAnimation<HTMLDivElement>();

    const tools: ToolCard[] = [
        {
            title: "Figma",
            description: "Where ideas turn into interactive prototypes.",
            iconSrc: "/icons/Figma.png"
        },
        {
            title: "Framer",
            description: "Bringing dynamic designs to life with code.",
            iconSrc: "/icons/Framer.png"
        },
        {
            title: "Procreate",
            description: "Where sketches and creativity come alive.",
            iconSrc: "/icons/Procreate.png"
        },
        {
            title: "Miro",
            description: "Organize and visualize research data effectively.",
            iconSrc: "/icons/Miro.png"
        },
        {
            title: "Photoshop",
            description: " Crafting polished visuals and graphics.",
            iconSrc: "/icons/Photoshop.png"
        },
        {
            title: "Google Meet",
            description: "Collaborating seamlessly with teams and clients.",
            iconSrc: "/icons/Google Meet.png"
        },
        {
            title: "Notion",
            description: "Centralizing ideas, plans, and documentation.",
            iconSrc: "/icons/Notion.png"
        },
        {
            title: "Trello",
            description: "Keeping projects organized and on track.",
            iconSrc: "/icons/Trello.png"
        }
    ];

    return (
        <div className='flex flex-col justify-center my-28 lg:mx-28 px-2 md:px-16'>
            <h1 className='text-gray-800 font-semibold text-4xl mb-12'>
                Toolstack
            </h1>

            <div 
                ref={gridRef}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 opacity-0"
            >
                {tools.map((tool, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col justify-center items-center bg-gray-100 p-6 rounded-2xl min-h-[200px]"
                    >
                        <div className="mb-2">
                            <Image
                                src={tool.iconSrc}
                                alt={`${tool.title} icon`}
                                width={60}
                                height={60}
                                className="p-2 rounded-lg"
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-600 mb-2">{tool.title}</h3>
                        <p className="text-base text-gray-500 leading-relaxed text-center">{tool.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Toolstack;
