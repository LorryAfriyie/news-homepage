import { useRef, useEffect } from "react";

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
  const closeBtn = useRef(null);
  const openBtn = useRef(null);
  const body = document.querySelector("body");
  const media = window.matchMedia("(width < 40em)");

  function setupTopNav(e) {
    if (e.matches) {
      console.log("mobile");
      menu.current.setAttribute("inert", "");
      menu.current.style.transition = "none";
    } else {
      console.log("desktop/tablet");
      menu.current.removeAttribute("inert");
      closeMenu();
    }
  }

  // Hamburger icon to open the menu
  const openMenu = () => {
    openBtn.current.setAttribute("aria-expanded", "true");
    menu.current.removeAttribute("inert");
    menu.current.removeAttribute("style");
    closeBtn.current.focus();
    body.classList.add("overlay");
  };

  // Times icon to close the menu
  const closeMenu = () => {
    openBtn.current.setAttribute("aria-expanded", "false");
    menu.current.setAttribute("inert", "");
    closeBtn.current.focus();
    body.classList.remove("overlay");

    setTimeout(() => {
      menu.current.style.transition = "none";
    }, 500);
  };

  /* useEffect(() => {
    setupTopNav(media);
  }, [media]); */

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__brand">
        <img src="./images/logo.svg" alt="logo.svg" />
      </div>

      {/* Hamburger icon */}
      <span id="nav-label" hidden>
        Navigation
      </span>
      <button
        className="navbar__menu-button"
        onClick={openMenu}
        ref={openBtn}
        aria-expanded={"false"}
        aria-labelledby="nav-label"
      >
        <img
          src="./images/icon-menu.svg"
          alt="icon-menu.svg"
          width={"40px"}
          height={"24px"}
        />
      </button>

      {/* Navigation menu */}
      <div
        className="navbar__navbar-menu"
        ref={menu}
        role="dialog"
        aria-labelledby="nav-label"
      >
        {/* Times icon */}
        <button
          className="navbar__close-btn"
          onClick={closeMenu}
          ref={closeBtn}
          aria-label="close"
        >
          <img src="./images/icon-menu-close.svg" alt="icon-menu-close.svg" />
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
