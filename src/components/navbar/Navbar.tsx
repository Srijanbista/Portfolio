"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#work", text: "Work" },
    { href: "#blog", text: "Blog" },
  ];

  return (
    <div className="relative right-0 top-full flex justify-between border-b px-6 py-3 lg:px-12 lg:py-6">
      <span className="cursor-pointer text-xl font-semibold">
        <Link href="/">Srijan Bista</Link>
      </span>
      <nav className="relative items-center gap-x-6 lg:flex lg:gap-x-12">
        <Bars3Icon
          className="block h-8 w-8 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />

        {/* Nav for Small Screen */}
        {isOpen && (
          <ul
            className={`absolute right-0 top-full z-10 block gap-x-6 rounded-lg bg-neutral-200 px-4 py-2 lg:hidden`}
          >
            {links.map(({ href, text }, index) => (
              <Link key={index} href={href}>
                <li className="cursor-pointer text-lg">{text}</li>
              </Link>
            ))}
          </ul>
        )}
        {/* Nav for Large Screen */}
        <ul className={`hidden gap-x-6 rounded-lg px-4 py-2 lg:flex`}>
          {links.map(({ href, text }, index) => (
            <Link key={index} href={href}>
              <li className="cursor-pointer text-lg">{text}</li>
            </Link>
          ))}
        </ul>
        <span className="hidden lg:block">Logo</span>
      </nav>
    </div>
  );
};

export default Navbar;
