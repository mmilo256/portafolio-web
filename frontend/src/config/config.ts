export const navigation = [
  { label: "Inicio", href: "#home" },
  { label: "Proyectos", href: "#projects" },
  { label: "Sobre mi", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

export const socialMedia = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Instagram", href: "#" },
];

export const heroContent = {
  title: "Emilio Soto Andrade",
  /* subtitle: "Desarrollo de sitios y aplicaciones web modernas", */
  subtitle: "Desarrollo sitios y aplicaciones web modernas",
  cto: { text: "Contacto", href: "#" },
};

export const projectsContent = {
  title: "Proyectos",
  subtitle:
    "Colección de trabajos realizados para terceros y proyectos personales",
  projects: [
    {
      title: "Proyecto 01",
      description:
        "Aquí va una breve descripción de lo que vendría siendo el proyecto 01",
      img: "/src/assets/project1.png",
      url: { repo: "#", preview: "#" },
    },
    {
      title: "Proyecto 02",
      description:
        "Aquí va una breve descripción de lo que vendría siendo el proyecto 02",
      img: "/src/assets/project2.png",
      url: { repo: "#", preview: "#" },
    },
    {
      title: "Proyecto 03",
      description:
        "Aquí va una breve descripción de lo que vendría siendo el proyecto 03",
      img: "/src/assets/project3.png",
      url: { repo: "#", preview: "#" },
    },
    {
      title: "Proyecto 04",
      description:
        "Aquí va una breve descripción de lo que vendría siendo el proyecto 04. Aquí va una breve descripción de lo que vendría siendo el proyecto 04",
      img: "/src/assets/project1.png",
      url: { repo: "#", preview: "#" },
    },
  ],
};

export const aboutContent = {
  title: "Sobre mi",
  subtitle: "Alguito poco",
  avatar: "/src/assets/avatar.png",
  content: [
    "Soy ingeniero informático y desarrollador web. Me enfoco en crear aplicaciones web claras, funcionales y bien estructuradas, trabajando principalmente con TypeScript, Express y PostgreSQL. Me gusta mantener el código ordenado y aplicar buenas prácticas.",
    "Fuera del desarrollo, disfruto hacer música y jugar videojuegos. Estas dos cosas también influyen en mi forma de trabajar: me gusta experimentar, crear y mejorar constantemente lo que hago.",
  ],
};

export const contactContent = {
  title: "Contacto",
  subtitle: "Si tienes una idea o proyecto en mente, hablemos.",
};
