import { projectsContent } from "../../config/config";
import SectionLayout from "../../layouts/SectionLayout";
import Card from "../Card";
import Container from "../Container";

const Proyectos = () => {
  return (
    <SectionLayout
      id="pagina-proyectos"
      title={projectsContent.title}
      subtitle={projectsContent.subtitle}
    >
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projectsContent.projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              img={project.img}
            />
          ))}
        </div>
      </Container>
    </SectionLayout>
  );
};

export default Proyectos;
