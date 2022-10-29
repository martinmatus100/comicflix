import { useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

const ItemDetailContainer = (props) => {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/product/${props.id}`)}>
      <div className="card__top">
        <img src={props.imagen} alt={props.nombre} />
      </div>
      <div className="card__content">
        <span className="card__price">${props.precio}</span>
        <span className="card__name">{props.nombre}</span>
      </div>
      <div className="card__bottom">
        <Badge bg="warning" text="dark">
          {props.tag}
        </Badge>
        <Badge bg="secondary">{props.categoria}</Badge>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
