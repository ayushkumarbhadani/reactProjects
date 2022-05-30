import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Products from "./components/Products";
// import { Link } from "react-router-dom";
import Nav from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
function App() {
  return (
    <BrowserRouter>
      <Nav activeClassName="active" />
      <Routes>
        <Route path="/" element={<div><h1>Home</h1></div>} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:name/details/:id" element={<ProductDetail />} />
        <Route path="*" element={<div><h1>404! Not Found</h1></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
