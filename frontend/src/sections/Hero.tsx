import Button from "../components/Button"
import Container from "../components/Container"
import { heroContent } from "../config/config"



const Hero = () => {
  return (
    <section className="bg-slate-700 text-white">
      <Container className="text-center md:text-left py-10 md:py-20">
        <h1 className="text-4xl md:text-6xl mb-3 font-bold">{heroContent.title}</h1>
        <p className="text-xl md:text-3xl mb-10">{heroContent.subtitle}</p>
        <Button className="w-full md:w-auto" variant="primary" size="lg">{heroContent.cto.text}</Button>
      </Container>
    </section>
  )
}

export default Hero