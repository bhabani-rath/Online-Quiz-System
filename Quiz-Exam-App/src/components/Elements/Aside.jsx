import React from "react";
import logo from "../Admin/assetsAdmin/questprobelogo.svg";
import { Link } from "react-router-dom";

const Aside = (username) => {
 return (
  <div>
   {/* <!-- =========Start of Sidebar========= --> */}
   <aside>
    <div className="top">
     <div className="logo">
      <img src={logo} alt="Error Logo" />
      <h2>
       QUEST<span className="primary">PROBE</span>
      </h2>
     </div>
     <div className="close" id="close-btn">
      <span className="material-icons"> close </span>
     </div>
    </div>
    <div className="sidebar">
     <Link to="/main" className={location.pathname === "/main" ? "active" : ""}>
      <span className="material-icons"> dashboard </span>
      <h3>Dashboard</h3>
     </Link>
     <Link
      to="/allquiz"
      className={location.pathname === "/allquiz" ? "active" : ""}
     >
      <span className="material-icons"> travel_explore </span>
      <h3>
       Quizzes <span className="message-count">69</span>
      </h3>
     </Link>
     <Link
      to="/alltech"
      className={location.pathname === "/alltech" ? "active" : ""}
     >
      <span className="material-icons"> find_in_page </span>
      <h3>
       All Techs <span className="message-count">69</span>
      </h3>
     </Link>
     <Link
      to="/addtech"
      className={location.pathname === "/addtech" ? "active" : ""}
     >
      <span className="material-icons"> queue </span>
      <h3>Add Quiz Tech</h3>
     </Link>
     <Link
      to="/alluser"
      className={location.pathname === "/alluser" ? "active" : ""}
     >
      <span className="material-icons"> verified_user </span>
      <h3>
       All Users <span className="message-count">69</span>
      </h3>
     </Link>
     <Link
      to="/adduser"
      className={location.pathname === "/adduser" ? "active" : ""}
     >
      <span className="material-icons"> person_add </span>
      <h3>Add Users</h3>
     </Link>
     <Link
      to="/admin"
      className={location.pathname === "/admin" ? "active" : ""}
     >
      <span className="material-icons"> admin_panel_settings </span>
      <h3>Admins</h3>
     </Link>
     <Link
      to="/profiles"
      className={location.pathname === "/profiles" ? "active" : ""}
     >
      <span className="material-icons">account_circle</span>
      <h3>Profile</h3>
     </Link>
     <Link to="/landpage">
      <span className="material-icons"> logout </span>
      <h3>Logout</h3>
     </Link>
    </div>
   </aside>
   {/* <!-- =========End of Sidebar========= --> */}
  </div>
 );
};

export default Aside;
