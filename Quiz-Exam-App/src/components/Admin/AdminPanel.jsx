import React, { useState, useEffect } from "react";
import Aside from "./Elements/Aside";
import Profile from "./Elements/Profile";

const AdminPanel = ({ children }) => {
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const loadingTimeout = setTimeout(() => {
   setLoading(false);
  }, 500);

  // Clear the timeout if the component unmounts
  return () => clearTimeout(loadingTimeout);
 }, []); // Empty dependency array ensures the effect runs only once
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
     <div>{children}</div>
     <Profile />
    </div>
   )}
  </>
 );
};

export default AdminPanel;
