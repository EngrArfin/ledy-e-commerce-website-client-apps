

import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import ReuseSubHeader from "../../section/Shared/ReuseSubHeader";
import { GoArrowUpRight } from "react-icons/go";

export default function MessageSend() {
    const { register, handleSubmit, reset } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            await axios.post("YOUR_API_ENDPOINT_HERE", data);
            alert("Message sent successfully!");
            reset();
        } catch (error) {
            alert("Failed to send message");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-">
            {/* Contact */}
            <ReuseSubHeader title="Contact" subtitle="Home /Contact " />
            <div className="flex items-center justify-center min-h-screen py-6 px-4 md:px-6 lg:px-8">
                <Card className="w-full max-w-4xl p-8">
                    <CardContent>
                        <h2 className="text-4xl font-semibold mb-6 text-center leading-tight tracking-tight">Send Your Message</h2>

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
                                        {...register("email", { required: true })} type="email" placeholder="abc@gmail.com" />
                                </div>

                                {/* Phone Number */}
                                <div className="flex flex-col w-1/2 p-4">
                                    <h2 className="mb-2 ml-2 font-geist font-medium text-lg">Phone Number</h2>
                                    <Input className="w-full h-[64px] rounded-[24px] border-[1px] p-[20px]"
                                        {...register("phone", { required: true })} type="tel" placeholder="1234567" />
                                </div>
                            </div>

                            <div>
                                <h3 className="font-geist font-medium text-lg leading-[29.52px] tracking-normal">Your Message*</h3>
                                <Textarea
                                    {...register("message", { required: true })}
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full h-[350px] p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* burron */}
                            <div className="text-center mt-8 flex justify-start">
                                <button className="bg-black px-[48px] py-[14px] text-[16px] text-white font-semibold rounded-[36px]">
                                    Send Message
                                </button>
                                <button className="bg-black p-[20px] text-white rounded-full">
                                    <GoArrowUpRight />
                                </button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

