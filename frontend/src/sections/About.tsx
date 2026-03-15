import Container from "../components/Container";

import { aboutContent } from "../config/config";
import SectionLayout from "../layouts/SectionLayout";

const About = () => {
  return (
    <SectionLayout id="about" title={aboutContent.title} dark>
      <Container className="flex flex-col md:gap-18 md:flex-row items-center md:items-start justify-between">
        <div className="py-4 md:pt-0">
          <img
            src={aboutContent.avatar}
            className="max-w-70 rounded-full"
            alt=""
          />
        </div>
        <div>
          {aboutContent.content.map((p) => (
            <p
              className="mb-4 text-lg md:text-base text-center md:text-left"
              key={p}
            >
              {p}
            </p>
          ))}
        </div>
      </Container>
    </SectionLayout>
  );
};

export default About;
