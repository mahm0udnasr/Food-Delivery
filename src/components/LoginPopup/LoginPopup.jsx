import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

export default function LoginPopup({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Sign In");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt="cross icon"
            onClick={() => setShowLogin(false)}
            loading="lazy"
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Sign Up" ? (
            <input type="text" placeholder="Your name" required />
          ) : null}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Sign In" ? (
          <p>
            Don't have an account? <span onClick={()=> setCurrentState("Sign Up")}>Create account</span>
          </p>
        ) : (
          <p>
            Alread have an account? <span onClick={()=> setCurrentState("Sign In")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}
