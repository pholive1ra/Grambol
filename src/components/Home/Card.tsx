import { Shield, Clock, CreditCard, Star, LucideIcon } from "lucide-react";

type CardItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function Card() {
  const cardItems: CardItem[] = [
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
    <div className="grid grid-cols-1 gap-8 px-6 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cardItems.map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="flex items-start gap-4 p-6 transition bg-white border border-gray-200 shadow-sm w-80 sm:mt-10 rounded-xl hover:shadow-md hover:scale-[1.01]"
        >
          <div className="flex items-center justify-center text-white rounded-full w-20 h-10 bg-gradient-to-r from-violet-600 to-pink-500">
            <Icon size={22} />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
