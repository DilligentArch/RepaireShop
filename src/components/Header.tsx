import { File, HomeIcon, LogOut, UserRound } from "lucide-react";
import { NavButton } from "./NavButton";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export function Header() {
   
    return (
        <header className="animate-slide bg-background h-12 p-2border-b sticky top-0 z-20">
            <div className="flex h-8 itmes-center justify-between w-full">

                <div className="flex items-center gap-2">
                    <NavButton href="/home" label="Home" icon={HomeIcon}/>
                        <Link href="/home" className="flex justify-center items-center gap-2 ml-0" title="Home">
                            <h1 className="hidden sm:block text-xl font-bold m-0 mt-1 ">
                                Compuyter Repair shop
                            </h1>
                        </Link>
                    
                </div>
                <div className="flex items-center ">
                    <NavButton href="/tickets" label="Tickets" icon={File}/>
                    <NavButton href="/customers" label="Customers" icon={UserRound}/>
                    <ModeToggle/>


                    <Button 
                        variant="ghost"
                        size="icon"
                        aria-label="Logout"
                        title="Logout"
                        className="rounded-full"
                        asChild
                    >
                        <LogoutLink> <LogOut></LogOut></LogoutLink>
                    </Button>
                </div>
            </div>
        </header>

    );
}


