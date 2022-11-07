import { useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useCartContext } from "../context/cartContext";

const ItemDetailContainer = ({
  id,
  precio,
  imagen,
  nombre,
  categoria,
  tag,
}) => {
  const navigate = useNavigate();
  const { addProduct } = useCartContext();
  return (
    <div className="card" onClick={() => navigate(`/product/${id}`)}>
      <div className="card__top">
        <img src={imagen} alt={nombre} />
      </div>
      <div className="card__content">
        <span className="card__price">${precio}</span>
        <span className="card__name">{nombre}</span>
      </div>
      <div className="card__bottom">
        <div className="card__bottom--primary">
          <button
            className="card__btn btn"
            onClick={(e) => {
              e.stopPropagation();
              addProduct({ id, precio, imagen, nombre, categoria, tag }, 1);
            }}
          >
            Agregar al carrito
          </button>
        </div>
        <div className="card__bottom--secondary">
          <Badge bg="warning" text="dark">
            {tag}
          </Badge>
          <Badge bg="secondary">{categoria}</Badge>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
