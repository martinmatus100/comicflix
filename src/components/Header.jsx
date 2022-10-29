import Navbar from "./NavBar";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <h1>
          R<span>13</span>
        </h1>
      </Link>
      <Navbar />
      <CartWidget />
    </header>
  );
};

export default Header;
