import React from 'react'
import { IoMdHome } from "react-icons/io";
import { BiDetail } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import HeaderItem from './HeaderItem';

const Header = () => {
    const menu=[
        {
            name:'Home',
            icon:IoMdHome,
        },
        {
            name:'About',
            icon:BiDetail,
        },
        {
            name:'Skills',
            icon:GiSkills,
        },
        {
            name:'Education',
            icon:MdOutlineCastForEducation,
        },
        {
            name:'Work',
            icon:FaLaptopCode,
        },
        {
            name:'Contact',
            icon:MdContacts,
        }
    ]
  return (
    <div className="flex justify-between items-center mx-auto p-4 shadow-2xl">
    <h1 className="text-[30px] ml-20">Web Developer</h1>

    <div className="flex items-center gap-10 mr-4">
      {menu.map((item) => (
        <HeaderItem name={item.name} Icon={item.icon} key={item.name} />
      ))}
    </div>
  </div>
  )
}

export default Header