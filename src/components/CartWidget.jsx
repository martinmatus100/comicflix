import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiGymBag } from "react-icons/gi";
import { Link } from "react-router-dom";

const CartWidget = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="main__btn --cart" variant="dark" onClick={handleShow}>
        <GiGymBag />
      </Button>

      <Offcanvas className="minicart__canvas" show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>MI CARRITO</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="minicart__box"></div>
          <div className="minicart__bottom">
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
