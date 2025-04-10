import { Card } from "./Card"
import { FiUserPlus } from "react-icons/fi";
import { LuFileText } from "react-icons/lu"
import { LuMessageCircle } from "react-icons/lu";
import { MdHelpOutline } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { BiNews } from "react-icons/bi";
import { FiUserCheck } from "react-icons/fi";

export const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 space-y-2">
      <h1 className="font-inter font-semibold text-3xl capitalize text-[#000000]">featured & services</h1>
      <p className="text-[#000000]  font-inter text-md capitalize mt-8">Explore the tools and resources designed to empower your political participation and community engagement.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
        <Card icon={<FiUserPlus className="text-[#E99050] text-[20px]" />} cardTitle="Membership Registration" cardDescription="Easily sign up as an SDP member and receive your digital membership card." />
        <Card icon={<LuFileText className="text-[#E99050] text-[20px]" />} cardTitle="Party information" cardDescription="Access SDP’s constitution, policies, events, and announcements" />
        <Card icon={<LuMessageCircle className="text-[#E99050] text-[20px]" />} cardTitle="Community Forum" cardDescription="join discussions, share ideas, and network with other members." />
        <Card icon={<MdHelpOutline className="text-[#E99050] text-[20px]" />} cardTitle="Help & Support" cardDescription="get guidance, report challenges, or request assistance from out team." />
        <Card icon={<FiMonitor className="text-[#E99050] text-[20px]" />} cardTitle="Election Monitoring" cardDescription="submit polling unit results and report election-related issues in real-time" />
        <Card icon={<FiUserCheck className="text-[#E99050] text-[20px]" />} cardTitle="Volunteer & Campaign" cardDescription="register as volunteer and access campaign materials for mobilization." />
        <div></div>
        <Card icon={<BiNews className="text-[#E99050] text-[20px]" />} cardTitle="News Updates" cardDescription="stay informed with the latest political news and SDP activities." />
        <div></div>
      </div>
    </div>
  )
}
