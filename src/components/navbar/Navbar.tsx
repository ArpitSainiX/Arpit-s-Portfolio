import React from "react";
import NavPart1 from "./NavPart1";
import NavPart2 from "./NavPart2";

const Navbar: React.FC = () => {
    return (
    <div
        className="flex justify-between items-center fixed top-0 left-0 w-full z-50
                bg-transparent backdrop-blur-lg backdrop-saturate-150
                border-b border-white/20 shadow-md px-2 sm:px-3 md:px-4 lg:px-6"
        style={{
        WebkitBackdropFilter: "blur(20px) saturate(180%)", // Safari support
        }}
    >
        <NavPart1 />
        <NavPart2 />
    </div>
    );
};

export default Navbar;
