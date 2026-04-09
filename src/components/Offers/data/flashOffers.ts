export type FlashOffer = {
  category: string;
  route: string;
  price: number;
  oldPrice: number;
  discount: string;
  expiresIn: string;
};

export const flashOffers: FlashOffer[] = [
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
    oldPrice: 249,
    discount: "-40%",
    expiresIn: "Expira em 5h 12min",
  },
  {
    category: "Semi-leito",
    route: "Rio → Búzios",
    price: 49.9,
    oldPrice: 99.9,
    discount: "-50%",
    expiresIn: "Expira em 1h 08min",
  },
];
