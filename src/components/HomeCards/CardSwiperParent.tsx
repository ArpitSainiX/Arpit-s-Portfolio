'use client'
import React from 'react';
import { CardSwipe } from "@/components/ui/card-swipe"

const CardSwiperParent = () => {
    const Newimages = [
    { src: "/images/t1.jpg", alt: "Image 1" },
    { src: "/images/t2.jpg", alt: "Image 2" },
    { src: "/images/t3.jpg", alt: "Image 3" },
    { src: "/images/t4.jpg", alt: "Image 3" },
    { src: "/images/img1.jpeg", alt: "Image 3" }
    ]
    return (
        <div>
            <CardSwipe images={Newimages} autoplayDelay={2000} slideShadows={true} />
        </div>
    )
}

export default CardSwiperParent;
