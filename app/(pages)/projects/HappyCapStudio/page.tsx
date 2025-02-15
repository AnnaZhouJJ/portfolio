'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import ProjectHeader from "@/app/components/ProjectHeaderProps";
import Footer from "@/app/components/Footer";
import ImageModal from "@/app/components/ImageModal";

export default function HappyCapStudio() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

    return (
        <main>
            <ProjectHeader 
                client="Happy Cap Studio"
                year="09/2023 - 12/2023"
                scope={["UI/UX Design", "Kiosk Interface"]}
                title="Photo Booth Kiosk Interface Redesign"
                description="Happy Cap Studio is a boutique self-service photo studio where friends and family can take photos together. Working as a solo UI/UX Designer, I work closely with the founder/client to manage the project. I redesigned the kiosk interface to enhance user experience and visual design."                
            />
            
            <div className="max-w-[1440px] mx-auto px-2 pt-20 flex flex-col items-center">
                <div className="flex flex-col justify-center w-full">
                    <div className="relative group cursor-pointer">
                        <Image 
                            src="/projects/happycap/Brand Identity.png"
                            alt="Happy Cap Studio branding"
                            width={1400}
                            height={1024}
                            quality={100}
                            className="w-full mb-10"
                            onClick={() => setSelectedImage({
                                src: "/projects/happycap/Brand Identity.png",
                                alt: "Happy Cap Studio branding"
                            })}
                        />
                        <div 
                            className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage({
                                    src: "/projects/happycap/Brand Identity.png",
                                    alt: "Happy Cap Studio branding"
                                });
                            }}
                        >
                            <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                        </div>
                    </div>
                </div>
                <div className="max-w-[1000px] w-full flex flex-col items-center">
                    <div className="flex flex-col items-center gap-4 my-8">
                        <div className="relative group cursor-pointer">
                            <Image 
                                src="/projects/happycap/Happycapstudio mockup - before.png"
                                alt="Before UI changes"
                                width={1000}
                                height={700}
                                quality={100}
                                className="rounded-2xl shadow-lg"
                                onClick={() => setSelectedImage({
                                    src: "/projects/happycap/Happycapstudio mockup - before.png",
                                    alt: "Before UI changes"
                                })}
                            />
                            <div 
                                className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage({
                                        src: "/projects/happycap/Happycapstudio mockup - before.png",
                                        alt: "Before UI changes"
                                    });
                                }}
                            >
                                <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                            </div>
                        </div>
                        <p className="text-gray-700 font-semibold text-base pt-4">Before UI changes</p>
                    </div>
                    <div className="flex flex-col items-center gap-4 mt-8">
                        <div className="relative group cursor-pointer">
                            <Image 
                                src="/projects/happycap/Happycapstudio mockup - after.png"
                                alt="After UI changes"
                                width={1200}
                                height={924}
                                quality={100}
                                className="rounded-2xl shadow-lg"
                                onClick={() => setSelectedImage({
                                    src: "/projects/happycap/Happycapstudio mockup - after.png",
                                    alt: "After UI changes"
                                })}
                            />
                            <div 
                                className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage({
                                        src: "/projects/happycap/Happycapstudio mockup - after.png",
                                        alt: "After UI changes"
                                    });
                                }}
                            >
                                <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                            </div>
                        </div>
                        <p className="text-gray-700 font-semibold text-base pt-4">After UI changes</p>
                    </div>
                    
                    <div className="w-full py-16 flex flex-col gap-16">
                        <div className="grid grid-cols-1 lg:grid-cols-[250px,600px] gap-14">
                            {/* Key Responsibility Section */}
                            <h2 className="text-2xl font-semibold text-gray-800">Key Responsibility</h2>
                            <ul className="text-lg space-y-6 text-gray-600 list-disc">
                                <li>Served as the sole UI/UX designer, collaborating directly with the founder/client throughout the project lifecycle.</li>
                                <li>Conducted a UX audit of the existing kiosk interface to identify pain points and areas for improvement.</li>
                                <li>Conducted brand research to develop a new colour palette and typography system, strengthening brand consistency.</li>
                                <li>Redesigned the user interface with a focus on enhancing user experience and visual design.</li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-[250px,600px] gap-14">
                            {/* Project Management */}
                            <h2 className="text-2xl font-semibold text-gray-800">Project Management</h2>
                            <ul className="text-lg space-y-6 text-gray-600 list-disc">
                                <li>Collaborated closely with the client to structure the project into two distinct milestones.</li>
                                <li>Developed and presented a strategic project delivery plan, prioritizing UI design changes based on critical user needs and business objectives.</li>
                                <li>Managed all aspects of the design process, ensuring timely delivery and seamless communication with the client.</li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-[250px,600px] gap-14">
                            {/* Outcome Section */}
                            <h2 className="text-2xl font-semibold text-gray-800">Outcome</h2>
                            <div className="flex flex-col gap-8">
                                <ul className="text-lg space-y-6 text-gray-600 list-disc">
                                    <li>Delivered a significantly improved kiosk interface that addressed key user pain points while elevating the overall aesthetic appeal.</li>
                                    <li>Received outstanding client feedback, including a perfect 5-star review.</li>
                                    <li>Achieved 100% on-time project delivery, demonstrating strong time management and professional commitment.</li>
                                </ul>
                                <Image 
                                    src="/projects/happycap/Client Review.png"
                                    alt="5start Client Review"
                                    width={800}
                                    height={400}
                                    quality={100}
                                    className="rounded-2xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Design Showcase Section */}
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full max-w-6xl border-t border-gray-300 mb-8"></div>

                        {/* color and fonts */}
                        <div className="max-w-[1000px] w-full">
                            <p className="text-lg font-semibold text-gray-700 px-4 mb-6">Color and Fonts</p>
                            <div className="flex flex-col gap-6">
                                <div className="relative group cursor-pointer">
                                    <Image 
                                        src="/projects/happycap/Color-darker.png"
                                        alt="UI color system"
                                        width={1000}
                                        height={700}
                                        quality={100}
                                        onClick={() => setSelectedImage({
                                            src: "/projects/happycap/Color-darker.png",
                                            alt: "UI color system"
                                        })}
                                    />
                                    <div 
                                        className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage({
                                                src: "/projects/happycap/Color-darker.png",
                                                alt: "UI color system"
                                            });
                                        }}
                                    >
                                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                    </div>
                                </div>
                                
                                <div className="relative group cursor-pointer">
                                    <Image 
                                        src="/projects/happycap/Fonts.png"
                                        alt="UI fonts system"
                                        width={1000}
                                        height={700}
                                        quality={100}
                                        onClick={() => setSelectedImage({
                                            src: "/projects/happycap/Fonts.png",
                                            alt: "UI fonts system"
                                        })}
                                    />
                                    <div 
                                        className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage({
                                                src: "/projects/happycap/Fonts.png",
                                                alt: "UI fonts system"
                                            });
                                        }}
                                    >
                                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* UIUX improvements */}
                        <div className="max-w-[1000px] w-full mt-20">
                            <p className="text-lg font-semibold text-gray-700 px-4 mb-6">User Interface & User experience improvement example</p>
                            <div className="flex flex-col gap-6 justify-center items-center">
                                <div className="relative group cursor-pointer">
                                    <Image 
                                        src="/projects/happycap/Select quantity - full.png"
                                        alt="Before UI changes: Select quantity page"
                                        width={1000}
                                        height={700}
                                        quality={100}
                                        className="rounded-2xl shadow-lg"
                                        onClick={() => setSelectedImage({
                                            src: "/projects/happycap/Select quantity - full.png",
                                            alt: "Before UI changes: Select quantity page"
                                        })}
                                    />
                                    <div 
                                        className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage({
                                                src: "/projects/happycap/Select quantity - full.png",
                                                alt: "Before UI changes: Select quantity page"
                                            });
                                        }}
                                    >
                                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                    </div>
                                </div>
                                <p className="text-gray-600 text-base font-semibold mb-8 px-4">Before UI changes (Select quantity page)</p>
                                
                                <div className="relative group cursor-pointer">
                                    <Image 
                                        src="/projects/happycap/3. Select Quantity.png"
                                        alt="After UI changes: Select quantity page"
                                        width={1000}
                                        height={700}
                                        quality={100}
                                        className="rounded-2xl shadow-lg"
                                        onClick={() => setSelectedImage({
                                            src: "/projects/happycap/3. Select Quantity.png",
                                            alt: "After UI changes: Select quantity page"
                                        })}
                                    />
                                    <div 
                                        className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage({
                                                src: "/projects/happycap/3. Select Quantity.png",
                                                alt: "After UI changes: Select quantity page"
                                            });
                                        }}
                                    >
                                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                    </div>
                                </div>
                                <p className="text-gray-600 text-base font-semibold mb-8 px-4">After UI changes (Select quantity page)</p>
                            </div>
                            <div className="flex flex-col gap-4 mt-6">
                                <p className="text-grey-700 font-semibold text-lg">Select quantity screen</p>
                                <div className="ml-6">
                                    <p className="text-gray-700 text-lg font-semibold">1. Usability Enhancement:</p>
                                    <ul className="text-gray-600 text-lg list-disc ml-5 leading-loose">
                                        <li>Quantity Selection: Replaced the increment/decrement system with direct selection buttons (1, 2, 4, 6, 8, 10).</li>
                                        <li>This change allows users to select their desired quantity with a single tap, significantly reducing interaction time and potential for input errors.</li>
                                        <li>Streamlines the selection process, especially beneficial in a time-constrained environment like a photo booth.</li>
                                    </ul>
                                    <p className="text-gray-700 text-lg font-semibold mt-4">2. Information Hierarchy and Clarity:</p>
                                    <ul className="text-gray-600 text-lg list-disc ml-5 leading-loose">
                                        <li>Added a clear instruction:&quot;Please select quantity of prints&quot; directly below the title. Provides immediate context and clear direction to users.</li>
                                        <li>Included a clear &quot;Total Amount: $25&quot; display. Provides immediate feedback on the cost, enhancing transparency and user confidence in the transaction.</li>
                                        <li>&quot;Time limited&quot; is labelled in the top-right corner for clarity.</li>
                                    </ul>
                                    <p className="text-gray-700 text-lg font-semibold mt-4">3. Layout and Visual Clarity:</p>
                                    <ul className="text-gray-600 text-lg list-disc ml-5 leading-loose">
                                        <li>Adopted a consistent, rounded rectangle button design for all interactive elements.</li>
                                        <li>Aligned coupon feature with other elements for a more cohesive look.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* More Designs */}
                        <div className="max-w-[1000px] w-full mt-20">
                            <p className="text-lg font-semibold text-gray-700 px-4 mb-6">More Designs</p>
                            <div className="flex flex-col gap-6">
                                <div className="relative group cursor-pointer">
                                    <Image 
                                        src="/projects/happycap/UI 1.png"
                                        alt="Select Frame Cut UI"
                                        width={1000}
                                        height={700}
                                        quality={100}
                                        onClick={() => setSelectedImage({
                                            src: "/projects/happycap/UI 1.png",
                                            alt: "Select Frame Cut UI"
                                        })}
                                    />
                                    <div 
                                        className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage({
                                                src: "/projects/happycap/UI 1.png",
                                                alt: "Select Frame Cut UI"
                                            });
                                        }}
                                    >
                                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-[1000px]">
                                    <div className="relative group cursor-pointer flex items-center justify-center">
                                        <Image 
                                            src="/projects/happycap/UI 2.png"
                                            alt="Pose Screen UI"
                                            width={600}
                                            height={700}
                                            quality={100}
                                            className="rounded-2xl h-full object-contain"
                                            onClick={() => setSelectedImage({
                                                src: "/projects/happycap/UI 2.png",
                                                alt: "Pose Screen UI"
                                            })}
                                        />
                                        <div 
                                            className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedImage({
                                                    src: "/projects/happycap/UI 2.png",
                                                    alt: "Pose Screen UI"
                                                });
                                            }}
                                        >
                                            <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                        </div>
                                    </div>
                                    <div className="relative group cursor-pointer flex items-center justify-center">
                                        <Image 
                                            src="/projects/happycap/UI 3.png"
                                            alt="Photo Preview UI"
                                            width={400}
                                            height={700}
                                            quality={100}
                                            className="rounded-2xl h-full object-contain"
                                            onClick={() => setSelectedImage({
                                                src: "/projects/happycap/UI 3.png",
                                                alt: "Photo Preview UI"
                                            })}
                                        />
                                        <div 
                                            className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedImage({
                                                    src: "/projects/happycap/UI 3.png",
                                                    alt: "Photo Preview UI"
                                                });
                                            }}
                                        >
                                            <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                        </div>
                                    </div>
                                </div>

                                <div className="relative group cursor-pointer">
                                    <Image 
                                        src="/projects/happycap/UI 4.png"
                                        alt="Select Photo and frames UI"
                                        width={1000}
                                        height={700}
                                        quality={100}
                                        className="rounded-2xl"
                                        onClick={() => setSelectedImage({
                                            src: "/projects/happycap/UI 4.png",
                                            alt: "Select Photo and frames UI"
                                        })}
                                    />
                                    <div 
                                        className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage({
                                                src: "/projects/happycap/UI 4.png",
                                                alt: "Select Photo and frames UI"
                                            });
                                        }}
                                    >
                                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                    </div>
                                </div>

                                <div className="relative group cursor-pointer">
                                    <Image 
                                        src="/projects/happycap/UI 5.png"
                                        alt="Photo booth UI mockup"
                                        width={1000}
                                        height={700}
                                        quality={100}
                                        className="rounded-2xl"
                                        onClick={() => setSelectedImage({
                                            src: "/projects/happycap/UI 5.png",
                                            alt: "Photo booth UI mockup"
                                        })}
                                    />
                                    <div 
                                        className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage({
                                                src: "/projects/happycap/UI 5.png",
                                                alt: "Photo booth UI mockup"
                                            });
                                        }}
                                    >
                                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <Footer />
            </div>
            <ImageModal 
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                imageSrc={selectedImage?.src ?? ''}
                imageAlt={selectedImage?.alt ?? ''}
            />
        </main>
    )
}
