import React from "react";
import Aside from "../Elements/Aside";
import Profile from "../Elements/Profile";

const AdminPanel = ({ children }) => {
 const titleBarNotification = () => {
     let doctitle = document.title;
     window.addEventListener()
 };
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
