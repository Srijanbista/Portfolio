import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-6 lg:px-12 py-3 lg:py-6 flex justify-between border-b">
      <span className="text-xl font-semibold cursor-pointer">Srijan Bista</span>
      <div className="flex gap-x-6 lg:gap-x-12">
        <ul className="flex gap-x-6 lg:gap-x-12">
          <Link href="/">
            <li className="text-lg cursor-pointer">Home</li>
          </Link>
          <Link href="#about">
            <li className="text-lg cursor-pointer">About</li>
          </Link>
          <Link href="#work">
            <li className="text-lg cursor-pointer">Work</li>
          </Link>
          <Link href="#blog">
            <li className="text-lg cursor-pointer">Blog</li>
          </Link>
        </ul>
        <span>Logo</span>
      </div>
    </nav>
  );
};

export default Navbar;
