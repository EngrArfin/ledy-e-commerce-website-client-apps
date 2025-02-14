/* eslint-disable react/prop-types */
const CheckOutWrapper = ({ children, className }) => {
    return (
      <div
        className={`w-[1520px] text-black py-4 mx-auto my-auto ${className} bg-white`}
      >
        {children}
      </div>
    );
  };
  
  export default CheckOutWrapper;