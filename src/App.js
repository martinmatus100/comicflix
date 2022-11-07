import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Layout } from "./components/Layout";
import { Category } from "./pages/Category";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { CartProvider } from "./context/cartContext";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Layout />}>
              <Route index element={<Home />} />
              <Route path={"/category/:idCategory"} element={<Category />} />
              <Route path={"/product/:idProduct"} element={<Detail />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
