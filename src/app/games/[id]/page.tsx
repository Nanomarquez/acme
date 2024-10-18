"use client";
import React, { useState } from "react";
import Item from "@/assets/item.jpg";
import Game from "@/assets/game.jpg";
import Loot from "@/assets/loot.jpg";
import Azuki from "@/assets/azuki.jpg";
import { FaApple, FaRegEye, FaWindows } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { IoIosArrowForward, IoMdShare } from "react-icons/io";
import { LuRefreshCcw } from "react-icons/lu";
import { HiCheckBadge } from "react-icons/hi2";
import Divider from "@/components/Divider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ZoomImage from "@/components/ZoomImage";
import { buttons, collectionList } from "@/lib/constants";
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
import { SiChainlink } from "react-icons/si";
import { CiCalendar } from "react-icons/ci";
import { SiUbisoft } from "react-icons/si";
import { BiSolidLike } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiBattledotnet } from "react-icons/si";

const images = [Item, Game, Loot, Item, Game, Loot, Item, Game, Loot];

function GamePage({ params }: { params: { id: string } }) {
  const [activeButton, setActiveButton] = useState<{
    id: number;
    label: string;
  }>(buttons[0]);
  const [selectedImage, setSelectedImage] = useState(Item);
  return (
    <main className="min-h-screen w-auto items-center flex flex-col flex-nowrap h-min justify-start overflow-visible pt-[67px] pb-0 pl-0 pr-0 relative">
      <div className="items-center flex flex-none flex-col flex-wrap gap-[20px] h-min justify-start max-w-[1440px] overflow-hidden pt-[20px] px-[30px] pb-[60px] relative w-full">
        <div className="flex items-center gap-[12px] h-min justify-start overflow-visible relative py-2 w-full text-[rgb(105,105,105)]">
          <Link href="/games" className=" text-[14px] leading-[1.2em]">
            Games
          </Link>
          /{" "}
          <span className="text-white text-[14px] leading-[1.2em]">
            Game name
          </span>
        </div>
        <div className="flex gap-[43px] w-full text-white">
          <div className="flex flex-1 gap-[71px] flex-col overflow-hidden">
            <div className="relative flex flex-col items-center">
              <ZoomImage
                src={selectedImage}
                className="w-full h-[439px] rounded-3xl object-cover object-center"
              />
              <Carousel className="max-w-[500px] flex mx-auto absolute -bottom-6 rounded-xl bg-black p-2 overflow-hidden">
                <CarouselContent>
                  {images?.map((collection, i) => (
                    <CarouselItem
                      key={i}
                      className="md:basis-1/2 lg:basis-1/5"
                      onClick={() => setSelectedImage(collection)}
                    >
                      <Card
                        className={`w-[100px] h-[70px] bg-[rgb(10,10,10)] rounded-lg text-white overflow-hidden border-0 hover:brightness-125 duration-300 cursor-pointer ${
                          selectedImage === collection
                            ? "border border-white"
                            : ""
                        }`}
                      >
                        <Image
                          src={collection}
                          alt={"text"}
                          height={500}
                          width={500}
                          className="w-full h-full object-cover object-center"
                        />
                      </Card>
                    </CarouselItem>
                  ))}
                  s
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
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
          </div>
          <div
            className="flex flex-col justify-between w-full h-[668px]"
            style={{
              flex: ".8 0 0px",
            }}
          >
            <Card className="rounded-xl h-full bg-[rgb(10,10,10)] text-white overflow-hidden border-0">
              <div className="relative h-2/3 flex">
                <div className="w-full h-full absolute">
                  <Image
                    src={Game}
                    alt="Game background"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="relative m-5 h-min self-end flex flex-col gap-2">
                  <Image
                    src={Azuki}
                    alt={"Azuki"}
                    width={60}
                    height={60}
                    className="rounded-lg border border-[#ffffff1a]"
                  />
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold">Game name</h2>
                    <HiCheckBadge className="text-sky-400"></HiCheckBadge>
                  </div>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur. Morbi hendrerit
                    morbi risus at. Leo enim suspendisse viverra iaculis ac.
                    Mauris dignissim turpis morbi.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/10 p-1 flex items-center gap-2 rounded-full px-2">
                      <span className="text-xs text-gray-400">Chain</span>
                      <SiChainlink className="h-5 w-5 p-1 text-sky-500 bg-white rounded-full"></SiChainlink>
                      <span className="text-xs font-semibold">BASE</span>
                    </div>
                    <div className="bg-white/10 p-1 flex items-center gap-2 rounded-full px-2">
                      <span className="text-xs text-gray-400">Created</span>
                      <CiCalendar className="h-5 w-5"></CiCalendar>
                      <span className="text-xs font-semibold">
                        Aug 20, 2024
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/10 p-1 flex items-center gap-2 rounded-full px-2">
                      <span className="text-xs text-gray-400">Developer</span>
                      <SiUbisoft className="h-5 w-5 p-1 text-white bg-[#0D1316] rounded-full"></SiUbisoft>
                      <span className="text-xs font-semibold">Ubisoft</span>
                    </div>
                    <div className="bg-white/10 p-1 flex items-center gap-2 rounded-full px-2">
                      <span className="text-xs text-gray-400">Reviews</span>
                      <span className="flex items-center gap-1 text-[#69FF78]">
                        <BiSolidLike className="h-5 w-5"></BiSolidLike>
                        98%
                      </span>
                      <span className="text-xs text-gray-400">(4,302)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaTelegramPlane className="h-6 w-6"></FaTelegramPlane>
                    <FaDiscord className="h-6 w-6"></FaDiscord>
                    <BsTwitterX className="h-6 w-6"></BsTwitterX>
                    <FaGithub className="h-6 w-6"></FaGithub>
                  </div>
                </div>
              </div>
              <CardContent className="p-4 flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-400">Platforms</span>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/10 p-1 flex items-center gap-2 rounded-full px-2 w-min">
                      <FaWindows className="h-5 w-5 p-1"></FaWindows>
                      <span className="text-xs text-gray-400">Windows</span>
                    </div>
                    <div className="bg-white/10 p-1 flex items-center gap-2 rounded-full px-2 w-min">
                      <FaApple className="h-5 w-5 p-1"></FaApple>
                      <span className="text-xs text-gray-400">Mac</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-400">Game</span>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/10 p-1 flex items-center gap-2 rounded-full px-2 w-fit">
                      <SiBattledotnet className="h-5 w-5 p-1"></SiBattledotnet>
                      <span className="text-xs text-gray-400">
                        Battle Royale
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-400">Tags</span>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/10 p-1 flex items-center gap-2 rounded-full px-2 w-min">
                      <span className="text-xs text-gray-400">Metaverse</span>
                    </div>
                    <div className="bg-white/10 p-1 flex items-center gap-2 rounded-full px-2 w-min">
                      <span className="text-xs text-gray-400">Adventure</span>
                    </div>
                    <div className="bg-white/10 p-1 flex items-center gap-2 rounded-full px-2 w-min">
                      <span className="text-xs text-gray-400">FPS</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Divider></Divider>

        <section className="items-center flex flex-none flex-col flex-wrap gap-[20px] h-min justify-start max-w-[1440px] overflow-hidden pt-0 pb-[60px] relative w-full">
          <div className="flex items-center flex-none flex-row flex-nowrap h-min justify-between overflow-hidden p0 relative w-full">
            <h2 className="font-semibold text-white text-[28px] tracking-tight ">
              Collections ({collectionList.length})
            </h2>
          </div>
          <Carousel className="w-full">
            <CarouselContent>
              {collectionList?.map((collection, i) => (
                <Link href={`/collections/${collection.id}`} key={i}>
                  <CarouselItem
                    key={collection.id}
                    className="md:basis-1/2 lg:basis-1/5"
                  >
                    <Card className="w-[450px] bg-[rgb(10,10,10)] rounded-lg text-white overflow-hidden border-0 hover:brightness-125 duration-300 cursor-pointer">
                      <div className="relative h-60">
                        <Image
                          src={collection.image}
                          alt={collection.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <CardContent className="p-4 flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <h2 className="text-lg font-semibold">
                            {collection.name}
                          </h2>
                          {collection.check && (
                            <HiCheckBadge className="text-sky-400"></HiCheckBadge>
                          )}
                        </div>
                        <div className="flex justify-between gap-2">
                          <div className="bg-zinc-900 p-2 rounded-md w-full">
                            <p className="text-sm text-gray-400">Floor</p>
                            <p className="font-medium">{collection.floor}</p>
                          </div>
                          <div className="bg-zinc-900 p-2 rounded-md w-full">
                            <p className="text-sm text-gray-400">Volume</p>
                            <p className="font-medium">{collection.volume}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </Link>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </div>
    </main>
  );
}

export default GamePage;
