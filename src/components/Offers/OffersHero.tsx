import SectionHeader from "../ui/SectionHeader";
import { Zap } from "lucide-react";
import FlashOfferCard from "./FlashOfferCard";

export default function OffersHero() {
  const flashOffers = [
    {
      category: "Executivo",
      route: "Rio → São Paulo",
      price: 59.9,
      oldPrice: 129.9,
      discount: "-54%",
      expiresIn: "Expira em 2h 34min",
    },
    {
      category: "Leito",
      route: "Rio → Florianópolis",
      price: 149.9,
      oldPrice: 249.0,
      discount: "-40%",
      expiresIn: "Expira em 5h 12 min",
    },
    {
      category: "Semi-leito",
      route: "Rio → Búzios",
      price: 49.9,
      oldPrice: 99.9,
      discount: "-50%",
      expiresIn: "Expira em 1h 08 min",
    },
  ];

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader
          badge="% OFERTAS ESPECIAIS"
          title="Viaje pagando menos"
          description="Promoções exclusivas atualizadas diariamente. Garanta sua passagem com até 60% de desconto."
          titleSize="lg"
          descriptionSize="md"
        />
        <div className="flex items-center">
          <div className="flex items-center justify-center m-6 text-white rounded-full w-10 h-10 bg-gradient-to-r from-violet-600 to-pink-500">
            <Zap size={22} />
          </div>
          <h3 className="text-lg font-bold">Ofertas Relâmpago</h3>
          <p className="text-zinc-400 text-sm ml-5 mb-3 text-muted-foreground">
            Tempo limitado!
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 mt-12">
          {flashOffers.map((offer) => (
            <FlashOfferCard key={offer.route} {...offer} />
          ))}
        </div>
      </section>
    </>
  );
}
