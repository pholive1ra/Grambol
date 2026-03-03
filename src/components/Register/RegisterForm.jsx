import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { Button } from "@mui/material";

export default function RegisterForm() {
  return (
    <>
      <div className="bg-white rounded-lg w-96 flex items-center justify-center flex-col gap-4 mb-6 shadow-lg p-8">
        <Logo />
        <div>
          <h2 className="text-2xl font-bold">Cadastro</h2>
          <h3 className="text-sm text-gray-600">
            Preencha os campos abaixo para criar sua conta
          </h3>
        </div>
        <form className="flex flex-col gap-4">
          <TextField
            id="outlined-basic"
            size="small"
            label="Nome completo"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="Insira seu CPF"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="E-mail"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="Senha"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="Confirmar senha"
            variant="outlined"
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#7C3AED",
              "&:hover": { backgroundColor: "#6D28D9" },
            }}
          >
            Criar conta
          </Button>
        </form>
      </div>
    </>
  );
}
