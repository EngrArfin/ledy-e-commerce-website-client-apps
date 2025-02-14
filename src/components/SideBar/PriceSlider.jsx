import React from "react";
import MediumHeader from "./MediumHeader";
import { Slider, Input } from "@heroui/react";

const PriceSlider = () => {
    return (
        <div>
            <MediumHeader>Price</MediumHeader>
            <div className="flex flex-col gap-4 text-[#5A5C5F] py-4">
                <Slider
                    className="max-w-md bg-transparent"
                    defaultValue={0.4}
                    //   label="Temperature"
                    maxValue={1}
                    minValue={0}
                    size="sm"
                    step={0.01}
                />
            </div>
            {/* border border-[#ddd]  */}
            <div className="flex items-center gap-4 ">
                <Input
                    aria-label="price input"
                    className="w-20 "
                    classNames={{ inputWrapper: "!bg-white ring-[.5px] ring-[#ddd]" }}
                    placeholder="$0"
                    type="text"
                />
                <Input
                    aria-label="price input"
                    className="w-20 "
                    classNames={{
                        inputWrapper: "!bg-white ring-[.5px] ring-[#ddd] font-bold",
                    }}
                    placeholder="$395"
                    type="text"
                />
            </div>
        </div>
    );
};

export default PriceSlider;
