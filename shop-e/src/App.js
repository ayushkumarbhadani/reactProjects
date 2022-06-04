import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css';
// import { Link } from "react-router-dom";
import Nav from "./components/Navbar";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <Nav activeClassName="active" />
      <main>
        <Routes style={{ marginTop: "60px" }}>
          <Route path="/" element={<div><h1>Home</h1></div>} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:name/details/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login setUser={setUser} user={user} />} />
          <Route path="*" element={<div><h1>404! Not Found</h1></div>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
