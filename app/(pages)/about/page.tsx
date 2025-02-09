import Image from 'next/image';

export default function About() {

  return (
    <div className="max-w-[1440px] mx-auto px-12 py-24">
      {/* Description of about me */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
        <div className="lg:w-[400px]">
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
              and I believe by reducing the bridge gaps between people and technologies 
              can better improve user experience.
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
      <div className='flex flex-col my-20'>
        <h1 className='text-gray-800 font-semibold text-4xl'>
          Education
        </h1>
      </div>


    </div>
  );
}
