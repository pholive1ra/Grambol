import { TextField, Button } from "@mui/material";
import Logo from "../Logo";
import { useState } from "react";
import { signUp } from "../../lib/auth";

const fields = [
  { label: "Nome completo", name: "nome", type: "text" },
  { label: "CPF", name: "cpf", type: "text" },
  { label: "E-mail", name: "email", type: "email" },
  { label: "Senha", name: "password", type: "password" },
  { label: "Confirmar senha", name: "confirmPassword", type: "password" },
];

export default function RegisterForm() {
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  async function handleRegister(e) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    const { error } = await signUp(form.email, form.password);

    if (error) {
      alert(error.message);
    } else {
      alert("Registrado com sucesso!");
    }
  }

  return (
    <div className="bg-white rounded-lg w-96 flex flex-col gap-4 shadow-lg p-8">
      <Logo />

      <div>
        <h2 className="text-2xl text-center font-bold">Cadastro</h2>
        <h3 className="text-sm text-gray-600">
          Preencha os campos abaixo para criar sua conta
        </h3>
      </div>

      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        {fields.map(({ label, name, type }) => (
          <TextField
            key={name}
            label={label}
            type={type}
            size="small"
            value={form[name]}
            onChange={(e) =>
              setForm({
                ...form,
                [name]: e.target.value,
              })
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
          Criar conta
        </Button>
      </form>
    </div>
  );
}
