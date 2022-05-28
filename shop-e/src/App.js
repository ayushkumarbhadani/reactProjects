import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Link } from "react-router-dom";
import Nav from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Nav activeClassName="active" />
    </BrowserRouter>
  );
}

export default App;
