import { useState } from "react";
import CheckOutWrapper from "../components/checkout/CheckoutWrapper";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import mCard from "../assets/chekout-image/mCard.png";
import paypal from "../assets/chekout-image/paypal.png";
import visa from "../assets/chekout-image/visa.png";
import NewsletterSection from "../components/closetProducts/NewsletterSection";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    saveDetails: false,
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    cardholderName: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // handle form submission logic (API call or local validation)
  };

  return (
    <div className="w-[1920px] ">
      <div className="bg-gradient-to-r from-[#F1FBFF] via-[#F1EDEB] to-[#F8DAB0] h-[437px] flex flex-col items-center justify-center">
        <h1 className="text-[72px] font-bold">Checkout</h1>
        <div>
          <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Checkout</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>
      <CheckOutWrapper>
        <div className="flex justify-between p-8 mt-14">
          {/* Left side - User Information Form */}
          <div className="w-[60%] space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-medium pb-4">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleFormChange}
                  className="border border-gray-300 p-2 rounded-xl "
                  placeholder="Sabbir"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium pb-4 ">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleFormChange}
                  className="border border-gray-300 p-2 rounded-xl"
                  placeholder="Rahman"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-medium pb-4 pt-3">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="border border-gray-300 p-2 rounded-xl"
                  placeholder="sabbir@example.com"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium pb-4 pt-3">Phone Number *</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleFormChange}
                  className="border border-gray-300 p-2 rounded-xl"
                  placeholder="+91 1234567890"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col pb-4 pt-3">
              <label className="font-medium">Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleFormChange}
                className="border border-gray-300 p-2 rounded-xl"
                placeholder="sabbir@example.com"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-medium pb-4 pt-3">Town/City *</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleFormChange}
                  className="border border-gray-300 p-2 rounded-xl text-[#5A5C5F]"
                  required
                >
                 
                  <option value="" className="text-[#5A5C5F]">
                    City Name
                  </option>
                  <option value="Dhaka" className="text-[#5A5C5F]">
                    Dhaka
                  </option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="font-medium pb-4 pt-3">State/Country *</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleFormChange}
                  className="border border-gray-300 p-2 rounded-xl  text-[#5A5C5F]"
                  required
                >
                 <option value="" className="text-[#5A5C5F]">
                    Country Name
                  </option>
                  <option value="Dhaka" className="text-[#5A5C5F]">
                    Bangladesh
                  </option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="font-medium pb-4 pt-3">Postal Code *</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleFormChange}
                className="border border-gray-300 p-2 rounded-xl"
                placeholder="1234"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="saveDetails"
                checked={formData.saveDetails}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    saveDetails: e.target.checked,
                  }))
                }
                className="mr-2"
              />
              <span>Save your details for future order purpose</span>
            </div>
          </div>

          {/* Right side - Order Summary and Payment */}
          <div className="w-[35%] h-[872px] bg-white p-6 rounded-lg shadow-md border-1 border-[#D9D9D9]">
            <h2 className="text-xl font-bold mb-4 text-center pt-2">
              Order Summary
            </h2>
            <hr className="mt-10 bg-[#C5C5C5]" />
            <div className="space-y-4 pt-8">
              <div className="flex justify-between">
                <span>Price</span>
                <span>$ 196.34</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charge</span>
                <span>$ 196.34</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$ 196.34</span>
              </div>
              <hr className=" bg-[#C5C5C5]" />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$ 196.34</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-16 text-center">Payment</h3>
            <hr className=" bg-[#C5C5C5] mt-6" />
            <div className="flex justify-between mt-8 mb-4">
              <span>Credit Card</span>
              <div className="flex space-x-2">
                <img src={visa} alt="Visa" className="w-8 h-8" />
                <img src={mCard} alt="MasterCard" className="w-8 h-8" />
                <img src={paypal} alt="PayPal" className="w-8 h-8" />
              </div>
            </div>

            <div className="space-y-4 mt-10">
              <input
                type="text"
                name="cardNumber"
                value={paymentData.cardNumber}
                onChange={handlePaymentChange}
                placeholder="Card number"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="expirationDate"
                  value={paymentData.expirationDate}
                  onChange={handlePaymentChange}
                  placeholder="Expiration date (MM/YY)"
                  className="border border-gray-300 p-3 rounded-md w-1/2"
                />
                <input
                  type="text"
                  name="securityCode"
                  value={paymentData.securityCode}
                  onChange={handlePaymentChange}
                  placeholder="Security code"
                  className="border border-gray-300 p-3 rounded-md w-1/2"
                />
              </div>
              <input
                type="text"
                name="cardholderName"
                value={paymentData.cardholderName}
                onChange={handlePaymentChange}
                placeholder="Cardholder name"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="bg-black text-white py-2 px-4 rounded-full w-full mt-10"
            >
              Place Order Now
            </button>
          </div>
        </div>
        <div className="mt-10">
                <NewsletterSection/>
        </div>
      </CheckOutWrapper>
    </div>
  );
};

export default Checkout;
