import { NavLink, useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

import "./Header.styles.scss"
import { memo } from "react";
import { MENUS } from "../../lib/constants/menu";

function HeaderComponent() {
  const lenis = useLenis()
  const location = useLocation()

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <NavLink
            to="/"
            onClick={() => lenis?.scrollTo(0)}
            className={({ isActive }) => {
              return isActive && location.hash === ""
                ? "header__logo-link header__logo-link--active"
                : "header__logo-link"
            }}
          >
            <span>HOME</span>
          </NavLink>
        </div>

        <nav className="header__nav">
          <ul className="nav__lists">
            {MENUS.map(menu => (
              <li>
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
                  {menu.title}
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
                  LOGIN
                </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default memo(HeaderComponent)
