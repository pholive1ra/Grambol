export default function DestinationsIntro() {
  const texts = [
    { item: "Destinos populares" },
    { item: "Para onde você quer ir?" },
    {
      item: "Descubra os destinos mais procurados e encontre as melhores ofertas de passagens",
    },
  ];

  return (
    <div className="py-10 mt-12 flex flex-col justify-center text-center items-center gap-3">
      {/* Badge */}
      <span className="text-xs font-semibold tracking-widest text-[#7c6fd4] bg-[#e2ddfa] px-4 py-1.5 rounded-full uppercase">
        {texts[0].item}
      </span>

      {/* Heading */}
      <h2 className="text-3xl font-bold text-[#1a1a2e] leading-tight">
        {texts[1].item}
      </h2>

      {/* Subtitle */}
      <p className="text-sm text-[#9090a0] max-w-xs leading-relaxed">
        {texts[2].item}
      </p>
    </div>
  );
}
