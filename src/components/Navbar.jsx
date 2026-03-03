import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Início");
  const navLinks = [
    { label: "Início", path: "/" },
    { label: "Destinos", path: "/destinos" },
    { label: "Ofertas", path: "/ofertas" },
    { label: "Fale conosco", path: "/fale-conosco" },
  ];
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className="relative flex items-center justify-between gap-2 px-8 py-4 bg-gray-100 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <Link
          to="/"
          className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center"
        >
          <DirectionsBusIcon sx={{ color: "#fff", fontSize: 20 }} />
        </Link>
        <span className="text-xl font-bold">
          <span className="text-violet-600">Rodo</span>
          <span className="text-gray-800">Bus</span>
        </span>
      </div>

      {/* Links - escondido no mobile */}
      <div className="hidden lg:flex items-center gap-4">
        {navLinks.map(({ label, path }) => (
          <Link
            key={label}
            to={path}
            onClick={() => setActiveLink(label)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeLink === label
                ? "bg-white text-gray-800 font-semibold shadow-sm"
                : "text-gray-600 hover:bg-white hover:text-gray-800"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Botões - escondido no mobile */}
      <div className="hidden lg:flex items-center gap-4">
        <Link
          to="/login"
          className="text-sm font-semibold cursor-pointer text-gray-700 hover:text-violet-600 transition-colors"
        >
          Entrar
        </Link>
        <Link
          to="/register"
          className="bg-gradient-to-r cursor-pointer from-violet-600 to-pink-500 text-white text-sm font-semibold px-5 py-2 rounded-xl hover:opacity-90 transition-all"
        >
          Cadastre-se
        </Link>
      </div>

      {/* Hamburguer - só aparece no mobile */}
      <div className="lg:hidden">
        <button
          className="px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                menuAberto ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Menu mobile aberto */}
        {menuAberto && (
          <div className="absolute top-full left-0 w-full bg-gray-100 shadow-md flex flex-col items-center gap-4 py-4">
            {navLinks.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                onClick={() => {
                  setActiveLink(label);
                  setMenuAberto(false);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeLink === label
                    ? "bg-white text-gray-800 font-semibold shadow-sm"
                    : "text-gray-600 hover:bg-white hover:text-gray-800"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 w-full px-8">
              <Link
                to="/login"
                className="text-sm font-medium text-gray-700 hover:text-violet-600 transition-colors"
              >
                Entrar
              </Link>
              <Link
                to="/register"
                className="bg-gradient-to-r cursor-pointer from-violet-600 to-pink-500 text-white text-sm font-semibold px-5 py-2 rounded-xl hover:opacity-90 transition-all"
              >
                Cadastre-se
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
