import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
 const navigate = useNavigate();

 useEffect(() => {
  let login = localStorage.getItem("login");
  if (!login) {
   navigate("/");
  }
 }, [navigate]);

 return <Component {...rest} />;
}

export default ProtectedRoute;
