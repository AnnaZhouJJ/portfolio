import Link from "next/link";

export function NavBar() {
    return (
        <div className="h-[80px] w-screen sticky bg-white shadow-[0_4px_40px_0_rgba(212,212,212,0.25)] px-12
                        flex items-center justify-between">
            
            <div className="font-bold text-lg">
                <Link href={"/"}>AnnaZ.</Link>
            </div>
            
            <div className="flex gap-[35px] font-normal text-lg">
                <Link href={"/"}>Portfolio</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/contact"}>Contact</Link>
            </div>
        
        </div>
    )
}