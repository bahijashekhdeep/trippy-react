import Hero from "../componets/Hero/Hero";
import HeroImg from "../assets/2.jpg";
import Contactt from "../componets/Contact/Contact";
function Contact() {
  return (
    <>
      <Hero cName="Hero" heroImg={HeroImg} title="Contact" btnCalss="one" />

      <Contactt />
    </>
  );
}
export default Contact;
