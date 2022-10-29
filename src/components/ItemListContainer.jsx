import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = (props) => {
  const { idCategory } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProductos([]);
    setLoading(true);
    getProducts(idCategory)
      .then((items) => {
        setProductos(items);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [idCategory]);

  return (
    <main className="mainBox">
      <div className="products">
        {loading ? <Loader /> : null}
        {productos.map((producto) => {
          return (
            <ItemDetailContainer
              key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              categoria={producto.categoria}
              tag={producto.tag}
              precio={producto.precio}
              imagen={producto.imagen}
            />
          );
        })}
      </div>
    </main>
  );
};

export default ItemListContainer;
