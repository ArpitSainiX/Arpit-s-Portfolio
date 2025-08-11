/* eslint-disable @next/next/no-img-element */
'use client'
import React from "react";
import BadgeButton from "@/components/ui/badge-button";
import MinimalCard from "@/components/ui/minimal-card";

// import MinimalCardImage from "@/components/ui/minimal-card";
import MinimalCardTitle from "@/components/ui/minimal-card";
import MinimalCardDescription from "@/components/ui/minimal-card";



const TemplateCard = () => {
    const cards = [
    {
        title: "Personal Website",
        description:
        "This is the webpage where you can learn photoshop, video editing, and more in free of cost.",
        src: "https://i.pinimg.com/736x/1d/9a/47/1d9a47d36c2c65765e04de27babfe353.jpg",
    },

    {
        title: "Video editing portfolio",
        description:
        "It is the video editing portfolio where you can see my video editing work.",
        src: "https://i.pinimg.com/736x/54/68/a3/5468a33bc43e258995f15ad01e5ad7cc.jpg",
    },
    
    {
        title: "CSS-ONLY",
        description:
        "This is the css-only project where you can see the only css, It was made with the help of YouTube.",
        src: "https://i.pinimg.com/736x/f1/7d/db/f17ddb244e3f2f6a720e61cd3f8161fb.jpg",
    },
    ]


    return (
    <div>
        <div className="w-[95%] md:w-[80%] lg:w-[61.5%] my-8 p-2 rounded-3xl shadow bg-white mx-auto">
            <div className="h-full p-4 md:p-6 bg-[#f4f4f4] shadow rounded-3xl mx-auto">
            <BadgeButton />
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-2">
                    
                        
                    {cards.map((card, index) => (
                    <MinimalCard className="m-2 w-full lg:w-[460px]" key={index}>
                        <img
                            className="w-full h-auto rounded-3xl"

                            src={card.src}
                            alt={card.title}
                        />
                        <MinimalCardTitle>{card.title}</MinimalCardTitle>
                        <MinimalCardDescription>
                        {card.description}
                        </MinimalCardDescription>
                    </MinimalCard>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
};

export default TemplateCard;
