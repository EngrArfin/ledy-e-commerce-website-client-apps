import bag from "../../assets/arrival-image/bag.png"
const ArrivalProducts = () => {
    return (
      <div className="w-[320px] rounded-[20px] overflow-hidden bg-white">
        {/* Product Image */}
        <div className="relative">
          <img
            src={bag} 
            alt="Product Name"
            className="w-full h-[400px] object-cover"
          />
        </div>
  
        {/* Product Info */}
        <div className="p-4 text-white">
          {/* Product Name */}
          <h2 className="text-lg font-semibold text-black">Product Name Here</h2>
  
          {/* Price Section */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-gray-400 line-through text-lg">$150.00</span>
            <span className="text-black font-semibold text-lg">$120.00</span>
          </div>
  
          {/* Color Variants */}
          <div className="flex items-center gap-2 mt-3">
            <div className="w-6 h-6 rounded-full border-2 border-gold bg-transparent"></div>
            <div className="w-6 h-6 rounded-full bg-gray-900"></div>
            <div className="w-6 h-6 rounded-full bg-green-900"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ArrivalProducts;
  