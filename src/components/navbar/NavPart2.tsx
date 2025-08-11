'use client'
import React from "react";
import ShareButton  from "@/components/ui/share-button";
import { Instagram, LinkedinIcon, TwitterIcon, YoutubeIcon} from "lucide-react";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";

const NavPart2 = () => {
    return (
        <div>
            {/* Mobile: Only show theme toggle button */}
            <div className='flex justify-center items-center sm:hidden'>
                <ThemeToggleButton />
            </div>
            
            {/* Desktop: Show all navigation elements */}
            <div className='hidden sm:flex font-[skip] flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-10 px-2 sm:px-4 md:px-6 lg:px-10 my-2 sm:my-4 md:my-6 text-xs sm:text-sm md:text-base lg:text-lg items-center'>
                <a href="#" className="border rounded-full font-bold px-2 sm:px-3 py-1 border-sky-500 text-center whitespace-nowrap">Home</a>
                <a href="https://github.com/ArpitSainiX" className='border font-bold rounded-full px-2 sm:px-3 py-1 border-sky-500 text-center whitespace-nowrap'>Projects</a>
                <div className="flex justify-center">
                    <ShareButton className="size-7 sm:size-8 md:size-9" links={[
                        {icon:Instagram, href:'https://www.instagram.com/arpitsainix/ ', onClick() {window.open('https://www.instagram.com/arpitsainix/ ', '_blank')},},
                        {icon:LinkedinIcon, href:'https://www.linkedin.com/in/arpitsainix/', onClick() {window.open('https://www.linkedin.com/in/arpitsainix/', '_blank')} }, 
                        {icon:TwitterIcon, href:'https://x.com/ArpitSainiX', onClick() {window.open('https://x.com/ArpitSainiX')}}, 
                        {icon:YoutubeIcon,  href:'https://www.youtube.com/channel/UC8BvjS8rjO1vJlfnNF_oK6Q', onClick() {window.open('https://www.youtube.com/channel/UC8BvjS8rjO1vJlfnNF_oK6Q')}}]}>Connect
                    </ShareButton>
                </div>
                <div className="flex justify-center items-center mt-1 sm:mt-0">
                  <ThemeToggleButton />
                </div>
            </div>
        </div>
    );
};

export default NavPart2;