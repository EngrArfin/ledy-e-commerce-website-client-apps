/* eslint-disable react/prop-types */
const CartWrapper = ({ children, className }) => {
    return (
      <div
        className={`w-[1520px] text-black py-4 mx-auto my-auto ${className} bg-gradient-to-br from-[#F1FBFF] via-[#F1EDEB] to-[#F8DAB0]`}
      >
        {children}
      </div>
    );
  };
  
  export default CartWrapper;