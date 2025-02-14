import { Divider } from "@heroui/react";

import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import CommonWrapper from "../components/CommonWrapper";

const Footer = () => {
  return (
    <footer className="bg-[#191919] absolute  w-full">
      <CommonWrapper>
        <div className="flex justify-between text-white py-5">
          <div>
            <img
              src="/src/assets/logo/logo-gray.png"
              alt="Logo"
              width={204}
              height={127}
            />
            <div className="mt-2">
              <div className="flex gap-2 justify-center">
                <div className="bg-black p-1 rounded-lg">
                  <InstagramLogoIcon className="h-6 w-6 text-white" />
                </div>
                <div className="bg-black p-1 rounded-lg">
                  <TwitterLogoIcon className="h-6 w-6" />
                </div>
                <div className="bg-black p-1 rounded-lg">
                  <LinkedInLogoIcon className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-12 text-white">
            <div>
              <p className="font-semibold text-xl mb-2">Shipping with us</p>
              <p className="text-base">Making payments</p>
              <p className="text-base">Delivery options</p>
            </div>
            <div>
              <p className="font-semibold text-xl mb-2">Pay with</p>
              <div className="flex gap-3">
                <img
                  src="/src/assets/images/visa.png"
                  alt="Visa Card"
                  width={36}
                  height={24}
                />
                <img
                  src="/src/assets/images/master.png"
                  alt="Master Card"
                  width={36}
                  height={24}
                />
                <img
                  src="/src/assets/images/paypal.png"
                  alt="Paypal"
                  width={36}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
        <Divider className="bg-[#444343]" />
        <div className="w-full pt-3">
          <p className="text-sm text-white  text-center">
            2023 <span className=" hover:text-danger"> Pewds. </span> All right
            reserved.
          </p>
        </div>
      </CommonWrapper>
    </footer>
  );
};

export default Footer;
