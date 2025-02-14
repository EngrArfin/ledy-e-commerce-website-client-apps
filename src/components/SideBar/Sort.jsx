import { Select, SelectItem } from "@heroui/react";
import React from "react";
import FilterModal from "./FilterModal";

const Sort = () => {
    const animals = [
        { key: "cat", label: "Cat" },
        { key: "dog", label: "Dog" },
        { key: "elephant", label: "Elephant" },
        { key: "lion", label: "Lion" },
        { key: "tiger", label: "Tiger" },
        { key: "giraffe", label: "Giraffe" },
        { key: "dolphin", label: "Dolphin" },
        { key: "penguin", label: "Penguin" },
        { key: "zebra", label: "Zebra" },
        { key: "shark", label: "Shark" },
        { key: "whale", label: "Whale" },
        { key: "otter", label: "Otter" },
        { key: "crocodile", label: "Crocodile" },
    ];

    return (
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row ">
            <div>
                <h2 className=" text-lg sm:text-xl text-[#5A5C5F] ">
                    There are 1000 product in total
                </h2>
            </div>

            <div className="flex items-center gap-4 ">
                <div className="lg:hidden">
                    <FilterModal />
                </div>
                <h2 className="text-xs text-[#5A5C5F]">Sorted By:</h2>

                <Select
                    className="w-28"
                    defaultSelectedKeys={["cat"]}
                    classNames={{
                        trigger: "bg-[#E5E5E5] min-h-6 h-6 ",
                        innerWrapper: "",
                    }}
                >
                    {animals.map((animal) => (
                        <SelectItem key={animal.key}>{animal.label}</SelectItem>
                    ))}
                </Select>
            </div>
        </div>
    );
};

export default Sort;
