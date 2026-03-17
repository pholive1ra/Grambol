import { supabase } from "../../lib/supabase";
import { useEffect, useState } from "react";

export default function DestinationsCards() {
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
      <div>
        {rotas.map((rota) => (
          <div key={rota.id}>
            <h3>
              {rota.origem} → {rota.destino}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}
