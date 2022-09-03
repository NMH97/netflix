import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
function Row({title,fetchURL,rowID}) {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        axios.get(fetchURL)
            .then((res)=>{
                setMovies(res.data.results)
            })
    },[fetchURL])
    // console.log(movies)
    const slideLeft = ()=>{
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 280
    }
    const slideRight = ()=>{
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 280
    }
  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4 '>{title}</h2>
        <div className='realative flex items-center group'>
            <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item, id)=>(
                    <Movie item={item} key={id}/>
                   
                    
                ))}
            </div>
            <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0' size={40}/>
        </div>
    </>
  )
}

export default Row 