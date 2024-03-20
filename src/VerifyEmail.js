import { Link } from "react-router-dom";
import OtpForm from "./OtpForm";

export default function VerifyEmail() {
  return (
    <div className="email-verify">
      <h2>Verify your email</h2>
      <p className="text">Enter the 8 digit code you have received on </p>
      <p>swa***@gmail.com</p>
      <label>
        <span>Code</span>
        <OtpForm />
      </label>
      <Link to="/interests" className="button">
        VERIFY
      </Link>
    </div>
  );
}
