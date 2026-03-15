import Button from "../components/Button";
import Container from "../components/Container";
import Input from "../components/Input";
import Textarea from "../components/Textarea";

import { contactContent } from "../config/config";
import SectionLayout from "../layouts/SectionLayout";

const Contact = () => {
  return (
    <SectionLayout
      id="contact"
      title={contactContent.title}
      subtitle={contactContent.subtitle}
    >
      <Container className=" pb-20">
        <form className="bg-white p-6 rounded shadow shadow-slate-400 max-w-180 mx-auto">
          <div className="flex flex-col md:flex-row md:gap-6">
            <Input label="Nombre" name="nombre" />
            <Input label="Correo electrónico" name="email" type="email" />
          </div>
          <Textarea label="Mensaje" name="message" />
          <Button className="w-full" size="lg">
            Enviar
          </Button>
        </form>
      </Container>
    </SectionLayout>
  );
};

export default Contact;
