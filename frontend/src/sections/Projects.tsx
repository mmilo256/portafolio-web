import Button from "../components/Button"
import Card from "../components/Card"
import Container from "../components/Container"
import { projectsContent } from "../config/config"
import SectionLayout from "../layouts/SectionLayout"

const Projects = () => {

    const newProjects = projectsContent.projects.slice(0, 4)

    return (
        <SectionLayout title={projectsContent.title} subtitle={projectsContent.subtitle}>
            <Container className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {newProjects.map(project => (
                    <Card key={project.title} img={project.img} title={project.title} description={project.description} />
                ))}
                <Button variant="secondary" size="lg">Ver todos los proyectos</Button>
            </Container>
        </SectionLayout>
    )
}

export default Projects