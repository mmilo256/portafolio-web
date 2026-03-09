import { useState } from "react"
import Container from "./Container"
import { navigation } from "../config/config"

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  const onToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <nav className="bg-white border-b border-slate-300 h-20">
      <Container className="flex h-full justify-between items-center">
        <a href="#">Logo</a>
        {/* Menú móvil */}
        <ul className={`${toggleMenu ? "w-auto" : "w-0"} overflow-hidden flex md:hidden absolute flex-col gap-2 inset-0 right-20 sm:right-80 pt-10 bg-sky-600/95`}>
          {navigation.map(item => (
            <li onClick={() => { setToggleMenu(false) }} key={item.label}><a className="py-4 px-4 block" href={item.href}>{item.label}</a></li>
          ))}
        </ul>
        {/* Menú pantallas grandes */}
        <ul className="hidden md:flex gap-4">
          {navigation.map(item => (
            <li onClick={() => { setToggleMenu(false) }} key={item.label}><a className="block" href={item.href}>{item.label}</a></li>
          ))}
        </ul>
        <button className="md:hidden" onClick={onToggleMenu}>Menú</button>
      </Container>
    </nav>
  )
}

export default Navbar