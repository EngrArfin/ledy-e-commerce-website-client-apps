import React from "react";
import { Checkbox } from "@heroui/checkbox";
import MediumHeader from "./MediumHeader";
import Divider from "./Divider";

const designer = [
    "3.1 Phillip Lim",
    "Alaia",
    "Alexander McQueen",
    "Bottega Veneta",
    "Alexander Wang",
    "Balenciaga",
    "Alexander Wang",
];
const Designer = () => {
    return (
        <div>
            <MediumHeader>Designers</MediumHeader>
            <div className="flex flex-col gap-4 text-[#5A5C5F] py-4">
                {designer.map((item, i) => (
                    <Checkbox key={i} color="primary">
                        {item}
                    </Checkbox>
                ))}
            </div>
            <Divider />
        </div>
    );
};

export default Designer;
