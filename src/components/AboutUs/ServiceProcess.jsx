import { CardContent } from "@/components/ui/card";
import { Truck, ShieldCheck, RefreshCw, Gem } from "lucide-react";
import { motion } from "framer-motion";
import ReuseSubHeader from "../../section/Shared/ReuseSubHeader";

const ServiceProcess = () => {
    return (
        <div>
            <div className="">
                {/* About Us Section */}
                <ReuseSubHeader title="About" subtitle="Home / About " />

            </div>
            <div className="w-[1,212px] flex flex-wrap justify-center gap-5 mt-20 px-4 md:px-10 lg:px-20">
                {/* Card 1 */}
                <motion.div
                    className="w-[288px] h-[271px] bg-primary flex flex-col items-center justify-center rounded-lg shadow-lg p-6 text-center"
                    initial={{ y: 0 }}
                    whileHover={{ y: 10 }} // Moves the card down by 10px when hovered
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <CardContent className="flex flex-col items-center">
                        <Truck size={50} className="text-black" />
                        <p className="mt-4 text-lg font-semibold text-gray-800">
                            Fast & Secure Delivery
                        </p>
                    </CardContent>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    className="w-[288px] h-[271px] bg-primary flex flex-col items-center justify-center rounded-lg shadow-lg p-6 text-center"
                    initial={{ y: 0 }}
                    whileHover={{ y: 10 }} // Moves the card down by 10px when hovered
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <CardContent className="flex flex-col items-center">
                        <ShieldCheck size={50} className="text-black" />
                        <p className="mt-4 text-lg font-semibold text-gray-800">
                            100% Guarantee On Product
                        </p>
                    </CardContent>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    className="w-[288px] h-[271px] bg-primary flex flex-col items-center justify-center rounded-lg shadow-lg p-6 text-center"
                    initial={{ y: 0 }}
                    whileHover={{ y: 10 }} // Moves the card down by 10px when hovered
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <CardContent className="flex flex-col items-center">
                        <RefreshCw size={50} className="text-black" />
                        <p className="mt-4 text-lg font-semibold text-gray-800">
                            24 Hour Return Policy
                        </p>
                    </CardContent>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                    className="w-[288px] h-[271px] bg-primary flex flex-col items-center justify-center rounded-lg shadow-lg p-6 text-center"
                    initial={{ y: 0 }}
                    whileHover={{ y: 10 }} // Moves the card down by 10px when hovered
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <CardContent className="flex flex-col items-center">
                        <Gem size={50} className="text-black" />
                        <p className="mt-4 text-lg font-semibold text-gray-800">
                            Next Level Pro Quality
                        </p>
                    </CardContent>
                </motion.div>
            </div>

        </div>

    );
};

export default ServiceProcess;
