import { useRef } from "react";

// Navbar link items
const navLinks = [
  { id: 1, title: "Home", className: "nav-link" },
  { id: 2, title: "New", className: "nav-link" },
  { id: 3, title: "Popular", className: "nav-link" },
  { id: 4, title: "Trending", className: "nav-link" },
  { id: 5, title: "Categories", className: "nav-link" },
];

export const Navbar = () => {
  // Used to access the navbar menu DOM
  const menu = useRef(null);

  // Hamburger icon to open the menu
  const openMenu = () => {
    menu.current.style.width = "270px";
  };

  // Times icon to close the menu
  const closeMenu = () => {
    menu.current.style.width = "0";
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__brand">
        <img src="./images/logo.svg" alt="logo.svg" />
      </div>

      {/* Hamburger icon */}
      <button
        className="navbar__menu-button"
        onClick={openMenu}
        width={"28px"}
        height={"27px"}
        aria-expanded={"false"}
      >
        <img src="./images/icon-menu.svg" alt="icon-menu.svg" />
      </button>

      {/* Navigation menu */}
      <div className="navbar__navbar-menu" ref={menu}>
        {/* Times icon */}
        <button className="navbar__close-btn" onClick={closeMenu}>
          <img
            src="./images/icon-menu-close.svg"
            alt="icon-menu-close.svg"
            width={"28px"}
            height={"27px"}
          />
        </button>

        {/* Navigation link list items */}
        <ul className="navbar__navbar-items">
          {navLinks.map((x) => {
            return (
              <li key={x.id} className="navbar__navbar-links">
                <a href="#" className={x.className}>
                  {x.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
