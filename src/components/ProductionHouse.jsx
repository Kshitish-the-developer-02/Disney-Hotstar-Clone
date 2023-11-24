import React from 'react'
import disnep from './../assets/images/disnep.jpg';
import marvel from './../assets/images/marvel.jpg';
import nationalG from './../assets/images/national geography.jpg';
import pixer from './../assets/images/pixer.jpg';
import starWars from './../assets/images/star wars.jpg';

import disnepV from './../assets/videos/disnep.mp4';
import marvelV from './../assets/videos/marvel.mp4';
import nationalGV from './../assets/videos/national geography.mp4';
import pixerV from './../assets/videos/pixer.mp4';
import starWarsV from './../assets/videos/star.mp4';



function ProductionHouse() {
  const ProductionHouseList=[
    {
      id:1,
      image:disnep,
      video:disnepV
    },
    {
      id:2,
      image:marvel,
      video:marvelV
    },
    {
      id:3,
      image:nationalG,
      video:nationalGV
    },
    {
      id:4,
      image:pixer,
      video:pixerV
  },
  {
    id:5,
    image:starWars,
    video:starWarsV
  }
  ]
  return (
      <div className='flex  gap-2 md:gap-5 p-2  px-5 md:px-16'>
             {ProductionHouseList.map((item)=>(
                 <div key={item.id} className=' border-[2px] border-gray-600
                    rounded-lg bg-transparent hover:scale-110
                     transition-all duration-300 ease-in-out cursor-pointer
                       relative shadow-xl shadow-black-500'>

                  <video src={item.video} autoPlay loop playsInline muted
                    className=' absolute z-0 top-0 rounded-md
                                opacity-0 hover:opacity-50'/>

                  <img src={item.image} className=' w-full z-[1] opacity-100 '/>
                 </div>
             ))}
     </div>
  )
}

export default ProductionHouse