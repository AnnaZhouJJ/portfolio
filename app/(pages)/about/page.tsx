import Image from 'next/image';
import Skills from '@/app/components/Skills';
import Footer from '@/app/components/Footer';

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

      {/* Education */}
      <div className='flex flex-col justify-center my-32 mx-28'>
        <h1 className='text-gray-800 font-semibold text-4xl mb-8'>Education</h1>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl text-gray-700 mb-4">University of Melbourne</h3>
            <div className="flex items-center gap-2">
              <span className='text-xl text-gray-600'>Master of IT, Specializing Human-Computer Interaction</span>
              <span className="text-gray-600">•</span>
              <span className='text-gray-600'>2022 - 2023</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl text-gray-700 mb-4">University of Melbourne</h3>
            <div className="flex items-center gap-2">
              <span className='text-xl text-gray-600'>Bachelor of Design, Major in Digital Technologies</span>
              <span className="text-gray-600">•</span>
              <span className='text-gray-600'>2019 - 2021</span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <Skills />

      {/* Footer */}
      <Footer />
    </div>
  );
}
