import React from 'react';
import fotos from "../Utils/rutasgaleria.json";

function Galerias(props) {
    console.log(fotos);
    const tipo = props.tipo;

    return (
        <div className='flex gap-10 bg-gradient-to-b '>
            {fotos.map((foto, index) => {
                if (foto.Tipo === tipo) {
                    return <img className="   h-[100px] w-[500px] md:w-full  md:h-[200px] object-cover object-top rounded-xl hover:scale-150 opacity-100 cursor-pointer transition-all duration-200 ease-out   " key={index} src={foto.ruta} alt="" />;
                } else {
                    return null; // Otra opción podría ser devolver un elemento nulo si no se cumple la condición
                }
            })}
        </div>
    );
}

export default Galerias;
