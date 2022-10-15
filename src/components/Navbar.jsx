import React from "react";
import { DocsIcon, GithubIcon, SigninIcon } from "../assets";

const navigationMenu = [
  {
    icon: GithubIcon,
    name: "Github",
  },
  {
    icon: DocsIcon,
    name: "Docs",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-[#171A21] text-[#E0ECFF] w-full px-2 py-1 text-sm fixed">
      <ul className="flex justify-end gap-5 md:gap-16">
        {navigationMenu.map((item) => (
          <li key={item.name}>
            <a
              className="flex gap-1 items-center justify-center hover:text-white hover:scale-95 duration-300"
              href="/"
            >
              <img src={item.icon} alt={item.name} className="p-1" />
              <span>{item.name}</span>
            </a>
          </li>
        ))}
        <li>
          <a
            className="flex gap-1 items-center justify-center border-l border-[#363A44] px-5 md:px-10 over:text-white hover:scale-95 duration-300"
            href="/"
          >
            <img src={SigninIcon} alt="signin" className="p-1" />
            <span>Sign In</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
