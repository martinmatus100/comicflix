import { useCartContext } from "../context/cartContext";

export const Cart = () => {
  const { cart } = useCartContext();

  return (
    <ul className="cart__product--list">
      {cart.map((product) => (
        <li key={product.id} className="cart__product--item">
          <div className="cart__product--image">
            <img src={product.imagen} alt={product.nombre} />
          </div>
          <div className="cart__product--info">
            <span className="cart__product--name">{product.nombre}</span>
            <span className="cart__product--qty">Cantidad : {product.qty}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
