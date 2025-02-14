import React from "react";
import Color from "./Color";
import Designer from "./Designer";
import BagType from "./BagType";
import MediumHeader from "./MediumHeader";
import Divider from "./Divider";
import Availability from "./Availability";
import PriceSlider from "./PriceSlider";

const Filter = () => {
    return (
        <div className="p-4 rounded-xl bg-custom-gradient font-Poppins ">
            <div className="flex flex-col gap-4 p-4 bg-white rounded-xl ">
                <h2 className="text-2xl font-bold capitalize">filter</h2>
                <div>
                    <Designer />
                </div>
                <div>
                    <BagType />
                </div>
                <div>
                    <Availability />
                </div>
                <div>
                    <MediumHeader>Color</MediumHeader>
                    <div className="flex flex-wrap gap-4 py-4">
                        <Color Bg={"bg-red-500"} Ring={"ring-red-500"} />
                        <Color Bg={"bg-green-500"} Ring={"ring-green-500"} />
                        <Color Bg={"bg-yellow-500"} Ring={"ring-yellow-500"} />
                        <Color Bg={"bg-slate-500"} Ring={"ring-slate-500"} />
                        <Color Bg={"bg-sky-500"} Ring={"ring-sky-500"} />
                        <Color Bg={"bg-yellow-500"} Ring={"ring-yellow-500"} />
                        <Color Bg={"bg-yellow-500"} Ring={"ring-yellow-500"} />
                        <Color Bg={"bg-yellow-500"} Ring={"ring-yellow-500"} />
                        <Color Bg={"bg-sky-500"} Ring={"ring-sky-500"} />
                        <Color Bg={"bg-yellow-500"} Ring={"ring-yellow-500"} />
                        <Color Bg={"bg-yellow-500"} Ring={"ring-yellow-500"} />
                        <Color Bg={"bg-green-500"} Ring={"ring-green-500"} />
                    </div>
                    <Divider />
                </div>

                <div>
                    <PriceSlider />
                </div>
            </div>
        </div>
    );
};


export default Filter;