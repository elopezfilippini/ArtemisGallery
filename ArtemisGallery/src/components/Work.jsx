import { useState,useEffect  } from "react";
import { LiaChevronCircleLeftSolid, LiaChevronCircleRightSolid } from "react-icons/lia";

export default function Work({ slides }) {
  useEffect(() => {
    // Hacer scroll al inicio del componente de forma suave
    window.scrollTo({ top: 600, behavior: 'smooth' });
  }, []);
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
<div className=" w-[350px] mt-10 md:w-[700px]  md:h-[600px] overflow-hidden relative object-contain mx-auto">
      <div
        className={`flex transition ease-out duration-40 w-full`}
        style={{
          transform: `translateX(-${current * 200}%)`,
        }}
      >
        {slides.map((s) => {
          return <img src={s} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex px-10 text-1xl opacity-40  ">
        <button onClick={previousSlide}>
          <LiaChevronCircleLeftSolid />
        </button>
        <button onClick={nextSlide}>
          <LiaChevronCircleRightSolid />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}