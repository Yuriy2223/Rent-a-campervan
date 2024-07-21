import { NavLink } from "react-router-dom";
import css from "./Layout.module.css";

const Layout = ({ children }) => (
  <div className={css.layoutContainer}>
    <header className={css.header}>
      <nav className={css.headerNav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${css.navLink} ${css.activeNav}` : css.navLink
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive ? `${css.navLink} ${css.activeNav}` : css.navLink
          }
        >
          Catalog
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? `${css.navLink} ${css.activeNav}` : css.navLink
          }
        >
          Favorites
        </NavLink>
      </nav>
    </header>
    <main>{children}</main>
  </div>
);

export default Layout;
