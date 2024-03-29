import { Link, useLocation } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';

function Bloques() {
  const imageRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Verificar si la ubicación actual es "/galeria"
    if (location.pathname === '/galeria') {
      // Hacer scroll hacia la imagen después de un breve retraso para asegurar que esté cargada completamente
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [location.pathname]);

  return (
    <div className='w-[375px] md:w-full md:gap-10 bg-gradient-to-b scrollbar-none scroll-smooth relative flex mt-5 justify-center'>
      <Link to="/galeria" className='bg-purple-200 bg-opacity-80 w-[100px] h-[120px] border-4 rounded-md border-purple-400 relative md:bg-opacity-50 md:h-[200px] md:w-[300px] hover:z-10 md:hover:scale-150 opacity-100 cursor-pointer transition-all duration-200 ease-out'>
        <img ref={imageRef} className="hidden md:block w-[250px] h-[120px] md:object-cover object-center md:w-full md:h-full md:cover" src="https://i.postimg.cc/wMJvzxKY/Art-Gallery2.jpg" alt="Galeria" />
        <h1 className="text-2xl md:text-4xl text-blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hover:opacity-100 transition-opacity duration-200 ease-out">Galeria</h1>
      </Link>

      <Link to="/work" className='bg-purple-200 bg-opacity-80 w-[100px] h-[120px]relative md:bg-opacity-50 md:h-[200px] md:w-[300px] hover:z-10 md:hover:scale-100 opacity-100 cursor-pointer transition-all duration-200 ease-out'>

      <div className='relative'>
        <div className='bg-purple-400 bg-opacity-80 w-[100px] h-[120px] border-4 rounded-md border-purple-400 relative md:bg-opacity-50 md:h-[200px] md:w-[300px] hover:z-10 md:hover:scale-150 opacity-100 cursor-pointer transition-all duration-200 ease-out'>
          <img className="hidden md:block w-[250px] h-[120px] md:object-cover object-center md:w-full md:h-full md:cover" src="https://i.postimg.cc/5Ndy3zv4/workinprogress.jpg" alt="Working" />
          <h1 className="text-2xl md:text-4xl text-yellow-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hover:opacity-100 transition-opacity duration-200 ease-out">Work</h1>
        </div>  
      </div></Link>
    </div>
  );
}

export default Bloques;
