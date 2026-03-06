import Container from "./Container"

const Navbar = () => {
  const navigation = [
    {label: "Inicio", href: "#"},
    {label: "Proyectos", href: "#"},
    {label: "Sobre mi", href: "#"},
    {label: "Contacto", href: "#"}
  ]
  return (
    <nav>
      <Container className="flex justify-between items-center">
        <a href="">Logo</a>
      <ul className="hidden gap-2">
        {navigation.map(item => (
          <li key={item.label}><a href={item.href}>{item.label}</a></li>
        ))}
      </ul>
      <button>Menú</button>
      </Container>
    </nav>
  )
}

export default Navbar