"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

//ICONS
import { GlobalSVG } from "@/icons/acme";
import { collectionList, gamesList, lootsList } from "@/lib/constants";
import { CiSearch } from "react-icons/ci";
import { HiCheckBadge } from "react-icons/hi2";
import { IoFilterSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

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
import Link from "next/link";
import { useDeviceType } from "@/hooks/useDeviceType";
import { Button } from "@/components/ui/button";
import { BsBoxSeam } from "react-icons/bs";

function LootboxesPage() {
  const device = useDeviceType();

  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [seeFilters, setSeeFilters] = useState(false);
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

  const seeFiltersFunc = () => {
    if (device === "mobile") {
      return seeFilters
        ? "max-h-[500px] overflow-hidden"
        : "max-h-0 overflow-hidden";
    }
    return ""; // Para otros dispositivos, no aplicar altura.
  };

  return (
    <main className="min-h-screen w-auto items-center flex flex-col flex-nowrap h-min justify-start overflow-visible pt-[67px] pb-0 pl-0 pr-0 relative">
      <nav
        className={`items-center flex flex-none flex-col flex-wrap gap-[20px] h-min justify-start max-w-[1440px] overflow-hidden pt-[32px] ${
          device === "mobile" ? "px-[12px]" : "px-[24px]"
        }  relative w-full`}
      >
        <div className="flex items-center flex-none flex-row flex-nowrap h-min justify-between overflow-hidden p-0 relative w-full">
          <div className="flex items-center flex-none flex-row flex-nowrap h-min justify-between overflow-hidden p-0 relative w-full">
            <div className="flex items-center flex-row gap-[15px] h-min justify-center overflow-visible p-0 relative w-min">
              <GlobalSVG
                className={`${
                  device === "mobile"
                    ? "w-[30px] h-[30px]"
                    : "w-[60px] h-[60px]"
                }`}
              />
              <Link
                href={"/collections"}
                className={`text-[rgb(156,156,156)] ${
                  device === "mobile" ? "text-[16px]" : "text-[34px]"
                } font-semibold tracking-tighter leading-[1.2em] text-nowrap cursor-pointer hover:opacity-70 duration-300`}
              >
                Collections
              </Link>
              <Link
                href={"/games"}
                className={`text-[rgb(156,156,156)] ${
                  device === "mobile" ? "text-[16px]" : "text-[34px]"
                } font-semibold tracking-tighter leading-[1.2em] text-nowrap cursor-pointer hover:opacity-70 duration-300`}
              >
                Games
              </Link>
              <Link
                href={"/items"}
                className={`text-[rgb(156,156,156)] ${
                  device === "mobile" ? "text-[16px]" : "text-[34px]"
                } font-semibold tracking-tighter leading-[1.2em] text-nowrap cursor-pointer hover:opacity-70 duration-300`}
              >
                Items
              </Link>
              <Link
                href={"/lootboxes"}
                className={`text-white ${
                  device === "mobile" ? "text-[16px]" : "text-[34px]"
                } font-semibold tracking-tighter leading-[1.2em] text-nowrap cursor-pointer hover:opacity-70 duration-300`}
              >
                Lootboxes
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`items-start flex-none flex-row flex-nowrap h-min justify-start max-w-[1440px] overflow-visible ${
          device === "mobile" ? "p-[12px] gap-[12px]" : "p-[24px] gap-[24px]"
        } relative w-full flex flex-col md:flex-row`}
      >
        <div
          className={`flex relative flex-col ${
            device === "mobile"
              ? "w-full bg-black z-50 pt-[12px]"
              : "w-[241px] py-[12px]"
          }  gap-3 sticky top-[64px]`}
        >
          {/*FILTER */}
          <div className="flex gap-2 items-center relative">
            {device === "tablet" || device === "desktop" ? (
              <>
                <IoFilterSharp className="text-[rgba(255,255,255,0.4)]"></IoFilterSharp>
                <span className="text-[rgba(255,255,255,0.4)] text-xs font-semibold">
                  Filters
                </span>
              </>
            ) : (
              <>
                <Button
                  onClick={() => setSeeFilters(!seeFilters)}
                  className="bg-[rgba(255,255,255,0.05)] h-[32px]"
                >
                  {seeFilters ? (
                    <IoMdClose className="text-[rgba(255,255,255,0.4)]"></IoMdClose>
                  ) : (
                    <IoFilterSharp className="text-[rgba(255,255,255,0.4)]"></IoFilterSharp>
                  )}
                </Button>
                <div className="bg-[rgba(255,255,255,0.05)] rounded-sm opacity-100 items-center flex h-[32px] justify-between w-full p-[12px] relative">
                  <div className="items-center flex flex-none flex-row flex-nowrap gap-[12px] h-min justify-start overflow-visible p-0 relative">
                    <CiSearch className="h-[16px] w-[16px] flex-shrink-0 stroke-[rgb(138,138,138)] stroke-1" />
                    <input
                      type="text"
                      className="flex flex-col justify-end flex-shrink-0 transform-none bg-transparent outline-none text-[13px] font-[700] tracking-[-0.01em] leading-[2.1em] text-left text-[rgb(105,105,105)] placeholder:text-[rgb(105,105,105)]"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {device === "desktop" || device === "tablet" ? (
            <>
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
            </>
          ) : null}

          <div
            className={`flex flex-col gap-3 duration-500 ${seeFiltersFunc()}`}
          >
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
                <span className="text-white text-xs font-semibold">
                  Networks
                </span>
                <motion.div
                  className="cursor-pointer"
                  whileTap={{ scale: 0.95 }}
                >
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
        </div>

        <div className="grid flex-1 gap-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3	h-min justify-center overflow-hidden p-0 w-full">
          {lootsList.map((item, i) => (
            <Link href={`/lootboxes/${item.id}`} key={item.id}>
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
                  <div className="absolute top-3 left-3 bg-white text-black font-normal text-xs px-1 py-[2px] rounded-2xl">
                    {item.id} items
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
                    <div className="bg-zinc-900 p-2 rounded-md w-full hover:scale-105 duration-100">
                      <p className="text-sm text-gray-400">Buy key</p>
                      <p className="font-medium">{item.floor}</p>
                    </div>
                    <div className="bg-zinc-900 p-2 rounded-md w-full flex flex-col gap-1 hover:scale-105 duration-100">
                      <BsBoxSeam className="text-lg text-gray-400"></BsBoxSeam>
                      <p className="font-medium">Open now</p>
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

export default LootboxesPage;
