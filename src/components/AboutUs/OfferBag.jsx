
import bag from '../../assets/image/bag.png';
import { GoArrowUpRight } from "react-icons/go";

const OfferBag = () => {
    return (
        /* relative h-[611px] w-[1520px] mx-auto bg-[#F8DAB0] rounded-[20px] p-10 flex items-center gap-10 overflow-hidden */
        <div className="relative w-[1520px] mx-auto rounded-[20px] p-10 flex items-center gap-10 overflow-hidden ">

            {/* Featured Bag Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 rounded-xl">

                {/* Image Section */}
                <div className="h-[719px] w-[750px] md:w-[750px] bg-[#EBEBEB] rounded-tl-[36px] rounded-bl-[36px] flex justify-center items-center">
                    <img
                        src={bag}
                        alt="Luxury Bag"
                        className="w-[406px] h-[404px] object-cover rounded-xl"
                    />
                </div>

                {/* Content Section */}
                <div className="w-[770px] h-[719px] bg-orange-200 p-6 rounded-tr-[36px] rounded-br-[36px]  md:w-[770px]  flex justify-center items-center">
                    <div className="w-full md:w-[514px] h-full md:h-[463px] bg-white p-6 rounded-xl text-center shadow-md flex flex-col justify-center items-center">
                        {/* Title and Description */}
                        <div className="w-full md:w-[333px] h-[134px] flex flex-col justify-center items-center mt-8">
                            <h2 className="text-xl font-semibold">Exclusive bag offers awaits</h2>
                            <p className="text-gray-500 mt-2 text-center">
                                Lorem ipsum dolor sit amet consectetur. Phasellus ornare vitae in urna suspendisse elit arcu tellus.
                            </p>
                        </div>

                        {/* Button */}
                        <div className="text-center mt-8 flex justify-start">
                            <button className="bg-black px-[48px] py-[14px] text-[16px] text-white font-semibold rounded-[36px]">
                                See Collection
                            </button>
                            <button className="bg-black p-[20px] text-white rounded-full">
                                <GoArrowUpRight />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default OfferBag;
