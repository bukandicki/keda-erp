import { NavLink, useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";
import { lazy, memo, useRef } from "react";
import { MENUS } from "../../lib/constants/menu";

import gsap from "gsap";

import HamburgerIcon from "../../assets/svgs/hamburger.svg"
import CloseIcon from "../../assets/svgs/close.svg"

const AnimatedText = lazy(() => import("../../components/AnimatedText"))

import "./Header.styles.scss"

function HeaderComponent() {
  const navRef = useRef<HTMLElement>(null)

  const lenis = useLenis()
  const location = useLocation()

  const handleMobileMenuClicked = (state: "open" | "closed") => {
    gsap.to(navRef.current, {
      left: state === "open" ? 0 : "-100%"
    })
  }

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <button
            className="header__hamburger"
            onClick={() => handleMobileMenuClicked("open")}
          >
            <HamburgerIcon />
          </button>

          <NavLink
            to="/"
            onClick={() => lenis?.scrollTo(0)}
            className={({ isActive }) => {
              return isActive && location.hash === ""
                ? "header__logo-link header__logo-link--active"
                : "header__logo-link"
            }}
          >
            <span>
              <AnimatedText
                value="HOME"
              />
            </span>
          </NavLink>
        </div>

        <nav className="header__nav" ref={navRef}>
          <button
            className="nav__close"
            onClick={() => handleMobileMenuClicked("closed")}
          >
            <CloseIcon />
          </button>

          <ul className="nav__lists">
            {MENUS.map((menu, idx) => (
              <li key={idx}>
                <NavLink
                  to={menu.hash ? menu.to + menu.hash : menu.to}
                  onClick={() => lenis?.scrollTo(menu.hash)}
                  className={({ isActive }) => {
                    let active = false

                    if (!menu.hash) active = isActive
                    else active = location.hash === menu.hash

                    return active
                      ? "nav__item nav__item--active"
                      : "nav__item"
                  }}
                >
                  <AnimatedText
                    value={menu.title}
                  />
                </NavLink>
              </li>
            ))}

            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => {
                  return isActive
                    ? "nav__item-login nav__item-login--active"
                    : "nav__item-login"
                }}
                >
                <AnimatedText
                  value="LOGIN"
                />
                </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default memo(HeaderComponent)
