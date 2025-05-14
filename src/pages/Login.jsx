import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [errorMessage, SetErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/UserService/login",
        { username, password }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      SetErrorMessage(error.response.data.message);
      setTimeout(() => {
        SetErrorMessage("");
      }, 2000);
    }
  };
  return (
    <>
      <div className="logo">Logo</div>
      <div className="login-container">
        <h2>Sign in or create account</h2>
        <h4>Enter Username</h4>
        <input
          type="text"
          value={username}
          onChange={(e) => SetUsername(e.target.value)}
          className="inputbox"
        />
        <h4>Enter Password</h4>
        <input
          type="text"
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
          className="inputbox"
        />
        <button onClick={handleLogin} className="btn-submit">
          Continue
        </button>
        <div className="error-placeholder">
          {errorMessage && <div className="error-box">{errorMessage}</div>}
        </div>
      </div>
    </>
  );
}

export default Login;
