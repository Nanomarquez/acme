"use client";

import { useState } from "react";

//ICONS
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoOpenOutline } from "react-icons/io5";
import { AcmeSVG, GlobalSVG } from "@/icons/acme";
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";

//COMPONENTS
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

//ASSETS
import HeroImg_1 from "@/assets/heroimg-1.jpg";
import HeroImg_2 from "@/assets/heroimg-2.jpg";
import HeroAvatar from "@/assets/heroavatar.jpg";
import Azuki from "@/assets/azuki.jpg";
import Game from "@/assets/game.jpg";
import Item from "@/assets/item.jpg";
import Image from "next/image";

//FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { buttons, games, menuItems } from "@/lib/constants";

export default function Component() {
  const [activeTab, setActiveTab] = useState("trending");

  const [activeButton, setActiveButton] = useState(1);

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
    <div className="bg-black">
      <main className="min-h-screen w-auto items-center flex flex-col flex-nowrap gap-[22px] h-min justify-start overflow-visible pt-[67px] pb-0 pl-0 pr-0 relative">
        {/* Hero Section */}
        <section className="items-center flex flex-none flex-col flex-wrap gap-[20px] h-min justify-start max-w-[1440px] overflow-hidden pt-[20px] px-[30px] pb-[60px] relative w-full">
          <div className="flex gap-[10px] justify-center relative w-full">
            <Card className="w-full h-[275px] p-[24px] relative overflow-hidden rounded-3xl border-none bg-transparent">
              <Image
                src={HeroImg_1}
                alt="heroimg-1"
                height={1000}
                width={1000}
                className="w-full h-full absolute object-cover top-0 left-0 z-0"
              />
              <CardContent className="relative z-20 p-0 h-full justify-between flex flex-col">
                <div className="w-[55px] h-[55px] bg-white rounded-2xl flex justify-center items-center overflow-hidden">
                  <p className="text-[28px] font-extrabold">store</p>
                </div>
                <h2 className="font-[600] text-white text-[34px] tracking-tighter leading-[1.2em] text-start">
                  The NFT marketplace for your <br /> Web3 game.
                </h2>
                <p className="text-[rgb(141,141,141)] flex items-center text-[14px] gap-2 cursor-pointer hover:opacity-70 duration-300 w-fit">
                  <span>Start creating</span>{" "}
                  <IoIosArrowForward className="group-hover:-rotate-180 duration-300" />
                </p>
              </CardContent>
            </Card>
            <Card className="w-full h-[275px] p-[24px] relative overflow-hidden border-none bg-transparent">
              <Image
                src={HeroImg_2}
                alt="heroimg-2"
                height={1000}
                width={1000}
                className="w-full h-full absolute object-cover top-0 left-0"
              ></Image>
              <CardContent className="p-0 relative h-full justify-between flex flex-col">
                <div className="flex justify-between items-center h-min">
                  <div className="backdrop-blur-[2px] bg-[#ffffff1a] rounded-[27px] h-min w-min py-[8px] px-[12px] flex">
                    <p className="font-[500] text-[rgba(255,255,255,0.49)] text-[14px] tracking-[-0.04em] leading-[110%]">
                      Spotlight
                    </p>
                  </div>
                  <div className="flex items-center text-[rgb(141,141,141)] text-[14px] font-[500] cursor-pointer hover:opacity-60 duration-300 gap-1">
                    <span>Website</span>
                    <IoOpenOutline className="text-white" />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col gap-[21px] flex-1">
                    <Image
                      src={HeroAvatar}
                      alt="heroimg-1"
                      height={1000}
                      width={1000}
                      className="object-cover w-[63px] rounded-lg border border-[#ffffff1a]"
                    />
                    <p className="font-[600] text-white text-[28px] tracking-[-0.01em] leading-[100%]">
                      Clash of Clans
                    </p>
                    <div className="flex gap-[7px]">
                      <div className="backdrop-blur-[2px] bg-[#ffffff1a] rounded-[27px] h-min w-min p-[7px] flex">
                        <p className="font-[500] text-[rgba(255,255,255,0.49)] text-[12px] tracking-[-0.04em] leading-[110%]">
                          Adventure
                        </p>
                      </div>
                      <div className="backdrop-blur-[2px] bg-[#ffffff1a] rounded-[27px] h-min w-min p-[7px] flex">
                        <p className="font-[500] text-[rgba(255,255,255,0.49)] text-[12px] tracking-[-0.04em] leading-[110%]">
                          MMO
                        </p>
                      </div>
                      <div className="backdrop-blur-[2px] bg-[#ffffff1a] rounded-[27px] h-min w-min p-[7px] flex">
                        <p className="font-[500] text-[rgba(255,255,255,0.49)] text-[12px] tracking-[-0.04em] leading-[110%]">
                          Fun
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[257px] flex gap-[6px] h-min mt-auto items-center">
                    <div className="backdrop-blur-[23.200000762939453px] bg-[#00000038] rounded-[6px] flex gap-[26px] py-[8px] px-[9px] flex-none">
                      <p className="font-[400] text-[rgba(255,255,255,0.46)] text-[13px] tracking-[-0.02em] h-min">
                        Floor
                      </p>
                      <p className="text-white font-[600] text-[14px] tracking-[-0.02em] leading-[20px] text-nowrap h-min">
                        0.25 ETH
                      </p>
                    </div>
                    <div className="backdrop-blur-[23.200000762939453px] bg-[#00000038] rounded-[6px] flex justify-between py-[8px] px-[9px] flex-1">
                      <p className="font-[400] text-[rgba(255,255,255,0.46)] text-[13px] tracking-[-0.02em] h-min">
                        Price
                      </p>
                      <p className="text-white font-[600] text-[14px] tracking-[-0.02em] leading-[20px] text-nowrap h-min">
                        Free
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Play Now</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Trending Section */}
        <section className="items-center flex flex-none flex-col flex-wrap gap-[20px] h-min justify-start max-w-[1440px] overflow-hidden pt-0 px-[30px] pb-[60px] relative w-full">
          <div className="flex items-center flex-none flex-row flex-nowrap h-min justify-between overflow-hidden p0 relative w-full">
            <div className="flex items-center flex-row gap-[15px] h-min justify-center overflow-visible p-0 relative w-min">
              <GlobalSVG className="w-[60px] h-[60px]" />
              <h3
                onClick={() => setActiveTab("trending")}
                className={`${
                  activeTab === "trending"
                    ? "text-white"
                    : "text-[rgb(156,156,156)]"
                }  text-[34px] font-semibold tracking-tighter leading-[1.2em] text-nowrap cursor-pointer hover:opacity-70 duration-300`}
              >
                Trending
              </h3>
              <h3
                onClick={() => setActiveTab("mostPlayed")}
                className={`${
                  activeTab !== "trending"
                    ? "text-white"
                    : "text-[rgb(156,156,156)]"
                }  text-[34px] font-semibold tracking-tighter leading-[1.2em] text-nowrap cursor-pointer hover:opacity-70 duration-300`}
              >
                Most played
              </h3>
            </div>
            <Button className="bg-transparent hover:bg-transparent hover:opacity-50 duration-500 transition-all text-[rgb(141,141,141)] flex items-center gap-2 cursor-pointer w-fit p-0">
              <span>View all</span>
              <IoIosArrowForward />
            </Button>
          </div>
          <Carousel className="w-full">
            <CarouselContent>
              {[...Array(15)].map((_, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/5">
                  <Card className="w-[281px] rounded-xl bg-[rgb(10,10,10)] text-white overflow-hidden border-0 opacity-80 transition-opacity duration-300 hover:opacity-100 cursor-pointer">
                    <div className="relative h-32">
                      <div className="w-full h-full relative">
                        <Image
                          src={Game}
                          alt="Game background"
                          layout="fill"
                          objectFit="cover"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgb(10,10,10)] to-transparent"></div>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <Image
                          src={Azuki}
                          alt="Azuki logo"
                          width={60}
                          height={60}
                          className="rounded-lg border border-[#ffffff1a]"
                        />
                      </div>
                    </div>
                    <CardContent className="p-4 flex flex-col gap-1">
                      <div className="flex gap-2 items-center">
                        <h2 className="text-lg font-semibold">Game name</h2>
                        <FaWindows className="text-gray-500"></FaWindows>
                        <FaApple className="text-gray-500"></FaApple>
                      </div>
                      <div className="flex justify-between mb-4 gap-2">
                        <div className="bg-zinc-900 p-2 rounded-md w-full">
                          <p className="text-sm text-gray-400">Floor</p>
                          <p className="font-medium">0.25 ETH</p>
                        </div>
                        <div className="bg-zinc-900 p-2 rounded-md w-full">
                          <p className="text-sm text-gray-400">Volume</p>
                          <p className="font-medium">$25.5M</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge
                          variant="secondary"
                          className="bg-zinc-800 text-gray-400 p-1"
                        >
                          Adventure
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-zinc-800 text-gray-400 p-1"
                        >
                          MMO
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-zinc-800 text-gray-400 p-1"
                        >
                          Fun
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* New Games Section */}
        <section className="items-center flex flex-none flex-col flex-wrap gap-[20px] h-min justify-start max-w-[1440px] overflow-hidden pt-0 px-[30px] pb-[60px] relative w-full">
          <div className="flex justify-between items-center w-full">
            <h2 className="font-semibold text-white text-[28px] tracking-tight ">
              New games
            </h2>
            <div className="flex gap-[10px] items-center">
              {buttons.map((button) => (
                <Button
                  onClick={() => setActiveButton(button.id)}
                  key={button.id}
                  className={`w-min p-1 px-2 h-min rounded-2xl ${
                    activeButton === button.id
                      ? "bg-[rgba(255,255,255,0.06)]"
                      : ""
                  }`}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex items-center flex-none flex-row flex-nowrap h-min justify-center overflow-hidden p-0 relative w-full gap-[10px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-[rgb(105,105,105)] text-[12px] text-center">
                    #
                  </TableHead>
                  <TableHead className="text-[rgb(105,105,105)] text-[12px]">
                    Game
                  </TableHead>
                  <TableHead className="text-[rgb(105,105,105)] text-[12px]">
                    Floor
                  </TableHead>
                  <TableHead className="text-[rgb(105,105,105)] text-[12px]">
                    Volume
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {games.map((game, index) => (
                  <TableRow key={game.id}>
                    <TableCell className="text-gray-400 text-center">
                      {game.id}
                    </TableCell>
                    <TableCell className="flex items-center space-x-2">
                      <Image
                        src={game.image}
                        alt="heroimg-1"
                        height={1000}
                        width={1000}
                        className="object-cover w-[42px] h-[42px] rounded-lg border border-[#ffffff1a]"
                      />
                      <span className="text-white">{game.name}</span>
                    </TableCell>
                    <TableCell className="text-white">{game.floor}</TableCell>
                    <TableCell>
                      <span className="text-white">{game.volume}</span>{" "}
                      <span className="text-green-500">{game.percentage}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-[rgb(105,105,105)] text-[12px] text-center">
                    #
                  </TableHead>
                  <TableHead className="text-[rgb(105,105,105)] text-[12px]">
                    Game
                  </TableHead>
                  <TableHead className="text-[rgb(105,105,105)] text-[12px]">
                    Floor
                  </TableHead>
                  <TableHead className="text-[rgb(105,105,105)] text-[12px]">
                    Volume
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {games.map((game, index) => (
                  <TableRow key={game.id}>
                    <TableCell className="text-gray-400 text-center">
                      {game.id}
                    </TableCell>
                    <TableCell className="flex items-center space-x-2">
                      <Image
                        src={game.image}
                        alt="heroimg-1"
                        height={1000}
                        width={1000}
                        className="object-cover w-[42px] h-[42px] rounded-lg border border-[#ffffff1a]"
                      />
                      <span className="text-white">{game.name}</span>
                    </TableCell>
                    <TableCell className="text-white">{game.floor}</TableCell>
                    <TableCell>
                      <span className="text-white">{game.volume}</span>{" "}
                      <span className="text-green-500">{game.percentage}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Top Collections Section */}
        <section className="items-center flex flex-none flex-col flex-wrap gap-[20px] h-min justify-start max-w-[1440px] overflow-hidden pt-0 px-[30px] pb-[60px] relative w-full">
          <div className="flex items-center flex-none flex-row flex-nowrap h-min justify-between overflow-hidden p0 relative w-full">
            <h2 className="font-semibold text-white text-[28px] tracking-tight ">
              Top collections
            </h2>
            <Button className="bg-transparent hover:bg-transparent hover:opacity-50 duration-500 transition-all text-[rgb(141,141,141)] flex items-center gap-2 cursor-pointer w-fit p-0">
              <span>View all</span>
              <IoIosArrowForward />
            </Button>
          </div>
          <Carousel className="w-full">
            <CarouselContent>
              {[...Array(15)].map((_, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/5">
                  <Card className="w-[450px] bg-[rgb(10,10,10)] text-white overflow-hidden border-0 opacity-80 transition-opacity duration-300 hover:opacity-100 cursor-pointer">
                    <div className="relative h-80">
                      <Image
                        src={Game}
                        alt="Game background"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <CardContent className="p-4 flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-semibold">
                          Collection name
                        </h2>
                        <HiCheckBadge className="text-sky-400"></HiCheckBadge>
                      </div>
                      <div className="flex justify-between gap-2">
                        <div className="bg-zinc-900 p-2 rounded-md w-full">
                          <p className="text-sm text-gray-400">Floor</p>
                          <p className="font-medium">0.25 ETH</p>
                        </div>
                        <div className="bg-zinc-900 p-2 rounded-md w-full">
                          <p className="text-sm text-gray-400">Volume</p>
                          <p className="font-medium">$25.5M</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Top Items Section */}
        <section className="items-center flex flex-none flex-col flex-wrap gap-[20px] h-min justify-start max-w-[1440px] overflow-hidden pt-0 px-[30px] pb-[60px] relative w-full">
          <div className="flex items-center flex-none flex-row flex-nowrap h-min justify-between overflow-hidden p0 relative w-full">
            <h2 className="font-semibold text-white text-[28px] tracking-tight ">
              Top items
            </h2>
            <Button className="bg-transparent hover:bg-transparent hover:opacity-50 duration-500 transition-all text-[rgb(141,141,141)] flex items-center gap-2 cursor-pointer w-fit p-0">
              <span>View all</span>
              <IoIosArrowForward />
            </Button>
          </div>
          <Carousel className="w-full">
            <CarouselContent>
              {[...Array(15)].map((_, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/5">
                  <Card className="w-[330px] rounded-xl bg-[rgb(10,10,10)] text-white overflow-hidden border-0 opacity-80 transition-opacity duration-300 hover:opacity-100 cursor-pointer">
                    <div className="relative h-80">
                      <div className="w-full h-full relative">
                        <Image
                          src={Item}
                          alt="Game background"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="absolute top-4 left-4 bg-violet-700 text-xs px-1 py-[2px] rounded-2xl">
                        #54
                      </div>
                    </div>
                    <CardContent className="p-4 flex flex-col gap-1">
                      <div className="flex gap-1 items-center">
                        <Image
                          src={Azuki}
                          alt="Azuki logo"
                          width={25}
                          height={25}
                          className="rounded-full border border-[#ffffff1a]"
                        />
                        <p className="text-zinc-400 font-extralight text-xs">
                          Game Name
                        </p>
                      </div>
                      <h2 className="text-lg font-semibold">Item name</h2>
                      <div className="flex justify-between gap-2">
                        <div className="bg-zinc-900 p-2 rounded-md w-full">
                          <p className="text-sm text-gray-400">Floor</p>
                          <p className="font-medium">0.25 ETH</p>
                        </div>
                        <div className="bg-zinc-900 p-2 rounded-md w-full">
                          <p className="text-sm text-gray-400">Volume</p>
                          <p className="font-medium">$25.5M</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </main>

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
    </div>
  );
}
