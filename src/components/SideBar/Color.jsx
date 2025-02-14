import React from "react";

const Color = ({ Bg, Ring }) => {
    return (
        <div className={`p-1 rounded-full ring-1  w-max ${Ring} cursor-pointer`}>
            <div className={`w-4 h-4 ${Bg}  rounded-full`} />
        </div>
    );
};

export default Color;
