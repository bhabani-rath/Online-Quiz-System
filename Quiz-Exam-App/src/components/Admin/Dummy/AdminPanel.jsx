import React, { useEffect } from "react";
import Aside from "./Elements/Aside";
import Profile from "./Elements/Profile";

const AdminPanel = ({ children }) => {
 return (
  <>
   <div className="containers">
    <Aside />
    <div>{children}</div>
    <Profile />
   </div>
  </>
 );
};

export default AdminPanel;
