import { NavLink } from "react-router";
import { useLikes } from "../context/LikesContext";
import logo from "../assets/logo.svg";

export const Header = () => {
  const { likes } = useLikes();

  return (
    <header className="site-header">
      <div className="header-inner">
        <div
          className="brand"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-2)",
          }}
        >
          <img src={logo} alt="" width={32} height={32} />
          <span style={{ fontWeight: 600 }}>Orazaly Kasymbek</span>
        </div>

        <nav style={{ display: "flex", gap: "var(--space-4)" }}>
          <NavLink end to="/">
            Home
          </NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div>
          <span>❤️ {likes}</span>
        </div>
      </div>
    </header>
  );
};
