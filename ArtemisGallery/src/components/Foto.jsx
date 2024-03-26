import React from 'react';
import { useParams } from "react-router-dom";

const Foto = () => {
  const { id } = useParams();
  return (
    <div>
      
      <img src={`../src/assets/galeriaTemi/s (${id}).jpeg`} alt={`Foto ${id}`} />
    </div>
  );
}

export default Foto;