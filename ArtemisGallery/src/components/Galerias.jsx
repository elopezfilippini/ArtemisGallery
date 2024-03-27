
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import { LiaChevronCircleLeftSolid, LiaChevronCircleRightSolid } from "react-icons/lia";
import fotos from "../Utils/rutasgaleria.json";

const screenWidth = window.innerWidth;

function Galerias(props) {
    const tipo = props.tipo;
    const navigate = useNavigate();
    const elementRef = useRef();

    const sliderRight = (element) => { element.scrollLeft += 350 };
    const sliderLeft = (element) => { element.scrollLeft -= 350 };

    const handleClick = (id) => {
        navigate(`/foto/${id}`);
    };

    useEffect(() => {
        // Lógica si es necesaria al montar el componente
    }, []);

    return (
        <div className='relative flex'>
            <LiaChevronCircleLeftSolid
                onClick={() => sliderLeft(elementRef.current)}
                className="hidden md:block text-blue-900 text-[60px] absolute my-28 cursor-pointer z-10 hover:text-purple-500"
            />
            <div className='w-[375px] md:w-full py-12 overflow-x-auto flex gap-10 bg-gradient-to-b scrollbar-none scroll-smooth px-12 p-b5" ' ref={elementRef}>
                {fotos.map((foto, index) => {
                    if (foto.Tipo === tipo) {
                        return (
                            <img 
                                key={index}
                                className="w-[250px] h-[150px] shadow-xl shadow-yellow-700	border-solid h-[100px]md:w-full md:h-[200px] object-cover object-top rounded-xl hover:scale-150  border-gray-500 opacity-100 cursor-pointer transition-all duration-200 ease-out"
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
            <LiaChevronCircleRightSolid
                onClick={() => sliderRight(elementRef.current)}
                className="hidden md:block text-blue-900 text-[60px] hover:text-purple-500 absolute right-0 my-28 mt-[100px]':'mt-[150px]'} top-0 z-10 cursor-pointer"
            />
        </div>
    );
}

export default Galerias;
