import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Icons from "../Icons/Icons";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
          <NavLink
            to="/developer"
            className={({ isActive }) =>
              isActive ? `${css.navLink} ${css.activeNav}` : css.navLink
            }
          >
            Developer
          </NavLink>
        </nav>
      </header>
      <main className={css.wrapper}>{children}</main>
      {isVisible && (
        <button
          className={`${css.btnToTop} ${isVisible ? css.show : ""}`}
          onClick={scrollToTop}
        >
          <Icons
            width={24}
            height={24}
            iconName="arrowTop"
            className={css.btnToTopIcon}
          />
        </button>
      )}
    </div>
  );
};

export default Layout;
