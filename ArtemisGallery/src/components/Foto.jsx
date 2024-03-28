import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import fotos from "../Utils/rutasgaleria.json";
import { LiaChevronCircleLeftSolid } from "react-icons/lia";

const Foto = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const monstruo = fotos.find(foto => foto.id === Number(id));

  return (
    <div className='mt-10'>
      <div className="flex justify-center items-center">
        <LiaChevronCircleLeftSolid
          onClick={() => navigate("/galeria")}
          className="text-blue-900 md:text-[100px] text-[23px]cursor-pointer hover:text-purple-500"
        />
      </div>
      <h1 className='font-caveat text-4xl md:text-7xl text-center mt-4'>" {monstruo.titulo} "</h1>
      <div className="flex justify-center mt-4">
        <img className="object-contain max-w-[375px]  md:max-w-full" src={`../src/assets/galeriaTemi/s (${id}).jpeg`} alt={`Foto ${id}`} />
      </div>
    </div>
  );
}

export default Foto;
