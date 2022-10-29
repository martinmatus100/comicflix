import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
        <Link className="footer__nav--lnk" to="/nosotros">
          <h3>Nosotros</h3>
        </Link>
        <Link className="footer__nav--lnk" to="/terminos-y-condiciones">
          <h3>Términos y Condiciones</h3>
        </Link>
        <Link className="footer__nav--lnk" to="/contact">
          <h3>Contacto</h3>
        </Link>
    </footer>
  );
};

export default Footer;
