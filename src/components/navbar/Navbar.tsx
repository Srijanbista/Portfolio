"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#work", text: "Work" },
    { href: "/blog", text: "Blog" },
    { href: "#contact", text: "Contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        // Adjust this breakpoint according to your lg breakpoint
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative right-0 top-full flex justify-end px-6 py-2 lg:px-12 lg:py-4">
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
              <li className="cursor-pointer text-lg font-semibold">{text}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
