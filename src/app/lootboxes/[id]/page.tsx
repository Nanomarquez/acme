"use client";
import React, { useState } from "react";
import Loot from "@/assets/loot.jpg";
import Key from "@/assets/key.jpg";
import { FaRegEye } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { IoIosArrowForward, IoMdShare } from "react-icons/io";
import { LuRefreshCcw } from "react-icons/lu";
import { HiCheckBadge } from "react-icons/hi2";
import Divider from "@/components/Divider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ZoomImage from "@/components/ZoomImage";
import { buttons, gamesList, itemsList } from "@/lib/constants";
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

function LootboxPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen w-auto items-center flex flex-col flex-nowrap h-min justify-start overflow-visible pt-[67px] pb-0 pl-0 pr-0 relative">
      <div className="flex items-center flex-none flex-col flex-nowrap gap-[20px] h-min justify-start max-w-[1440px] overflow-visible relative w-full px-[24px] pt-[32px]">
        <div className="flex items-start flex-none flex-col flex-nowrap gap-[33px] h-min justify-start max-w-[1000px] overflow-visible relative w-full">
          <div className="flex items-center gap-[12px] h-min justify-start max-w-[1000px] overflow-visible relative py-2 w-full text-[rgb(105,105,105)]">
            <Link href="/lootboxes" className=" text-[14px] leading-[1.2em]">
              Loot boxes
            </Link>
            /{" "}
            <span className="text-white text-[14px] leading-[1.2em]">
              Lootbox name
            </span>
          </div>
          <div className="flex gap-[43px] w-full text-white flex-col md:flex-row">
            <ZoomImage
              src={Loot}
              className="w-[440px] h-[440px] rounded-3xl object-cover object-center"
            />
            <div className="flex flex-col justify-between w-full gap-4 md:gap-0">
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
                  <h2 className="text-lg font-semibold">Game name</h2>
                  <HiCheckBadge className="text-sky-400"></HiCheckBadge>
                </div>
                <span className="text-4xl font-bold">Lootbox name</span>
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
              <div className="flex gap-3 flex-col">
                <span className="text-[rgb(131,131,131)] text-sm font-bold">
                  Can be opened with
                </span>
                <div className="bg-[#1A1A1A] rounded-md p-2 flex w-full">
                  <div className="flex items-center gap-2">
                    <Image
                      src={Key}
                      alt="key"
                      height={500}
                      width={500}
                      className="rounded-md w-12 h-12 border border-[#333333]"
                    ></Image>
                    <div className="flex flex-col text-sm justify-between gap-1">
                      <span className="text-[rgb(131,131,131)]">
                        Spice Crate Key
                      </span>
                      <p className="text-xl font-bold">
                        0.54 ETH{" "}
                        <span className="text-[rgb(131,131,131)] text-lg font-semibold">
                          Last sale: 0.54 ETH
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="bg-[rgb(32,32,32)] shadow-inset w-full py-5 text-white rounded-full text-sm flex items-center gap-1 hover:bg-white/70">
                  <span>Buy now for 0.54 ETH</span>
                  <IoIosArrowForward />
                </Button>
              </div>
              <Divider></Divider>
              <div className="flex">
                <Button className="bg-white w-full py-5 text-black rounded-full text-sm flex items-center gap-1 hover:bg-white/70">
                  <span>Open loot box</span>
                  <IoIosArrowForward />
                </Button>
              </div>
            </div>
          </div>
          <Divider></Divider>
          <section className="items-center flex flex-none flex-col flex-wrap gap-[20px] h-min justify-start max-w-[1440px] overflow-hidden pt-0 px-[30px] pb-[60px] relative w-full">
            <div className="flex items-center flex-none flex-row flex-nowrap h-min justify-between overflow-hidden p0 relative w-full">
              <h2 className="font-semibold text-white text-[28px] tracking-tight ">
                Items in the box ({itemsList.length})
              </h2>
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
                          <div className="flex items-center gap-1 absolute top-4 left-4">
                            <div className=" bg-violet-700 text-xs px-1 py-[2px] rounded-2xl">
                              #{item.id}
                            </div>
                            <div className=" bg-[#DC7E8A] text-xs px-1 py-[2px] rounded-2xl">
                              99.4% chance
                            </div>
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

export default LootboxPage;
