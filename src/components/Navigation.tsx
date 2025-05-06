import { NavLink, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  // Your existing Navigation component code
  const location = useLocation();

  return (
    <nav>
      {/* Your existing navigation links */}

      {/* Add these links for the login and signup pages */}
      <NavLink
        to="/login"
        className={location.pathname === "/login" ? "active" : ""}
      >
        Login
      </NavLink>
      <NavLink
        to="/signup"
        className={location.pathname === "/signup" ? "active" : ""}
      >
        Sign UP
      </NavLink>
    </nav>
  );
};

export default Navigation;