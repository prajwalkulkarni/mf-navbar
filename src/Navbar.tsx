import "./style.css";

export const Navbar = (props) => {
  return (
    <nav>
      <div className="nav-links">
        <a href="/">Home</a>
      </div>
      <div className="nav-links">
        <a href="/planets">Planets</a>
      </div>
    </nav>
  );
};
