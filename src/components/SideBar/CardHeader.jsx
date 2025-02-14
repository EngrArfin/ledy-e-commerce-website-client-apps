import React from "react";

const CardHeader = ({ children }) => {
    return (
        <h2 className="text-xl sm:text-2xl text-[#050505] font-Geist font-normal">
            {children}
        </h2>
    );
};

export default CardHeader;
