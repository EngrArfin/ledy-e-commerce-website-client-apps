import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@heroui/react";

import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../hooks/AuthContextProvider";
import { motion } from "framer-motion";
import UserPopover from "@/components/UserPopover";
import logo from "../assets/header/logo/logo.png";
import avatar from "../assets/header/end/avatar.png";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  return (
    <Navbar
      isBordered={false}
      isBlurred={false}
      maxWidth="2xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className=" py-2 z-50 text-white backdrop-blur-sm fixed top-0 w-[1520px] mx-auto bg-transparent flex justify-between items-center"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:text-danger",
          "data-[active=false]:hover:text-danger",
        ],
      }}
    >
      <NavbarContent className=" text-black font-bold">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent as="div" justify="center">
        <div className="hidden md:flex gap-8">
          <motion.div
            initial="hidden"
            className="flex gap-6"
            animate="visible"
            variants={menuVariant}
          >
            <motion.div variants={childVariant} className="w-[176px] h-[112px]">
              <img src={logo} alt="" />
            </motion.div>
          </motion.div>
        </div>

        <NavbarMenu className="bg-gradient-to-r from-[#F1FBFF] via-[#F1EDEB] to-[#F8DAB0] h-[1123px] lg:w-[1560px] mx-auto pt-10 ">
          <NavLink to="/">
            {({ isActive }) => (
              <NavbarItem
                className="hover:text-danger h-fit mb-4 font-bold"
                isActive={isActive}
              >
                Home
              </NavbarItem>
            )}
          </NavLink>

          <NavLink to="/closet" aria-current="page">
            {({ isActive }) => (
              <NavbarItem
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-danger h-fit mb-4 font-bold"
                isActive={isActive}
              >
                Wishlist
              </NavbarItem>
            )}
          </NavLink>

          <NavLink to="/about" aria-current="page">
            {({ isActive }) => (
              <NavbarItem
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-danger h-fit mb-4 font-bold"
                isActive={isActive}
              >
                About Us
              </NavbarItem>
            )}
          </NavLink>

          <NavLink to="/new-arrival" aria-current="page">
            {({ isActive }) => (
              <NavbarItem
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-danger h-fit mb-4 font-bold"
                isActive={isActive}
              >
                New Arrival
              </NavbarItem>
            )}
          </NavLink>

          <NavLink to="/shop" aria-current="page">
            {({ isActive }) => (
              <NavbarItem
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-danger h-fit mb-4 font-bold"
                isActive={isActive}
              >
                Shop
              </NavbarItem>
            )}
          </NavLink>

          <NavLink to="/contact" aria-current="page">
            {({ isActive }) => (
              <NavbarItem
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-danger h-fit mb-4 font-bold"
                isActive={isActive}
              >
                Contact
              </NavbarItem>
            )}
          </NavLink>
        </NavbarMenu>
      </NavbarContent>

      <NavbarContent justify="end">
        {user ? (
          <UserPopover user={user} logout={logout} />
        ) : (
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
              <CiHeart className="w-[24px] h-[24px]  text-black" />
            </div>
            <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
              <IoCartOutline className="w-[24px] h-[24px]  text-black" />
            </div>
            <div className="flex items-center gap-2 ">
              <img
                src={avatar}
                alt=""
                className="w-[40px] h-[40px] rounded-full object-cover"
              />
              <div className="text-black text-xs">
                <h1>Hi,</h1>
                <p>Dana Keeling!</p>
              </div>
            </div>
          </div>
        )}
      </NavbarContent>
    </Navbar>
  );
}

// const logoVariant = {
//   hidden: {
//     y: -100,
//   },
//   visible: {
//     y: 0,
//     transition: {
//       duration: 1,
//       type: "spring",
//       stiffness: 80,
//     },
//   },
// };
const menuVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const childVariant = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
