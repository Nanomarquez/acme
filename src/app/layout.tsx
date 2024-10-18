"use client";

import "./globals.css";

//ICONS
import { AcmeSVG } from "@/icons/acme";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "@/lib/constants";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Acme</title>
        <link rel="icon" href="/icon.ico" />
      </head>
      <body className={`antialiased bg-black`}>
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
              <div className="bg-[rgba(255,255,255,0.05)] rounded-[12px] opacity-100 items-center flex flex-none flex-row flex-nowrap h-[39px] justify-between overflow-visible p-[12px] relative w-[478px]">
                <div className="items-center flex flex-none flex-row flex-nowrap gap-[12px] h-min justify-start overflow-visible p-0 relative w-[80%]">
                  <CiSearch className="h-[16px] w-[16px] flex-shrink-0 stroke-[rgb(138,138,138)] stroke-1" />
                  <input
                    type="text"
                    className="flex flex-col justify-end flex-shrink-0 w-full transform-none bg-transparent outline-none text-[13px] font-[700] tracking-[-0.01em] leading-[2em] text-left text-[rgb(105,105,105)] placeholder:text-[rgb(105,105,105)]"
                    placeholder="Search address, symbol or name"
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
        {children}
        <footer className="flex-none h-auto max-w-[1080px] relative w-full mx-auto mt-[22px]">
          <div className="flex items-center flex-col flex-nowrap gap-[44px] min-h justify-center overflow-hidden pt-[54px] pb-[24px] relative">
            <div className="h-1 border-b border-[rgb(36,36,36)] w-full"></div>
            <AcmeSVG className="w-[74px] h-[35px]" />
            <div className="flex px-[30px] gap-[56px]">
              <div className="flex flex-col gap-[8px]">
                <h2 className="text-center text-white">Links</h2>
                <div className="flex gap-[16px] text-white">
                  <p className="text-center font-thin text-sm">Link</p>
                  <p className="text-center font-thin text-sm">Link</p>
                  <p className="text-center font-thin text-sm">Link</p>
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <h2 className="text-center text-white">Socials</h2>
                <div className="flex gap-[16px] text-white">
                  <p className="text-center font-thin text-sm">Link</p>
                  <p className="text-center font-thin text-sm">Link</p>
                  <p className="text-center font-thin text-sm">Link</p>
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <h2 className="text-center text-white">Legal</h2>
                <div className="flex gap-[16px] text-white">
                  <p className="text-center font-thin text-sm">Link</p>
                  <p className="text-center font-thin text-sm">Link</p>
                  <p className="text-center font-thin text-sm">Link</p>
                </div>
              </div>
            </div>

            <p className="text-[rgb(105,105,105)] text-sm">
              All rights reserved &copy; Acme
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
