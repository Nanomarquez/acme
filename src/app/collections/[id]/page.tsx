"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Azuki from "@/assets/azuki.jpg";
//ICONS
import { GlobalSVG } from "@/icons/acme";
import { collectionList, gamesList, itemsList } from "@/lib/constants";
import { CiCalendar, CiSearch } from "react-icons/ci";
import { FaDiscord, FaFilter, FaGithub, FaTelegramPlane } from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";

//COMPONENTS
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Card, CardContent } from "@/components/ui/card";

//UTILS
import {
  filterOptions,
  networksOptions,
  securityOptions,
} from "@/lib/constants";
import { IoIosArrowDown } from "react-icons/io";

import Collection from "@/assets/game.jpg";
import { SiChainlink, SiUbisoft } from "react-icons/si";
import { BiSolidLike } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

function CollectionPage() {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenNetwork, setIsOpenNetwork] = useState(false);
  const [selectedFilterOption, setSelectedFilterOption] = useState<{
    id: string;
    label: string;
  } | null>(null);

  const [selectedSecurityOption, setSelectedSecurityOption] = useState<{
    id: string;
    label: string;
    icon: any;
  } | null>(null);

  const [selectedNetworkOption, setSelectedNetworkOption] = useState<
    | {
        id: string;
        label: string;
        icon: any;
      }[]
  >([]);

  const toggleFilterDropdown = () => {
    setIsOpenNetwork(false);
    setIsOpenFilter(!isOpenFilter);
  };

  const toggleNetworkDropdown = () => {
    setIsOpenFilter(false);
    setIsOpenNetwork(!isOpenNetwork);
  };

  const handleSecurityCheckboxChange = (
    option: { id: string; label: string; icon: any },
    e: CheckedState
  ) => {
    if (e) {
      setSelectedSecurityOption(option);
    } else {
      setSelectedSecurityOption(null);
    }
  };

  const handleFilterCheckboxChange = (
    option: { id: string; label: string },
    e: CheckedState
  ) => {
    if (e) {
      setSelectedFilterOption(option);
    } else {
      setSelectedFilterOption(null);
    }
  };

  const handleNetworkCheckboxChange = (option: {
    id: string;
    label: string;
    icon: any;
  }) => {
    setSelectedNetworkOption((prev) => {
      if (!prev) return [option]; // Si es null, inicializa con la opción seleccionada.

      // Comprueba si el 'id' ya está en la lista
      const isSelected = prev.some((item) => item.id === option.id);

      if (isSelected) {
        // Si ya está seleccionado, filtramos para eliminar la opción
        return prev.filter((item) => item.id !== option.id);
      } else {
        // Si no está seleccionado, añadimos la nueva opción
        return [...prev, option];
      }
    });
  };
  return (
    <main className="min-h-screen w-auto items-center flex flex-col flex-nowrap h-min justify-start overflow-visible pt-[67px] pb-0 pl-0 pr-0 relative">
      <nav className="items-center flex flex-none flex-col flex-wrap gap-[20px] h-min justify-start max-w-[1440px] overflow-hidden pt-[32px] px-[24px] relative w-full">
        <div className="flex items-center flex-none flex-row flex-nowrap h-min justify-between overflow-hidden p-0 relative w-full">
          <Card className="bg-[rgb(10,10,10)] h-[304px] w-full rounded-lg overflow-hidden text-white border-0 relative flex">
            <div className="absolute w-full h-full">
              <Image
                src={Collection}
                alt={"Collection name"}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-2xl"
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
                <h2 className="text-lg font-semibold">Collection name</h2>
                <HiCheckBadge className="text-sky-400"></HiCheckBadge>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-white/10 p-1 flex items-center gap-2 rounded-full px-2">
                  <span className="text-xs text-gray-400">Contact address</span>
                  <Avatar className="w-5 h-5">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-semibold">0xrdd2...293d</span>
                </div>
                <div className="bg-white/10 p-1 flex items-center gap-2 rounded-full px-2">
                  <span className="text-xs text-gray-400">Chain</span>
                  <SiChainlink className="h-5 w-5 p-1 text-sky-500 bg-white rounded-full"></SiChainlink>
                  <span className="text-xs font-semibold">BASE</span>
                </div>
                <div className="bg-white/10 p-1 flex items-center gap-2 rounded-full px-2">
                  <span className="text-xs text-gray-400">Created</span>
                  <CiCalendar className="h-5 w-5"></CiCalendar>
                  <span className="text-xs font-semibold">Aug 20, 2024</span>
                </div>
              </div>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Morbi hendrerit morbi
                risus at. Leo enim suspendisse viverra iaculis ac. Mauris
                dignissim turpis morbi.
              </p>
            </div>
            <div className="relative mr-5 mb-5 h-min self-end justify-end w-[449px]">
              <div className="flex flex-col gap-2 text-white">
                <div className="flex gap-2">
                  <div className="bg-[#ffffff1a] backdrop-blur-[9.550000190734863px] rounded-md p-2 h-min flex w-full">
                    <div className="flex flex-col">
                      <span className="text-[rgb(131,131,131)] text-xs">
                        Market cap
                      </span>
                      <span className="font-semibold flex items-center gap-2">
                        $444.44k
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#ffffff1a] backdrop-blur-[9.550000190734863px] rounded-md p-2 h-min flex w-full">
                    <div className="flex flex-col">
                      <span className="text-[rgb(131,131,131)] text-xs">
                        Items
                      </span>
                      <span className="font-semibold flex items-center gap-2">
                        444
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#ffffff1a] backdrop-blur-[9.550000190734863px] rounded-md p-2 h-min flex w-full">
                    <div className="flex flex-col">
                      <span className="text-[rgb(131,131,131)] text-xs">
                        Floor price
                      </span>
                      <span className="font-semibold flex items-center gap-2">
                        0.4 ETH
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-[#ffffff1a] backdrop-blur-[9.550000190734863px] rounded-md p-2 h-min flex w-full">
                    <div className="flex flex-col">
                      <span className="text-[rgb(131,131,131)] text-xs">
                        Total volume
                      </span>
                      <span className="font-semibold flex items-center gap-2">
                        $444.44k
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#ffffff1a] backdrop-blur-[9.550000190734863px] rounded-md p-2 h-min flex w-full">
                    <div className="flex flex-col">
                      <span className="text-[rgb(131,131,131)] text-xs">
                        Holders
                      </span>
                      <span className="font-semibold flex items-center gap-2">
                        444
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </nav>
      <div className="items-start flex-none flex-row flex-nowrap gap-[24px] h-min justify-start max-w-[1440px] overflow-visible p-[24px] relative w-full flex">
        <div className="flex flex-col py-[12px] w-[241px] gap-3 sticky top-[64px]">
          {/*FILTER */}
          <div className="flex gap-2 items-center">
            <FaFilter className="text-[rgba(255,255,255,0.4)]"></FaFilter>
            <span className="text-[rgba(255,255,255,0.4)] text-xs font-semibold">
              Filter
            </span>
          </div>

          <div className="h-[1px] border-b border-[rgb(36,36,36)] w-full"></div>
          {/*SEARCH*/}
          <div className="bg-[rgba(255,255,255,0.05)] rounded-sm opacity-100 items-center flex flex-none flex-row flex-nowrap h-[32px] justify-between overflow-visible p-[12px] relative">
            <div className="items-center flex flex-none flex-row flex-nowrap gap-[12px] h-min justify-start overflow-visible p-0 relative w-[80%]">
              <CiSearch className="h-[16px] w-[16px] flex-shrink-0 stroke-[rgb(138,138,138)] stroke-1" />
              <input
                type="text"
                className="flex flex-col justify-end flex-shrink-0 w-full transform-none bg-transparent outline-none text-[13px] font-[700] tracking-[-0.01em] leading-[2.1em] text-left text-[rgb(105,105,105)] placeholder:text-[rgb(105,105,105)]"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="h-[1px] border-b border-[rgb(36,36,36)] w-full"></div>
          {/*SORT BY */}
          <div className="flex flex-col relative">
            <div
              className="flex items-center justify-between"
              onClick={toggleFilterDropdown}
            >
              <span className="text-[rgba(255,255,255,0.4)] text-xs font-semibold">
                Sort by
              </span>
              <motion.div
                className="bg-[rgba(255,255,255,0.05)] rounded-lg opacity-100 items-center flex flex-none flex-row flex-nowrap gap-2 border border-[#333333] h-[32px] justify-between overflow-visible p-[12px] relative cursor-pointer"
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-[rgba(255,255,255,0.7)] text-xs">
                  {selectedFilterOption
                    ? filterOptions.find(
                        (option) => option.id === selectedFilterOption.id
                      )?.label
                    : "Select"}
                </span>
                <motion.div
                  animate={{ rotate: isOpenFilter ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoIosArrowDown className="text-[rgb(105,105,105)]" />
                </motion.div>
              </motion.div>
            </div>
            <AnimatePresence>
              {isOpenFilter && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-[#0D0D0D] border border-[#333333] rounded-lg p-2 z-10"
                >
                  {filterOptions.map((option) => (
                    <motion.div
                      key={option.id}
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center space-x-2 py-1 justify-between"
                    >
                      <Label
                        htmlFor={option.id}
                        className="text-[rgba(255,255,255,0.7)] text-xs cursor-pointer"
                      >
                        {option.label}
                      </Label>
                      <Checkbox
                        id={option.id}
                        checked={selectedFilterOption?.id === option.id}
                        onCheckedChange={(e) =>
                          handleFilterCheckboxChange(option, e)
                        }
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="h-[1px] border-b border-[rgb(36,36,36)] w-full"></div>
          {/*NETWORKS */}
          <div className="flex flex-col relative">
            <div
              className="flex items-center justify-between"
              onClick={toggleNetworkDropdown}
            >
              <span className="text-white text-xs font-semibold">Networks</span>
              <motion.div className="cursor-pointer" whileTap={{ scale: 0.95 }}>
                <motion.div
                  animate={{ rotate: isOpenNetwork ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoIosArrowDown className="text-white" />
                </motion.div>
              </motion.div>
            </div>
            <AnimatePresence>
              {isOpenNetwork && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-[#0D0D0D] border border-[#333333] rounded-lg p-2 z-10"
                >
                  {networksOptions.map((option) => (
                    <motion.div
                      key={option.id}
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center space-x-2 py-1 justify-between"
                    >
                      <div className="flex items-center gap-2">
                        {option.icon}
                        <Label
                          htmlFor={option.id}
                          className="text-[rgba(255,255,255,0.7)] text-xs cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                      <Checkbox
                        id={option.id}
                        checked={selectedNetworkOption?.some(
                          (item) => item.id === option.id
                        )}
                        onCheckedChange={() =>
                          handleNetworkCheckboxChange(option)
                        }
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="h-[1px] border-b border-[rgb(36,36,36)] w-full"></div>
          {/*SECURITY*/}
          <div>
            {securityOptions?.map((option) => (
              <div
                key={option.id}
                className="flex items-center space-x-2 py-1 justify-between"
              >
                <div className="flex items-center gap-2">
                  {option.icon}
                  <Label
                    htmlFor={option.id}
                    className="text-[rgba(255,255,255,0.4)] text-xs cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
                <Checkbox
                  id={option.id}
                  checked={selectedSecurityOption?.id === option.id}
                  onCheckedChange={(e) =>
                    handleSecurityCheckboxChange(option, e)
                  }
                />
              </div>
            ))}
          </div>

          <div className="h-[1px] border-b border-[rgb(36,36,36)] w-full"></div>
          {/*FLOOR PRICE*/}
          <div className="flex flex-col relative">
            <div className="flex items-center justify-between">
              <span className="text-[rgba(255,255,255,0.4)] text-xs font-semibold">
                Floor Price
              </span>
              <div className="flex gap-1">
                <div className="relative flex items-center text-white/30">
                  <input
                    className="bg-[rgba(255,255,255,0.05)] rounded-lg opacity-100 items-center flex flex-none flex-row flex-nowrap gap-2 border border-[#333333] h-[32px] text-sm justify-between overflow-visible p-[12px] relative cursor-pointer w-[75px] outline-none pr-4"
                    type="number"
                    placeholder="Min"
                  />
                  <span className="absolute right-1 text-sm">$</span>
                </div>
                <div className="relative flex items-center text-white/30">
                  <input
                    className="bg-[rgba(255,255,255,0.05)] rounded-lg opacity-100 items-center flex flex-none flex-row flex-nowrap gap-2 border border-[#333333] h-[32px] text-sm justify-between overflow-visible p-[12px] relative cursor-pointer w-[75px] outline-none pr-4"
                    type="number"
                    placeholder="Max"
                  />
                  <span className="absolute right-1 text-sm">$</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] border-b border-[rgb(36,36,36)] w-full"></div>
          {/*VOLUME*/}
          <div className="flex flex-col relative">
            <div className="flex items-center justify-between">
              <span className="text-[rgba(255,255,255,0.4)] text-xs font-semibold">
                Volume
              </span>
              <div className="flex gap-1">
                <div className="relative flex items-center text-white/30">
                  <input
                    className="bg-[rgba(255,255,255,0.05)] rounded-lg opacity-100 items-center flex flex-none flex-row flex-nowrap gap-2 border border-[#333333] h-[32px] text-sm justify-between overflow-visible p-[12px] relative cursor-pointer w-[75px] outline-none pr-4"
                    type="number"
                    placeholder="Min"
                  />
                  <span className="absolute right-1 text-sm">$</span>
                </div>
                <div className="relative flex items-center text-white/30">
                  <input
                    className="bg-[rgba(255,255,255,0.05)] rounded-lg opacity-100 items-center flex flex-none flex-row flex-nowrap gap-2 border border-[#333333] h-[32px] text-sm justify-between overflow-visible p-[12px] relative cursor-pointer w-[75px] outline-none pr-4"
                    type="number"
                    placeholder="Max"
                  />
                  <span className="absolute right-1 text-sm">$</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] border-b border-[rgb(36,36,36)] w-full"></div>
        </div>
        <div className="grid flex-1 gap-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3	h-min justify-center overflow-hidden p-0 ">
          {itemsList.map((item, i) => (
            <Link key={item.id} href={`/items/${item.id}`}>
              <Card
                key={item.id}
                className="rounded-xl bg-[rgb(10,10,10)] text-white overflow-hidden border-0 hover:brightness-125 duration-300 cursor-pointer"
              >
                <div className="relative h-80">
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
          ))}
        </div>
      </div>
    </main>
  );
}

export default CollectionPage;
