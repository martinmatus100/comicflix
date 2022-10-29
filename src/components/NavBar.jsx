import { NavLink } from "react-router-dom";

const links = ["Guantes", "Bolsas", "Protectores", "Accesorios"];

const Navbar = (props) => {
  return (
    <div className="header__nav">
      {links.map((element) => {
        return (
          <NavLink
            className="header__nav--lnk"
            to={`/category/${element.toLowerCase()}`}
            key={element}
          >
            <h3>{element}</h3>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
