import React from "react";
import shopbag from "../shop/images/shopbag.png";
import CardHeader from "./CardHeader";
import Color from "./Color";
const ShoppingCart = () => {
  return (
    <div className="flex flex-col gap-3 font-Poppins ">
      <div className="max-w-[350px] max-h-[352px]">
        <img
          className="w-full h-full cursor-pointer rounded-3xl"
          src={shopbag}
          alt=""
        />
      </div>
      <CardHeader>Product Name Here</CardHeader>
      <div className="flex gap-4 text-xl">
        <p className="text-[#5A5C5F] line-through">$250.00</p>
        <p className="text-[#050505] font-semibold">$150.00</p>
      </div>
      <div className="flex gap-4">
        <Color Bg={"bg-red-500"} Ring={"ring-red-500"} />
        <Color Bg={"bg-green-500"} Ring={"ring-green-500"} />
        <Color Bg={"bg-slate-500"} Ring={"ring-slate-500"} />
      </div>
    </div>
  );
};

export default ShoppingCart;

