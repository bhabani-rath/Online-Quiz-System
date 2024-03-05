import React, { useState, useEffect } from "react";
import Aside from "./Elements/Aside";
import Profile from "./Elements/Profile";
import { useLocation } from "react-router-dom";

const AdminPanel = ({ children }) => {
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const loadingTimeout = setTimeout(() => {
   setLoading(false);
  }, 500);

  // Clear the timeout if the component unmounts
  return () => clearTimeout(loadingTimeout);
 }, []); // Empty dependency array ensures the effect runs only once
 const { state } = useLocation();
 const { username, role } = state || {};
 return (
  <>
   {loading ? (
    // Loading screen with added loader
    <div className="loading-screen">
     <div className="loader JS_on">
      <span className="binary"></span>
      <span className="binary"></span>
      <span className="getting-there">LOADING STUFF...</span>
     </div>
    </div>
   ) : (
    // Content when loading is complete
    <div className="containers">
     <Aside />
     <div username={username} role={role}>
      {children}
     </div>
     <Profile username={username} role={role} />
    </div>
   )}
  </>
 );
};

export default AdminPanel;
