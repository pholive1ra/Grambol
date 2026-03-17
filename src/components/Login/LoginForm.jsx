import { TextField } from "@mui/material";
import Logo from "../../components/Logo";
import { Button } from "@mui/material";
import { useState } from "react";
import { signIn } from "../../lib/auth";

const fields = [
  { label: "E-mail", type: "email" },
  { label: "Senha", type: "password" },
];

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const { error } = await signIn(email, password);

    if (error) {
      alert(error);
    } else {
      alert("Logado com sucesso!");
    }
  }

  return (
    <>
      <div className="bg-white rounded-lg w-96 flex items-center justify-center flex-col gap-8 mb-6 shadow-lg p-8">
        <Logo />
        <div>
          <h2 className="text-2xl font-bold text-center py-2">Login</h2>
          <h3 className="text-sm text-gray-600">
            Preencha os campos abaixo para acessar sua conta
          </h3>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {fields.map(({ label, type }) => (
            <TextField
              key={label}
              id={label}
              size="small"
              label={label}
              type={type}
              variant="outlined"
              value={type === "email" ? email : password}
              onChange={(e) =>
                type === "email"
                  ? setEmail(e.target.value)
                  : setPassword(e.target.value)
              }
            />
          ))}
          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{
              backgroundColor: "#7C3AED",
              "&:hover": { backgroundColor: "#6D28D9" },
            }}
          >
            Entrar
          </Button>
        </form>
      </div>
    </>
  );
}
