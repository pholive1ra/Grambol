import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const fields = [
  {
    title: "Origem",
    label: "De onde você quer sair?",
  },
  {
    title: "Destino",
    label: "Para onde você quer ir?",
  },
  { title: "Data de ida", type: "date" },
];

export default function SearchBar() {
  return (
    <div className="mt-8 flex flex-col md:flex-row gap-4 max-w-sm md:max-w-4xl bg-white p-4 rounded-xl shadow-lg w-full mx-auto">
      {fields.map((fields, index) => (
        <div key={index} className="flex flex-col flex-1">
          <p className="p-2 text-gray-500 text-sm">{fields.title}</p>
          <TextField
            label={fields.label}
            InputLabelProps={
              fields.type === "date" ? { shrink: true, type: "date" } : {}
            }
            fullWidth
            size="small"
            type={fields.type || "text"}
          />
        </div>
      ))}

      <div className="flex items-end">
        <Link
          to="/"
          className="bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold px-6 py-2 rounded-xl hover:opacity-90 transition-all w-full md:w-auto flex items-center justify-center"
        >
          Buscar
        </Link>
      </div>
    </div>
  );
}
