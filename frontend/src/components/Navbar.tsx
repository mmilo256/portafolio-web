import { useState } from "react";
import Container from "./Container";
import { navigation } from "../config/config";
import logo from "../assets/logo-light.png";
import { NavLink, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  const [toggleMenu, setToggleMenu] = useState(false);

  const onToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      {/* Menú móvil */}
      <ul
        className={`z-20 ${
          toggleMenu ? "w-auto" : "w-0"
        } overflow-hidden flex md:hidden fixed flex-col gap-2 inset-0 right-20 sm:right-80 pt-24 bg-white/95 border border-slate-300`}
      >
        {navigation.map((item) => (
          <li
            onClick={() => {
              setToggleMenu(false);
            }}
            key={item.label}
          >
            {isHome ? (
              <a
                className="py-4 px-4 block border-b border-slate-200"
                href={`${item.href}`}
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                className="py-4 px-4 block border-b border-slate-200"
                to={`/${item.href}`}
              >
                {item.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
      <nav className="bg-white border-b z-10 border-slate-300 h-20 fixed w-full">
        <Container className="flex h-full justify-between items-center">
          <a href="#">
            <img className="w-18" src={logo} alt="" />
          </a>

          {/* Menú pantallas grandes */}
          <ul className="hidden md:flex gap-4">
            {navigation.map((item) => (
              <li
                onClick={() => {
                  setToggleMenu(false);
                }}
                key={item.label}
              >
                {isHome ? (
                  <a href={`${item.href}`}>{item.label}</a>
                ) : (
                  <NavLink to={`/${item.href}`}>{item.label}</NavLink>
                )}
              </li>
            ))}
          </ul>
          <button className="md:hidden" onClick={onToggleMenu}>
            Menú
          </button>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
