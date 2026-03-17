// SEM contexto — roda isso e vê funcionar

function Avatar({ nome }) {
  return <p>Olá, {nome}!</p>;
}

function Menu({ nome }) {}

function Navbar({ nome }) {}

export default function App() {
  return <Navbar nome="Pedro" />;
}
