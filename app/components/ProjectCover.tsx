'use client';

import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProjectCoverProps {
    title: string;
    description: string;
    dateRange: string;
    tags: string[];
    children: React.ReactNode;
    imageOnRight?: boolean;
    link?: string; 
}

const ProjectCover = ({
    title,
    description,
    dateRange,
    tags,
    children,
    imageOnRight = false,
    link
}: ProjectCoverProps) => {
    const animationRef = useScrollAnimation<HTMLDivElement>();

    const content = (
        <div 
            ref={animationRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 mb-20 lg:mb-32 max-w-6xl opacity-0"
        >
            <div className={`w-full flex items-center ${!imageOnRight ? 'md:order-1' : 'md:order-2'}`}>
                {children}
            </div>
            <div className={`flex flex-col justify-center ${!imageOnRight ? 'md:order-2' : 'md:order-1'}`}>
                {/* Content */}
                <h3 className="text-gray-800 text-4xl font-semibold mb-5">{title}</h3>
                <p className="text-gray-600 text-xl mb-5">{description}</p>
                <p className="text-gray-500 mb-8">{dateRange}</p>
                <div className="flex flex-wrap">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="mr-4 mb-4 lg:mb-0 px-4 py-3 bg-gray-100 rounded-md text-sm text-gray-500"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <button className="font-medium mt-2 lg:mt-8 w-40 text-center text-lg
                    text-gray-800 hover:bg-gray-800 hover:text-white py-2 rounded-lg transition-all duration-200 hover:scale-100">
                    {link?.startsWith('http') ? 'View on Behance' : 'View Case Study'}
                </button>
            </div>
        </div>
    );

    if (link) {
        return (
            <Link 
                href={link}
                {...(link.startsWith('http') ? {
                    target: "_blank",
                    rel: "noopener noreferrer"
                } : {})}
                className="block hover:opacity-95 transition-opacity duration-200"
            >
                {content}
            </Link>
        );
    }

    return content;
};

export default ProjectCover;
