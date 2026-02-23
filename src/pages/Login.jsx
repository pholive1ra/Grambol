import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { Button } from "@mui/material";

export default function Login() {
  return (
    <>
      <div className="bg-gray-300 min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg w-96 flex flex-col gap-4 shadow-lg p-8">
          <Logo />
          <div>
            <h2 className="text-2xl font-bold">Login</h2>
            <h3>Entre com sua conta para começar.</h3>
          </div>
          <form className="flex flex-col gap-4">
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
            <Link className="text-sm py-4 text-violet-600 hover:underline">
              Esqueceu sua senha?
            </Link>
            <div>
              <p>
                Ainda não tem uma conta?{" "}
                <Link
                  to="/register"
                  className="text-violet-600 hover:underline"
                >
                  Cadastre-se
                </Link>
              </p>
            </div>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#7C3AED",
                "&:hover": { backgroundColor: "#6D28D9" },
              }}
            >
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
