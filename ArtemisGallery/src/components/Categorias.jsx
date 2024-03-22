import React from 'react'
import fotos from "../Utils/rutasgaleria.json"
import Galerias from './Galerias'

const Categorias = () => {
  const tipos = []
  fotos.forEach(foto => {
    if (!tipos.includes(foto.Tipo)) {
      tipos.push(foto.Tipo)}})
      console.log(tipos)
  return (
    <div className='mt-10 gap-y-px	'>
      {tipos.map(tipito =>(
        <div>
        <h1 className='text-left'>{tipito}:</h1>
        <Galerias tipo={tipito} />
</div>
      ))}
    </div>
  )
}

export default Categorias
