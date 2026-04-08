import { supabase } from "../../lib/supabase";
import { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";

type Route = {
  id: number;
  imagem_url: string;
  destino: string;
  origem: string;
  empresa: string;
  preco: number;
};

export default function SectionDestinationsCards() {
  const [rotas, setRotas] = useState<Route[]>([]);

  useEffect(() => {
    async function fetchRotas(): Promise<void> {
      const { data, error } = await supabase.from("rotas").select("*");

      if (error) {
        console.error(error);
        return;
      }

      if (data) {
        setRotas(data as Route[]);
      }
    }

    fetchRotas();
  }, []);

  return (
    <div className="max-w-6xl px-4 mx-auto">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rotas.map((rota) => (
          <DestinationCard key={rota.id} rota={rota} />
        ))}
      </div>
    </div>
  );
}
