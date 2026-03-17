import { Shield, Clock, CreditCard, Star } from "lucide-react";

export default function Card() {
  const CardItems = [
    {
      icon: Shield,
      title: "Compra segura",
      description: "Pagamento criptografado e garantia de embarque",
    },
    {
      icon: Clock,
      title: "Embarque rápido",
      description: "QR code direto no celular, sem filas",
    },
    {
      icon: CreditCard,
      title: "Melhor preço",
      description: "Parcelamento em até 6x sem juros",
    },
    {
      icon: Star,
      title: "Fidelidade",
      description: "Acumule pontos e ganhe descontos exclusivos",
    },
  ];

  return (
    <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 mx-auto">
      {CardItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="w-80 p-6 border sm:mt-10 border-gray-200 flex items-start gap-4 rounded-xl bg-white shadow-sm hover:shadow-md hover:scale-101 transition"
          >
            {/* Ícone */}
            <div className="flex items-center justify-center w-20 h-10 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white">
              <Icon size={22} />
            </div>

            {/* Texto */}
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
