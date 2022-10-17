import Navbar from "./NavBar";
import CartWidget from "./CartWidget";

const Header = (props) => {
  return (
    <header className="header">
      <a className="header__logo" href="/">
        <h1>
          R<span>13</span>
        </h1>
      </a>
      <Navbar />
      <CartWidget />
    </header>
  );
};

export default Header;
