import { supabase } from "../../lib/supabase";
import { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";

export default function SectionDestinationsCards() {
  const [rotas, setRotas] = useState([]);
  useEffect(() => {
    async function fetchRotas() {
      const { data, error } = await supabase.from("rotas").select("*");

      if (error) {
        console.log(error);
      } else {
        setRotas(data);
      }
    }
    fetchRotas();
  }, []);
  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rotas.map((rota) => (
            <DestinationCard key={rota.id} rota={rota} />
          ))}
        </div>
      </div>
    </>
  );
}
