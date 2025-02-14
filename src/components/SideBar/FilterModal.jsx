import React from "react";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
    Select,
    SelectItem,
    Avatar,
    divider,
} from "@heroui/react";
import PriceSlider from "./PriceSlider";
import Color from "./Color";
import MediumHeader from "./MediumHeader";

const FilterModal = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
        <>
            <Button color="default" variant="flat" onPress={onOpen}>
                Filter
            </Button>
            <Drawer
                radius="none"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="left"
            >
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="">
                                <h2 className="h-4 text-2xl font-bold capitalize">filter</h2>
                            </DrawerHeader>
                            <DrawerBody>
                                <Select className="w-full" label="Select a Designers">
                                    {animals.map((animal) => (
                                        <SelectItem key={animal.key}>{animal.label}</SelectItem>
                                    ))}
                                </Select>
                                <Select className="w-full" label="Select a Bag Type">
                                    {animals.map((animal) => (
                                        <SelectItem key={animal.key}>{animal.label}</SelectItem>
                                    ))}
                                </Select>
                                <Select className="w-full" label="Availability">
                                    {animals.map((animal) => (
                                        <SelectItem key={animal.key}>{animal.label}</SelectItem>
                                    ))}
                                </Select>
                                <div>
                                    <MediumHeader>Color</MediumHeader>
                                    <div className="flex flex-wrap gap-4 py-4">
                                        <Color Bg={"bg-red-500"} Ring={"ring-red-500"} />
                                        <Color Bg={"bg-green-500"} Ring={"ring-green-500"} />
                                        <Color Bg={"bg-yellow-500"} Ring={"ring-yellow-500"} />
                                        <Color Bg={"bg-slate-500"} Ring={"ring-slate-500"} />
                                        <Color Bg={"bg-sky-500"} Ring={"ring-sky-500"} />
                                        <Color Bg={"bg-yellow-500"} Ring={"ring-yellow-500"} />
                                        <Color Bg={"bg-yellow-500"} Ring={"ring-yellow-500"} />
                                        <Color Bg={"bg-yellow-500"} Ring={"ring-yellow-500"} />
                                        <Color Bg={"bg-sky-500"} Ring={"ring-sky-500"} />
                                        <Color Bg={"bg-yellow-500"} Ring={"ring-yellow-500"} />
                                        <Color Bg={"bg-yellow-500"} Ring={"ring-yellow-500"} />
                                        <Color Bg={"bg-green-500"} Ring={"ring-green-500"} />
                                    </div>
                                </div>
                                <PriceSlider />
                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="default" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
};
export default FilterModal;


