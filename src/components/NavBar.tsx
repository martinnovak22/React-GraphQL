import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10 shadow-lg">
      <ul className="flex justify-center space-x-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/characters"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/episodes"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Episodes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/locations"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Locations
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
