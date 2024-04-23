import { useRef } from "react";

const navLinks = [
  { id: 1, title: "Home", className: "nav-item" },
  { id: 2, title: "New", className: "nav-item" },
  { id: 3, title: "Popular", className: "nav-item" },
  { id: 4, title: "Trending", className: "nav-item" },
  { id: 5, title: "Categories", className: "nav-item" },
];

export const Navbar = () => {
  const menu = useRef(null);

  const openMenu = () => {
    menu.current.style.width = "270px";
  };

  const close = () => {
    menu.current.style.width = "0";
  };
  
  return (
    <nav className="navbar">
      <div className="brand">
        <img src="./images/logo.svg" alt="logo.svg" />
      </div>

      <a href="#" className="toggle-button" onClick={openMenu}>
        <img src="./images/icon-menu.svg" alt="icon-menu.svg" />
      </a>

      <div className="navbar-links" ref={menu}>
        <a href="#" className="close-btn" onClick={close}>
          <img src="./images/icon-menu-close.svg" alt="icon-menu-close.svg" />
        </a>
        <ul>
          {navLinks.map((x) => {
            return (
              <li key={x.id}>
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
