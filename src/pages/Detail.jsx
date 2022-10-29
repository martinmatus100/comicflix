import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/products";
import { Loader } from "../components/Loader";
import Badge from "react-bootstrap/Badge";
import Counter from "../components/Counter";

export const Detail = () => {
  const { idProduct } = useParams({});
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProduct(idProduct).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [idProduct]);
  return (
    <div className="product-detail">
      {loading ? <Loader /> : null}
      <div className="product-detail__left">
        <span className="product-detail--name">{product?.nombre}</span>
        <span className="product-detail--price">${product?.precio}</span>
        <div className="product-detail--info">
          <span className="product-detail--sku">SKU: {product?.id}</span>
          <Badge className="product-detail--category" bg="secondary">
            {product?.categoria}
          </Badge>
          <Badge className="product-detail--tag" bg="warning" text="dark">
            {product?.tag}
          </Badge>
        </div>
        <div className="product-detail--bottom">
          <Counter onAdd={() => console.log("Agregando...")} stock={20}></Counter>
        </div>
      </div>
      <div className="product-detail__right">
        <img src={product?.imagen} alt={product?.nombre} />
      </div>
    </div>
  );
};
