const navLinks = [
  { id: 1, title: "Home", className: "nav-item" },
  { id: 2, title: "New", className: "nav-item" },
  { id: 3, title: "Popular", className: "nav-item" },
  { id: 4, title: "Trending", className: "nav-item" },
  { id: 5, title: "Categories", className: "nav-item" },
];

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src="./images/logo.svg" alt="logo.svg" />
      </div>

      <a href="#" className="toggle-button">
        <img src="./images/icon-menu.svg" alt="icon-menu.svg" />
      </a>

      <div className="navbar-links">
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
