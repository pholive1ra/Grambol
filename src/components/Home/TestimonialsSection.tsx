import { Star, UserRound } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

type Testimonial = {
  name: string;
  description: string;
  location: string;
};

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
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

  return (
    <section className="py-12">
      <SectionHeader badge="Depoimentos" title="O que dizem nossos viajantes" />

      <div className="max-w-6xl px-6 mx-auto mt-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ name, description, location }) => (
            <div
              key={name}
              className="flex flex-col gap-4 p-6 bg-white shadow-sm rounded-xl"
            >
              <div className="flex gap-1 text-violet-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-gray-600">
                "{description}"
              </p>

              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center justify-center w-10 h-10 font-semibold text-white rounded-full bg-gradient-to-r from-violet-600 to-pink-500">
                  <UserRound size={24} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    {name}
                  </h4>
                  <span className="text-xs text-gray-500">{location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
