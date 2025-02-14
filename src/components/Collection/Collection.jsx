import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CommonWrapper from "../CommonWrapper";
import CollectionCard from "./CollectionCard";
import { collectionProducts } from "../../lib/data";
import gridImage from "../../assets/collection/twogrid/1.png";

const Collection = () => {
  return (
    <div className="mt-[140px] bg-white">
      <CommonWrapper>
        <div>
          <RadioGroup
            defaultValue="option-one"
            className="flex justify-between px-[150px]"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option-one"
                id="option-one"
                className="text-black border-black"
              />
              <Label htmlFor="option-one" className="text-[48px] font-[600]">
                All Collection
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option-two"
                id="option-two"
                className="text-black border-black"
              />
              <Label
                htmlFor="option-two text-geist"
                className="text-[48px] font-[600] "
              >
                New Collection
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option-three"
                id="option-three"
                className="text-black border-black"
              />
              <Label
                htmlFor="option-three text-geist"
                className="text-[48px] font-[600]"
              >
                What&apos;s Hot
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="grid grid-cols-3 gap-[10px] mt-[75px]">
          {collectionProducts.map((card, i) => (
            <CollectionCard card={card} key={i} />
          ))}
        </div>
        <div className="mt-[140px] flex">
          <div
            className="h-[719px] w-full  flex items-center justify-center"
            style={{
              background:
                "linear-gradient(459deg, rgba(255, 255, 255, 1) -18.59%, rgba(235, 235, 235, 1) 100%)",
            }}
          >
            <img src={gridImage} alt="" className="w-[406px] h-[404px]" />
          </div>
          <div className="h-[719px] w-full  bg-[#F8DAB0] flex items-center justify-center">
            <div className="bg-white w-[514px] h-[463px] rounded-3xl"></div>
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Collection;
