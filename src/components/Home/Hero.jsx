import ImageHero from "../../assets/image/image-home.jpg";
import SearchBar from "./SearchBar";
// import { Link } from "react-router-dom";

export default function Hero({ title, subtitle }) {
  return (
    <section className="relative h-[70vh] w-full">
      {/* Imagem */}
      <img
        src={ImageHero}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover
             brightness-75 contrast-110 saturate-110"
      />

      {/* Overlay escuro com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col h-full items-center justify-center px-4">
        <div className="max-w-2xl sm:mt-24 text-center text-white">
          <h1 className="text-2xl text-left md:text-center md:text-3xl lg:text-4xl xxl:text-5xl font-extrabold leading-tight drop-shadow-lg">
            {title}
          </h1>

          <p className="mt-5 text-md text-left md:text-center md:text-xl text-white/90">
            {subtitle}
          </p>
        </div>
        <SearchBar />
      </div>
    </section>
  );
}
