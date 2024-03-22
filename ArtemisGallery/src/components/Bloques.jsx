import React from 'react'
import { Link } from 'react-router-dom';

function Bloques() {
    return (
      <div className='relative flex mt-5 justify-between'>
   
          <Link to="/galeria" className=' relative border-4 rounded-md border-purple-400  bg-opacity-50 h-[200px] w-[300px] hover:z-10 hover:scale-150 opacity-100 cursor-pointer transition-all duration-200 ease-out'>
              <img className="object-cover object-center w-full h-full cover" src="src/assets/FotosBloque/ArtGallery2.jpeg" alt="Galeria" />
              <h1 className="text-4xl text-blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hover:opacity-100 transition-opacity duration-200 ease-out">Galeria</h1>
          </Link>
   
      
          <div className='relative'>
            <div className='border-4 rounded-md border-purple-400 relative bg-opacity-50 h-[200px] w-[300px] hover:z-10 hover:scale-150 opacity-100 cursor-pointer transition-all duration-200 ease-out'>
              <img className="object-cover object-center w-full h-full cover " src="src\assets\FotosBloque\workinprogress.jpeg" alt="Working"></img>
              <h1 className="text-4xl text-yellow-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hover:opacity-100 transition-opacity duration-200 ease-out">Working...</h1>
            </div>
          </div>
      
          <div className='relative'>
            <div className='border-4 rounded-md border-purple-400 relative bg-opacity-50 h-[200px] w-[300px] hover:z-10 hover:scale-150 opacity-100 cursor-pointer transition-all duration-200 ease-out'>
              <img className="object-cover object-center w-full h-full cover " src="src\assets\FotosBloque\moda.jpeg" alt="Moda"></img>
              <h1 className="text-4xl text-blue-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hover:opacity-100 transition-opacity duration-200 ease-out">Moda</h1>
            </div>
          </div>
      
          <div className='relative'>
            <div className='border-4 rounded-md border-purple-400 relative bg-opacity-50 h-[200px] w-[300px] hover:z-10 hover:scale-150 opacity-100 cursor-pointer transition-all duration-200 ease-out'>
              <img className="object-cover object-center w-full h-full cover " src="src\assets\FotosBloque\pelis.jpeg" alt="Pelis"></img>
              <h1 className="text-4xl text-orange-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20  hover:opacity-100 transition-opacity duration-200 ease-out">Pelis</h1>
            </div>
          </div>
        </div>
      );
    }      

export default Bloques

    //   
    //     <img className="w-full" src='src\assets\FotosBloque\ArtGallery2.jpeg'></img>