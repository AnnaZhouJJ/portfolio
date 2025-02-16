import Link from 'next/link';

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
    const content = (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 mb-20 lg:mb-32 max-w-6xl">
            {/* Always render image first on mobile, use order classes for desktop */}
            <div className={`w-full flex items-center ${!imageOnRight ? 'md:order-1' : 'md:order-2'}`}>
                {children}
            </div>
            <div className={`flex flex-col justify-center ${!imageOnRight ? 'md:order-2' : 'md:order-1'}`}>
                {/* Content */}
                <h3 className="text-gray-800 text-4xl font-semibold mb-5">{title}</h3>
                <p className="text-gray-600 text-xl mb-5">{description}</p>
                <p className="text-gray-500 mb-8">{dateRange}</p>
                <div>
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="mr-4 px-4 py-3 bg-gray-100 rounded-md text-sm text-gray-500"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <button className="font-medium mt-8 w-40 text-center text-lg
                    text-gray-800 hover:bg-gray-800 hover:text-white py-2 rounded-lg transition-all duration-200 hover:scale-100">
                    {link?.startsWith('http') ? 'View on Behance' : 'View Case Study'}
                </button>
            </div>
        </div>
    );

    if (link) {
        const isExternal = link.startsWith('http');
        return (
            <Link 
                href={link}
                {...(isExternal ? {
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
