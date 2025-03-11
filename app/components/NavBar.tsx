'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function NavBar() {
    const pathname = usePathname();
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    // Nav bar animation
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            
            // Make navbar visible when scrolling up or at the top
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    // Nav bar with hover and focus state
    return (
        <div className={`h-[70px] w-screen fixed bg-white/50 backdrop-blur-sm shadow-[0_4px_40px_0_rgba(212,212,212,0.25)] px-4 md:px-12
                        flex items-center justify-between transition-transform duration-300 z-50
                        ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            
            <div className="font-bold text-base lg:text-lg text-gray-800">
                <Link href={"/"}>AnnaZ.</Link>
            </div>
            
            <div className="flex gap-[35px] font-normal text-base lg:text-lg text-gray-800">
                <Link href={"/"} 
                    className={`hover:text-[#F2709C] ${pathname === "/" ? "text-[#F2709C]" : ""}`}>
                    Portfolio
                </Link>

                <Link href={"/about"} 
                    className={`hover:text-[#F2709C] ${pathname === "/about" ? "text-[#F2709C]" : ""}`}
                >
                    About Me
                </Link>

                <Link href={"/contact"} 
                    className={`hover:text-[#F2709C] ${pathname === "/contact" ? "text-[#F2709C]" : ""}`}
                >
                    Contact
                </Link>
            </div>
        
        </div>
    )
}