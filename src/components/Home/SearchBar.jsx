import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const fields = [
  { title: "Origem", label: "De onde você quer sair?" },
  { title: "Destino", label: "Para onde você quer ir?" },
  { title: "Data de ida", type: "date" },
];

export default function SearchBar() {
  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-lg md:max-w-4xl bg-white p-4 rounded-xl shadow-lg w-full mx-auto">
      {fields.map((field, index) => (
        <div key={index} className="flex flex-col flex-1">
          <p className="p-2 text-gray-500 text-sm">{field.title}</p>

          <TextField
            label={field.label}
            type={field.type || "text"}
            InputLabelProps={field.type === "date" ? { shrink: true } : {}}
            fullWidth
            size="small"
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
