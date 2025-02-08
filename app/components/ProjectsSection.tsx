import Image from "next/image";
import ProjectCover from "./ProjectCover";

const ProjectsSection = () => {
  return (
    <div className="max-w-[1440px] mx-12 px-12 mt-48 ">
      {/* Feature Projects Title */}
      
      <div className="flex items-center gap-4 mb-16">
        <div className="w-12 h-[1px] bg-gray-600"></div>
        <h3 className="text-xl font-medium text-gray-600">FEATURE PROJECTS</h3>
      </div>

      {/* Frontcover Project */}
      <ProjectCover 
        title="Frontcover"
        description="A digital platform for growing vibrant communities."
        dateRange="November 2024 - December 2024"
        tags={["UI Design", "Website", "Components"]}
        imageOnRight={false}
      >
        <Image 
          src="/projects/frontcover/Frontcover cover.png"
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
      >
        <Image 
          src="/projects/happycap/happycap-cover.png"
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