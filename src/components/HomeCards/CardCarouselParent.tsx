'use client'

import React from 'react';
import { CardCarousel } from '../ui/card-carousel'

const CardCarouselParent = () => {
    const images = [
        {src:'/images/car1.jpg',alt:"Image 1"},
        {src:'/images/car2.jpg',alt:"Image 2"},
        {src:'/images/car3.jpg',alt:"Image 3"},
        {src:'/images/car4.jpg',alt:"Image 4"},
        {src:'/images/car5.jpg',alt:"Image 5"},
        {src:'/images/car6.jpeg',alt:"Image 6"},
    ]
    return (
        <div>
            <CardCarousel images={images} showPagination={false} />
        </div>
    )
}

export default CardCarouselParent;
