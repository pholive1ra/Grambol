import { Bus, CreditCard, Smartphone } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const steps = [
  {
    icon: Bus,
    step: "Passo 01",
    title: "Escolha seu destino",
    description:
      "Pesquise entre centenas de rotas e encontre a viagem ideal para você",
  },
  {
    icon: CreditCard,
    step: "Passo 02",
    title: "Pague com facilidade",
    description: "PIX, cartão de crédito em até 6x ou boleto bancário",
  },
  {
    icon: Smartphone,
    step: "Passo 03",
    title: "Embarque digital",
    description: "Receba seu QR Code no celular e embarque sem filas",
  },
];

export default function HowItWorks() {
  return (
    <>
      <SectionHeader
        badge="SIMPLES E RÁPIDO"
        title="Como funciona?"
        description="Em apenas 3 passos você garante sua passagem com o melhor preço"
      />
      <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-5xl mx-auto">
        {steps.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3"
            >
              {/* Ícone */}
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 text-white">
                <Icon size={24} />
              </div>

              {/* Step */}
              <span className="text-xs font-semibold text-violet-400 uppercase">
                {item.step}
              </span>

              {/* Título */}
              <h3 className="font-semibold text-gray-800">{item.title}</h3>

              {/* Descrição */}
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
