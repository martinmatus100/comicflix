import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiGymBag } from 'react-icons/gi';

const CartWidget = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="main__btn --cart" variant="dark" onClick={handleShow}>
      <GiGymBag />
      </Button>

      <Offcanvas show={show} onHide={handleClose}  placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>MI CARRITO</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt dignissimos vitae at assumenda fugiat voluptates natus earum quaerat unde numquam necessitatibus aut fugit amet, mollitia temporibus perferendis accusamus placeat. */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartWidget;
