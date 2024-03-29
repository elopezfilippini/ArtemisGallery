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
import Work from './components/Work'





function App() {
  let slides = [
    "https://i.postimg.cc/tRzNQ95H/1.jpg",
    "https://i.postimg.cc/3RXCwhQm/2.jpg",
    "https://i.postimg.cc/KvvrmCq3/3.jpg",
    "https://i.postimg.cc/cCd7gzdj/4.jpg",
    "https://i.postimg.cc/5ypBwm0t/5.jpg",
  ];

  // let slides = [
  //   "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
  //   "https://wallpapercave.com/wp/wp3386769.jpg",
  //   "https://wallpaperaccess.com/full/809523.jpg",
  //   "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  // ];

  return (
   <div> <div className='w-[375px] flex justify-center md:w-full'><img src="https://i.postimg.cc/pL0nqTRs/rainbow.png" className='md:w-full md:max-h-32 max-w-20'></img></div>
  <div className='w-[375px] flex margin-0 top-0 border-grey gap-5 items-center justify-center md:w-full'>
  
  <img src="https://i.postimg.cc/qBny44x7/totoro.png" className='hidden md:block md:w-full md:max-h-32 md:max-w-20'></img>
  <h1 class="mt-4 text-5xl font-caveat text-center md:text-9xl" >Artemis Gallery</h1>
   <img src="https://i.postimg.cc/DyTszHxP/scribble.gif" className='hidden md:block md:w-full md:max-h-32 max-w-20'></img>
  
     </div>

     <div className="w-[375px] flex justify-center items-center mt-5 m-b 10 md:w-full ">

     <img src="https://i.postimg.cc/ZKxNvHgt/Flores.png" className='mt-0 h-[50px] justify-center align-middle'></img>

     </div>
     <div className='w-[375px] h-[250px] mt-10  flex overflow-x auto md:min-w-full rounded-xl px4 border-8 border-black-500 border-double md:w-[500px] md:h-[500px]'>
    <img className="h-[250px] w-[500px] md:w-full  md:h-[500px] object-cover object-top rounded-xl"  style={{ objectPosition: '10% 75%' }} src="https://i.postimg.cc/tRzNQ95H/1.jpg" alt="Imagen"></img>
</div>
<Presentacion/>
<Bloques />

<Routes>
<Route path={"/galeria"} element={<Categorias />}></Route>
<Route path={"/foto/:id"} element={<Foto />}></Route>
<Route path={"/work"} element={<Work slides={slides} />}></Route>
</Routes>



</div>

  )
}

export default App

{/* */}