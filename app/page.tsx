import Image from "next/image";
import ProjectCover from "./components/ProjectCover";

export default function Home() {
  return (
    <div className="relative flex flex-col items-start px-4 sm:px-6 lg:px-8 mt-16">
      {/* Gradient image */}
      <Image 
        src="/Gradient Img.png"
        alt="Background gradient"
        width={550}
        height={550}
        className="absolute top-0 right-0 -z-10"
        priority
        quality={100}
      />
      
      {/* Content */}
      <div className="max-w-5xl ml-8 sm:ml-20 lg:ml-80">
        <h1 className="text-5xl text-gray-800 sm:text-7xl font-bold mb-4 md:mb-8 lg:mb-12 mt-24 leading-relaxed">
          Hi, I'm Anna Zhou 👋
        </h1>
        <h2 className="text-3xl sm:text-5xl font-medium text-gray-800 mb-4 md:mb-8 lg:mb-12">
          UI/UX Designer
        </h2>
        <p className="text-2xl lg:text-4xl text-gray-600 leading-normal lg:leading-[50px] max-w-7xl">
          Focused on crafting user experiences and user interface for software, mobile and web products.
        </p>
      </div>

      {/* Freature Projects Title*/}
      <div className="max-w-5xl ml-8 sm:ml-20 lg:ml-80 mt-52">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-gray-600"></div>
          <h3 className="text-xl font-medium text-gray-600 ">FEATURE PROJECTS</h3>
        </div>

        {/* Add ProjectCover components here */}
        {/* Custom Frontcover cover design */}
        <div className="flex">
          <ProjectCover 
          title="Frontcover"
          description="A digital platform for growing vibrant communities."
          dateRange="November 2024 - December 2024"
          tags={["UI Design", "Website", "Components"]}
          >
          <div className="flex items-center gap-4 rounded-xl shadow-xl hover:opacity-90 transition-all duration-300">
            <Image 
                src="/projects/frontcover/Frontcover cover.png"
                alt="Frontcover logo"
                width={545}
                height={327}
            />
          </div>
          </ProjectCover>
        </div>


      </div>
    </div>

  );
}
