import React from 'react';
import { useNavigate } from 'react-router-dom';
import fotos from "../Utils/rutasgaleria.json";

function Galerias(props) {
    const tipo = props.tipo;
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/foto/${id}`);
    };

    return (
        <div className='py-12 px-12 overflow-x-auto flex gap-10 bg-gradient-to-b scrollbar-none scroll-smooth'>
            {fotos.map((foto, index) => {
                if (foto.Tipo === tipo) {
                    return (
                        <img 
                            key={index}
                            className="h-[100px] w-[500px] md:w-full md:h-[200px] object-cover object-top rounded-xl hover:scale-150 opacity-100 cursor-pointer transition-all duration-200 ease-out"
                            src={foto.ruta}
                            alt={`Foto ${foto.id}`}
                            onClick={() => handleClick(foto.id)}
                        />
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
}

export default Galerias;
