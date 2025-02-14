import React from "react";

const MediumHeader = ({ children, Class }) => {
    return <h2 className={`text-lg font-semibold ${Class}`}>{children}</h2>;
};

export default MediumHeader;
