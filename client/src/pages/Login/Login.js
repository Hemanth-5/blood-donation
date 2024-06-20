import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const handleLoginSuccess = async (response) => {
    try {
      const res = await axios.post("http://localhost:5001/auth/google", {
        token: response.credential,
      });

      localStorage.setItem("token", res.data.token);
      <Navigate to="/home" />;
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLoginFailure = (error) => {
    console.error("Login failed", error);
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
    </div>
  );
};

export default Login;
