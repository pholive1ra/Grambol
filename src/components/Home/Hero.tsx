import ImageHero from "../../assets/image/image-home.jpg";
import SearchBar from "./SearchBar";

export default function Hero({ title, subtitle }) {
  return (
    <section className="relative min-h-[70vh] w-full">
      {/* Imagem */}
      <img
        src={ImageHero}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover brightness-75 contrast-110 saturate-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col justify-center items-center px-4 py-20 gap-8">
        <div className="max-w-2xl text-white text-left md:text-center">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight drop-shadow-lg">
            {title}
          </h1>

          <p className="mt-4 text-md md:text-xl text-white/90">{subtitle}</p>
        </div>

        <SearchBar />
      </div>
    </section>
  );
}
