export default function DestinationCard({ rota }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition">
      {/* IMAGEM */}
      <div className="relative h-48">
        <img
          src={rota.imagem_url}
          alt={rota.destino}
          className="w-full h-full object-cover"
        />

        {/* OVERLAY ESCURO */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* TEXTO NA IMAGEM */}
        <div className="absolute bottom-3 left-3 text-white">
          <p className="text-xs">📍 {rota.origem}</p>
          <h3 className="text-lg font-semibold">{rota.destino}</h3>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="p-4 flex flex-col gap-3">
        {/* DESCRIÇÃO */}
        <p className="text-sm text-gray-600">
          Viagem com a empresa {rota.empresa}
        </p>

        {/* PREÇO + BOTÃO */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-400">A partir de</p>
            <p className="text-purple-600 font-bold text-lg">
              R$ {rota.preco.toFixed(2)}
            </p>
          </div>

          <button className="bg-purple-100 cursor-pointer text-purple-600 px-3 py-1 rounded-full text-sm hover:bg-purple-200 transition">
            Ver passagens →
          </button>
        </div>
      </div>
    </div>
  );
}
