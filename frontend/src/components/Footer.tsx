import { navigation, socialMedia } from "../config/config";
import Container from "./Container";
import logo from "../assets/logo-dark.png";

const Footer = () => {
  return (
    <footer className="text-white bg-[#222831]">
      <Container className="grid grid-cols-1 md:grid-cols-3 items-center md:items-start py-4">
        <a className="" href="#">
          <img className="max-w-28 mx-auto md:mx-0" src={logo} alt="" />
        </a>
        <div className="text-center md:text-left">
          <h3 className="pt-1 pb-2 font-bold text-lg">Navegación</h3>
          <ul className="flex flex-col gap-2">
            {navigation.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="pt-1 pb-2 font-bold text-lg">Redes Sociales</h3>
          <ul className="flex flex-col gap-2">
            {socialMedia.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="bg-[#191c20]">
        <Container className="">
          <p className="py-4 text-center font-bold">
            Todos los derechos reservados © 2026
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
