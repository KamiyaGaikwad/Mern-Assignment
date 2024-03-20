// import { useState } from "react";
import { Link } from "react-router-dom";
export default function SignUp() {
  // const [userName, setUserName] = useState();
  // const [userEmail, setUserEmail] = useState();
  // const [userPassword, setUserPassword] = useState();
  return (
    <div className="signup">
      <h2>Create your account</h2>
      <label>
        <span>Name</span>
        <input
          placeholder="Enter Name"
          // onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <label>
        <span>Email</span>
        <input
          placeholder="Enter Email"
          // onChange={(e) => setUserEmail(e.target.value)}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          placeholder="Enter Password"
          // onChange={(e) => setUserPassword(e.target.value)}
        />
      </label>
      <Link to="/verifyemail" className="button">
        Create account
      </Link>
      <p>
        Have an Account?{" "}
        <Link to="/login" className="link">
          Login
        </Link>
      </p>
    </div>
  );
}
