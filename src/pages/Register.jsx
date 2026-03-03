import RegisterForm from "../components/Register/RegisterForm";
import RegisterImagePanel from "../components/Register/RegisterImagePanel";

export default function Register() {
  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {/* Lado da imagem */}
      <div className="hidden lg:block lg:w-1/2">
        <RegisterImagePanel />
      </div>

      {/* Lado do formulário */}
      <div className="w-full min-h-screen lg:w-1/2 flex items-center justify-center bg-gray-300">
        <RegisterForm />
      </div>
    </div>
  );
}
