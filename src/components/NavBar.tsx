"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

//ICONS
import { AcmeSVG } from "@/icons/acme";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Hamburger from "hamburger-react";

//COMPONENTS
import { menuItems } from "@/lib/constants";
import { Button } from "./ui/button";
import { useDeviceType } from "@/hooks/useDeviceType";

function NavBar() {
  const device = useDeviceType();
  console.log(device);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenH, setOpenH] = useState(false);
  const [isOpenS, setOpenS] = useState(false);

  return device === "mobile" ? (
    <header className="flex-none h-auto left-0 fixed top-0 w-full z-[99]">
      <nav className="backdrop-blur-md bg-[rgba(0,0,0,0.73)] w-full opacity-100 items-center flex flex-row flex-nowrap gap-[20px] h-[64px] justify-center overflow-visible p-[20px] relative">
        <div className="items-center flex flex-1 flex-row flex-nowrap h-min justify-between max-w-[1400px] overflow-visible p-0 relative w-full">
          <div className="items-center flex flex-none flex-row flex-nowrap gap-[28px] h-min justify-between overflow-visible p-0 relative w-full">
            <Link href="/">
              <AcmeSVG />
            </Link>
            <div className="flex items-center gap-2">
              <CiSearch
                onClick={() => setOpenS(true)}
                className="text-white text-2xl stroke-1"
              />
              <Hamburger
                color="white"
                size={24}
                toggled={isOpenH}
                toggle={setOpenH}
              />
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`backdrop-blur-lg flex justify-center items-center bg-white/10 h-[64px] w-screen duration-300 fixed ${
          isOpenS ? "top-0" : "-top-[64px]"
        }`}
      >
        <div className="flex items-center w-full mx-5 gap-2">
          <IoIosArrowForward
            className="text-xl text-white rotate-180"
            onClick={() => setOpenS(false)}
          />
          <input
            type="text"
            className="p-2 bg-white/10 rounded-md outline-none w-full text-white"
            placeholder="Search"
          />
          <CiSearch
            onClick={() => setOpenS(false)}
            className="text-white text-2xl stroke-1"
          />
        </div>
      </div>
      <div
        className={`backdrop-blur-md flex justify-center items-center bg-white/10 h-[calc(100vh-64px)] w-screen duration-300 fixed ${
          isOpenH ? "right-0" : "-right-[100%]"
        }`}
      >
        <ul className="flex justify-around flex-col h-[80%] text-white/70 text-2xl font-semibold text-center">
          <Link href="/collections" onClick={() => setOpenH(false)}>
            Collections
          </Link>
          <Link href="/items" onClick={() => setOpenH(false)}>
            Items
          </Link>
          <Link href="/games" onClick={() => setOpenH(false)}>
            Games
          </Link>
          <Link href="/lootboxes" onClick={() => setOpenH(false)}>
            Lootboxes
          </Link>
          <li onClick={() => setOpenH(false)}>Create</li>
          <li onClick={() => setOpenH(false)}>Community</li>
          <Button
            onClick={() => setOpenH(false)}
            className="bg-white h-[37px] text-black rounded-full text-sm flex items-center gap-1 hover:bg-white/70"
          >
            <span>Connect wallet</span> <IoIosArrowForward />
          </Button>
        </ul>
      </div>
    </header>
  ) : (
    <header className="flex-none h-auto left-0 fixed top-0 w-full z-[99]">
      <nav className="backdrop-blur-md bg-[rgba(0,0,0,0.73)] w-full opacity-100 items-center flex flex-row flex-nowrap gap-[20px] h-[64px] justify-center overflow-visible p-[20px] relative">
        <div className="items-center flex flex-1 flex-row flex-nowrap h-min justify-between max-w-[1400px] overflow-visible p-0 relative w-full">
          <div className="items-center flex flex-none flex-row flex-nowrap gap-[28px] h-min justify-center overflow-visible p-0 relative w-min">
            <Link href="/">
              <AcmeSVG />
            </Link>
            <div className="items-center flex flex-none flex-row flex-nowrap gap-[28px] h-min justify-center overflow-visible p-0 relative w-min">
              <div
                className="relative"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <p className="text-[13px] font-[500] tracking-[-0.01em] leading-[2em] text-left text-[rgb(105,105,105)] flex items-center gap-2 group hover:text-white duration-300 cursor-pointer">
                  <span>Marketplace</span>
                  <IoIosArrowDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </p>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full w-[600px] bg-[rgba(18,18,18,0.95)] rounded-lg shadow-lg overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-4 p-6">
                        {menuItems.map((item, index) => (
                          <Link
                            href={item.href}
                            key={index}
                            className="p-4 hover:bg-[rgba(255,255,255,0.1)] rounded-lg transition-colors duration-300 cursor-pointer"
                          >
                            <h3 className="text-white text-lg font-semibold mb-2">
                              {item.title}
                            </h3>
                            <p className="text-[rgb(105,105,105)] text-sm">
                              {item.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <p className="text-[13px] font-[500] tracking-[-0.01em] leading-[2em] text-left text-[rgb(105,105,105)] hover:text-white duration-300 cursor-pointer">
                Create
              </p>
              <p className="text-[13px] font-[500] tracking-[-0.01em] leading-[2em] text-left text-[rgb(105,105,105)] hover:text-white duration-300 cursor-pointer">
                Community
              </p>
            </div>
          </div>
          <div
            className={`bg-[rgba(255,255,255,0.05)] rounded-[12px] opacity-100 items-center flex flex-none flex-row flex-nowrap h-[39px] justify-between overflow-visible p-[12px] relative w-[${
              device === "tablet" ? "200" : "478"
            }px]`}
          >
            <div className="items-center flex flex-none flex-row flex-nowrap gap-[12px] h-min justify-start overflow-visible p-0 relative w-[80%]">
              <CiSearch className="h-[16px] w-[16px] flex-shrink-0 stroke-[rgb(138,138,138)] stroke-1" />
              <input
                type="text"
                className="flex flex-col justify-end flex-shrink-0 w-full pr-6 transform-none bg-transparent outline-none text-[13px] font-[700] tracking-[-0.01em] leading-[2em] text-left text-[rgb(105,105,105)] placeholder:text-[rgb(105,105,105)]"
                placeholder={
                  device === "tablet"
                    ? "Search"
                    : "Search address, symbol or name"
                }
              />
            </div>
            <div
              className="bg-[rgba(255,255,255,0.1)] rounded-[3.33px] opacity-100 items-center flex flex-none flex-row flex-nowrap gap-[11px] h-[20px] justify-center overflow-hidden p-[11.111113548278809px] relative w-[20px] text-[rgb(138,138,138)] text-sm"
              style={{
                boxShadow:
                  "rgba(255,255,255,0.08) 0px 1.11111px 0.444444px 0px inset, rgba(0,0,0,0.19) 0px 0px 0px 2.22222px",
              }}
            >
              /
            </div>
          </div>
          <div>
            <Button className="bg-white h-[37px] text-black rounded-full text-sm flex items-center gap-1 hover:bg-white/70">
              <span>Connect wallet</span> <IoIosArrowForward />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
