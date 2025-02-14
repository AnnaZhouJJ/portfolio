'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import ImageModal from '@/app/components/ImageModal'
import Footer from '@/app/components/Footer';
import ProjectHeader from '@/app/components/ProjectHeaderProps';
import Image from "next/image";

export default function Frontcover () {
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; caption?: string } | null>(null);

    return (
        <main>
            <ProjectHeader 
                client="Frontcover"
                year="11/2024 - 12/2024"
                scope={["UI Design", "Website", "Components"]}
                title="Designed a bento-style widget template for communities"
                description="Frontcover is a digital platform for growing vibrant communities. Through visual updates, curated content, and exclusive benefits, the platform creates a centralized hub that keeps communities connected and engaged."
                websiteLink="https://frontcover.com"
            />
            {/* Rest of the case study content */}
            <div className="max-w-[1440px] mx-auto px-12 pt-20 flex flex-col items-center">
                <div className="flex flex-col justify-center">
                    <Image 
                        src="/projects/frontcover/Frontcover-Portfolio-cover.png"
                        alt="Frontcover project cover"
                        width={1440}
                        height={1024}
                        quality={100}
                        className='rounded-2xl'
                    />
                    
                    <div className="py-16 flex justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-[250px,600px] gap-10">
                            {/* Key Responsibility Section */}
                            <h2 className="text-2xl font-semibold text-gray-800">Key Responsibility</h2>
                            <ul className="text-lg space-y-6 text-gray-600 list-disc">
                                <li>Designed widget components and bento-style layouts to showcase events, blog content, investors and other community features.</li>
                                <li>Created a reusable Figma template that enables community managers to customize widgets while maintaining their own brand consistency easily.</li>
                                <li>Collaborated closely with the founder through an iterative design process to ensure alignment with platform goals and user needs.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="pb-16 flex justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-[250px,600px] gap-10">
                            {/* Outcome Section */}
                            <h2 className="text-2xl font-semibold text-gray-800">Outcome</h2>
                            <ul className="text-lg space-y-6 text-gray-600 list-disc">
                                <li>Successfully delivered a refreshed community page design that enhances visual storytelling and content discovery. It is being implemented across the Frontcover platform.</li>
                                <li>Delivered Figma bento-style widget template for other communities on the platform.</li>
                                <li>Completed the project on schedule while maintaining high design standards and client satisfaction.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Testimonial Section */}
                    <div className="pb-20 flex justify-center">
                        <div className="max-w-[1000px] w-full bg-gray-100 rounded-xl p-12 flex flex-col items-center text-center">
                            <p className="text-xl font-medium text-gray-800 mb-8">&quot;Anna did great work and was great to work with. She is very responsive.&quot;</p>
                            <div className="flex items-center gap-4">
                                <Image 
                                    src="/projects/frontcover/alan-crabbe.jpg"
                                    alt="Alan Crabbe"
                                    width={60}
                                    height={60}
                                    className="rounded-full shadow-md"
                                />
                                <div className="text-start">
                                    <p className="font-medium text-gray-800">Alan Crabbe</p>
                                    <p className="text-gray-600">Founder @ Frontcover</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Design Showcase Section */}
                    <div className="pb-10 flex justify-center">
                        <div className="max-w-[1000px] w-full">
                            <h2 className="text-2xl font-medium text-gray-800 mb-10">Design Showcase</h2>
                            <div className="flex flex-col gap-12">
                                {[
                                    {
                                        src: '/projects/frontcover/frontcover - before.png',
                                        alt: 'Frontcover design - before changes',
                                        caption: 'Before changes (Frontcover Community Page)'
                                    },
                                    {
                                        src: '/projects/frontcover/frontcover - after2.png',
                                        alt: 'Frontcover design - after changes',
                                        caption: 'After changes example (Frontcover Community Page)'
                                    }
                                ].map((image, index) => (
                                    <div key={index} className="flex flex-col gap-4">
                                        <div className="relative group cursor-pointer">
                                            <Image 
                                                src={image.src}
                                                alt={image.alt}
                                                width={1000}
                                                height={700}
                                                className="rounded-2xl"
                                                onClick={() => setSelectedImage(image)}
                                            />
                                            <div 
                                                className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg cursor-pointer"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedImage(image);
                                                }}
                                            >
                                                <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <p className="text-gray-800 font-semibold text-base">{image.caption}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <ImageModal 
                        isOpen={!!selectedImage}
                        onClose={() => setSelectedImage(null)}
                        imageSrc={selectedImage?.src ?? ''}
                        imageAlt={selectedImage?.alt ?? ''}
                    />

                    {/* Design Process Section */}
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full max-w-6xl border-t border-gray-300 mb-8"></div>

                        {/* step 1 */}
                        <div className="max-w-[1000px] w-full">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-14">Design Process</h2>
                            <p className='text-gray-700 text-base mb-4'>STEP 1: DISCOVERY & ANALYSIS</p>
                            <p className='text-gray-800 text-3xl font-semibold mb-4'>Research and analyze technical constraints</p>
                            <p className='text-gray-700 text-xl leading-relaxed mb-6'>Explored contemporary bento-style layouts and analyzed system requirements to establish design parameters for the widget system.</p>
                            <div className="flex flex-col gap-6">
                                <div className="relative group cursor-pointer">
                                    <Image 
                                        src="/projects/frontcover/1.2 Card configuration.png"
                                        alt="Card configuration"
                                        width={1000}
                                        height={700}
                                        className="rounded-2xl"
                                        onClick={() => setSelectedImage({
                                            src: "/projects/frontcover/1.2 Card configuration.png",
                                            alt: "Card configuration"
                                        })}
                                    />
                                    <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage({
                                                src: "/projects/frontcover/1.2 Card configuration.png",
                                                alt: "Card configuration"
                                            });
                                        }}
                                    >
                                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                    </div>
                                </div>
                                <p className="text-gray-700 font-sm mb-8 px-4">Defined core card elements: configuration options, labels, and interaction states.</p>
                                
                                <div className="relative group cursor-pointer">
                                    <Image 
                                        src="/projects/frontcover/1.3 Card size.png"
                                        alt="Card size"
                                        width={1000}
                                        height={700}
                                        className="rounded-2xl"
                                        onClick={() => setSelectedImage({
                                            src: "/projects/frontcover/1.3 Card size.png",
                                            alt: "Card size"
                                        })}
                                    />
                                    <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage({
                                                src: "/projects/frontcover/1.3 Card size.png",
                                                alt: "Card size"
                                            });
                                        }}
                                    >
                                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                    </div>
                                </div>
                                <p className="text-gray-700 font-sm mb-8 px-4">Define fixed widget sizes based on technical constraints on the web to maintain consistency across different cards.</p>
                            </div>
                        </div>

                        {/* step 2 */}
                        <div className="max-w-[1000px] w-full mt-14">
                            <p className='text-gray-700 text-base mb-4'>STEP 2: DESIGN</p>
                            <p className='text-gray-800 text-3xl font-semibold mb-4'>Created a design system</p>
                            <p className='text-gray-700 text-xl leading-relaxed mb-6'>Created a comprehensive design system with color palette, typography, and spacing guidelines to ensure brand cohesion.</p>
                            <div className="flex flex-col gap-6">
                                <div className="relative group cursor-pointer">
                                    <Image 
                                        src="/projects/frontcover/2.1 Brand Guideline.png"
                                        alt="Brand Guideline"
                                        width={1000}
                                        height={700}
                                        className="rounded-2xl"
                                        onClick={() => setSelectedImage({
                                            src: "/projects/frontcover/2.1 Brand Guideline.png",
                                            alt: "Brand Guideline"
                                        })}
                                    />
                                    <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage({
                                                src: "/projects/frontcover/2.1 Brand Guideline.png",
                                                alt: "Brand Guideline"
                                            });
                                        }}
                                    >
                                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                    </div>
                                </div>
                                <p className="text-gray-700 font-sm mb-8 px-4">Established color palette and typography hierarchy for consistent visual language.</p>
                            </div>
                        </div>

                        {/* step 3 */}
                        <div className="max-w-[1000px] w-full mt-14">
                            <p className='text-gray-700 text-base mb-4'>STEP 3: COMPONENT CREATION</p>
                            <p className='text-gray-800 text-3xl font-semibold mb-4'>Widget design and layout</p>
                            <p className='text-gray-700 text-xl leading-relaxed mb-6'>Explored bento-style arrangements to create engaging community content displays and designed widgets with a fixed size.</p>
                            <div className="flex flex-col gap-6">
                                <div className="relative group cursor-pointer">
                                    <Image 
                                        src="/projects/frontcover/3.1  Component size.png"
                                        alt="Component size"
                                        width={1000}
                                        height={700}
                                        className="rounded-2xl"
                                        onClick={() => setSelectedImage({
                                            src: "/projects/frontcover/3.1  Component size.png",
                                            alt: "Component size"
                                        })}
                                    />
                                    <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage({
                                                src: "/projects/frontcover/3.1  Component size.png",
                                                alt: "Component size"
                                            });
                                        }}
                                    >
                                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                    </div>
                                </div>
                                <p className="text-gray-700 font-sm mb-8 px-4">Explored various bento-style arrangements to showcase different content types effectively.</p>
                                
                                <div className="relative group cursor-pointer">
                                    <Image 
                                        src="/projects/frontcover/3.2  Component example.png"
                                        alt="Component UI example"
                                        width={1000}
                                        height={700}
                                        className="rounded-2xl"
                                        onClick={() => setSelectedImage({
                                            src: "/projects/frontcover/3.2  Component example.png",
                                            alt: "Component UI example"
                                        })}
                                    />
                                    <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage({
                                                src: "/projects/frontcover/3.2  Component example.png",
                                                alt: "Component UI example"
                                            });
                                        }}
                                    >
                                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                    </div>
                                </div>
                                <p className="text-gray-700 font-sm mb-8 px-4">Examples of: Designed widgets with standardized sizes and consistent styling across different content types.</p>
                            </div>
                        </div>

                        {/* step 4 */}
                        <div className="max-w-[1000px] w-full mt-14">
                            <p className='text-gray-700 text-base mb-4'>STEP 4: TESTING & REFINEMENT</p>
                            <p className='text-gray-800 text-3xl font-semibold mb-4'>Iteration and refinement</p>
                            <p className='text-gray-700 text-xl leading-relaxed mb-6'>Collaborated with the founder through multiple design iterations to optimize layouts and visual elements.</p>
                            <div className="flex flex-col gap-6">
                                <div className="relative group cursor-pointer">
                                    <Image 
                                        src="/projects/frontcover/4.1 Iteration.png"
                                        alt="Iteration"
                                        width={1000}
                                        height={700}
                                        className="rounded-2xl"
                                        onClick={() => setSelectedImage({
                                            src: "/projects/frontcover/4.1 Iteration.png",
                                            alt: "Iteration"
                                        })}
                                    />
                                    <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage({
                                                src: "/projects/frontcover/4.1 Iteration.png",
                                                alt: "Iteration"
                                            });
                                        }}
                                    >
                                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                    </div>
                                </div>
                                <p className="text-gray-700 font-sm mb-8 px-4">Screenshots: Refined widget designs through feedback cycles, exploring various layout options and icon styles.</p>
                            </div>
                        </div>

                        {/* step 5 */}
                        <div className="max-w-[1000px] w-full mt-14">
                            <p className='text-gray-700 text-base mb-4'>STEP 5: CREATE DESIGN TEMPLATE</p>
                            <p className='text-gray-800 text-3xl font-semibold mb-4'>Designed a reusable template for other communities on the platform</p>
                            <p className='text-gray-700 text-xl leading-relaxed mb-6'>Created a reusable Figma template enabling communities to customize widgets while maintaining design consistency easily.</p>
                            <div className="flex flex-col gap-6">
                                <div className="relative group cursor-pointer">
                                    <Image 
                                        src="/projects/frontcover/Frontcover-Portfolio-cover.png"
                                        alt="Template"
                                        width={1000}
                                        height={700}
                                        className="rounded-2xl"
                                        onClick={() => setSelectedImage({
                                            src: "/projects/frontcover/Frontcover-Portfolio-cover.png",
                                            alt: "Template"
                                        })}
                                    />
                                    <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage({
                                                src: "/projects/frontcover/Frontcover-Portfolio-cover.png",
                                                alt: "Template"
                                            });
                                        }}
                                    >
                                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                                    </div>
                                </div>
                                <p className="text-gray-700 font-sm mb-2 px-4">Created an organized template with clear documentation and preset layouts for efficient design changes. Community managers can easily make content changes based on the template. (Image: Design Template Cover)</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <Footer />
            </div>
        </main>
    );
}