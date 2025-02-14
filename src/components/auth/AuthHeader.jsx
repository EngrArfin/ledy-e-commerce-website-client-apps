import { Link } from "react-router-dom";

const AuthHeader = ({ heading = "Sign In" }) => {
  return (
    <>
      <Link to={"/"}>
        <img
          src="/src/assets/logo/logo-black.png"
          alt=""
          width={265}
          height={168}
        />
      </Link>

      <h4 className="p-0 m-0 w-full text-4xl text-[#050505] font-semibold">
        {heading}
      </h4>
    </>
  );
};

export default AuthHeader;
