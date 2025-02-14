import ClosetProducts from "../components/closetProducts/CLosetProducts";
import bag from "../assets/closet-image/image 7.png";
import ClosetWrapper from "../components/closetProducts/ClosetWrapper";
import EmptyClosetCard from "../components/closetProducts/EmptyClosetCard";
import recycle from "../assets/closet-image/recycle.png";
import deleteIcon from "../assets/closet-image/deleteIcon.png";
import NewsletterSection from "../components/closetProducts/NewsletterSection";

const MyCloset = () => {
  return (
    <div>
      <div className="bg-white mt-6">
        <div className="text-center">
          <h1 className="text-[72px] font-bold">My Closet</h1>
          <p className="text-[#7F7F7F]">
            Your favorite picks, all in one place
          </p>
        </div>
        <ClosetWrapper className={"pl-6 mt-14"}>
          <div className="">
            <ClosetProducts
              productName="Stylish Jacket"
              price="$150"
              picture={bag}
              height="839px"
              width="713px"
            />
          </div>

          <div>
            <EmptyClosetCard />
          </div>
        </ClosetWrapper>
        <div className="flex justify-center gap-8 mt-8 pb-5 ">
          <div className="flex">
            <button className="flex px-12 py-3 justify-center items-center gap-2 rounded-[36px] bg-black text-white hover:opacity-90">
              Share Closet
            </button>
            <div className="flex h-[54px] p-4 justify-center items-center gap-2 rounded-[36px] bg-black text-white">
              <img
                src={recycle}
                style={{ height: "24px" }}
                className="flex items-center"
              />
            </div>
          </div>
          <div className="flex">
            <button className="flex px-12 py-3 justify-center items-center gap-2 border border-black rounded-[36px] bg-white text-black hover:opacity-90">
              Clear Closet
            </button>
            <div className="flex h-[54px]  p-4 justify-center items-center gap-2 border border-black rounded-[36px] bg-white text-black">
              <img
                src={deleteIcon}
                style={{ height: "24px" }}
                className="flex items-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white pb-36 pt-32">
        <NewsletterSection />
      </div>
    </div>
  );
};

export default MyCloset;
