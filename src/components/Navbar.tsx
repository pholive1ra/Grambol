import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import { Link } from "react-router-dom";
import { useState } from "react";

type NavLink = {
  label: string;
  path: string;
};

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string>("Início");
  const [menuAberto, setMenuAberto] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { label: "Início", path: "/" },
    { label: "Destinos", path: "/destinos" },
    { label: "Ofertas", path: "/offers" },
    { label: "Fale conosco", path: "/fale-conosco" },
  ];

  function toggleMenu(): void {
    setMenuAberto((prev) => !prev);
  }

  function handleNavigation(label: string): void {
    setActiveLink(label);
    setMenuAberto(false);
  }

  return (
    <nav className="relative flex items-center justify-between gap-2 px-8 py-4 bg-gray-100 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <Link
          to="/"
          className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-pink-500"
        >
          <DirectionsBusIcon sx={{ color: "#fff", fontSize: 20 }} />
        </Link>

        <span className="text-xl font-bold">
          <span className="text-violet-600">Gram</span>
          <span className="text-gray-800">bol</span>
        </span>
      </div>

      {/* Desktop links */}
      <div className="items-center hidden gap-4 lg:flex">
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

      {/* Desktop auth */}
      <div className="items-center hidden gap-4 lg:flex">
        <Link
          to="/login"
          className="text-sm font-semibold text-gray-700 transition-colors cursor-pointer hover:text-violet-600"
        >
          Entrar
        </Link>

        <Link
          to="/register"
          className="px-5 py-2 text-sm font-semibold text-white transition-all rounded-xl cursor-pointer bg-gradient-to-r from-violet-600 to-pink-500 hover:opacity-90"
        >
          Cadastre-se
        </Link>
      </div>

      {/* Mobile */}
      <div className="z-20 lg:hidden">
        <button
          className="px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={toggleMenu}
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

        {menuAberto && (
          <div className="absolute left-0 flex flex-col items-center w-full gap-4 py-4 bg-gray-100 shadow-md top-full">
            {navLinks.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                onClick={() => handleNavigation(label)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeLink === label
                    ? "bg-white text-gray-800 font-semibold shadow-sm"
                    : "text-gray-600 hover:bg-white hover:text-gray-800"
                }`}
              >
                {label}
              </Link>
            ))}

            <div className="flex flex-col h-screen gap-2 px-8">
              <Link
                to="/login"
                className="text-sm font-medium text-center text-gray-700 transition-colors hover:text-violet-600"
              >
                Entrar
              </Link>

              <Link
                to="/register"
                className="px-5 py-2 text-sm font-semibold text-white transition-all rounded-xl cursor-pointer bg-gradient-to-r from-violet-600 to-pink-500 hover:opacity-90"
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
