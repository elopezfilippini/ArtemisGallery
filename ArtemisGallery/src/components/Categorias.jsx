import React, { useEffect } from 'react';
import fotos from "../Utils/rutasgaleria.json"
import Galerias from './Galerias'

const Categorias = () => {
  useEffect(() => {
    // Hacer scroll al inicio del componente de forma suave
    window.scrollTo({ top: 600, behavior: 'smooth' });
  }, []);
  const tipos = []
  fotos.forEach(foto => {
    if (!tipos.includes(foto.Tipo)) {
      tipos.push(foto.Tipo)}})
      console.log(tipos)
  return (
    <div className='relative mt-10 gap-y-px	'>
      {tipos.map(tipito =>(
        <div className='relative'>
        <h1 className="font-caveat">{tipito}:</h1>
        <Galerias tipo={tipito} />
</div>
      ))}
    </div>
  )
}

export default Categorias
