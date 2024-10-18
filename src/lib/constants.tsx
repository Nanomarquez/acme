//ICONS
import { FaApple, FaEthereum, FaWindows } from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";
import { SiBinance } from "react-icons/si";
import { SiCardano } from "react-icons/si";
import { SiSolana } from "react-icons/si";
import { SiPolkadot } from "react-icons/si";

//ASSETS
import HeroAvatar from "@/assets/heroavatar.jpg";
import Azuki from "@/assets/azuki.jpg";
import Game from "@/assets/game.jpg";
import Item from "@/assets/item.jpg";
import Loot from "@/assets/loot.jpg";

export const menuItems = [
  {
    title: "Collections",
    description: "Lorem ipsum dolor sit amet consectetur.",
    href: "/collections",
  },
  {
    title: "Items",
    description: "Lorem ipsum dolor sit amet consectetur.",
    href: "/items",
  },
  {
    title: "Games",
    description: "Lorem ipsum dolor sit amet consectetur.",
    href: "/games",
  },
  {
    title: "Lootboxes",
    description: "Lorem ipsum dolor sit amet consectetur.",
    href: "/lootboxes",
  },
];

export const games = [
  {
    id: 1,
    image: HeroAvatar,
    name: "Clash of Clans",
    floor: "0.25 ETH",
    volume: "0.25 ETH",
    percentage: "+5.24%",
  },
  {
    id: 2,
    image: HeroAvatar,
    name: "Clash of Clans",
    floor: "0.25 ETH",
    volume: "0.25 ETH",
    percentage: "+5.24%",
  },
  {
    id: 3,
    image: HeroAvatar,
    name: "Clash of Clans",
    floor: "0.25 ETH",
    volume: "0.25 ETH",
    percentage: "+5.24%",
  },
  {
    id: 4,
    image: HeroAvatar,
    name: "Clash of Clans",
    floor: "0.25 ETH",
    volume: "0.25 ETH",
    percentage: "+5.24%",
  },
];

export const holders = [
  {
    id: 0,
    name: "0x1234901234567890",
    rank: "#1",
  },
  {
    id: 1,
    name: "0x123456788901234567891",
    rank: "#2",
  },
  {
    id: 2,
    name: "0x123458901234567892",
    rank: "#3",
  },
  {
    id: 3,
    name: "0x12345645678901234567893",
    rank: "#4",
  },
  {
    id: 4,
    name: "0x1234567878901234567894",
    rank: "#5",
  },
];

export const buttons = [
  {
    id: 1,
    label: "24H",
  },
  {
    id: 2,
    label: "7D",
  },
  {
    id: 3,
    label: "1M",
  },
  {
    id: 4,
    label: "1Y",
  },
];

export const charts = {
  "24H": [
    { name: "00:00", value: 400 },
    { name: "06:00", value: 300 },
    { name: "12:00", value: 500 },
    { name: "18:00", value: 450 },
    { name: "23:59", value: 470 },
  ],
  "7D": [
    { name: "Mon", value: 1000 },
    { name: "Tue", value: 1200 },
    { name: "Wed", value: 900 },
    { name: "Thu", value: 1500 },
    { name: "Fri", value: 1800 },
    { name: "Sat", value: 1600 },
    { name: "Sun", value: 2000 },
  ],
  "1M": [
    { name: "Week 1", value: 5000 },
    { name: "Week 2", value: 6000 },
    { name: "Week 3", value: 4500 },
    { name: "Week 4", value: 7000 },
  ],
  "1Y": [
    { name: "Jan", value: 30000 },
    { name: "Feb", value: 25000 },
    { name: "Mar", value: 35000 },
    { name: "Apr", value: 40000 },
    { name: "May", value: 38000 },
    { name: "Jun", value: 45000 },
    { name: "Jul", value: 50000 },
    { name: "Aug", value: 55000 },
    { name: "Sep", value: 48000 },
    { name: "Oct", value: 52000 },
    { name: "Nov", value: 60000 },
    { name: "Dec", value: 65000 },
  ],
};

export const filterOptions = [
  { id: "newest", label: "Newest" },
  { id: "oldest", label: "Oldest" },
  { id: "popular", label: "Most Popular" },
];

export const networksOptions = [
  {
    id: "ethereum",
    label: "Ethereum",
    icon: (
      <FaEthereum className="bg-[#627EEA] text-white rounded-full h-5 p-[2px] w-5 border border-[#333333]"></FaEthereum>
    ),
  },
  {
    id: "binanceCoin",
    label: "Binance Coin",
    icon: (
      <SiBinance className="bg-white text-yellow-500 rounded-full h-5 p-[2px] w-5 border border-[#333333]"></SiBinance>
    ),
  },
  {
    id: "cardano",
    label: "Cardano",
    icon: (
      <SiCardano className="bg-[#6068F4] text-white rounded-full h-5 p-[2px] w-5 border border-[#333333]"></SiCardano>
    ),
  },
  {
    id: "solana",
    label: "Solana",
    icon: (
      <SiSolana className="bg-[#C645E1] text-white rounded-full h-5 p-[2px] w-5 border border-[#333333]"></SiSolana>
    ),
  },
  {
    id: "polkadot",
    label: "Polkadot",
    icon: (
      <SiPolkadot className="bg-white text-[#E6047C] rounded-full h-5 p-[2px] w-5 border border-[#333333]"></SiPolkadot>
    ),
  },
];

export const securityOptions = [
  {
    id: "verified",
    label: "Verified Only",
    icon: <HiCheckBadge className="text-sky-400 h-5 w-5"></HiCheckBadge>,
  },
  {
    id: "acme",
    label: "Acme Only",
    icon: <HiCheckBadge className="text-sky-400 h-5 w-5"></HiCheckBadge>,
  },
];

export const gamesList = [
  {
    id: 0,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 1,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 2,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 3,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 4,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 5,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 6,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 7,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 8,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 9,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 10,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 11,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 12,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 13,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 14,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 15,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 16,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 17,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 18,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 19,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 20,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 21,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 22,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 23,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 24,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
  {
    id: 25,
    image: Game,
    name: "Game name",
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
    platforms: [
      <FaWindows key={0} className="text-gray-500"></FaWindows>,
      <FaApple key={1} className="text-gray-500"></FaApple>,
    ],
    categories: ["Adventure", "MMO", "Fun"],
  },
];

export const collectionList = [
  {
    id: 0,
    name: "Collection name",
    image: Game,
    floor: "0.25 ETH",
    volume: "$25.5M",
    check: true,
  },
  {
    id: 1,
    name: "Collection name",
    image: Game,
    floor: "0.25 ETH",
    volume: "$25.5M",
    check: false,
  },
  {
    id: 2,
    name: "Collection name",
    image: Game,
    floor: "0.25 ETH",
    volume: "$25.5M",
    check: true,
  },
  {
    id: 3,
    name: "Collection name",
    image: Game,
    floor: "0.25 ETH",
    volume: "$25.5M",
    check: false,
  },
  {
    id: 4,
    name: "Collection name",
    image: Game,
    floor: "0.25 ETH",
    volume: "$25.5M",
    check: true,
  },
  {
    id: 5,
    name: "Collection name",
    image: Game,
    floor: "0.25 ETH",
    volume: "$25.5M",
    check: false,
  },
  {
    id: 6,
    name: "Collection name",
    image: Game,
    floor: "0.25 ETH",
    volume: "$25.5M",
    check: true,
  },
  {
    id: 7,
    name: "Collection name",
    image: Game,
    floor: "0.25 ETH",
    volume: "$25.5M",
    check: false,
  },
  {
    id: 8,
    name: "Collection name",
    image: Game,
    floor: "0.25 ETH",
    volume: "$25.5M",
    check: true,
  },
  {
    id: 9,
    name: "Collection name",
    image: Game,
    floor: "0.25 ETH",
    volume: "$25.5M",
    check: false,
  },
  {
    id: 10,
    name: "Collection name",
    image: Game,
    floor: "0.25 ETH",
    volume: "$25.5M",
    check: true,
  },
  {
    id: 11,
    name: "Collection name",
    image: Game,
    floor: "0.25 ETH",
    volume: "$25.5M",
    check: false,
  },
  {
    id: 12,
    name: "Collection name",
    image: Game,
    floor: "0.25 ETH",
    volume: "$25.5M",
    check: true,
  },
  {
    id: 13,
    name: "Collection name",
    image: Game,
    floor: "0.25 ETH",
    volume: "$25.5M",
    check: false,
  },
  {
    id: 14,
    name: "Collection name",
    image: Game,
    floor: "0.25 ETH",
    volume: "$25.5M",
    check: true,
  },
  {
    id: 15,
    name: "Collection name",
    image: Game,
    floor: "0.25 ETH",
    volume: "$25.5M",
    check: false,
  },
];

export const itemsList = [
  {
    id: 0,
    name: "Item name",
    image: Item,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 1,
    name: "Item name",
    image: Item,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 2,
    name: "Item name",
    image: Item,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 3,
    name: "Item name",
    image: Item,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 4,
    name: "Item name",
    image: Item,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 5,
    name: "Item name",
    image: Item,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 6,
    name: "Item name",
    image: Item,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 7,
    name: "Item name",
    image: Item,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 8,
    name: "Item name",
    image: Item,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 9,
    name: "Item name",
    image: Item,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 10,
    name: "Item name",
    image: Item,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 11,
    name: "Item name",
    image: Item,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
];

export const lootsList = [
  {
    id: 0,
    name: "Box name",
    image: Loot,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 1,
    name: "Box name",
    image: Loot,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 2,
    name: "Box name",
    image: Loot,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 3,
    name: "Box name",
    image: Loot,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 4,
    name: "Box name",
    image: Loot,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 5,
    name: "Box name",
    image: Loot,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 6,
    name: "Box name",
    image: Loot,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 7,
    name: "Box name",
    image: Loot,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 8,
    name: "Box name",
    image: Loot,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 9,
    name: "Box name",
    image: Loot,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 10,
    name: "Box name",
    image: Loot,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
  {
    id: 11,
    name: "Box name",
    image: Loot,
    floor: "0.25 ETH",
    volume: "$25.5M",
    logo: Azuki,
  },
];
