'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
    const pathname = usePathname();
    return (
        <div className="h-[80px] w-screen sticky bg-white shadow-[0_4px_40px_0_rgba(212,212,212,0.25)] px-12
                        flex items-center justify-between">
            
            <div className="font-bold text-lg">
                <Link href={"/"}>AnnaZ.</Link>
            </div>
            
            <div className="flex gap-[35px] font-normal text-lg text-gray-800">
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