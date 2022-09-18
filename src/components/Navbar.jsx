import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  // **************
  // *** STATES ***
  // **************

  //Mobile menu toggle
  const [toggle, setToggle] = useState(false);

  return (
    // ***************
    // *** WRAPPER ***
    // ***************
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* ************ */}
      {/* *** LOGO *** */}
      {/* ************ */}
      <img src={logo} alt="kaqing bank" className="w-[150px] h-[125px] pt-1" />

      {/* ******************** */}
      {/* *** PRIMARY MENU *** */}
      {/* ******************** */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {/* ****************** */}
        {/* Dynamic list items */}
        {/* ****************** */}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins 
            font-normal 
            cursor-pointer  
            text-[16px]
            text-white 
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
            hover:text-secondary`}
          >
            {/* ************ */}
            {/* Dynamic Link */}
            {/* ************ */}
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* ******************* */}
      {/* *** MOBILE MENU *** */}
      {/* ******************* */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* ********* */}
        {/* Menu Icon */}
        {/* ********* */}
        <img
          src={toggle ? close : menu}
          alt="mobile menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
        {/* ******************* */}
        {/* Gradient Background */}
        {/* ******************* */}
        <div
          className={`${toggle ? "flex" : "hidden"} p-6
          bg-black-gradient absolute top-20 right-0 mx-4 my-8 min-w-[140px] rounded-xl sidebar`}
        >
          {/* **** */}
          {/* List */}
          {/* **** */}
          <ul className="list-none flex-col justify-end items-center flex-1 ">
            {navLinks.map((nav, index) => (
              // ******************
              // Dynamic list items
              // ******************
              <li
                key={nav.id}
                className={`font-poppins 
                font-normal 
                cursor-pointer 
                text-[16px] 
              text-white
                ${index === navLinks.length - 1 ? "mb-0" : "mb-"} `}
              >
                {/* ************ */}
                {/* Dynamic link */}
                {/* ************ */}
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
