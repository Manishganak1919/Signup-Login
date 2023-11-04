import React, { useState } from "react";
import "./LoginSignup.css";

import user_icon from "../../Assets/person.png";
import email_icon from "../../Assets/email.png";
import password_icon from "../../Assets/password.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="Container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline">_</div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="name" />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forget-password">
          Lost password ? <span>Click here</span>
        </div>
      )}
      <div className="submit_container">
        <div
          className={action === "Login" ? "Submit gray" : "Submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign up
        </div>
        <div
          className={action === "Sign Up" ? "Submit gray" : "Submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Log in
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
