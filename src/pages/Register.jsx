import RegisterForm from "../components/Register/RegisterForm";
import ImagePanel from "../components/ImagePanel";
import ImageRegister from "../assets/image/image-register.jpeg";

export default function Register() {
  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {/* Lado da imagem */}
      <div className="hidden lg:block lg:w-1/2">
        <ImagePanel
          image={ImageRegister}
          title="Descubra seu próximo destino"
          description="Cadastre-se e ganhe 15% de desconto na sua primeira passagem."
        />
      </div>

      {/* Lado do formulário */}
      <div className="w-full min-h-screen lg:w-1/2 flex items-center justify-center bg-gray-300">
        <RegisterForm />
      </div>
    </div>
  );
}
