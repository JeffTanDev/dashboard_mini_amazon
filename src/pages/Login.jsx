import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CONTENT_SERVICE_URL = import.meta.env.VITE_CONTENT_SERVICE_URL;

function Login() {
  const [username, SetUsername] = useState("");
  const [errorMessage, SetErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleNameCheck = async () => {
    try {
      const response = await axios.post(
        `${CONTENT_SERVICE_URL}/UserService/checkUsername`,
        { username }
      );
      const data = response.data;
      console.log(data.message);
      if (data.message === "exist") {
        navigate(`/SignIn/${username}`);
      } else {
        navigate(`/CreateAccount/${username}`);
      }
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
        <button onClick={handleNameCheck} className="btn-submit">
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
