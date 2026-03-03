import ImagePanel from "../components/ImagePanel";
import ImageLogin from "../assets/image/image-login.jpeg";
import LoginForm from "../components/Login/LoginForm";

export default function Login() {
  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {/* Lado da imagem */}
      <div className="hidden lg:block lg:w-1/2">
        <ImagePanel
          image={ImageLogin}
          title="Bem-vindo de volta!"
          description="Faça login para continuar explorando nossas passagens."
        />
      </div>

      {/* Lado do formulário */}
      <div className="w-full min-h-screen lg:w-1/2 flex items-center justify-center bg-gray-300">
        <LoginForm />
      </div>
    </div>
  );
}
