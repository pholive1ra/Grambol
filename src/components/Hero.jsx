import ImageHero from "../assets/image/image-home.jpg";
import { Link } from "react-router-dom";

export default function Hero({ image, title, subtitle, ctaText, ctaLink }) {
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
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-2xl text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            {title}
          </h1>

          <p className="mt-5 text-lg md:text-xl text-white/90">{subtitle}</p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              to={ctaLink}
              className="rounded-full bg-gradient-to-r cursor-pointer from-violet-600 to-pink-500 px-8 py-3 font-semibold shadow-lg  hover:opacity-90 transition-all duration-300"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
