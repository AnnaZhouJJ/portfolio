import Image from 'next/image';
import Skills from '@/app/components/Skills';
import Footer from '@/app/components/Footer';
import Toolstack from '@/app/components/Toolstack';

export default function About() {

  return (
    <div className="max-w-[1440px] mx-auto px-12 pt-32">
      {/* Description of about me */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mt-16">
        <div className="lg:w-[400px] rounded-3xl transition-all duration-300 hover:scale-105 hover:rotate-2 hover:shadow-2xl">
          <Image
            src="/projects/other/Profile-photo.jpg"
            alt="Anna Zhou - Profile Photo"
            width={574}
            height={574}
            className="rounded-3xl shadow-lg"
            priority
            quality={100}
          />
        </div>
        <div className="lg:w-[400px]">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            About me in 10 seconds
          </h1>

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              {"Hey! I'm Anna, a UI/UX Enthusiast & Freelancer."}
            </p>

            <p>
              I am passionate about human-centred design in various digital products 
              and I believe that bridging the gap between people and technology is key to creating seamless and impactful user experiences.
            </p>

            <p>
              As an empathetic INFJ, I aim for a purposeful life. Guided by deep 
              understanding and creativity, I design meaningful digital experiences 
              to solve human/user problems. {"Let's connect and create innovative "} 
              technologies that can make a positive impact on the world!
            </p>
          </div>
        </div>
      </div>

      {/* Toolstack */}
      <Toolstack />

      {/* Skills */}
      <Skills />

      {/* Education */}
      <div className='flex flex-col justify-center my-28 lg:mx-28 px-2 md:px-16'>
        <h1 className='text-gray-800 font-semibold text-4xl mb-8'>Education</h1>
        
        <div className="space-y-20">
          <div className='flex flex-col lg:flex-row gap-x-8'>
            <div className="flex-shrink-0 pt-1">
              <Image 
                src="/icons/unimelb-logo.svg"
                alt="University of Melbourne Logo"
                width={150}
                height={150}
                className="rounded-xl mb-4"
                // priority
                quality={100}
              />
            </div>
            
            <div className='flex flex-col gap-y-2'>
              <h3 className="text-2xl text-gray-700 leading-relaxed"><b>Human-Computer Interaction</b>, Master of IT</h3>
              <div className="flex items-center gap-2 text-xl">
                <span className="text-gray-600">University of Melbourne</span>
                <span className="text-gray-600">•</span>
                <span className='text-gray-600'>2022 - 2023</span>
              </div>
              <p className='text-gray-500 text-lg'>Specialized in designing and developing user-centered digital systems, with a focus on <b>usability evaluation, interaction design, and prototyping. </b> 
                Gained hands-on experience in mobile app development, wearables, and software development processes, preparing me to create innovative solutions that bridge human needs and technology.</p>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row gap-x-8'>
            <div className="flex-shrink-0 pt-1">
              <Image 
                src="/icons/unimelb-logo.svg"
                alt="University of Melbourne Logo"
                width={150}
                height={150}
                className="rounded-md mb-4"
                // priority
                quality={100}
              />
            </div>
            <div className='flex flex-col gap-y-2'>
              <h3 className="text-2xl text-gray-700 leading-relaxed"><b>Digital Technologies</b>, Bachelor of Design</h3>
              <div className="flex items-center gap-2 text-xl">
                <span className="text-gray-600">University of Melbourne</span>
                <span className="text-gray-600">•</span>
                <span className='text-gray-600'>2019 - 2021</span>
              </div>
              <p className='text-gray-500 text-lg'>Focused on designing and developing digital solutions, including <b>UI/UX design, web development and user experience. </b>
                Built a strong foundation in programming (HTML, CSS, JavaScript, Python) and UI/UX tools, blending technical skills with creative problem-solving.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
