/* eslint-disable react/prop-types */
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CiHeart } from "react-icons/ci";
import { FiArrowUpRight } from "react-icons/fi";

const CollectionCard = ({ card }) => {
  return (
    <Card
      className="w-[493px] h-[588px] rounded-3xl flex flex-col justify-between relative group transition-all duration-300"
      style={{ backgroundColor: card.bgColor }}
    >
      {/* Dark Overlay on Hover */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 rounded-3xl transition-opacity duration-300"></div>

      {/* Product Info */}
      <CardHeader className="relative z-10">
        <div className="flex justify-between mt-[32px]">
          <div>
            <p className="text-[20px] text-black">Product Name</p>
            <p className="font-bold mt-[12px] text-[24px] text-black">$150</p>
          </div>
          <button className="w-[50px] h-[50px] rounded-full flex items-center bg-white justify-center">
            <CiHeart className="w-[24px] h-[24px]" />
          </button>
        </div>
      </CardHeader>

      {/* Image Section */}
      <CardContent className="flex-grow flex items-end relative z-10">
        <div className="h-[330px] w-full">
          <img
            src={card.image}
            alt=""
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        {/* Hover Buttons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="px-8 py-3 bg-black text-white rounded-full flex items-center">
            View Details
          </button>
          <button className="w-[50px] h-[50px] bg-black text-white rounded-full flex items-center justify-center ">
            <FiArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CollectionCard;
