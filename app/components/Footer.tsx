import Link from 'next/link';
import Image from 'next/image';

interface SocialLink {
    name: string;
    href: string;
    iconSrc: string;
}

const Footer = () => {
    const socialLinks: SocialLink[] = [
        {
            name: 'Behance', href: 'https://www.behance.net/annazhouuiuxdesign', 
            iconSrc: '/icons/behance.png'},
        {
            name: 'Dribbble', href: 'https://dribbble.com/Zhou_JJ', 
            iconSrc: '/icons/dribbble.png'},
        {
            name: 'Instagram', href: 'https://www.instagram.com/annaz.uiux/', 
            iconSrc: '/icons/instagram.png'},
        {
            name: 'LinkedIn', href: 'https://www.linkedin.com/in/jiajing-anna-zhou/',
            iconSrc: '/icons/linkedin.png'},
    ];

    return (
        <footer className="w-full py-8 mt-20">
            <div className="max-w-[1440px] mx-auto px-2 md:px-12 flex flex-col items-center justify-center">
                {/* Line above email */}
                <div className="w-full max-w-6xl border-t border-gray-300 mb-8"></div>

                <a href="mailto:annauiuxdesign@gmail.com"
                className="text-2xl lg:text-3xl font-semibold text-gray-800 hover:text-gray-600 transition-colors mb-6">
                annauiuxdesign@gmail.com
                </a>
            </div>

            <div className="flex flex-col items-center text-center text-xl text-gray-800 mb-6">
                <p className="mb-2 mx-4">
                    {"I'm here to assist you with both long-term and short-term UI/UX design projects."}
                </p>
                <Link 
                    href="/contact" 
                    className="inline-block text-gray-800 hover:text-gray-500 transition-colors"
                >
                    {"Let's get in touch ✌️"}
                </Link>
            </div>

            <div className="flex justify-center gap-4 mb-6">
                {socialLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className='hover:opacity-70 transition-opacity'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image 
                            src={link.iconSrc}
                            alt={`${link.name} icon`}
                            width={40}
                            height={40}
                            className="w-10 h-10"
                            quality={100}
                            style={{ objectFit: 'contain' }}
                        />
                        <span className="sr-only">{link.name}</span>
                    </Link>
                ))}
            </div>

            <p className="flex justify-center text-sm text-gray-500">
                ©{new Date().getFullYear()} by Anna Zhou
            </p>
        </footer>
    );
};

export default Footer;