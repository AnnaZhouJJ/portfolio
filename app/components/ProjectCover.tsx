interface ProjectCoverProps {
    title: string;
    description: string;
    dateRange: string;
    tags: string[];
    children: React.ReactNode;
    imageOnRight?: boolean;
}

const ProjectCover = ({
    title,
    description,
    dateRange,
    tags,
    children,
    imageOnRight = false,
}: ProjectCoverProps) => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 max-w-6xl">
            {/* Conditionally render based on imageOnRight prop */}
            {!imageOnRight ? (
                <>
                    <div className="w-full flex items-center">
                        {children}
                    </div>
                    <div className="flex flex-col justify-center">
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
                            View Case Study
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex flex-col justify-center">
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
                            View Case Study
                        </button>
                    </div>
                    <div className="w-full flex items-center">
                        {children}
                    </div>
                </>
            )}
        </div>
    );
};
export default ProjectCover;
