import Image from "next/image";
import ProjectCover from "./ProjectCover";

const ProjectsSection = () => {
  return (
    <div className="max-w-[1440px] mx-2 lg:mx-10 lg:px-12 mt-28 lg:mt-48 ">
      {/* max-w-[1440px] mx-12 px-2 md:px-12 mt-48 */}
      {/* Feature Projects Title */}
      
      <div className="flex items-center gap-4 mb-16">
        <div className="w-12 h-[1px] bg-gray-600"></div>
        <h3 className="text-xl font-medium text-gray-600">FEATURE PROJECTS</h3>
      </div>

      {/* Sinclair Wilson Project */}
      <ProjectCover 
        title="Sinclair Wilson"
        description="A professional accounting and financial services firm."
        dateRange="March 2025"
        tags={["Website", "Landing Page", "UI/UX Design", "Responsive"]}
        imageOnRight={true}
        link="/projects/SinclairWilson"
      >
        <Image 
          src="/projects/SinclairWilson/1.SinclairWilson Cover.png"
          alt="SinclairWilson Website Mockup"
          width={545}
          height={327}
          className="w-full rounded-xl shadow-lg hover:brightness-90 transition-all duration-300"
        />
      </ProjectCover>

      {/* Frontcover Project */}
      <ProjectCover 
        title="Frontcover"
        description="A digital platform for growing vibrant communities."
        dateRange="November 2024 - December 2024"
        tags={["UI Design", "Website", "Components"]}
        imageOnRight={false}
        link="/projects/frontcover"
      >
        <Image 
          src="/projects/frontcover/Frontcover - cover 2.png"
          alt="Frontcover logo"
          width={545}
          height={327}
          className="w-full rounded-xl shadow-lg hover:brightness-90 transition-all duration-300"
        />
      </ProjectCover>

      {/* Lexill Project */}
      <ProjectCover 
        title="Lexill"
        description="A mobile app that revolutionizes Chinese learning for English speakers through gamification."
        dateRange="September 2024 - October 2024"
        tags={["UI/UX Design", "Mobile", "Website"]}
        imageOnRight={true}
        link="/projects/Lexill"
      >
        <Image 
          src="/projects/lexill/lexill-cover.png"
          alt="Lexill app mockup"
          width={545}
          height={327}
          className="w-full rounded-xl shadow-lg hover:brightness-90 transition-all duration-300"
        />
      </ProjectCover>

      {/* Happy Cap Studio Project */}
      <ProjectCover 
        title="Happy Cap Studio"
        description="Redesigned the kiosk interface for the photo booth studio to enhance user experience and visual design."
        dateRange="September 2023 - December 2023"
        tags={["UI/UX Design", "Kiosk Interface"]}
        imageOnRight={false}
        link="/projects/HappyCapStudio"
      >
        <Image 
          src="/projects/happycap/happycap-cover2.jpg"
          alt="Happy Cap Studio logo"
          width={545}
          height={327}
          className="w-full rounded-xl shadow-lg hover:brightness-90 transition-all duration-300"
        />
      </ProjectCover>

      {/* BakeMaster Project */}
      <ProjectCover 
        title="BakeMaster"
        description="A digital twin for bakery shops to address their current challenges and optimize their operation and efficiency."
        dateRange="March 2023 - July 2023"
        tags={["UI/UX Design", "End-to-end", "Tablet"]}
        imageOnRight={true}
        link= "https://www.behance.net/gallery/179057041/Digital-Twins-UIUX-Design"
      >
        <Image 
          src="/projects/bakemaster/bakemaster-cover.png"
          alt="BakeMaster mockup"
          width={545}
          height={327}
          className="w-full rounded-xl shadow-lg hover:brightness-90 transition-all duration-300"
        />
      </ProjectCover>


      {/* adding more projects here */}
    </div>
  );
};

export default ProjectsSection;