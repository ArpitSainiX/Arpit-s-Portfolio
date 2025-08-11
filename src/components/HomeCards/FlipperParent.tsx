'use client'
import React from 'react';
import FlipLink from '@/components/ui/text-effect-flipper';


// Starting of function
const  FlipperParent = () => {
    return (
        <div className="px-4 md:px-0">
            <div className='text-center h-16 md:h-20 font-[skip] text-xl md:text-2xl lg:text-3xl mx-auto font-bold px-4 md:px-8 lg:px-16 py-2'>
                Connect with me.
            </div>
            
            <div className='flex flex-col sm:flex-row items-center justify-center bg-gray-500/50 px-4 md:px-8 lg:px-16 py-4 md:py-6 font-[skip] font-bold tracking-light gap-4 md:gap-6 lg:gap-10'>
            <div>
                <FlipLink href="https://www.instagram.com/arpitsainix/">Instagram</FlipLink>
            </div>
            <div>

                <FlipLink href="https://www.linkedin.com/in/arpitsainix/">Linkedin</FlipLink>
            </div>
            <div >
                <FlipLink href="https://www.twitter.com/arpitsainix/">Twitter</FlipLink>
            </div>
            <div >
                <FlipLink href="https://github.com/arpitsainix">Github</FlipLink>
            </div>

            </div>
        </div>
    )
}

export default FlipperParent;
