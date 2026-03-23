import Hero from "../components/Home/Hero";
import ImageHero from "../assets/image/image-home.jpg";
import Card from "../components/Home/Card";
import DestinationsIntro from "../components/Home/DestinationsIntro";
import SectionDestinationsCards from "../components/Home/SectionDestinationsCards";

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
        <SectionDestinationsCards />
      </div>
    </>
  );
}
