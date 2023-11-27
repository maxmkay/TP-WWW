"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "../../Image/Logo.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { href: "/about", text: "About" },
    { href: "/pricing", text: "Pricing" },
    { href: "/analyze-now", text: "Analyze Now" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <nav className="navbar navbar-light bg-white py-3 interBold">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid bordepd-r-b-2 border-gray-300 pb-0 lg:pb-0 align-items-center ">
        <div className="flex items-center flex-shrink-0 text-gray-800">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              className="rounded"
              width={70}
              height={70}
            />
          </Link>
          <span className="interBold text-blue-600 text-2xl">TopProp</span>
        </div>
        <div className={`lg:hidden`}>
          <button
            id="nav"
            className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 "
            onClick={toggleMenu}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-md font-bold text-blue-700 lg:flex-grow">
          {links.map((link, index) => (
            <Link
              key={index}
              className="block mt-0 lg:inline-block lg:mt-0 px-4 py-2 rounded hover:bg-blue-700 mr-1 font-bold text-black no-underline"
              href={link.href}
            >
              {link.text}
            </Link>
          ))}
        </div>

        <div className="flex">
          <a
            href="#"
            className="block text-md lg-ml-2 ml-5 py-2 rounded text-blue-600 font-bold hover:text-white mt-0 hover:bg-blue-600 lg:mt-0 no-underline border-2 border-blue-600 px-md-4 px-2"
          >
            Login
          </a>
          <a
            href="#"
            className="block text-md lg-ml-2 ml-3 py-2 rounded text-blue-600 font-bold hover:text-white mt-0 hover:bg-blue-600 lg:mt-0 no-underline border-2 border-blue-600 px-md-4 px-1"
          >
            Create Account
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
