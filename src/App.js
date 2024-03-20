import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Interests from "./Interests";
import SignUp from "./SignUp";
import Login from "./Login";
import VerifyEmail from "./VerifyEmail";

export default function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="top-bar">
          <span>Help</span>
          <span>Orders & Returns</span>
          <span>Hi, John</span>
        </div>
        <div className="nav-items">
          <h1>ECOMMERCE</h1>
          <div className="nav-links">
            <a>Categories</a>
            <a>Sale</a>
            <a>Clearance</a>
            <a>New Stock</a>
            <a>Trending</a>
          </div>
          <div className="search-cart">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
        <div className="offer">
          <button>&lt;</button>
          <p>Get 10% off on bussiness signup</p>
          <button>&gt;</button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/interests" element={<Interests />} />
      </Routes>
    </div>
  );
}
