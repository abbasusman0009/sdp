import { Card } from "./Card";
import { FiUserPlus } from "react-icons/fi";
import { LuFileText } from "react-icons/lu";
import { LuMessageCircle } from "react-icons/lu";
import { MdHelpOutline } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { BiNews } from "react-icons/bi";
import { FiUserCheck } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export const Features = () => {
  const features = [
    {
      to: "/membership",
      icon: <FiUserPlus className="text-[#E99050] text-[20px]" />,
      title: "Membership Registration",
      description: "Easily sign up as an SDP member and receive your digital membership card.",
      link: true
    },
    {
      icon: <LuFileText className="text-[#E99050] text-[20px]" />,
      title: "Party Information",
      description: "Access SDP’s constitution, policies, events, and announcements."
    },
    {
      icon: <LuMessageCircle className="text-[#E99050] text-[20px]" />,
      title: "Community Forum",
      description: "Join discussions, share ideas, and network with other members."
    },
    {
      icon: <MdHelpOutline className="text-[#E99050] text-[20px]" />,
      title: "Help & Support",
      description: "Get guidance, report challenges, or request assistance from our team."
    },
    {
      icon: <FiMonitor className="text-[#E99050] text-[20px]" />,
      title: "Election Monitoring",
      description: "Submit polling unit results and report election-related issues in real-time."
    },
    {
      icon: <FiUserCheck className="text-[#E99050] text-[20px]" />,
      title: "Volunteer & Campaign",
      description: "Register as a volunteer and access campaign materials for mobilization."
    },
    {
      icon: <BiNews className="text-[#E99050] text-[20px]" />,
      title: "News Updates",
      description: "Stay informed with the latest political news and SDP activities."
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-20 space-y-2">
      <h1 className="font-inter font-semibold text-3xl capitalize text-[#000000]">Featured & Services</h1>
      <p className="text-[#000000] font-inter text-md capitalize">
        Explore the tools and resources designed to empower your political participation and community engagement.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
        {features.map((feature, index) => (
          feature.link ? (
            <NavLink to={feature.to} key={index}>
              <Card icon={feature.icon} cardTitle={feature.title} cardDescription={feature.description} />
            </NavLink>
          ) : (
            <Card key={index} icon={feature.icon} cardTitle={feature.title} cardDescription={feature.description} />
          )
        ))}
      </div>
    </div>
  );
};
