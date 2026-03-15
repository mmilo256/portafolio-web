import Button from "../components/Button";
import Container from "../components/Container";
import { heroContent } from "../config/config";
import heroBg from "../assets/hero-bg2.jpg";

const Hero = () => {
  const onClick = () => {
    window.location.href = "#contact";
  };

  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
      className="relative text-white"
    >
      <div className="bg-slate-800/60">
        <Container className="z-20 text-center md:text-left pt-60 pb-40">
          <h1 className="text-6xl md:text-6xl mb-3 font-bold">
            {heroContent.title}
          </h1>
          <p className="text-2xl text-white/80 md:text-3xl mb-10">
            {heroContent.subtitle}
          </p>
          <Button
            onClick={onClick}
            className="w-full md:w-auto"
            variant="primary"
            size="lg"
          >
            {heroContent.cto.text}
          </Button>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
