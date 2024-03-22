import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bloques from './components/Bloques'
import Presentacion from './components/Presentacion'
import fotos from "./Utils/rutasgaleria.json"
import { Link } from 'react-router-dom'
import {Route,Routes} from "react-router-dom"
import Categorias from './components/Categorias'
import Foto from './components/Foto'





function App() {

  return (
   <div> <div className='flex justify-center w-full'><img src="/src/assets/rainbow.png" className='w-full md:max-h-32 max-w-20'></img></div>
  <div className='flex margin-0 top-0 border-grey gap-5 items-center'>
  <img src="/src/assets/totoro.png" className='hidden md:block md:w-full md:max-h-32 md:max-w-20'></img>
      <h1 class="caveat" >Artemis Gallery</h1>
      
    <img src="/src/assets/scribble.gif" className='hidden md:block md:w-full md:max-h-32 max-w-20'></img>
     </div>
     <div className="flex justify-center items-center mt-5 mt-0">

     <img src="/src/assets/flores.png" className='mt-0 h-[50px] justify-center align-middle'></img>

     </div>
     <div className='mt-10 w-[500px] flex overflow-x auto md:min-w-full rounded-xl px4 border-8 border-black-500 border-double'>
    <img className="h-[300px] w-[500px] md:w-full  md:h-[500px] object-cover object-top rounded-xl"  style={{ objectPosition: '10% 75%' }} src="/src/assets/FotosSlider/1.jpeg" alt="Imagen"></img>
</div>
<Presentacion/>
<Bloques />
<Routes>
<Route path={"/galeria"} element={<Categorias />}></Route>
<Route path={"/foto/:id"} element={<Foto />}></Route>
</Routes>



</div>

  )
}

export default App
