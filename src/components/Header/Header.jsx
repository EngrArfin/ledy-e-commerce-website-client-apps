import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import CommonWrapper from "../CommonWrapper";
import bag1 from "../../assets/header/bags/1.png";
import bag2 from "../../assets/header/bags/2.png";
import bag3 from "../../assets/header/bags/3.png";
import bag4 from "../../assets/header/bags/4.png";
import hoverBag1 from "../../assets/header/bags/hover-1.png";

const BAG_DATA = [
  {
    id: 1,
    image: bag1,
    hoverImage: hoverBag1,
    price: "$1200",
    top: 600,
    left: 260,
    hoverTop: 520,
    hoverLeft: 480,
    addTop: 700,
  },
  {
    id: 2,
    image: bag2,
    hoverImage: hoverBag1,
    price: "$1500",
    top: 695,
    left: 650,
    hoverTop: 600,
    hoverLeft: 860,
    addTop: 770,
    flip: true,
  },
  {
    id: 3,
    image: bag3,
    hoverImage: hoverBag1,
    price: "$1800",
    top: 683,
    left: 1033,
    hoverTop: 600,
    hoverLeft: 1230,
    addTop: 770,
  },
  {
    id: 4,
    image: bag4,
    hoverImage: hoverBag1,
    price: "$2000",
    top: 625,
    left: 1414,
    hoverTop: 520,
    hoverLeft: 1590,
    addTop: 690,
  },
];

const Header = () => {
  const [hoveredBag, setHoveredBag] = useState(null);

  const handleHover = (id) => setHoveredBag(id);
  const handleLeave = () => setHoveredBag(null);
  const handleCart = () => console.log("cart clicked");

  return (
    <div className="bg-gradient-to-r from-[#F1FBFF] via-[#F1EDEB] to-[#F8DAB0] h-[1123px] overflow-hidden relative">
      <div className="lg:w-[868px] mt-[102px] mx-auto text-center">
        <h1 className="font-bold text-[72px]">
          Discover Iconic Styles at <br /> Unbeatable Value
        </h1>
        <p className="lg:w-[667px] mx-auto mt-8 text-[#7F7F7F]">
          From Chanel to Hermès, experience luxury at your fingertips with our
          verified and curated collections.
        </p>
        <div className="mt-8 flex justify-center ">
          <button className="bg-black px-[48px] py-[14px] text-[16px] text-white font-semibold rounded-[36px]">
            Start Shopping
          </button>
          <button className="bg-black p-[20px] text-white rounded-full">
            <GoArrowUpRight />
          </button>
        </div>
      </div>

      <CommonWrapper>
        {BAG_DATA.map(
          ({
            id,
            image,
            hoverImage,
            price,
            top,
            left,
            hoverTop,
            hoverLeft,
            addTop,
            flip,
          }) => (
            <div key={id}>
              <div
                className="lg:w-[365px] lg:h-[321px] bg-[linear-gradient(89.74deg,_#FFF0DC_0.26%,_#F8DBB2_61.48%,_#FFEED8_99.8%)] absolute"
                style={{ top: `${top + 243}px`, left: `${left - 75}px` }}
              />
              <div
                className="lg:w-[365px] lg:h-[79px] bg-[#F8DAB0] absolute rounded-[50%]"
                style={{ top: `${top + 208}px`, left: `${left - 75}px` }}
              />

              <div
                onMouseEnter={() => handleHover(id)}
                onMouseLeave={handleLeave}
              >
                <img
                  src={image}
                  alt="Bag"
                  className={`lg:w-[245px] lg:h-[284px] absolute object-cover ${
                    flip ? "transform scale-x-[-1]" : ""
                  }`}
                  style={{
                    top: `${id === 4 ? top + 20 : top}px`,
                    left: `${id === 4 ? left - 20 : left}px`,
                  }}
                />
                {hoveredBag === id && (
                  <div
                    className="w-[244px] h-[160px] z-20 absolute bg-white p-3 shadow-lg flex justify-between items-center rounded-xl"
                    style={{ top: `${hoverTop}px`, left: `${hoverLeft}px` }}
                  >
                    <div className="flex flex-col gap-4">
                      <div>
                        <p className="text-[#5A5C5F]"> Price:</p>
                        <p className="text-lg">{price}</p>
                      </div>
                      <button
                        className="w-[50px] h-[50px] bg-black rounded-full flex justify-center items-center mt-4 text-white"
                        onClick={handleCart}
                      >
                        <IoCartOutline className="w-[24px] h-[24px]" />
                      </button>
                    </div>
                    <img
                      src={hoverImage}
                      alt="Hover Bag"
                      className="w-[118px] h-[140px] object-cover rounded-2xl"
                    />
                  </div>
                )}
                {hoveredBag === id && (
                  <div
                    className="absolute"
                    style={{ top: `${addTop}px`, left: `${hoverLeft}px` }}
                  >
                    <button className="w-[50px] h-[50px] bg-[#F8DAB0] rounded-full flex justify-center items-center">
                      <IoMdAdd className="w-[24px] h-[24px]" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )
        )}
      </CommonWrapper>
    </div>
  );
};

export default Header;
