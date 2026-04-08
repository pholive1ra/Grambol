import { TextField, Button } from "@mui/material";
import { useState } from "react";
import Logo from "../../components/Logo";
import { signIn } from "../../lib/auth";

type LoginField = {
  label: string;
  type: "email" | "password";
};

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const fields: LoginField[] = [
    { label: "E-mail", type: "email" },
    { label: "Senha", type: "password" },
  ];

  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();

    const { error } = await signIn(email, password);

    if (error) {
      alert(error.message ?? "Erro ao fazer login");
      return;
    }

    alert("Logado com sucesso!");
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 mb-6 bg-white shadow-lg w-96 rounded-lg">
      <Logo />

      <div>
        <h2 className="py-2 text-2xl font-bold text-center">Login</h2>
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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
  );
}
