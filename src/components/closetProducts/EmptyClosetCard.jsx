import closetCart from "../../assets/closet-image/closetCart.png";
import arrowUp from "../../assets/closet-image/arrowUp.png";

const EmptyClosetCard = () => {
  return (
    <div className="w-[713px] h-[839px] p-8 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center text-center">
      {/* Centered Inner Div */}
      <div className="w-[514px] flex flex-col items-center justify-center">
        {/* Cart Icon */}
        <div>
          <img src={closetCart} height="136px" width="136px" />
        </div>

        {/* Text */}
        <div className="mt-4">
          <p className="text-gray-700 text-[32px] font-medium">
            Your closet is empty! Start adding items by liking bags you love
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center  mt-6">
          <button className="px-12 py-3 flex justify-center items-center  rounded-[36px] bg-black text-white hover:opacity-90">
            Browse Collection
          </button>

          <div className="flex h-[54px] p-4 justify-center items-center  rounded-[36px] bg-black text-white">
            <img
              src={arrowUp}
              style={{ height: "24px" }}
              className="flex items-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyClosetCard;
