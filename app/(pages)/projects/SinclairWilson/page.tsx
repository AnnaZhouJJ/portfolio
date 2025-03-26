'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import ImageModal from '@/app/components/ImageModal'
import Footer from '@/app/components/Footer';
import Image from "next/image";

export default function SinclairWilson () {
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; caption?: string } | null>(null);

    return (
        <main>
            <div className="max-w-[1440px] mx-auto px-8 md:px-12 pt-32 flex flex-col items-center">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-[200px,800px] gap-10">
                    {/* Left column */}
                    <div className="space-y-8 mt-2">
                        <div className="flex flex-row lg:flex-col gap-20 lg:gap-8">
                            {/* Client */}
                            <div>
                                <h2 className="text-gray-800 font-medium uppercase mb-2">CASE STUDY</h2>
                                <p className="text-gray-700">Sinclair Wilson</p>
                            </div>

                            {/* Year */}
                            <div>
                                <h2 className="text-gray-800 font-medium uppercase mb-2">YEAR</h2>
                                <p className="text-gray-700">March 2025</p>
                            </div>
                        </div>
                        {/* Scope of work */}
                        <div>
                            <h2 className="text-gray-800 font-medium uppercase mb-4">SCOPE OF WORK</h2>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg">Web Design</span>
                                <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg">Landing Page</span>
                                <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg">Responsive</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8 lg:border-l lg:pl-10 border-gray-200">
                        <h1 className="text-[44px] font-semibold text-gray-800 leading-snug">Re-design Financial Services Landing Page</h1>
                        <p className="text-xl text-gray-700 leading-relaxed">Sinclair Wilson is an established accounting and financial services firm serving South-West Victoria and South-East South Australia since 1950. This redesign project focused on modernizing their digital presence to better reflect their professional expertise and improve the overall user experience.</p>
                        <a
                            href={"https://www.figma.com/proto/6UBU0Q987tjFjshyoYeFu5/SinclairWilson-Web-Design?page-id=0%3A1&node-id=4-182&p=f&viewport=410%2C93%2C0.07&t=izR6nxJ5T7IRryJL-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4%3A182&show-proto-sidebar=1"}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="inline-flex items-center text-lg font-medium text-gray-700 hover:underline transition-colors"
                        >
                            View Prototype
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
                    </div>
                </div>

                {/* Cover */}
                <div className="flex flex-col justify-center">
                    <Image
                        src="/projects/SinclairWilson/2.Cover.png"
                        alt="Sinclair Wilson website cover"
                        width={1280}
                        height={769}
                        quality={100}
                        className="mt-10"
                    />
                    <div className="w-full border-t border-gray-300 mt-8"></div>
                </div>

                <ImageModal 
                    isOpen={!!selectedImage}
                    onClose={() => setSelectedImage(null)}
                    imageSrc={selectedImage?.src ?? ''}
                    imageAlt={selectedImage?.alt ?? ''}
                />

                {/* The Challenge */}
                <div className="max-w-[1000px] w-full">
                    <h2 className="text-gray-800 text-3xl font-semibold mt-10 mb-6">The Challenge</h2>
                    <p className='text-gray-700 text-xl leading-relaxed mb-4'>Sinclair Wilson is a well-established accounting firm with over 70 years of history. However, their online presence did not reflect their standing in the industry. The challenge was to create a website design that would:</p>
                    <ol className="list-decimal text-gray-600 text-lg leading-relaxed pl-10 mb-6">
                        <li>Better represent their <b>professional expertise and credibility</b></li>
                        <li>Improve the overall <b>user experience</b> for potential and existing clients</li>
                        <li>Create clear pathways to <b>conversion</b></li>
                        <li>Function effectively <b>across all devices</b></li>
                        <li>Maintain <b>brand recognition</b> while modernizing the visual presentation</li>
                    </ol>
                    <div className="flex flex-col gap-12">
                        {[
                            {
                                src: '/projects/SinclairWilson/4.Hero - Before.png',
                                alt: 'Sinclair Wilson Landing page - before changes',
                                caption: 'Landing Page Screenshot (Before)'
                            },
                            {
                                src: '/projects/SinclairWilson/3.Hero - After.png',
                                alt: 'Sinclair Wilson Landing page - after changes',
                                caption: 'Landing Page Redesign (After)'
                            }
                        ].map((image, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <div className="relative group cursor-pointer">
                                    <Image 
                                        src={image.src}
                                        alt={image.alt}
                                        width={1000}
                                        height={700}
                                        quality={100}
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

                {/* Problem Analysis */}
                <div className="max-w-[1000px] w-full mt-14">
                    <h2 className="text-gray-800 text-3xl font-semibold my-6">Problem Analysis</h2>
                    <p className='text-gray-700 text-xl leading-relaxed mb-6'>After a thorough audit of the existing website, I identified several critical issues:</p>
                    <p className='text-gray-700 text-xl font-semibold leading-relaxed mb-2'>Navigation & Accessibility Issues:</p>
                    <ul className="text-lg space-y-2 text-gray-600 list-disc pl-10">
                        <li>Left-side vertical navigation is unconventional for financial websites, creating potential user confusion</li>
                        <li>{"Critical functions like 'Client Login' were not prominently positioned for regular users"}</li>
                    </ul>
                    <p className='text-gray-700 text-xl font-semibold leading-relaxed mt-6 mb-2'>Content Strategy Weaknesses:</p>
                    <ul className="text-lg space-y-2 text-gray-600 list-disc pl-10">
                        <li>The landing page lacked a clear value proposition or compelling headline</li>
                        <li>Hero image was visually appealing but irrelevant to financial services</li>
                        <li>Instagram posts displayed on the homepage had no clear business relevance or strategy</li>
                        <li>Service offerings lacked descriptive details, requiring additional clicks to understand what was offered</li>
                    </ul>
                    <p className='text-gray-700 text-xl font-semibold leading-relaxed mt-6 mb-2'>Design & Visual Hierarchy:</p>
                    <ul className="text-lg space-y-2 text-gray-600 list-disc pl-10">
                        <li>Cluttered layout with inconsistent visual hierarchy made content scanning difficult</li>
                        <li>{"Outdated visual design didn't reflect the firm's professional standing"}</li>
                        <li>Overall aesthetic failed to inspire confidence in an industry where trust is paramount</li>
                    </ul>
                    <p className='text-gray-700 text-xl font-semibold leading-relaxed mt-6 mb-2'>Responsive Design Limitations:</p>
                    <ul className="text-lg space-y-2 text-gray-600 list-disc pl-10">
                        <li>Important content elements disappeared entirely on smaller screens (Client Login button and News)</li>
                    </ul>
                    <p className='text-gray-700 text-xl leading-relaxed my-6'>These issues likely contributed to have higher bounce rates, lower user engagement and missed conversion opportunities.</p>
                    <div className="flex flex-col items-center gap-6">
                        <div className="relative group cursor-pointer">
                            <Image
                                src="/projects/SinclairWilson/5.Hero section analysis.png"
                                alt="Current Hero Section Analysis"
                                width={1000}
                                height={700}
                                quality={100}
                                onClick={() => setSelectedImage({
                                    src: "/projects/SinclairWilson/5.Hero section analysis.png",
                                    alt: "Current Hero Section Analysis"
                                })}
                            />
                            <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage({
                                        src: "/projects/SinclairWilson/5.Hero section analysis.png",
                                        alt: "Current Hero Section Analysis"
                                    });
                                }}
                            >
                                <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                            </div>
                        </div>
                        <p className="text-gray-800 font-semibold text-base">Current Hero Section Analysis</p>
                    </div>
                    
                </div>

               {/* Research & Strategy */}
               <div className="max-w-[1000px] w-full mt-14">
                    <h2 className="text-gray-800 text-3xl font-semibold my-6">Research & Strategy</h2>
                    <p className='text-gray-700 text-xl font-semibold leading-relaxed mb-2'>Brand Analysis:</p>
                    <ul className="text-lg space-y-2 text-gray-600 list-disc pl-10">
                        <li>Examined their existing logo featuring distinctive handwritten script elements</li>
                        <li>Noted their established blue color palette which conveys trust and professionalism</li>
                        <li>Researched their brand history to understand their core values and positioning</li>
                        <li>Identified key services that formed the foundation of their business</li>
                    </ul>
                    <div className="grid grid-cols-1 lg:grid-cols-[410px,600px] gap-6 mb-8">
                        <Image
                            src="/projects/SinclairWilson/6.Brand analysis - Logo.png"
                            alt="Sinclair Wilson Brand Logo"
                            width={733}
                            height={639}
                            quality={100}
                            className="mt-10"
                        />
                        <Image
                            src="/projects/SinclairWilson/7.Brand analysis - color.png"
                            alt="Sinclair Wilson Branding Color"
                            width={1071}
                            height={639}
                            quality={100}
                            className="mt-10"
                        />
                    </div>
                    <p className="text-gray-700 text-xl font-semibold leading-relaxed mb-2">Target Audience Considerations:</p>
                    <ul className="text-lg space-y-2 text-gray-600 list-disc pl-10">
                        <li>Primary audience includes business owners and individuals seeking financial guidance</li>
                        <li>Users typically have varying levels of financial literacy</li>
                        <li>Many users would be accessed on mobile devices as well</li>
                    </ul>
                    <div className="w-full border-t border-gray-300 mt-14"></div>
               </div>

               {/* Design Process */}
               <div className="max-w-[1000px] w-full mt-14">
                    <h2 className="text-gray-800 text-3xl font-semibold mb-6">Design Process</h2>
                    <p className='text-gray-700 text-xl leading-relaxed mb-6'>My design process followed a strategic approach focused on both user experience and brand enhancement:</p>
                    <p className='text-gray-700 text-xl font-semibold leading-relaxed mb-2'>1. Strategic Content Architecture</p>
                    <ul className="text-lg space-y-2 text-gray-600 list-disc pl-10">
                        <li>Reorganized landing page content with a clear visual hierarchy</li>
                        <li>{"Added new sections to better showcase the company's expertise and services"}</li>
                        <li>Designed content blocks to guide users through a logical information flow</li>
                        <li>Created dedicated spaces for team introduction and service highlights</li>
                    </ul>
                    <p className='text-gray-700 text-xl font-semibold leading-relaxed mt-6 mb-2'>2. Conversion Optimization</p>
                    <ul className="text-lg space-y-2 text-gray-600 list-disc pl-10">
                        <li>Strategically placed clear, compelling calls-to-action throughout the page</li>
                        <li>Made contact points easily accessible at multiple user journey touchpoints</li>
                        <li>{"Created visual emphasis for the 'Client Login' and 'Get in Touch' actions"}</li>
                        <li>Designed service cards with subtle interaction cues to encourage exploration</li>
                    </ul>
                    <p className='text-gray-700 text-xl font-semibold leading-relaxed mt-6 mb-2'>3. Wireframe</p>
                    <ul className="text-lg space-y-2 text-gray-600 list-disc pl-10">
                        <li>Developed low-fidelity wireframes to establish layout structure</li>
                    </ul>
                    <div className="flex flex-col items-center gap-6 mt-8">
                        <div className="relative group cursor-pointer">
                            <Image
                                src="/projects/SinclairWilson/8.Wireframe.png"
                                alt="Landing Page Wireframe"
                                width={1000}
                                height={700}
                                quality={100}
                                onClick={() => setSelectedImage({
                                    src: "/projects/SinclairWilson/8.Wireframe.png",
                                    alt: "Landing Page Wireframe"
                                })}
                            />
                            <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage({
                                        src: "/projects/SinclairWilson/8.Wireframe.png",
                                        alt: "Landing Page Wireframe"
                                    });
                                }}
                            >
                                <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                            </div>
                        </div>
                        <p className="text-gray-800 font-semibold text-base">Landing Page Wireframe</p>
                    </div>
                    <p className='text-gray-700 text-xl font-semibold leading-relaxed mt-12 mb-2'>4. Strengthen brand presence</p>
                    <ul className="text-lg space-y-2 text-gray-600 list-disc pl-10">
                        <li>Refined the application of their existing blue color palette for better visual impact</li>
                        <li>Incorporated the handwritten script elements from their logo into the design</li>
                        <li>Selected professional imagery that better aligns with financial services</li>
                        <li>Created a cohesive visual language throughout all page elements</li>
                    </ul>
                    <div className="flex flex-col items-center gap-6 mt-8">
                        <div className="relative group cursor-pointer">
                            <Image
                                src="/projects/SinclairWilson/9.Brand Color.png"
                                alt="Landing Page Wireframe"
                                width={1000}
                                height={700}
                                quality={100}
                                onClick={() => setSelectedImage({
                                    src: "/projects/SinclairWilson/9.Brand Color.png",
                                    alt: "Landing Page Wireframe"
                                })}
                            />
                            <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage({
                                        src: "/projects/SinclairWilson/9.Brand Color.png",
                                        alt: "Landing Page Wireframe"
                                    });
                                }}
                            >
                                <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                            </div>
                        </div>
                        <p className="text-gray-800 font-semibold text-base">Strengthen Brand Presence</p>
                    </div>
                    <p className='text-gray-700 text-xl font-semibold leading-relaxed mt-12 mb-2'>5. Hi-fidelity Prototype</p>
                    <ul className="text-lg space-y-2 text-gray-600 list-disc pl-10">
                        <li>Responsive design for both desktop and mobile</li>
                    </ul>
                    <div className="flex flex-col items-center gap-12 mt-8">
                        <div className="relative group cursor-pointer">
                            <Image
                                src="/projects/SinclairWilson/10.Hi-fi 1.png"
                                alt="Responsive Design (Desktop & Mobile)"
                                width={1000}
                                height={700}
                                quality={100}
                                onClick={() => setSelectedImage({
                                    src: "/projects/SinclairWilson/10.Hi-fi 1.png",
                                    alt: "Responsive Design (Desktop & Mobile)"
                                })}
                            />
                            <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage({
                                        src: "/projects/SinclairWilson/10.Hi-fi 1.png",
                                        alt: "Responsive Design (Desktop & Mobile)"
                                    });
                                }}
                            >
                                <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                            </div>
                        </div>
                        <div className="relative group cursor-pointer">
                            <Image
                                src="/projects/SinclairWilson/11.Hi-fi 2.png"
                                alt="Responsive Design (Mobile)"
                                width={1000}
                                height={700}
                                quality={100}
                                onClick={() => setSelectedImage({
                                    src: "/projects/SinclairWilson/11.Hi-fi 2.png",
                                    alt: "Responsive Design (Mobile)"
                                })}
                            />
                            <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage({
                                        src: "/projects/SinclairWilson/11.Hi-fi 2.png",
                                        alt: "Responsive Design (Mobile)"
                                    });
                                }}
                            >
                                <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                            </div>
                        </div>
                    </div>
               </div>

               {/* Mockup */}
               <div className="relative group cursor-pointer mt-20">
                    <Image
                        src="/projects/SinclairWilson/12.SinclairWilson mockup.png"
                        alt="Landing Page Mockup"
                        width={1200}
                        height={900}
                        quality={100}
                        className="rounded-2xl"
                        onClick={() => setSelectedImage({
                            src: "/projects/SinclairWilson/12.SinclairWilson mockup.png",
                            alt: "Landing Page Mockup"
                        })}
                    />
                    <div className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage({
                                src: "/projects/SinclairWilson/12.SinclairWilson mockup.png",
                                alt: "Landing Page Mockup"
                            });
                        }}
                    >
                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
                    </div>
               </div>

               {/* Footer */}
               <Footer />
            </div>
        </main>
    );
}
