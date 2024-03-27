import React from 'react';
import { useParams } from "react-router-dom";
import fotos from "../Utils/rutasgaleria.json"

const Foto = () => {
  const { id } = useParams();
  const monstruo = fotos.find(foto => foto.id === Number(id));

  return (
    <div className='mt-10 justify-center  items-center md:h-full md:y-[1000px]'>
      <h1 className='font-caveat text-4xl md:text-9xl'>"{monstruo.titulo}"</h1>
      <div className="mt-4 flex justify-center items-center">
        <img className="object-contain max-w-full max-h-full" src={`../src/assets/galeriaTemi/s (${id}).jpeg`} alt={`Foto ${id}`} />
      </div>
    </div>
  );
}

export default Foto;
