import Hero from "../componets/Hero/Hero";
import HeroImg from "../assets/3.jpg";
import Cards from "../componets/Cards/Cards";

function Service() {
  return (
    <>
      <Hero cName="Hero" heroImg={HeroImg} title="Services" btnCalss="one" />

      <Cards />
    </>
  );
}
export default Service;
