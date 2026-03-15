import { useNavigate } from "react-router";
import Button from "../components/Button";
import Card from "../components/Card";
import Container from "../components/Container";
import { projectsContent } from "../config/config";
import SectionLayout from "../layouts/SectionLayout";

const Projects = () => {
  const navigate = useNavigate();

  const newProjects = projectsContent.projects.slice(0, 4);

  const onClick = () => {
    navigate("proyectos");
  };

  return (
    <SectionLayout
      id="projects"
      title={projectsContent.title}
      subtitle={projectsContent.subtitle}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newProjects.map((project) => (
            <Card
              key={project.title}
              img={project.img}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
        <Button
          onClick={onClick}
          className="w-full mt-10"
          variant="secondary"
          size="lg"
        >
          Ver todos los proyectos
        </Button>
      </Container>
    </SectionLayout>
  );
};

export default Projects;
