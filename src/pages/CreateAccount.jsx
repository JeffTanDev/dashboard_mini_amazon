import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { CONTENT_SERVICE_URL } from "../config.js";


function CreateAccount() {
  const [password, SetPassword] = useState("");
  const [errorMessage, SetErrorMessage] = useState("");
  const { username } = useParams();
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        `${CONTENT_SERVICE_URL}/UserService/register`,
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
        <h2>create account</h2>
        <h4>Enter Password</h4>
        <input
          type="text"
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
          className="inputbox"
        />
        <button onClick={handleRegister} className="btn-submit">
          Continue
        </button>
        <div className="error-placeholder">
          {errorMessage && <div className="error-box">{errorMessage}</div>}
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
