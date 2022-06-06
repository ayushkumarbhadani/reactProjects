import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import './App.css';
// import { Link } from "react-router-dom";
import Nav from "./components/Navbar";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import Logout from "./components/Logout";
function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <Nav activeClassName="active" user={user} />
      <main>
        <Routes>
          <Route path="/" element={<h3 style={{ textAlign: "center" }}><Link to="/products" className="primary-btn">Click here to Go to Products Page</Link></h3>} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:name/details/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/logout" element={<Logout setUser={setUser} />} />
          <Route path="*" element={<div><h1>404! Not Found</h1></div>} />
        </Routes>
      </main>
    </BrowserRouter >
  );
}

export default App;
