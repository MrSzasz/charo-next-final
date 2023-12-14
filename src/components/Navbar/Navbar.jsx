import Link from "next/link";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { BsChevronDown } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawer = () => {
    setOpenDrawer((current) => !current);
  };

  const openDropdown = (id) => {
    document.querySelector(`#${id}`).classList.toggle("hidden");
  };

  return (
    <nav className="relative flex justify-between items-center px-6 md:px-12 py-4">
      <Link
        href="/"
        className="text-xl md:text-2xl tracking-[0.2rem] text-[1.6rem]"
      >
        MERCEDES LLANOS
      </Link>
      <ul className="md:flex gap-6 py-4 hidden">
        <li className="hover:text-gray-500 transition-all">
          <Link href="/">Home</Link>
        </li>
        <li className="relative hover:text-gray-500 transition-all">
          <button
            onClick={() => openDropdown("dropdownWorks")}
            className="flex items-end gap-1"
          >
            Works <BsChevronDown />
          </button>
          <ul
            id="dropdownWorks"
            className="hidden absolute z-10 bg-white overflow-hidden top-[120%] flex flex-col gap-1 text-center rounded-lg border border-gray-500 text-black"
          >
            <li className="hover:bg-gray-200 h-10 w-16 flex items-center justify-center">
              <Link
                href="/work/2020"
                onClick={() => openDropdown("dropdownWorks")}
                className="w-full h-full grid content-center"
              >
                2020
              </Link>
            </li>
            <li className="hover:bg-gray-200 h-10 w-16 flex items-center justify-center">
              <Link
                href="/work/2021"
                onClick={() => openDropdown("dropdownWorks")}
                className="w-full h-full grid content-center"
              >
                2021
              </Link>
            </li>
            <li className="hover:bg-gray-200 h-10 w-16 flex items-center justify-center">
              <Link
                href="/work/2022"
                onClick={() => openDropdown("dropdownWorks")}
                className="w-full h-full grid content-center"
              >
                2022
              </Link>
            </li>
            <li className="hover:bg-gray-200 h-10 w-16 flex items-center justify-center">
              <Link
                href="/work/2023"
                onClick={() => openDropdown("dropdownWorks")}
                className="w-full h-full grid content-center"
              >
                2023
              </Link>
            </li>
          </ul>
        </li>
        <li className="relative hover:text-gray-500 transition-all">
          <button
            onClick={() => openDropdown("dropdownExhibitions")}
            className="flex items-end gap-1"
          >
            Exhibitions <BsChevronDown />
          </button>
          <ul
            id="dropdownExhibitions"
            className="hidden absolute z-10 bg-white overflow-hidden top-[120%] flex flex-col gap-1 text-center rounded-lg border border-gray-500 text-black"
          >
            <li className="hover:bg-gray-200 h-10 w-16 flex items-center justify-center">
              <Link
                href="/exhibitions/2020"
                onClick={() => openDropdown("dropdownExhibitions")}
                className="w-full h-full grid content-center"
              >
                2020
              </Link>
            </li>
            <li className="hover:bg-gray-200 h-10 w-16 flex items-center justify-center">
              <Link
                href="/exhibitions/2021"
                onClick={() => openDropdown("dropdownExhibitions")}
                className="w-full h-full grid content-center"
              >
                2021
              </Link>
            </li>
            <li className="hover:bg-gray-200 h-10 w-16 flex items-center justify-center">
              <Link
                href="/exhibitions/2022"
                onClick={() => openDropdown("dropdownExhibitions")}
                className="w-full h-full grid content-center"
              >
                2022
              </Link>
            </li>
            <li className="hover:bg-gray-200 h-10 w-16 flex items-center justify-center">
              <Link
                href="/exhibitions/2023"
                onClick={() => openDropdown("dropdownExhibitions")}
                className="w-full h-full grid content-center"
              >
                2023
              </Link>
            </li>
          </ul>
        </li>
        <li className="hover:text-gray-500 transition-all">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-gray-500 transition-all">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <button className="md:hidden" onClick={handleDrawer}>
        <CgMenuRight size="1.5em" />
      </button>
      {openDrawer && (
        <div className="bg-white w-screen h-screen fixed inset-0 z-10">
          <button className="absolute right-4 top-4" onClick={handleDrawer}>
            <IoMdClose size="2em" />
          </button>
          <ul className="flex flex-col justify-center items-center h-full text-3xl gap-16 py-4 md:hidden overflow-y-auto">
            <li className="hover:text-gray-500 transition-all">
              <Link href="/">Home</Link>
            </li>
            <div className="hover:text-gray-500 transition-all">
              <button
                href="/work/2022"
                className="flex items-end gap-1"
                onClick={() => openDropdown("dropdownWorksDrawer")}
              >
                Works <BsChevronDown />
              </button>
              <ul
                id="dropdownWorksDrawer"
                className="hidden z-10 bg-white overflow-hidden top-[120%] flex flex-col gap-2 text-center rounded-lg border border-gray-500 text-black"
              >
                <li
                  onClick={() => {
                    openDropdown("dropdownWorksDrawer");
                    handleDrawer();
                  }}
                >
                  <Link
                    className="w-full h-full py-2 grid content-center"
                    href="/work/2020"
                  >
                    2020
                  </Link>
                </li>
                <li
                  onClick={() => {
                    openDropdown("dropdownWorksDrawer");
                    handleDrawer();
                  }}
                >
                  <Link
                    className="w-full h-full py-2 grid content-center"
                    href="/work/2021"
                  >
                    2021
                  </Link>
                </li>
                <li
                  onClick={() => {
                    openDropdown("dropdownWorksDrawer");
                    handleDrawer();
                  }}
                >
                  <Link
                    className="w-full h-full py-2 grid content-center"
                    href="/work/2022"
                  >
                    2022
                  </Link>
                </li>
                <li
                  onClick={() => {
                    openDropdown("dropdownWorksDrawer");
                    handleDrawer();
                  }}
                >
                  <Link
                    className="w-full h-full py-2 grid content-center"
                    href="/work/2023"
                  >
                    2023
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hover:text-gray-500 transition-all">
              <button
                href="/exhibitions/2022"
                className="flex items-end gap-1"
                onClick={() => openDropdown("dropdownExhibitionsDrawer")}
              >
                Exhibitions <BsChevronDown />
              </button>
              <ul
                id="dropdownExhibitionsDrawer"
                className="hidden z-10 bg-white overflow-hidden top-[120%] flex flex-col gap-2 text-center rounded-lg border border-gray-500 text-black"
              >
                <li
                  onClick={() => {
                    openDropdown("dropdownExhibitionsDrawer");
                    handleDrawer();
                  }}
                >
                  <Link
                    className="w-full h-full py-2 grid content-center"
                    href="/exhibitions/2020"
                  >
                    2020
                  </Link>
                </li>
                <li
                  onClick={() => {
                    openDropdown("dropdownExhibitionsDrawer");
                    handleDrawer();
                  }}
                >
                  <Link
                    className="w-full h-full py-2 grid content-center"
                    href="/exhibitions/2021"
                  >
                    2021
                  </Link>
                </li>
                <li
                  onClick={() => {
                    openDropdown("dropdownExhibitionsDrawer");
                    handleDrawer();
                  }}
                >
                  <Link
                    className="w-full h-full py-2 grid content-center"
                    href="/exhibitions/2022"
                  >
                    2022
                  </Link>
                </li>
                <li
                  onClick={() => {
                    openDropdown("dropdownExhibitionsDrawer");
                    handleDrawer();
                  }}
                >
                  <Link
                    className="w-full h-full py-2 grid content-center"
                    href="/exhibitions/2023"
                  >
                    2023
                  </Link>
                </li>
              </ul>
            </div>
            <li className="hover:text-gray-500 transition-all">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-gray-500 transition-all">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
