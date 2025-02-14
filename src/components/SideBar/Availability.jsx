import React from "react";
import { Checkbox } from "@heroui/checkbox";
import MediumHeader from "./MediumHeader";
import Divider from "./Divider";

const availability = ["In Stock (56)", "Out of  Stock (56)"];
const Availability = () => {
    return (
        <div>
            <MediumHeader>Availability</MediumHeader>
            <div className="flex flex-col gap-4 text-[#5A5C5F] py-4">
                {availability.map((item, i) => (
                    <Checkbox key={i} color="primary">
                        {item}
                    </Checkbox>
                ))}
            </div>
            <Divider />
        </div>
    );
};

export default Availability;
