import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./userContext";
export default function Login() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [passowordShow, setPasswordShow] = useState(false);

  useEffect(() => {
    userEmail.length !== 0 && userPassword.length !== 0
      ? setIsAuthenticated(true)
      : setIsAuthenticated(false);
  });

  return (
    <div className="login">
      <h2>Login </h2>
      <h3>Welcome back to ECOMMERCE</h3>
      <p>The next gen business marketplace</p>

      <label>
        <span>Email</span>
        <input
          placeholder="Enter"
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </label>
      <label className="password">
        <span>Password</span>
        <input
          type={passowordShow ? "text" : "password"}
          placeholder="Enter"
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button
          onClick={() => setPasswordShow(!passowordShow)}
          className="showbutton"
        >
          {passowordShow ? "Hide" : "Show"}
        </button>
      </label>
      <Link to={isAuthenticated ? "/interests" : ""} className="button">
        Login
      </Link>
      <hr />
      <p>
        Don&#39;t have an Account?{" "}
        <Link to="/" className="link">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
