import { IoFlashOutline, IoCalendarOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LiaSlidersHSolid } from "react-icons/lia";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { TbDeviceAnalytics, TbSend2 } from "react-icons/tb";
import { BsWifi2 } from "react-icons/bs";
import { ImLab } from "react-icons/im";

export const sidebarMenu = [
  {
    title: "Create",
    items: [
      { name: "Content", icon: <IoFlashOutline size={22} className="text-gray-500" />, path: "/content" },
      { name: "Approval", icon: <FaRegCircleCheck size={22} className="text-gray-500"  />, path: "/approval" },
      { name: "Brand Controls", icon: <LiaSlidersHSolid size={22} className="text-gray-500"  />, path: "/brand-controls" },
    ],
  },
  {
    title: "Publish",
    items: [
      { name: "Post Now", icon: <TbSend2 size={22} className="text-gray-500"  />, path: "/post-now" },
      { name: "Themes", icon: <ImLab size={22} className="text-gray-500"  />, path: "/themes" },
      { name: "Calendar", icon: <IoCalendarOutline size={22} className="text-gray-500"  />, path: "/calendar" },
    ],
  },
  {
    title: "Analyze",
    items: [
      { name: "Activity Feed", icon: <BsWifi2 size={32} className="rotate-45 text-gray-500" />, path: "/activity-feed" },
      { name: "Analytics", icon: <TbDeviceAnalytics size={22} className="text-gray-500"  />, path: "/analytics" },
      { name: "Reports", icon: <HiOutlineDocumentReport size={24} className="text-gray-500"  />, path: "/reports" },
    ],
  },
  {
    title: null,
    items: [
      { name: "Setting", icon: <IoSettingsOutline size={22} className="text-gray-500"  />, path: "/settings" },
    ],
  },
];
