export type WeeklyPromos = {
  day: string;
  route: string;
  seats: number;
  price: number;
  oldPrice: number;
};

export const weeklyPromos: WeeklyPromos[] = [
  {
    day: "Seg, Qua, Sex",
    route: "Rio → Cabo Frio",
    seats: 12,
    price: 39.9,
    oldPrice: 69.9,
  },
  {
    day: "Ter, Qui",
    route: "Rio → Paraty",
    seats: 8,
    price: 79.9,
    oldPrice: 119.9,
  },
  {
    day: "Todos os dias",
    route: "Rio → Niterói",
    seats: 30,
    price: 14.9,
    oldPrice: 29.9,
  },
  {
    day: "Dom, Seg",
    route: "Rio → São Paulo",
    seats: 20,
    price: 69.9,
    oldPrice: 89.9,
  },
];
