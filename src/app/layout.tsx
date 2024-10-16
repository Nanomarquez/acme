"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AcmeSVG } from "@/icons/acme";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "@/lib/constants";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { usePathname, useSearchParams , useRouter} from "next/navigation";
import { Button } from "@/components/ui/button";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();

  const pathname = usePathname();

  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex-none h-auto left-0 fixed top-0 w-full z-[99]">
          <nav className="backdrop-blur-md bg-[rgba(0,0,0,0.73)] w-full opacity-100 items-center flex flex-row flex-nowrap gap-[20px] h-[64px] justify-center overflow-visible p-[20px] relative">
            <div className="items-center flex flex-1 flex-row flex-nowrap h-min justify-between max-w-[1400px] overflow-visible p-0 relative w-full">
              <div className="items-center flex flex-none flex-row flex-nowrap gap-[28px] h-min justify-center overflow-visible p-0 relative w-min">
                <AcmeSVG />
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
                              <div
                                key={index}
                                className="p-4 hover:bg-[rgba(255,255,255,0.1)] rounded-lg transition-colors duration-300 cursor-pointer"
                              >
                                <h3 className="text-white text-lg font-semibold mb-2">
                                  {item.title}
                                </h3>
                                <p className="text-[rgb(105,105,105)] text-sm">
                                  {item.description}
                                </p>
                              </div>
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
                    defaultValue={searchParams.get("search")?.toString()}
                    onChange={(event) => handleSearch(event.target.value)}
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
      </body>
    </html>
  );
}
