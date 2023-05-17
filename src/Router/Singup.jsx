import Hero from "../componets/Hero/Hero";
import HeroImg from "../assets/2.jpg";
import Sing from "../componets/Singup/Sing";

function Singup() {
  return (
    <>
      <Hero cName="Hero" heroImg={HeroImg} title="Sing Up" btnCalss="one" />

      <Sing />
    </>
  );
}
export default Singup;
