import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

type FieldItem = {
  title: string;
  label?: string;
  type?: "text" | "date";
};

export default function SearchBar() {
  const fields: FieldItem[] = [
    { title: "Origem", label: "De onde você quer sair?" },
    { title: "Destino", label: "Para onde você quer ir?" },
    { title: "Data de ida", type: "date" },
  ];

  return (
    <div className="flex flex-col w-full max-w-lg gap-4 p-4 mx-auto bg-white shadow-lg md:flex-row md:max-w-4xl rounded-xl">
      {fields.map(({ title, label, type = "text" }) => (
        <div key={title} className="flex flex-col flex-1">
          <p className="p-2 text-sm text-gray-500">{title}</p>

          <TextField
            label={label}
            type={type}
            InputLabelProps={type === "date" ? { shrink: true } : {}}
            fullWidth
            size="small"
          />
        </div>
      ))}

      <div className="flex items-end">
        <Link
          to="/"
          className="flex items-center justify-center w-full px-6 py-2 font-semibold text-white transition-all bg-gradient-to-r from-violet-600 to-pink-500 rounded-xl hover:opacity-90 md:w-auto"
        >
          Buscar
        </Link>
      </div>
    </div>
  );
}
