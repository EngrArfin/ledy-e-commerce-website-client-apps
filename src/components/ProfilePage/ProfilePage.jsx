import ReuseSubHeader from '../../section/Shared/ReuseSubHeader';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

const ProfilePage = () => {
    const { register, handleSubmit, reset } = useForm();
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

    return (
        <div>
            {/* About Us Section */}
            <ReuseSubHeader title="Profile" subtitle="Home / Profile" />

            <div className="w-full flex items-center justify-center min-h-screen bg-gray-100 p-4">
                <Card className="w-[1134px] h-[864px] shadow-lg p-6 bg-gradient-to-r from-blue-100 to-orange-100 rounded-2xl mx-auto my-8">
                    <CardContent>
                        <h2 className="text-center text-[32px] font-['Geist'] font-semibold leading-[42.24px] tracking-[-0.02em] mb-12 mt-12">
                            Personal Info
                        </h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="flex flex-wrap">
                                {/* First Name */}
                                <div className="flex flex-col w-1/2 p-4">
                                    <h2 className="mb-2 ml-2 font-geist font-medium text-lg">First Name</h2>
                                    <Input className="w-full h-[64px] rounded-[24px] border-[1px] p-[20px]"
                                        {...register("firstName", { required: true })} placeholder="First Name" />
                                </div>

                                {/* Last Name */}
                                <div className="flex flex-col w-1/2 p-4">
                                    <h2 className="mb-2 ml-2 font-geist font-medium text-lg">Last Name</h2>
                                    <Input className="w-full h-[64px] rounded-[24px] border-[1px] p-[20px]"
                                        {...register("lastName", { required: true })} placeholder="Last Name" />
                                </div>

                                {/* Email Address */}
                                <div className="flex flex-col w-1/2 p-4">
                                    <h2 className="mb-2 ml-2 font-geist font-medium text-lg">Email Address</h2>
                                    <Input className="w-full h-[64px] rounded-[24px] border-[1px] p-[20px]"
                                        {...register("email", { required: true })} type="email" placeholder="Email Address" />
                                </div>

                                {/* Phone Number */}
                                <div className="flex flex-col w-1/2 p-4">
                                    <h2 className="mb-2 ml-2 font-geist font-medium text-lg">Phone Number</h2>
                                    <Input className="w-full h-[64px] rounded-[24px] border-[1px] p-[20px]"
                                        {...register("phone", { required: true })} type="tel" placeholder="Phone Number" />
                                </div>

                                {/* Address */}
                                <div className="flex flex-col w-1/2 p-4">
                                    <h2 className="mb-2 ml-2 font-geist font-medium text-lg">Address</h2>
                                    <Input className="w-full h-[64px] rounded-[24px] border-[1px] p-[20px]"
                                        {...register("address", { required: true })} type="text" placeholder="Your Address" />
                                </div>

                                {/* Town/City */}
                                <div className="flex flex-col w-1/2 p-4">
                                    <h2 className="mb-2 ml-2 font-geist font-medium text-lg">Town/City</h2>
                                    <Input className="w-full h-[64px] rounded-[24px] border-[1px] p-[20px]"
                                        {...register("city", { required: true })} type="text" placeholder="City Name" />
                                </div>

                                {/* State/Country */}
                                <div className="flex flex-col w-1/2 p-4">
                                    <h2 className="mb-2 ml-2 font-geist font-medium text-lg">State/Country</h2>
                                    <Select {...register("country", { required: true })} className="h-16 p-4 ">
                                        <SelectTrigger className='p-4 pt-8 pb-8 rounded-[24px] border-[1px] '>Country Name</SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="USA">USA</SelectItem>
                                            <SelectItem value="Canada">Canada</SelectItem>
                                            <SelectItem value="UK">UK</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Postal Code */}
                                <div className="flex flex-col w-1/2 p-4">
                                    <h2 className="mb-2 ml-2 font-geist font-medium text-lg">Postal Code</h2>
                                    <Input className="w-full h-[64px] rounded-[24px] border-[1px] p-[20px]"
                                        {...register("postalCode", { required: true })} placeholder="Postal Code" />
                                </div>
                            </div>

                            <div className="mt-12 flex justify-center space-x-4">
                                <button type="submit"
                                    className="w-[493px] max-w-full bg-black h-[54px] px-[48px] py-[14px] text-[16px] text-white font-semibold rounded-[36px]">
                                    Edit Profile
                                </button>

                                <button type="button"
                                    className="w-[493px] max-w-full bg-white h-[54px] px-[48px] py-[14px] text-[16px] text-black font-semibold rounded-[36px]">
                                    Delete Account
                                </button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ProfilePage;
