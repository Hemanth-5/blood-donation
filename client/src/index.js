import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";

const mainRoutes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Dashboard,
  },
  {
    path: "/profile",
    component: null,
  },
  {
    path: "/request",
    component: null,
  },
  {
    path: "/search",
    component: null,
  },
  {
    path: "/map",
    component: null,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="15461s6691040-2fkj18abf29ehtjisd1adlouo5sdvek3.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          {mainRoutes.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
