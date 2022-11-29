import React from "react";
import { SidebarContainer, SidebarIcons } from "./style";
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { MdDashboard, MdMenu, MdNotifications, MdOutlineQueue } from "react-icons/md";
import { TbTarget } from "react-icons/tb";
import { BsFileEarmarkBarGraph, BsFillGearFill, BsFillPlusCircleFill } from "react-icons/bs";


const SideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  return (
    <SidebarContainer className={sidebarClass}>
      <SidebarIcons>
        <li><MdMenu/></li>
        <li><MdDashboard/></li>
        <li><MdNotifications/></li>
        <li><TbTarget/></li>
        <li><BsFileEarmarkBarGraph/></li>
        <li><MdOutlineQueue/></li>
        <li><BsFillGearFill/></li>
        <li><BsFillPlusCircleFill/></li>
      </SidebarIcons>
        <button onClick={props.toggleSidebar} className="sidebar-toggle">
          <AiOutlineAlignLeft />
        </button>
      </SidebarContainer>
  );
};
export default SideBar;
