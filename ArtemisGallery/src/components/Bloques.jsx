import React from 'react'
import { Link } from 'react-router-dom';

function Bloques() {
    return (
      <div className='w-[375px] md:w-full md:gap-10 bg-gradient-to-b scrollbar-none scroll-smooth relative flex mt-5 justify-between'>
   
          <Link to="/galeria" className='bg-purple-200 bg-opacity-80 w-[100px] h-[120px] border-4 rounded-md border-purple-400 relative md:bg-opacity-50 md:h-[200px] md:w-[350px] hover:z-10 md:hover:scale-150 opacity-100 cursor-pointer transition-all duration-200 ease-out'>
              <img className="hidden md:block  w-[250px] h-[120px] md:object-cover object-center md:w-full md:h-full md:cover" src="src/assets/FotosBloque/ArtGallery2.jpeg" alt="Galeria" />
              <h1 className="text-2xl md:text-4xl text-blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hover:opacity-100 transition-opacity duration-200 ease-out">Galeria</h1>
          </Link>
   
      
          <div className='relative '>
            <div className='bg-purple-400 bg-opacity-80 w-[100px] h-[120px] border-4 rounded-md border-purple-400 relative md:bg-opacity-50 md:h-[200px] md:w-[300px] hover:z-10 md:hover:scale-150 opacity-100 cursor-pointer transition-all duration-200 ease-out'>
            <img className="hidden md:block w-[250px] h-[120px] md:object-cover object-center md:w-full md:h-full md:cover" src="src\assets\FotosBloque\workinprogress.jpeg" alt="Working"></img>
              <h1 className="text-2xl md:text-4xl text-yellow-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hover:opacity-100 transition-opacity duration-200 ease-out">Work</h1>
            </div>
          </div>
      
          <div className='relative'>
            <div className=' bg-purple-700 bg-opacity-80 w-[100px] h-[120px] border-4 rounded-md border-purple-400 relative md:bg-opacity-50 md:h-[200px] md:w-[300px] hover:z-10 md:hover:scale-150 opacity-100 cursor-pointer transition-all duration-200 ease-out'>
              <img className="hidden md:block  w-[250px] h-[120px] md:object-cover object-center md:w-full md:h-full md:cover " src="src\assets\FotosBloque\moda.jpeg" alt="Moda"></img>
              <h1 className="text-2xl md:text-4xl text-blue-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hover:opacity-100 transition-opacity duration-200 ease-out">Moda</h1>
            </div>
          </div>
      
          <div className='relative'>
            <div className='bg-purple-900 bg-opacity-80 w-[100px] h-[120px] border-4 rounded-md border-purple-400 relative md:bg-opacity-50 md:h-[200px] md:w-[300px] hover:z-10 md:hover:scale-150 opacity-100 cursor-pointer transition-all duration-200 ease-out'>
              <img className="hidden md:block  w-[250px] h-[120px] md:object-cover object-center md:w-full md:h-full md:cover " src="src\assets\FotosBloque\pelis.jpeg" alt="Pelis"></img>
              <h1 className="text-2xl md:text-4xl text-orange-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20  hover:opacity-100 transition-opacity duration-200 ease-out">Pelis</h1>
            </div>
          </div>
        </div>
      );
    }      

export default Bloques

    //   
    //     <img className="w-full" src='src\assets\FotosBloque\ArtGallery2.jpeg'></img>