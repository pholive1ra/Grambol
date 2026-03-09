import Hero from "../components/Home/Hero";
import ImageHero from "../assets/image/image-home.jpg";
import Card from "../components/Home/Card";

export default function Home() {
  return (
    <>
      <Hero
        image={ImageHero}
        title="Seu próximo destino começa aqui!"
        subtitle="Explore os melhores destinos, ofertas exclusivas e reserve sua próxima viagem com facilidade."
      />
      <Card />
    </>
  );
}
