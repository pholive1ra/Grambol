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
    <section className="py-10">
      <SectionHeader
        badge="Simples e rápido"
        title="Como funciona?"
        description="Em apenas 3 passos você garante sua passagem com o melhor preço"
      />

      <div className="relative mt-12 px-6 max-w-md mx-auto md:hidden">
        {/* Linha vertical */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 -translate-x-1/2 z-0"></div>

        {steps.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="relative flex flex-col items-center text-center mb-12 z-10"
            >
              {/* Ícone */}
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 text-white">
                <Icon size={24} />
              </div>

              <span className="text-xs font-semibold text-violet-400 uppercase mt-3">
                {item.step}
              </span>

              <h3 className="font-semibold text-gray-800 mt-1">{item.title}</h3>

              <p className="text-gray-500 text-sm mt-1 max-w-xs">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* DESKTOP (grid normal) */}
      <div className="hidden md:grid grid-cols-3 gap-8 mt-4 px-6 max-w-5xl mx-auto">
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
    </section>
  );
}
