import { NavLink } from "react-router";
import { useLikes } from "../context/LikesContext";

export const Header = () => {
  const { likes } = useLikes();

  return (
    <header className="py-4 px-6 bg-white shadow-sm flex justify-between items-center max-w-2xl mx-auto rounded-xl my-4">
      <nav className="flex gap-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "font-bold text-blue-600 border-b-2 border-blue-600"
              : "text-slate-600 hover:text-slate-900"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-blue-600 border-b-2 border-blue-600"
              : "text-slate-600 hover:text-slate-900"
          }
        >
          Skills
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-blue-600 border-b-2 border-blue-600"
              : "text-slate-600 hover:text-slate-900"
          }
        >
          Contact
        </NavLink>
      </nav>

      <div className="text-sm font-semibold text-red-500">♥ {likes}</div>
    </header>
  );
};
