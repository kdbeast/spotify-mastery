import { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div
        className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-gradient-to-b from-[#00020f]
     to-[#121286]"
      >
        <img
          src="/covers/logo.png"
          alt="logo"
          className="w-full h-32 object-contain"
        />
        <NavLinks />
      </div>

      <div className="absolute md:hidden top-6 right-3 w-16 h-16 flex items-center justify-center">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-10 h-10 text-white  rounded-full p-2 hover:bg-white/20 transition cursor-pointer z-10"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-10 h-10 text-white rounded-full p-2 hover:bg-white/20 transition cursor-pointer z-10"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden transform transition-transform duration-300 ease-in-out
    ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <img
          src="/covers/logo.png"
          alt="logo"
          className="w-full h-32 object-contain"
        />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
