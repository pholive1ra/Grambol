import Hero from "../components/Home/Hero";
import ImageHero from "../assets/image/image-home.jpg";
import Card from "../components/Home/Card";
import DestinationsIntro from "../components/Home/DestinationsIntro";
import DestinationsCards from "../components/Home/DestinationsCards";

export default function Home() {
  return (
    <>
      <div className="bg-[#f0f0f5]">
        <Hero
          image={ImageHero}
          title="Seu próximo destino começa aqui!"
          subtitle="Explore os melhores destinos, ofertas exclusivas e reserve sua próxima viagem com facilidade."
        />
        <Card />
        <DestinationsIntro />
        <DestinationsCards />
      </div>
    </>
  );
}
