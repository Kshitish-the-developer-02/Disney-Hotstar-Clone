import React from 'react'
import GenerList from '../constant/GenerList'
import MovieList from './MovieList'


function GenerMovieList() {
  return (
      <div>
        {GenerList.genere.map((item,index)=> index<=4 &&(
          <div key={index} className=' text-white p-8 px-8 md:px-16'>
                <h2 className=' text-[20px] text-white font-bold'>
                     {item.name}
                </h2>
                <MovieList generId={item.id} index_={index}/>
          </div>
        ))}
      </div>
  )
}

export default GenerMovieList