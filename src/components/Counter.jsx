import Button from "./Button";
import { useState } from "react";

const Counter = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(0);

  const handleAdd = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const handleSubtract = () => {
    if (contador > 0) setContador(contador - 1);
  };

  return (
    <div className="counter__box">
      <div className="counter__qty">
        <Button onClick={() => handleSubtract()} children="-" />
        <span className="counter__qty--text">{contador}</span>
        <Button
          onClick={() => handleAdd()}
          children="+"
        />
      </div>
      <div className="counter__submit">
        <Button
          onClick={() => {
            if (contador) onAdd();
          }}
          children="Agregar al carrito"
        />
      </div>
    </div>
  );
};

export default Counter;
