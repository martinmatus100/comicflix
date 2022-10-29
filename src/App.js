import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Layout } from "./components/Layout";
import { Category } from "./pages/Category";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path={"/category/:idCategory"} element={<Category />} />
            <Route path={"/product/:idProduct"} element={<Detail />} />
            <Route path="/cart" element={<h1>CARRO</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
