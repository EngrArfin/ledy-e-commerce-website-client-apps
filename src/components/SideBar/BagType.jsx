import React from "react";
import { Checkbox } from "@heroui/checkbox";
import Divider from "./Divider";
import MediumHeader from "./MediumHeader";
const bagType = [
    "Handbags",
    "Crossbody",
    "Clutch & Evening",
    "Bottega Veneta",
    "Wallet Style",
    "Wallet Style",
    "Totes",
];
const BagType = () => {
    return (
        <div>
            <MediumHeader>Bag Type</MediumHeader>
            <div className="flex flex-col gap-4 text-[#5A5C5F] py-4">
                {bagType.map((item, i) => (
                    <Checkbox key={i} color="primary">
                        {item}
                    </Checkbox>
                ))}
            </div>
            <Divider />
        </div>
    );
};

export default BagType;
