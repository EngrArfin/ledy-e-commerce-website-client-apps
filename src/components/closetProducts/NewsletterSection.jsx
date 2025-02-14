import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import dump from "../../assets/closet-image/dump.png";
import dumpBag from "../../assets/closet-image/dumpBag.png";

const NewsletterSection = () => {
  return (
    <div className="relative h-[611px] w-[1520px] mx-auto bg-[#F8DAB0] rounded-[20px] p-10 flex items-center gap-10 overflow-hidden">
  {/* Left Content */}
  <div className="max-w-[40%]">
    <h2 className="text-[40px] font-bold text-black">Subscribe our newsletter</h2>
    <p className="text-gray-700 mt-2 text-[16px]">
      From Chanel to Hermès, experience luxury at your fingertips with our
      verified and curated collections.
    </p>

    {/* Email Input */}
    <div className="mt-5 flex items-center bg-white p-2 rounded-full shadow-md w-[508px]">
      <input
        type="email"
        placeholder="Email Address"
        className="flex-1 outline-none px-4 bg-transparent text-gray-700 placeholder-gray-500"
      />
      <button className="bg-black text-white px-4 py-2 rounded-full font-medium">
        Subscribe
      </button>
    </div>
  </div>

  {/* Right Side - Image and Details */}
  <div className="relative w-[60%]">
    {/* Background Large Text */}
    <div className="absolute right-0 top-[30rem]  mb-3 b w-[1685px] text-[150px] font-extrabold leading-[132%] tracking-[-1.5px] text-white opacity-40 uppercase  z-0">
    T<span className="pl-[15px]">HE</span> IMPOSSIBLE  BAGS
    </div>

    {/* Main Image - Will Partially Hide the Text */}
    <div className="relative z-10">
      <img src={dump} alt="Luxury Bag" className="h-[611px] w-[534px] object-cover" />
    </div>

    {/* Small Product Card */}
    <div className="absolute flex w-[244px] h-[160px] p-3 right-[2rem] bottom-[10rem] bg-white rounded-[24px] shadow-lg items-start gap-2 flex-shrink-0 z-20">
      {/* Price & Cart Button Section */}
      <div className="w-full">
        <div className="text-gray-600 text-sm pt-3">Price</div>
        <div className="font-bold text-black text-lg pt-2">$150.00</div>
        <button className="bg-black text-white p-2 rounded-full mt-4">
          <ShoppingCart size={16} />
        </button>
      </div>

      <div>
        <img src={dumpBag} alt="Bag" className="w-[200px] h-[140px]" />
      </div>
    </div>

    {/* Navigation Buttons */}
    <div className="absolute top-5 right-5 flex gap-2 z-20">
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#A5A5A5] shadow-md">
        <ArrowLeft size={18} />
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#A5A5A5] shadow-md">
        <ArrowRight size={18} />
      </button>
    </div>
  </div>
</div>
  );
};

export default NewsletterSection;
