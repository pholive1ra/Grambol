import { Clock } from "lucide-react";
import { flashOffers } from "./data/flashOffers";

type FlashOfferCardProps = {
  category: string;
  discount: string;
  expiresIn: string;
  route: string;
  price: number;
  oldPrice: number;
};

export default function FlashOfferCard({
  category,
  discount,
  expiresIn,
  route,
  price,
  oldPrice,
}: FlashOfferCardProps) {
  return (
    <div className="overflow-hidden transition-all duration-300 shadow-sm rounded-3xl hover:shadow-lg">
      <div className="flex items-center justify-between px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-pink-500">
        <span>{discount}</span>
        <span className="text-sm">{expiresIn}</span>
      </div>

      <div className="p-5 space-y-4">
        <p className="text-sm text-muted-foreground">{category}</p>

        <h3 className="text-2xl font-bold">{route}</h3>

        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-violet-600">
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>

          <span className="text-sm line-through text-muted-foreground">
            {oldPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>

        <button className="w-full py-3 hover:cursor-pointer font-semibold text-zinc-900 bg-white border border-zinc-500 rounded-2xl hover:bg-zinc-50 transition-colors">
          Garantir oferta →
        </button>
      </div>
    </div>
  );
}
