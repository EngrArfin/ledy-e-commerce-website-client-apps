import { Outlet } from "react-router-dom";
import Header from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <div className="min-h-screen py-20 flex max-h-full flex-nowrap justify-start bg-gradient-to-r from-[#F1FBFF] via-[#F1EDEB] to-[#F8DAB0] transition-[padding] duration-200 p-0">
        <div className="w-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
