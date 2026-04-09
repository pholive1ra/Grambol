import SectionHeader from "../ui/SectionHeader";
import { Zap } from "lucide-react";
import FlashOfferCard from "./FlashOfferCard";
import WeeklyPromoCard from "./WeeklyPromoCard";

import { flashOffers } from "./data/flashOffers";
import { weeklyPromos } from "./data/weeklyPromos";

export default function OffersHero() {
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
