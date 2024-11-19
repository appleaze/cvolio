"use client"; 

import { useState } from "react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-semibold">
            Cvolio
          </Link>

          {/* Hamburger Icon (Visible on Small Screens) */}
          <button
            className="block md:hidden p-2 text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Links (Responsive) */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute top-14 left-0 w-full bg-white md:static md:flex md:w-auto md:bg-transparent md:space-y-0 space-y-2 md:space-x-4 md:flex-row md:items-center`}
          >
            <Link
              href="/"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/faq"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
              onClick={() => setMenuOpen(false)}
            >
              Faq
            </Link>
            <Link
              href="/tutorial"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
              onClick={() => setMenuOpen(false)}
            >
              Tutorial
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
