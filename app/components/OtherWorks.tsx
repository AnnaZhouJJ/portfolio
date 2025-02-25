'use client';

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface WorkCardProps {
    title: string;
    imageSrc: string;
    imageAlt: string;
    link: string;
}

const WorkCard = ({ title, imageSrc, imageAlt, link }: WorkCardProps) => {
    const animationRef = useScrollAnimation<HTMLAnchorElement>();

    return (
      <Link 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mb-1 block group cursor-pointer opacity-0"
        ref={animationRef}
      >
        <div className="mb-1">
          <div className="rounded-xl overflow-hidden shadow-lg hover:brightness-90 transition-all duration-300">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={520}
              height={340}
              className="w-full"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mt-6 lg:mt-8">{title}</h3>
        </div>
      </Link>
    );
};

const OtherWorks = () => {
    const titleRef = useScrollAnimation<HTMLDivElement>();
    
    const works = [
      {
        title: "Flow | Digital Bank Landing Page",
        imageSrc: "/projects/other/flow-landing.png",
        imageAlt: "Flow digital bank landing page design",
        link: "https://dribbble.com/shots/25297757-Flow-Digital-Bank-Landing-Page"
      },
      {
        title: "Glass Login Card",
        imageSrc: "/projects/other/glass-login.png",
        imageAlt: "Glass login card design",
        link: "https://dribbble.com/shots/25367080-Glass-Login-Card"
      },
      {
        title: "Mobile App design collection 1",
        imageSrc: "/projects/other/mobile-app-collection.png",
        imageAlt: "Mobile app design",
        link:"https://www.behance.net/gallery/201652567/UIUX-Design-app-collection-1?"
      },
      {
        title: "Spotify UI | Apple Vision Pro",
        imageSrc: "/projects/other/spotify-AR-UI.png",
        imageAlt: "Spotify AR UI design",
        link:"https://dribbble.com/shots/24673328-Spatial-UI-for-Spotify-Apple-Vision-Pro-visionOS"
      },
      {
        title: "tEMR System | Healthcare App",
        imageSrc: "/projects/other/tEMR-system.png",
        imageAlt: "tEMR system design",
        link:"https://www.behance.net/gallery/180185525/Healthcare-APP-tEMR"
      },
      {
        title: "Interactive 3D Keyboard | Spline",
        imageSrc: "/projects/other/3D-Keyboard.png",
        imageAlt: "Interactive 3D keyboard design",
        link:"https://my.spline.design/keyboardtutcopy-d326a68394044361506920e76600ce06/"
      },
      {
        title: "COVIDENT | Mobile Healthcare APP",
        imageSrc: "/projects/other/Covident.png",
        imageAlt: "COVIDENT mobile app design",
        link:"https://www.behance.net/gallery/180075701/Healthcare-APP-COVIDIENT"
      },
      {
        title: "MealTime | Social APP",
        imageSrc: "/projects/other/MealTime.png",
        imageAlt: "MealTime social app design",
        link:"https://www.behance.net/gallery/179337755/Social-cooking-APP-MealTime"
      },
      // Add more works here
    ];

    return (
        <div className="max-w-[1440px] mx-2 lg:mx-10 px-2 lg:px-12 mt-2">
          {/* Section Title */}
          <div 
            className="flex items-center gap-4 mb-8 opacity-0" 
            ref={titleRef}
          >
            <div className="w-12 h-[1px] bg-gray-600"></div>
            <h3 className="text-xl font-medium text-gray-600">OTHER WORKS</h3>
          </div>
    
          {/* Two-column grid with bigger images */}
          <div className="grid grid-cols-1 md:grid-cols-2 sm-grid-cols-1 gap-x-20 gap-y-8 lg:gap-y-0">
            {works.map((work, index) => (
              <div key={index} className={index % 2 === 1 ? "md:mt-14" : ""}>
                <WorkCard
                  title={work.title}
                  imageSrc={work.imageSrc}
                  imageAlt={work.imageAlt}
                  link={work.link}
                />
              </div>
            ))}
          </div>
        </div>
    );
};
    
export default OtherWorks;