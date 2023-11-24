import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

function MovieList({ generId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getMoviesByGenerId();
  }, []);

  const getMoviesByGenerId = () => {
    //  axios.get(movieByGenreBaseURL+"&with_geners="+id)
    GlobalApi.getMoviesByGenerId(generId).then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white
      p-2 z-10 cursor-pointer  bg-transparent
       hidden md:block absolute
       ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"} `}
      />

      <div ref={elementRef} className="flex overflow-x-auto gap-8 scrollbar-hide pt-5 px-3 pb-10 scroll-smooth">
        {movieList.map((item, index) => (
          <>
          {index_%3==0 ?<HrMovieCard  movie={item}/>:<MovieCard key={index}  movie={item} />}
         </>
        ))}
      </div>

      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"}`}
      />
    </div>
  );
}

export default MovieList;
