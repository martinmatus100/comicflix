import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiGymBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import { Cart } from "../pages/Cart";

const CartWidget = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {cart, getCartQty, getTotal} = useCartContext();
  console.log({ cart });

  return (
    <>
      <Button className="main__btn --cart" variant="dark" onClick={handleShow}>
        <GiGymBag />
        <span className="minicart__qty">{getCartQty()}</span>
      </Button>

      <Offcanvas className="minicart__canvas" show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>MI CARRITO</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="minicart__box">
            <Cart></Cart>
          </div>
          <div className="minicart__bottom">
            <div className="minicart__totals">
              <span className="minicart__label">TOTAL: </span>
              <span className="minicart__total">${getTotal()}</span>
            </div>
            <Link className="btn btn-goToCart" to="/cart">
              Ir al carro
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartWidget;
