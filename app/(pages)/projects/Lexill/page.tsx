'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import ProjectHeader from "@/app/components/ProjectHeaderProps";
import ImageModal from "@/app/components/ImageModal";
import Image from "next/image";
import Footer from '@/app/components/Footer';

export default function Lexill() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

    return (
        <main>
            <ProjectHeader
                client="Lexill"
                year="09/2024 - 10/2024"
                scope={["UI/UX Design", "Mobile App", "Landing Page Design"]}
                title="Revolutionizing Chinese Language Learning with Gamification"
                description="As the solo UI/UX designer for Lexill, I designed an innovative mobile application and website that revolutionizes Chinese learning for English speakers. My mission was to create an intuitive and visually appealing interface that supports the app's innovative learning approach and transforms the challenging language acquisition journey into an exciting adventure."
            />
            {/* Rest of the case study content */}
            <div className="max-w-[1440px] mx-auto px-8 md:px-12 pt-20 flex flex-col items-center">
                <div className="flex flex-col justify-center">
                    <Image 
                        src="/projects/lexill/Lexill - portfolio.png"
                        alt="Lexill project cover"
                        width={1240}
                        height={824}
                        quality={100}
                        className="rounded-2xl shadow-lg"
                    />
                    <div className="pt-16 flex justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-[250px,600px] gap-10">
                            {/* Key Responsibility Section */}
                            <h2 className="text-2xl font-semibold text-gray-800">Key Responsibility</h2>
                            <div className="flex flex-col gap-16">
                                <div>
                                    <p className="text-xl font-medium text-gray-700 mb-2">Phase 1: Mobile Application Design</p>
                                    <ul className="text-lg space-y-6 text-gray-600 list-disc">
                                        <li>Developed a design system in Figma, including colour palettes, typography, and components.</li>
                                        <li>Designed high-fidelity prototypes, and transformed complex client requirements into intuitive user interfaces.</li>
                                        <li>Collaborated closely with the client, and iteratively refined designs based on feedback and project needs.</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-xl font-medium text-gray-700 mb-2">Phase 2: Website Design (Follow-up Project)</p>
                                    <ul className="text-lg space-y-6 text-gray-600 list-disc">
                                        <li>Leveraged the successful mobile app design to create a responsive web presence for Lexill (desktop and mobile).</li>
                                        <li>Adapted the existing design system for web use, ensuring brand consistency across platforms.</li>
                                        <li>{"Designed an informative and engaging landing page to showcase the app's unique features and benefits."}</li>
                                        <li>Incorporated user acquisition elements such as app store and a waitlist sign-up form.</li>
                                    </ul>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="py-16 flex justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-[250px,600px] gap-10">
                            {/* Outcome Section */}
                            <h2 className="text-2xl font-semibold text-gray-800">Outcome</h2>
                            <ul className="text-lg space-y-6 text-gray-600 list-disc">
                                <li>Delivered a user-friendly mobile application ready for development, aimed at revolutionizing Mandarin Chinese learning for English speakers.</li>
                                <li>Designed both the mobile app and website projects within tight timeframes, achieving a 100% on-time delivery rate without compromising on quality or features.</li>
                                <li>Established a strong client relationship, resulting in a follow-up project to extend the brand to web platforms.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Design Process Section */}
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full max-w-6xl border-t border-gray-300 mb-8"></div>

                        {/* step 1: Sketches and Design System */}
                        <div className="max-w-[1000px] w-full">
                            <div className="flex flex-col items-center gap-6">
                                <h2 className="text-2xl font-bold text-gray-800">Design Process</h2>
                                <p className="text-gray-800 font-semibold text-xl">Phase 1: Mobile Application Design</p>
                            </div>
                            <h3 className="text-gray-800 text-xl font-semibold mt-10 mx-4">Sketches</h3>
                            <div className="relative group cursor-pointer">
                                <Image 
                                    src="/projects/lexill/Sketches.png"
                                    alt="Sketches"
                                    width={1000}
                                    height={700}
                                    className="rounded-2xl"
                                    quality={100}
                                    onClick={() => setSelectedImage({
                                        src: "/projects/lexill/Sketches.png",
                                        alt: "Sketches"
                                    })}
                                />
                                <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage({
                                            src: "/projects/lexill/Sketches.png",
                                            alt: "Sketches"
                                        });
                                    }}
                                >
                                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                </div>
                            </div>
                            <h3 className="text-gray-800 text-xl font-semibold mb-4 mx-4">Design System</h3>
                            <div className="relative group cursor-pointer">
                                <Image 
                                    src="/projects/lexill/Design System.png"
                                    alt="Design System"
                                    width={1000}
                                    height={700}
                                    quality={100}
                                    className="rounded-2xl"
                                    onClick={() => setSelectedImage({
                                        src: "/projects/lexill/Design System.png",
                                        alt: "Design System"
                                    })}
                                />
                                <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage({
                                            src: "/projects/lexill/Design System.png",
                                            alt: "Design System"
                                        });
                                    }}
                                >
                                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                </div>
                            </div>
                        </div>
                        {/* step 2: key features & Screens */}
                        <div className="max-w-[1000px] w-full">
                            <h3 className="text-gray-800 text-xl font-semibold my-10 mx-4">Key Features & Screens</h3>
                            {/* Onboarding */}
                            <div className="grid grid-cols-1 lg:grid-cols-[250px,600px] gap-10 mb-4 mx-4">
                                <p className="text-gray-700 font-semibold mb-4">Onboarding</p>
                                <p className="text-gray-700 text-base mb-4">{"Begin their language journey with an immersive experience that introduces Lexill's magical learning approach and assesses their starting level."}</p>
                            </div>
                            <div className="relative group cursor-pointer">
                                <Image 
                                    src="/projects/lexill/Onboarding.png"
                                    alt="Onboarding"
                                    width={1000}
                                    height={700}
                                    quality={100}
                                    className="rounded-2xl mb-16"
                                    onClick={() => setSelectedImage({
                                        src: "/projects/lexill/Onboarding.png",
                                        alt: "Onboarding"
                                    })}
                                />
                                <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage({
                                            src: "/projects/lexill/Onboarding.png",
                                            alt: "Onboarding"
                                        });
                                    }}
                                >
                                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                </div>
                            </div>
                            {/* Memory Magic: Hanzi Lessons */}
                            <div className="grid grid-cols-1 lg:grid-cols-[250px,600px] gap-10 mb-4 mx-4">
                                <p className="text-gray-700 font-semibold mb-4">Memory Magic: Hanzi Lessons</p>
                                <p className="text-gray-700 text-base mb-4">Transform complex Chinese characters into unforgettable stories through our unique mnemonic system, making learning intuitive and engaging.</p>
                            </div>
                            <div className="relative group cursor-pointer">
                                <Image 
                                    src="/projects/lexill/Feature 1.png"
                                    alt="Memory Magic Screens"
                                    width={1000}
                                    height={700}
                                    quality={100}
                                    className="rounded-2xl mb-16"
                                    onClick={() => setSelectedImage({
                                        src: "/projects/lexill/Feature 1.png",
                                        alt: "Memory Magic Screens"
                                    })}
                                />
                                <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage({
                                            src: "/projects/lexill/Feature 1.png",
                                            alt: "Memory Magic Screens"
                                        });
                                    }}
                                >
                                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                </div>
                            </div>
                            {/* Quest System*/}
                            <div className="grid grid-cols-1 lg:grid-cols-[250px,600px] gap-10 mb-4 mx-4">
                                <p className="text-gray-700 font-semibold mb-4">Quest System: Capturing Hanzi</p>
                                <p className="text-gray-700 text-base mb-4">Put knowledge to the test with interactive quizzes where users can capture new characters for their collection or face the challenge of recapturing escaped ones.</p>
                            </div>
                            <div className="relative group cursor-pointer">
                                <Image 
                                    src="/projects/lexill/Feature 2.png"
                                    alt="Quest System Screens"
                                    width={1000}
                                    height={700}
                                    quality={100}
                                    className="rounded-2xl mb-16"
                                    onClick={() => setSelectedImage({
                                        src: "/projects/lexill/Feature 2.png",
                                        alt: "Quest System Screens"
                                    })}
                                />
                                <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage({
                                            src: "/projects/lexill/Feature 2.png",
                                            alt: "Quest System Screens"
                                        });
                                    }}
                                >
                                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                </div>
                            </div>
                            {/* character collection & Personal Arena */}
                            <div className="grid grid-cols-1 lg:grid-cols-[500px,500px] gap-10 mb-4">
                                <div>
                                    <p className="text-gray-700 font-semibold mb-4 mx-6">Character Collection</p>
                                    <p className="text-gray-700 text-base mb-6 mx-6">{"Showcase the mastered Hanzi and spells in a collection system, tracking users' progress and achievements in the language journey."}</p>
                                    <div className="relative group cursor-pointer">
                                        <Image 
                                            src="/projects/lexill/Feature 3.png"
                                            alt="Character Collection Screens"
                                            width={1000}
                                            height={700}
                                            quality={100}
                                            className="rounded-2xl"
                                            onClick={() => setSelectedImage({
                                                src: "/projects/lexill/Feature 3.png",
                                                alt: "Character Collection Screens"
                                            })}
                                        />
                                        <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedImage({
                                                    src: "/projects/lexill/Feature 3.png",
                                                    alt: "Character Collection Screens"
                                                });
                                            }}
                                        >
                                            <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-700 font-semibold mb-4 mx-6">Personal Arena</p>
                                    <p className="text-gray-700 text-base mb-6 mx-6">Challenge themselves in the gym with quizzes on learned content, while tracking their advancement through a personalized profile.</p>
                                    <div className="relative group cursor-pointer">
                                        <Image 
                                            src="/projects/lexill/Feature 4.png"
                                            alt="Personal Arena Screens"
                                            width={1000}
                                            height={700}
                                            quality={100}
                                            className="rounded-2xl"
                                            onClick={() => setSelectedImage({
                                                src: "/projects/lexill/Feature 4.png",
                                                alt: "Personal Arena Screens"
                                            })}
                                        />
                                        <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedImage({
                                                    src: "/projects/lexill/Feature 4.png",
                                                    alt: "Personal Arena Screens"
                                                });
                                            }}
                                        >
                                            <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3: Landing Page Design */}
                        <div className="w-full max-w-7xl border-t border-gray-300 my-10"></div>
                        <div className="max-w-[1000px] w-full">
                            <div className="flex flex-col items-center">
                                <h3 className="text-gray-800 text-xl font-semibold my-6 mx-4">Phase 2: Website Landing Page Design</h3>
                            </div>
                            <p className="text-gray-700 font-semibold text-lg my-6 mx-4">Hero Section</p>
                            <div className="relative group cursor-pointer">
                                <Image 
                                    src="/projects/lexill/Desktop Hero.png"
                                    alt="Landing Page hero section"
                                    width={1000}
                                    height={700}
                                    quality={100}
                                    className="rounded-2xl shadow-xl mb-20"
                                    onClick={() => setSelectedImage({
                                        src: "/projects/lexill/Desktop Hero.png",
                                        alt: "Landing Page hero section"
                                    })}
                                />
                                <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage({
                                            src: "/projects/lexill/Desktop Hero.png",
                                            alt: "Landing Page hero section"
                                        });
                                    }}
                                >
                                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                </div>
                            </div>
                            <p className="text-gray-700 font-semibold text-lg my-6 mx-4">Responsive Design (Desktop & Mobile)</p>
                            <div className="grid grid-cols-1 lg:grid-cols-[500px,500px] gap-10 mb-4">
                                <div className="relative group cursor-pointer">
                                    <Image 
                                        src="/projects/lexill/Desktop Top.png"
                                        alt="Landing Page desktop UI"
                                        width={1000}
                                        height={700}
                                        quality={100}
                                        className="rounded-2xl"
                                        onClick={() => setSelectedImage({
                                            src: "/projects/lexill/Desktop Top.png",
                                            alt: "Landing Page desktop UI"
                                        })}
                                    />
                                    <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage({
                                                src: "/projects/lexill/Desktop Top.png",
                                                alt: "Landing Page desktop UI"
                                            });
                                        }}
                                    >
                                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                    </div>
                                </div>
                                <div className="relative group cursor-pointer">
                                    <Image 
                                        src="/projects/lexill/Desktop responsive.png"
                                        alt="Landing Page responsive UI"
                                        width={1000}
                                        height={700}
                                        quality={100}
                                        className="rounded-2xl"
                                        onClick={() => setSelectedImage({
                                            src: "/projects/lexill/Desktop responsive.png",
                                            alt: "Landing Page responsive UI"
                                        })}
                                    />
                                    <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage({
                                                src: "/projects/lexill/Desktop responsive.png",
                                                alt: "Landing Page responsive UI"
                                            });
                                        }}
                                    >
                                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group cursor-pointer">
                        <Image 
                            src="/projects/lexill/Desktop overview.png"
                            alt="Lexill project cover"
                            width={1440}
                            height={1024}
                            quality={100}
                            className="rounded-2xl mt-14"
                            onClick={() => setSelectedImage({
                                src: "/projects/lexill/Desktop overview.png",
                                alt: "Lexill website UI overview"
                            })}
                        />
                        <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage({
                                    src: "/projects/lexill/Desktop overview.png",
                                    alt: "Lexill website UI overview"
                                });
                            }}
                        >
                            <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                        </div>
                    </div>
                    
                </div>
                {/* Footer */}
                <Footer />
                

            </div>

            {/* Add the ImageModal component */}
            <ImageModal 
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                imageSrc={selectedImage?.src ?? ''}
                imageAlt={selectedImage?.alt ?? ''}
            />

        </main>
    );
}
