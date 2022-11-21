import { useCartContext } from "../context/cartContext";
import { useState } from "react";
import { addOrder } from "../api/orders";
import Alert from "react-bootstrap/Alert";

export const Cart = () => {
  const { getTotal, cart, clearCart } = useCartContext();

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [checkout, setCheckout] = useState(false);
  const [show, setShow] = useState(false);
  const [codOrder, setCodOrder] = useState("");


  const createOrder = async () => {
    const items = cart.map(({ id, nombre, qty, precio }) => ({
      id,
      title: nombre,
      qty,
      price: precio,
    }));

    const order = {
      buyer: { customerName, customerPhone, customerEmail },
      items,
      total: getTotal(),
    };

    const idOrder = await addOrder(order);
    setCodOrder(idOrder);
    addOrder(order);
    setShow(true);
    setCheckout(false);

    clearCart();
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case "customerName":
        setCustomerName(event.target.value);
        break;
      case "customerEmail":
        isValidEmail(event.target.value)
          ? setCustomerEmail(event.target.value)
          : setCheckout(true);
        break;
      case "customerPhone":
        setCustomerPhone(event.target.value);
        break;
      default:
        setCustomerName("");
        setCustomerEmail("");
        setCustomerPhone("");
        break;
    }

    customerName.trim() &&
    customerEmail.trim() &&
    customerPhone &&
    getTotal() > 0
      ? setCheckout(true)
      : setCheckout(false);
  };

  return (
    <div className="cart__box">
      <h1>RESUMEN DE COMPRA</h1>
      <ul className="cart__product--list">
        {cart.map((product) => (
          <li key={product.id} className="cart__product--item">
            <div className="cart__product--image">
              <img src={product.imagen} alt={product.nombre} />
            </div>
            <div className="cart__product--info">
              <span className="cart__product--name">{product.nombre}</span>
            </div>
            <div className="cart__product--info-qty">
              <span className="cart__product--qty">
                Cantidad : {product.qty}
              </span>
            </div>
            <div className="cart__product--info-price">
              <span className="cart__product--price">$ {product.precio}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total__box">
        <span className="cart-total__label">TOTAL:</span>
        <span className="cart-total__price"> ${getTotal()} </span>
      </div>
      <div className="cart-form">
        <div className="cart-form__field --name">
          <span>Nombre:</span>
          <input name="customerName" type="text" onChange={handleChange} />
        </div>
        <div className="cart-form__field --email">
          <span>Email:</span>
          <input name="customerEmail" type="email" onChange={handleChange} />
        </div>
        <div className="cart-form__field --phone">
          <span>Teléfono:</span>
          <input name="customerPhone" type="number" onChange={handleChange} />
        </div>
      </div>
      <button
        className="btn btn-checkout"
        onClick={createOrder}
        disabled={!checkout}
      >
        COMPRAR
      </button>
      <Alert show={show} variant="success">
        <p>Su Compra se realizó con éxito.</p>
        <p>Código de la compra: <b>{codOrder}</b></p> 
      </Alert>
    </div>
  );
};
