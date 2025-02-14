/* eslint-disable react/prop-types */
import { Heart, ShoppingCart } from "lucide-react";

const ClosetProducts = ({ productName, price, picture, height, width }) => {
  return (
    <div
      className={`flex flex-col items-center gap-2 flex-shrink-0 border border-gray-300 rounded-xl p-5 shadow-lg bg-white`}
      style={{ width: width, height: height }}
    >
      {/* Top Section - Product Info & Icons */}
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="text-black text-lg font-medium">{productName}</p>
          <p className="text-black text-2xl font-bold">{price}</p>
        </div>

        {/* Icons Section */}
        <div className="flex gap-3">
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100">
            <Heart size={18} className="text-black" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100">
            <ShoppingCart size={18} className="text-black" />
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex items-center justify-center">
        <img
          src={picture}
          alt={productName}
          className="object-cover "
          style={{ width: "372px", height: "553px" }}
        />
      </div>
    </div>
  );
};

export default ClosetProducts;
