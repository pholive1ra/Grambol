type Route = {
  imagem_url: string;
  destino: string;
  origem: string;
  empresa: string;
  preco: number;
};

type DestinationCardProps = {
  rota: Route;
};

export default function DestinationCard({ rota }: DestinationCardProps) {
  return (
    <div className="overflow-hidden transition bg-white shadow-md rounded-xl hover:scale-[1.02]">
      {/* IMAGEM */}
      <div className="relative h-48">
        <img
          src={rota.imagem_url}
          alt={rota.destino}
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute text-white bottom-3 left-3">
          <p className="text-xs">📍 {rota.origem}</p>
          <h3 className="text-lg font-semibold">{rota.destino}</h3>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="flex flex-col gap-3 p-4">
        <p className="text-sm text-gray-600">
          Viagem com a empresa {rota.empresa}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">A partir de</p>
            <p className="text-lg font-bold text-purple-600">
              R$ {rota.preco.toFixed(2)}
            </p>
          </div>

          <button className="px-3 py-1 text-sm text-purple-600 transition rounded-full cursor-pointer bg-purple-100 hover:bg-purple-200 hover:opacity-90">
            Ver passagens →
          </button>
        </div>
      </div>
    </div>
  );
}
