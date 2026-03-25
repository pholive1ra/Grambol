import { Star, UserRound } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const testimonials = [
  {
    name: "Mariana Silva",
    description:
      "Super prático! Comprei minha passagem em 2 minutos e o QR Code funcionou perfeitamente no embarque.",
    location: "Rio de Janeiro",
  },
  {
    name: "Carlos Eduardo",
    description:
      "Melhor preço que encontrei na internet. Já viajei 3 vezes usando a plataforma e sempre foi uma ótima experiência.",
    location: "São Paulo",
  },
  {
    name: "Ana Beatriz",
    description:
      "O atendimento ao cliente é excelente. Tive um problema e resolveram em minutos. Recomendo demais!",
    location: "Belo Horizonte",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12">
      <SectionHeader badge="Depoimentos" title="O que dizem nossos viajantes" />

      <div className="max-w-6xl mx-auto px-6 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-4"
              >
                <div className="flex gap-1 text-violet-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Texto */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  "{item.description}"
                </p>

                {/* Usuário */}
                <div className="flex items-center gap-3 mt-2">
                  {/* Avatar */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold">
                    <UserRound size={24} />
                  </div>

                  {/* Nome + cidade */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      {item.name}
                    </h4>
                    <span className="text-xs text-gray-500">
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
