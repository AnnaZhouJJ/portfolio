'use client';

import Image from 'next/image';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SkillCard {
    title: string;
    description: string;
    iconSrc: string;
}

const Skills = () => {
    // Create refs for each row
    const firstRowRef = useScrollAnimation<HTMLDivElement>();
    const secondRowRef = useScrollAnimation<HTMLDivElement>();
    const thirdRowRef = useScrollAnimation<HTMLDivElement>();

    const skills: SkillCard[] = [
        {
            title: "UI & Vision Design",
            description: "I am a skilled visual designer, and I possess an excellent sense of graphics, typography, composition, and color. My passion lies in creating functional software and mobile applications with infusing modern aesthetics design.",
            iconSrc: "/icons/ui-vision.png"
        },
        {
            title: "User Research",
            description: "I believe that conducting user research is crucial in the design process. Before delving into design, I love speaking with users and understanding their journeys and problems.",
            iconSrc: "/icons/user-research.png"
        },
        {
            title: "Human-Centered Design",
            description: "I understand the significance of human-centred design and possess the ability to create user-friendly products through different user research methods and empathy.",
            iconSrc: "/icons/human-centered.png"
        },
        {
            title: "Prototyping",
            description: "I am skilled in prototyping products with users and stakeholders across the entire design lifecycle. I love using Figma, Adobe XD, Illustrator and Photoshop to wireframe and prototype designs.",
            iconSrc: "/icons/prototyping.png"
        },
        {
            title: "Front-end Development",
            description: "I know how to code and with experience in front-end development! As a UI/UX designer, it benefit allows me to have a deeper understanding of the technical limitations and possibilities, leading to more effective and efficient design solutions.",
            iconSrc: "/icons/front-end-dev.png"
        },
        {
            title: "Interaction Design",
            description: "I am skilled in prototyping the interaction in  Figma and Adobe Xd, whether it's for flourish or function. Interaction design can be the cherry on top of the product, but it can also play an essential role in the User's understanding of an action or state.",
            iconSrc: "/icons/Interaction Design.png"
        }
    ];

    // Split skills into rows (2 skills per row)
    const firstRow = skills.slice(0, 2);
    const secondRow = skills.slice(2, 4);
    const thirdRow = skills.slice(4, 6);

    return (
        <div className='flex flex-col justify-center my-28 lg:mx-28 px-2 md:px-16'>
            <h1 className='text-gray-800 font-semibold text-4xl mb-12'>Skills</h1>

            <div className="flex flex-col gap-y-8 lg:gap-y-20">
                {/* First Row */}
                <div 
                    ref={firstRowRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-16 opacity-0"
                >
                    {firstRow.map((skill, index) => (
                        <div key={index} className="flex flex-col max-w-xl">
                            <div className="mb-6">
                                <Image
                                    src={skill.iconSrc}
                                    alt={`${skill.title} icon`}
                                    width={90}
                                    height={90}
                                    className="p-2 rounded-lg"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-600 mb-4">{skill.title}</h3>
                            <p className="text-lg text-gray-500 leading-relaxed max-w-lg">{skill.description}</p>
                        </div>
                    ))}
                </div>

                {/* Second Row */}
                <div 
                    ref={secondRowRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-16 opacity-0"
                >
                    {secondRow.map((skill, index) => (
                        <div key={index} className="flex flex-col max-w-xl">
                            <div className="mb-6">
                                <Image
                                    src={skill.iconSrc}
                                    alt={`${skill.title} icon`}
                                    width={90}
                                    height={90}
                                    className="p-2 rounded-lg"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-600 mb-4">{skill.title}</h3>
                            <p className="text-lg text-gray-500 leading-relaxed max-w-lg">{skill.description}</p>
                        </div>
                    ))}
                </div>

                {/* Third Row */}
                <div 
                    ref={thirdRowRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-16 opacity-0"
                >
                    {thirdRow.map((skill, index) => (
                        <div key={index} className="flex flex-col max-w-xl">
                            <div className="mb-6">
                                <Image
                                    src={skill.iconSrc}
                                    alt={`${skill.title} icon`}
                                    width={90}
                                    height={90}
                                    className="p-2 rounded-lg"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-600 mb-4">{skill.title}</h3>
                            <p className="text-lg text-gray-500 leading-relaxed max-w-lg">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;