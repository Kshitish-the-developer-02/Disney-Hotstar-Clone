import React, { useRef, useState } from "react";
import logo from './../assets/images/dinsy.png';
import {  HiPlus, HiDotsVertical } from "react-icons/hi";
import { HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv } from "react-icons/hi2";
import HeaderItem from "./HeaderItem";
function Header() {
  const [toggle,setToggle]=useState(false);
    
    const menu=[
      {
        name:'HOME',
        icon:HiHome

      },
      {
        name:'SEARCH',
        icon:HiMagnifyingGlass
      },
      {
        name:'WATCH LIST',
        icon:HiPlus
      },
      {
        name:'ORIGINALS',
        icon:HiStar
      },
      {
        name:'MOVIES',
        icon:HiPlayCircle
      },
      {
        name:'SERIES',
        icon:HiTv
      }
    ]

  return(
    <div className=" flex items-center justify-between p-5">
       <div className=" flex gap-3 items-center">
           <img src={logo} className=" w-[80px] md:w-[115px] object-cover" />
             <div className=" hidden md:flex gap-8">
             {menu.map((item, index)=>(
              <HeaderItem key={index} name={item.name} Icon={item.icon}/>
             ))}
             </div>

             //respossive .....
             <div className="flex md:hidden gap-5">
             {menu.map((item,index)=>index<3 &&(
              <HeaderItem key={index} name={''} Icon={item.icon}/>
             ))}
             <div onClick={()=>setToggle(!toggle)}>
              <HeaderItem name={''} Icon={HiDotsVertical}/>
              {toggle?
                  <div className=" absolute mt-3 
                                  border-[1px] border-gray-700 p-3
                                  px-5 py-3">
                        {menu.map((item,index)=>index>2 &&(
                       <HeaderItem key={index} name={item.name} Icon={item.icon}/>
                   ))}
                  </div>:null}
             </div>
             </div>

       </div>
       <img src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/456322.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTcwMDc4NDAwMCwicSI6bnVsbCwiaWF0IjoxNzAwNTUzMjYxfQ__.8d11243befc376571473e5eb0cab4f660dd29e5503bbca1e474eb856a249daaf
        " className=" w-[60px] rounded-full pr-2 pt-2" alt="" />
    
    </div>
  )
}


export default Header;
