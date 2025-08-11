'use client'
import React from 'react';
import { TextScroll } from "../ui/text-scroll"

const TextScrollParent = () => {
    return (
        <div>
            <TextScroll default_velocity={8} text="Arpit's Portfolio" className="text-center text-4xl font-semibold tracking-tighter  text-black dark:text-white md:text-7xl md:leading-[5rem]"/>

        </div>
    )
}

export default TextScrollParent;
