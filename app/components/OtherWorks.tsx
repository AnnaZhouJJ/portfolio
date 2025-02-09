import Image from "next/image";

interface WorkCardProps {
    title: string;
    imageSrc: string;
    imageAlt: string;
}

const WorkCard = ({ title, imageSrc, imageAlt }: WorkCardProps) => {
    return (
      <div className="mb-1 ">
        <div className="rounded-xl overflow-hidden shadow-lg hover:brightness-90 transition-all duration-300">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={520}
            height={340}
            className="w-full"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mt-8">{title}</h3>
      </div>
    );
};

const OtherWorks = () => {
    const works = [
      {
        title: "Flow | Digital Bank Landing Page",
        imageSrc: "/projects/other/flow-landing.png",
        imageAlt: "Flow digital bank landing page design",
      },
      {
        title: "Glass Login Card",
        imageSrc: "/projects/other/glass-login.png",
        imageAlt: "Glass login card design",
      },
      {
        title: "Mobile App design collection 1",
        imageSrc: "/projects/other/mobile-app-collection.png",
        imageAlt: "Mobile app design",
      },
      {
        title: "Spotify UI | Apple Vision Pro",
        imageSrc: "/projects/other/spotify-AR-UI.png",
        imageAlt: "Spotify AR UI design",
      },
      {
        title: "tEMR System | Healthcare App",
        imageSrc: "/projects/other/tEMR-system.png",
        imageAlt: "tEMR system design",
      },
      {
        title: "Interactive 3D Keyboard | Spline",
        imageSrc: "/projects/other/3D-keyboard.png",
        imageAlt: "Interactive 3D keyboard design",
      },
      {
        title: "COVIDENT | Mobile Healthcare APP",
        imageSrc: "/projects/other/covident.png",
        imageAlt: "COVIDENT mobile app design",
      },
      {
        title: "MealTime | Social APP",
        imageSrc: "/projects/other/MealTime.png",
        imageAlt: "MealTime social app design",
      },
      // Add more works here
    ];


    return (
        <div className="max-w-[1440px] mx-12 px-12 mt-2">
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-gray-600"></div>
            <h3 className="text-xl font-medium text-gray-600">OTHER WORKS</h3>
          </div>
    
          {/* Two-column grid with bigger images */}
          <div className="grid grid-cols-1 md:grid-cols-2 sm-grid-cols-1 gap-x-20 gap-y-0">
            {works.map((work, index) => (
              <div key={index} className={index % 2 === 1 ? "md:mt-14" : ""}>
                <WorkCard
                  title={work.title}
                  imageSrc={work.imageSrc}
                  imageAlt={work.imageAlt}
                />
              </div>
            ))}
          </div>
        </div>
    );
};
    
export default OtherWorks;