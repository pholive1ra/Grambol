import Hero from "../components/Hero";
import ImageHero from "../assets/image/image-home.jpg";

export default function Home() {
  return (
    <Hero
      image={ImageHero}
      title="Seu próximo destino começa aqui!"
      subtitle="Explore os melhores destinos, ofertas exclusivas e reserve sua próxima viagem com facilidade."
    />
  );
}
