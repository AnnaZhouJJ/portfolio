interface ProjectHeaderProps {
    client: string;
    year: string;
    scope: string[];
    title: string;
    description: string;
    websiteLink?: string; 
}

const ProjectHeader = ({ 
    client, 
    year, 
    scope, 
    title, 
    description, 
    websiteLink 
}: ProjectHeaderProps) => {
    return (
        <div className="max-w-[1440px] mx-auto px-12 pt-32 flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-[200px,800px] gap-10">
                {/* Left Column - Project Details */}
                <div className="space-y-8 mt-2">
                    {/* Client and Year - Row on small screens */}
                    <div className="flex flex-row lg:flex-col gap-20 lg:gap-8">
                        {/* Client */}
                        <div>
                            <h2 className="text-gray-800 font-medium uppercase mb-2">CLIENT</h2>
                            <p className="text-gray-700">{client}</p>
                        </div>

                        {/* Year */}
                        <div>
                            <h2 className="text-gray-800 font-medium uppercase mb-2">YEAR</h2>
                            <p className="text-gray-700">{year}</p>
                        </div>

                        
                    </div>

                    {/* Scope of Work */}
                    <div>
                        <h2 className="text-gray-800 font-medium uppercase mb-4">SCOPE OF WORK</h2>
                        <div className="flex flex-wrap gap-3">
                            {scope.map((item, index) => (
                                <span 
                                    key={index} 
                                    className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Title and Description */}
                <div className="space-y-8 lg:border-l lg:pl-10 border-gray-200">
                    <h1 className="text-[44px] font-semibold text-gray-800 leading-snug">
                        {title}
                    </h1>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        {description}
                    </p>
                    {websiteLink && (
                        <a 
                            href={"https://www.frontcover.io/about"}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="inline-flex items-center text-lg font-medium text-gray-700 hover:underline transition-colors"
                        >
                            View website
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-4 w-4 ml-2" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                                />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectHeader;