"use client";
import React, { useState } from "react";
import Item from "@/assets/item.jpg";
import { FaRegEye } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { IoIosArrowForward, IoMdShare } from "react-icons/io";
import { LuRefreshCcw } from "react-icons/lu";
import { HiCheckBadge } from "react-icons/hi2";
import Divider from "@/components/Divider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ZoomImage from "@/components/ZoomImage";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  buttons,
  charts,
  gamesList,
  holders,
  itemsList,
} from "@/lib/constants";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

function ItemPage({ params }: { params: { id: string } }) {
  const [activeButton, setActiveButton] = useState<{
    id: number;
    label: string;
  }>(buttons[0]);
  return (
    <main className="min-h-screen w-auto items-center flex flex-col flex-nowrap h-min justify-start overflow-visible pt-[67px] pb-0 pl-0 pr-0 relative">
      <div className="flex items-center flex-none flex-col flex-nowrap gap-[20px] h-min justify-start max-w-[1440px] overflow-visible relative w-full px-[24px] pt-[32px]">
        <div className="flex items-start flex-none flex-col flex-nowrap gap-[33px] h-min justify-start max-w-[1000px] overflow-visible relative w-full">
          <div className="flex items-center gap-[12px] h-min justify-start max-w-[1000px] overflow-visible relative py-2 w-full text-[rgb(105,105,105)]">
            <Link href="/collections" className=" text-[14px] leading-[1.2em]">
              Collections
            </Link>
            /{" "}
            <Link
              href={`/collections/1`}
              className=" text-[14px] leading-[1.2em]"
            >
              Collection name
            </Link>
            /{" "}
            <span className="text-white text-[14px] leading-[1.2em]">
              Item name
            </span>
          </div>
          <div className="flex gap-[43px] w-full text-white">
            <ZoomImage
              src={Item}
              className="w-[440px] h-[440px] rounded-3xl object-cover object-center"
            />
            <div className="flex flex-col justify-between w-full">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center text-[rgb(131,131,131)] text-sm font-bold">
                  <FaRegEye className="w-6 h-6 hover:scale-110 duration-100 cursor-pointer"></FaRegEye>
                  64
                  <span>|</span>
                  <FcLike className="w-6 h-6 hover:scale-110 duration-100 cursor-pointer"></FcLike>
                  100
                </div>
                <div className="flex gap-3 items-center text-[rgb(131,131,131)] text-sm font-bold">
                  Share
                  <IoMdShare className="w-6 h-6 hover:scale-110 duration-100 cursor-pointer"></IoMdShare>
                  <span>|</span>
                  Refresh
                  <LuRefreshCcw className="w-6 h-6 hover:scale-110 duration-100 cursor-pointer"></LuRefreshCcw>
                </div>
              </div>
              <Divider></Divider>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Link
                    href={`/collections/1`}
                    className="text-lg font-semibold"
                  >
                    Collection name
                  </Link>
                  <HiCheckBadge className="text-sky-400"></HiCheckBadge>
                </div>
                <span className="text-4xl font-bold">Item name</span>
              </div>
              <div className="flex gap-1">
                <div className="bg-[#1A1A1A] rounded-md p-2 flex w-full gap-3">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col text-sm justify-between">
                    <span className="text-[rgb(131,131,131)]">Creator</span>
                    <span className="underline">0xrdd2...293d</span>
                  </div>
                </div>
                <div className="bg-[#1A1A1A] rounded-md p-2 flex w-full">
                  <div className="flex flex-col text-sm justify-between">
                    <span className="text-[rgb(131,131,131)]">Last sale</span>
                    <span>0.54 ETH - 5m ago</span>
                  </div>
                </div>
              </div>
              <Divider></Divider>
              <div className="flex gap-2">
                <div className="bg-[#1A1A1A] rounded-md p-2 flex w-full shadow-personal">
                  <div className="flex flex-col text-sm justify-between gap-1">
                    <span className="text-[rgb(131,131,131)]">Floor price</span>
                    <p className="text-xl font-bold">
                      0.54 ETH{" "}
                      <span className="text-[rgb(131,131,131)] text-lg font-semibold">
                        ($1,271.16)
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bg-[#1A1A1A] rounded-md p-2 flex w-full">
                  <div className="flex flex-col text-sm justify-between gap-1">
                    <span className="text-[rgb(131,131,131)]">Highest bid</span>
                    <p className="text-xl font-bold">
                      0.54 ETH{" "}
                      <span className="text-[rgb(131,131,131)] text-lg font-semibold">
                        ($1,271.16)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="bg-white w-full py-5 text-black rounded-full text-sm flex items-center gap-1 hover:bg-white/70">
                  <span>Buy now for 0.54 ETH</span>
                  <IoIosArrowForward />
                </Button>
                <Button className="bg-[rgb(32,32,32)] shadow-inset w-full py-5 text-white rounded-full text-sm flex items-center gap-1 hover:bg-white/70">
                  <span>Place bid</span>
                </Button>
              </div>
            </div>
          </div>
          <Divider></Divider>
          <div className="flex justify-between w-full gap-4">
            <div className="w-full flex flex-col gap-2 text-white">
              <h2 className="font-semibold text-xl">Description</h2>
              <p className="font-light">
                This Elemint is your loyal companion in the roguelike dungeons
                of Rogue Nation. This unique in-game pet, which was released
                during the game’s Proteus phase, has the power to occasionally
                shield you in the heat of battle and ensures you look great
                while collecting loot. It is part of Moonlit Games second NFT
                collection.
              </p>
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-2 text-white">
                <h2 className="font-semibold text-xl">Properties</h2>
                <div className="flex gap-2">
                  <div className="bg-[#1A1A1A] rounded-md p-2 flex w-full">
                    <div className="flex flex-col justify-between">
                      <span className="text-[rgb(131,131,131)]">Eyes</span>
                      <span className="font-semibold flex items-center gap-2">
                        Right{" "}
                        <span className="bg-[#291331] rounded-2xl px-2 text-sm p-1 text-[rgba(202,52,255,0.91)]">
                          5%
                        </span>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#1A1A1A] rounded-md p-2 flex w-full">
                    <div className="flex flex-col justify-between">
                      <span className="text-[rgb(131,131,131)]">Eyes</span>
                      <span className="font-semibold flex items-center gap-2">
                        Right{" "}
                        <span className="bg-[#262626] rounded-2xl px-2 text-sm p-1 text-[rgb(168,168,168)]">
                          90%
                        </span>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#1A1A1A] rounded-md p-2 flex w-full">
                    <div className="flex flex-col justify-between">
                      <span className="text-[rgb(131,131,131)]">Eyes</span>
                      <span className="font-semibold flex items-center gap-2">
                        Right{" "}
                        <span className="bg-[#262626] rounded-2xl px-2 text-sm p-1 text-[rgb(168,168,168)]">
                          90%
                        </span>{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-[#1A1A1A] rounded-md p-2 flex w-full">
                    <div className="flex flex-col justify-between">
                      <span className="text-[rgb(131,131,131)]">Eyes</span>
                      <span className="font-semibold flex items-center gap-2">
                        Right{" "}
                        <span className="bg-[#132f31] rounded-2xl px-2 text-sm p-1 text-[rgba(52,242,255,0.91)]">
                          50%
                        </span>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#1A1A1A] rounded-md p-2 flex w-full">
                    <div className="flex flex-col justify-between">
                      <span className="text-[rgb(131,131,131)]">Eyes</span>
                      <span className="font-semibold flex items-center gap-2">
                        Right{" "}
                        <span className="bg-[#31121B] rounded-2xl px-2 text-sm p-1 text-[rgba(255,46,109,0.91)]">
                          0.1%
                        </span>{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-4 justify-between">
            <div className="w-full bg-[rgb(10,10,10)] h-[412px] p-3 rounded-lg relative flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <h2 className="text-white font-semibold text-xl">Sales</h2>
                  {activeButton.id === 1 || activeButton.id === 3 ? (
                    <span className="bg-[#e9316c] p-1 py-[2px] rounded-3xl text-black flex items-center gap-1">
                      <FaArrowTrendDown />
                      -%
                    </span>
                  ) : (
                    <span className="bg-green-500 p-1 py-[2px] rounded-3xl text-white flex items-center gap-1">
                      <FaArrowTrendUp />
                      -%
                    </span>
                  )}
                </div>
                <div className="flex gap-[10px] items-center">
                  {buttons.map((button) => (
                    <Button
                      onClick={() => setActiveButton(button)}
                      key={button.id}
                      className={`w-min p-1 px-2 h-min rounded-2xl ${
                        activeButton.id === button.id
                          ? "bg-[rgba(255,255,255,0.06)]"
                          : ""
                      }`}
                    >
                      {button.label}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={charts[activeButton.label as keyof typeof charts]}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        border: "none",
                      }}
                      itemStyle={{ color: "#fff" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke={
                        activeButton.id === 1 || activeButton.id === 3
                          ? "#e9316c"
                          : "#22C55E"
                      }
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-[rgb(105,105,105)] text-[12px] text-center">
                    #
                  </TableHead>
                  <TableHead className="text-white font-semibold text-xl">
                    Holders
                  </TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                {holders.map((game, index) => (
                  <TableRow key={game.id}>
                    <TableCell className="text-gray-400 text-center">
                      {game.id}
                    </TableCell>
                    <TableCell className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <span className="text-white font-semibold">
                        {game.name}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="bg-[#262626] p-1 text-[rgb(168,168,168)] text-xs rounded-md px-2">
                        {game.rank}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <section className="items-center flex flex-none flex-col flex-wrap gap-[20px] h-min justify-start max-w-[1440px] overflow-hidden pt-0 px-[30px] pb-[60px] relative w-full">
            <div className="flex items-center flex-none flex-row flex-nowrap h-min justify-between overflow-hidden p0 relative w-full">
              <h2 className="font-semibold text-white text-[28px] tracking-tight ">
                Items from same collection
              </h2>
              <Link href={"/items"}>
                <Button className="bg-transparent hover:bg-transparent hover:opacity-50 duration-75 transition-all text-[rgb(141,141,141)] flex items-center gap-2 cursor-pointer w-fit p-0">
                  View all
                  <IoIosArrowForward />
                </Button>
              </Link>
            </div>
            <Carousel className="w-full">
              <CarouselContent>
                {itemsList.map((item, i) => (
                  <CarouselItem
                    key={item.id}
                    className="md:basis-1/2 lg:basis-1/5"
                  >
                    <Link key={item.id} href={`/items/${item.id}`}>
                      <Card className="w-[220px] rounded-xl bg-[rgb(10,10,10)] text-white overflow-hidden border-0 hover:brightness-125 duration-300 cursor-pointer">
                        <div className="relative h-56">
                          <div className="w-full h-full relative">
                            <Image
                              src={item.image}
                              alt={item.name + " background"}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                          <div className="absolute top-4 left-4 bg-violet-700 text-xs px-1 py-[2px] rounded-2xl">
                            #{item.id}
                          </div>
                        </div>
                        <CardContent className="p-4 flex flex-col gap-1">
                          <div className="flex gap-1 items-center">
                            <Image
                              src={item.logo}
                              alt={item.name + " logo"}
                              width={25}
                              height={25}
                              className="rounded-full border border-[#ffffff1a]"
                            />
                            <p className="text-zinc-400 font-extralight text-xs">
                              {gamesList[i].name}
                            </p>
                          </div>
                          <h2 className="text-lg font-semibold">{item.name}</h2>
                          <div className="flex justify-between gap-2">
                            <div className="bg-zinc-900 p-2 rounded-md w-full">
                              <p className="text-sm text-gray-400">Buy now</p>
                              <p className="font-medium">{item.floor}</p>
                            </div>
                            <div className="bg-zinc-900 p-2 rounded-md w-full">
                              <p className="text-sm text-gray-400">Last sale</p>
                              <p className="font-medium">{item.volume}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section>
        </div>
      </div>
    </main>
  );
}

export default ItemPage;
