import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users">Mes utilisateurs</Link>
      <Link to="/calcul">Ma calculatrice</Link>
    </nav>
  );
};

export default NavBar;
