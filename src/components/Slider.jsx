import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingVideos();
  }, []);

  const getTrendingVideos = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };

  return (
    <div>
      <HiOutlineChevronLeft
        className=" font-bold hidden md:block bg-transparent text-white text-[30px] absolute mx-8 mt-[175px]
                                             cursor-pointer "
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiOutlineChevronRight
        className=" font-bold hidden md:block bg-transparent text-white text-[30px] absolute mx-8 mt-[175px]
                                             cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4 
                       scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className=" min-w-full  md:h-[350px] object-cover object-center mr-5
              rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
