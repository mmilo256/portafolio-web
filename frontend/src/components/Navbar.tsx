import { useState } from "react";
import Container from "./Container";
import { navigation } from "../config/config";
import logo from "../assets/logo-light.png";
import { NavLink, useLocation } from "react-router";
import { IoIosMenu } from "react-icons/io";
import RedesSociales from "./RedesSociales";

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
        className={`pl-4 z-20 ${toggleMenu ? "translate-x-0" : "-translate-x-full"
          } overflow-hidden md:hidden fixed inset-0 right-20 sm:right-80 pt-24 bg-white/95 border border-slate-300`}
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
                className="font-bold uppercase py-8 block hover:bg-slate-500 hover:text-white"
                href={`${item.href}`}
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                className="font-bold uppercase py-8 block hover:bg-slate-500 hover:text-white"
                to={`/${item.href}`}
              >
                {item.label}
              </NavLink>
            )}
          </li>
        ))}
        <hr className="my-4 pr-10" />
        <RedesSociales />
      </ul>
      <nav className="bg-white border-b z-10 border-slate-300 h-20 fixed w-full">
        <Container className="flex h-full justify-between items-center">
          <a href="/">
            <img className="w-18" src={logo} alt="logo" />
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
                  <a className="hover:border-b-2 hover:border-blue-300 font-bold uppercase" href={`${item.href}`}>{item.label}</a>
                ) : (
                  <NavLink className="hover:border-b-2 hover:border-blue-300 font-bold uppercase" to={`/${item.href}`}>{item.label}</NavLink>
                )}
              </li>
            ))}
          </ul>
          <button className="md:hidden cursor-pointer hover:bg-slate-200 active:bg-slate-200 rounded" onClick={onToggleMenu}>
            <IoIosMenu size={50} />
          </button>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
