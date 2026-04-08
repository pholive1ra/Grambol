export default function ImagePanel({ image, title, description }) {
  return (
    <>
      <div className="relative h-full hidden lg:block">
        {/* Imagem */}
        <img
          src={image}
          alt={title || "Register Image"}
          className="w-full h-full object-cover"
        />

        {/* Overlay em gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Conteúdo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/40 backdrop-blur-sm p-10 rounded-2xl text-center text-white max-w-lg">
            <h2 className="text-4xl font-bold leading-tight">{title}</h2>

            <p className="mt-4 text-lg text-white/90">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
