const navLinks = [
  { id: 1, title: "Home" },
  { id: 2, title: "New" },
  { id: 3, title: "Popular" },
  { id: 4, title: "Trending" },
  { id: 5, title: "Categories" },
];

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <ul>
          {navLinks.map((x) => {
            return (
              <li key={x.id}>
                <a href="">{x.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
