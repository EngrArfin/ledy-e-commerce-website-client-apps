import { useState } from "react";
import { useForm } from "react-hook-form"; // Import useForm here
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import axios from "axios";
import ReuseSubHeader from "../../section/Shared/ReuseSubHeader";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

const SellingMade = () => {
    const { register, handleSubmit, reset } = useForm(); // Using useForm for form handling
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            await axios.post("YOUR_API_ENDPOINT_HERE", data);
            alert("Profile updated successfully!");
            reset();
        } catch (error) {
            alert("Failed to update profile");
        } finally {
            setIsSubmitting(false);
        }
    };

    const [formData, setFormData] = useState({
        designer: "",
        category: "",
        productName: "",
        details: "",
        images: {
            front: null,
            back: null,
            inside: null,
            base: null,
            condition: null,
            details: null,
            retailTag: null,
            sellerId: null,
        },
    });

    const [activeCard, setActiveCard] = useState(null); // To track which card is active for uploading

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e, type) => {
        if (e.target.files.length > 0) {
            setFormData((prev) => ({
                ...prev,
                images: { ...prev.images, [type]: e.target.files[0] },
            }));
            setActiveCard(null); // Close the file input after selecting a file
        }
    };

    const handleCardClick = (type) => {
        setActiveCard(type); // Open file input for the clicked card
    };

    const photoLabels = [
        "Front",
        "Back",
        "Inside",
        "Base",
        "Condition",
        "Details",
        "Retail Tag Or Sticker",
        "Seller Id Or Designer Id",
    ];

    return (
        <div className="">
            <ReuseSubHeader title="Selling Made Simple" subtitle="We Provide upfront quote (by our offer)" />

            <div className="flex flex-col items-center mt-8">
                <h1 className="text-center font-poppins font-semibold text-4xl">Welcome!</h1>
                <p className="mt-4 text-gray-500 text-center text-sm">
                    Email: arfin.cse.green.edu.bd@gmail.com
                </p>
                <p className="text-center mt-2 text-sm font-medium">
                    Not you? <span className="text-gray-700">Sign In to My Account</span>
                </p>
            </div>

            <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-r from-gray-100 to-orange-100 rounded-lg shadow-lg mt-8">
                <h1 className="text-2xl font-bold text-center mb-4">What Are You Selling?</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">

                        {/* State/Country */}
                        <div className="flex flex-col w-full sm:w-[493px] p-4">
                            <h2 className="mb-2 ml-2 font-geist font-medium text-lg">Design</h2>
                            <Select {...register("country", { required: true })} className="w-full h-16 p-4">
                                <SelectTrigger className="p-4 pt-8 pb-8 rounded-[24px] border-[1px]">Select A design Name</SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="USA">Graphic</SelectItem>
                                    <SelectItem value="Canada">Autocad</SelectItem>
                                    <SelectItem value="UK">Photoshop</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* category */}

                        <div className="ml-20 flex flex-col w-full sm:w-[493px] p-4">
                            <h2 className="mb-2 ml-2 font-geist font-medium text-lg">Category</h2>
                            <Select {...register("country", { required: true })} className="w-full h-16 p-4">
                                <SelectTrigger className='p-4 pt-8 pb-8 rounded-[24px] border-[1px]'>
                                    Select A design Name
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="USA">Web Design</SelectItem>
                                    <SelectItem value="Canada">UI/UX Design</SelectItem>
                                    <SelectItem value="UK">3D Modeling</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* add Product Name */}
                    <div className="flex flex-col w-full sm:w-[1006px] p-4">
                        <h2 className="mb-2 ml-2 font-geist font-medium text-lg">Item/Product Name</h2>
                        <Input
                            className="w-full h-[64px] rounded-[24px] border-[1px] p-[20px]"
                            {...register("address", { required: true })}
                            type="text"
                            placeholder="Enter Your product Name"
                        />
                    </div>

                    <div className="text-center mt-16">
                        <h2 className="text-2xl font-semibold">Any Details Should Know About</h2>
                        <p className="mt-4 text-sm text-gray-500">For Example</p>
                        <div className="space-y-4 mt-8 flex flex-col items-center justify-center">
                            <p className="relative w-full sm:w-[292px] text-center text-sm font-medium">
                                <span className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-black"></span>
                                Lorem ipsum dolor, Quibusdam quam
                            </p>
                            <p className="relative w-full sm:w-[292px] text-center text-sm font-medium">
                                <span className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-black"></span>
                                Lorem ipsum dolor, Quibusdam quam
                            </p>
                            <p className="relative w-full sm:w-[292px] text-center text-sm font-medium">
                                <span className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-black"></span>
                                Lorem ipsum dolor, Quibusdam quam
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="font-medium text-lg mb-3">Item Details and Condition</h3>
                        <Textarea
                            name="details"
                            value={formData.details}
                            onChange={handleInputChange}
                            placeholder="Enter item details and condition"
                            rows={4}
                            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <h1 className="mt-5">Upload Photo Of Your Item</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
                            {photoLabels.map((label, index) => (
                                <Card
                                    key={label}
                                    onClick={() => handleCardClick(label.toLowerCase())} // Set the clicked card as active
                                    className="p-4 text-center cursor-pointer h-[186px] w-full sm:w-[186px]">
                                    {formData.images[label.toLowerCase()] ? (  // Check if image is already uploaded
                                        <div className="flex flex-col justify-center items-center h-full">
                                            <img
                                                src={URL.createObjectURL(formData.images[label.toLowerCase()])}
                                                alt={label}
                                                className="h-full object-cover w-full"
                                            />
                                            <span className="text-sm font-medium text-gray-700">{label}</span>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col justify-center items-center h-full">
                                            {activeCard === label.toLowerCase() ? (
                                                <>
                                                    <i className="fas fa-camera text-gray-700 text-4xl"></i>
                                                    <span className="text-sm text-gray-600 mt-2">Click to add a photo</span>
                                                    <input
                                                        type="file"
                                                        onChange={(e) => handleFileChange(e, label.toLowerCase())}
                                                        className="mt-2 opacity-0 cursor-pointer w-full h-full absolute inset-0"
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    <i className="fas fa-camera text-gray-700 text-4xl"></i>
                                                    <span className="text-sm text-gray-600 mt-2">{label}</span>
                                                </>
                                            )}
                                        </div>
                                    )}
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Button */}
                    <div className="text-center mt-8">
                        <button
                            type="submit"
                            className="w-[1006px] max-w-full bg-black h-[54px] px-[48px] py-[14px] text-[16px] text-white font-semibold rounded-[36px]">
                            Submit My Quote
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SellingMade;
