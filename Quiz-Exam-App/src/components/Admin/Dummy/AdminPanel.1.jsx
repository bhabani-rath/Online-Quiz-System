// import React from "react";

// // import "../assetsAdmin/";
// // import profilesimg from "./assetsAdmin/profile-4.jpg";
// // import logo from "./assetsAdmin/questprobelogo.svg";
// // import Sun from "./assetsAdmin/sun.png";
// // import Moon from "./assetsAdmin/moon.png";
// const AdminPanel = () => {
//  //  const [theme, setTheme] = useState(":root");
//  const responsiveBtn = () => {
//   const sideMenu = document.querySelector("aside");
//   const menuBtn = document.getElementById("menu-btn");
//   const closeBtn = document.getElementById("close-btn");
//   menuBtn.addEventListener("click", () => {
//    sideMenu.style.display = "block";
//   });

//   closeBtn.addEventListener("click", () => {
//    sideMenu.style.display = "none";
//   });
//  };
//  const setDarkMode = () => {
//   document.querySelector("body").setAttribute("data-theme", "dark");
//   localStorage.setItem("selectedTheme", "dark");
//  };
//  const setLightMode = () => {
//   document.querySelector("body").setAttribute("data-theme", "light");
//   localStorage.setItem("selectedTheme", "light");
//  };
//  const selectedTheme = localStorage.getItem("selectedTheme");
//  if (selectedTheme === "dark") {
//   setDarkMode();
//  }
//  const toggleTheme = (e) => {
//   if (e.target.checked) {
//    setDarkMode();
//   } else {
//    setLightMode();
//   }
//  };
//  return (
//   <>
//    <div className="container">
//     {/* <!-- =========Start of Sidebar========= --> */}
//     <aside>
//      <div className="top">
//       <div className="logo">
//        <img src={logo} alt="Error Logo" />
//        <h2>
//         QUEST<span className="primary">PROBE</span>
//        </h2>
//       </div>
//       <div className="close" id="close-btn">
//        <span className="material-icons"> close </span>
//       </div>
//      </div>
//      <div className="sidebar">
//       <a href="#" className="">
//        <span className="material-icons"> dashboard </span>
//        <h3>Dashboard</h3>
//       </a>
//       <a href="#" className="">
//        <span className="material-icons"> travel_explore </span>
//        <h3>
//         All Quizzes <span className="message-count">69</span>
//        </h3>
//       </a>
//       <a href="#" className="">
//        <span className="material-icons"> find_in_page </span>
//        <h3>
//         All Technology <span className="message-count">69</span>
//        </h3>
//       </a>
//       <a href="#" className="">
//        <span className="material-icons"> queue </span>
//        <h3>Add Quiz Technology</h3>
//       </a>
//       <a href="#" className="">
//        <span className="material-icons"> verified_user </span>
//        <h3>
//         All Users <span className="message-count">69</span>
//        </h3>
//       </a>
//       <a href="#" className="">
//        <span className="material-icons"> person_add </span>
//        <h3>Add Users</h3>
//       </a>
//       <a href="#" className="">
//        <span className="material-icons"> settings_suggest </span>
//        <h3>Settings</h3>
//       </a>
//       <a href="#" className="">
//        <span className="material-icons">account_circle</span>
//        <h3>Profile</h3>
//       </a>
//       <a href="#">
//        <span className="material-icons"> logout </span>
//        <h3>Logout</h3>
//       </a>
//      </div>
//     </aside>
//     {/* <!-- =========End of Sidebar========= --> */}
//     {/* <!-- =========Start of Main========= --> */}
//     <main>
//      <h1>Dashboard</h1>
//      <div className="insights">
//       {/* <!-- =========Start of Total Quizzes Created========= --> */}
//       <div className="total-quiz">
//        <span className="material-icons">travel_explore</span>
//        <div className="middle">
//         <div className="left">
//          <h3>Total Quizzes Created</h3>
//          <h1>400+</h1>
//         </div>
//        </div>
//        <small className="text-muted">Last 24 Hours</small>
//       </div>
//       {/* <!-- =========End of Total Quizzes Created========= --> */}
//       {/* <!-- =========Start of Total Questions Created========= --> */}
//       <div className="total-questions">
//        <span className="material-icons">quiz</span>
//        <div className="middle">
//         <div className="left">
//          <h3>Total Questions Created</h3>
//          <h1>4000+</h1>
//         </div>
//        </div>
//        <small className="text-muted">Last 24 Hours</small>
//       </div>
//       {/* <!-- =========End of Total Questions Created========= --> */}
//       {/* <!-- =========Start of Total Technologies Created========= --> */}
//       <div className="total-tech">
//        <span className="material-icons">find_in_page</span>
//        <div className="middle">
//         <div className="left">
//          <h3>Total Technologies Created</h3>
//          <h1>40+</h1>
//         </div>
//        </div>
//        <small className="text-muted">Last 24 Hours</small>
//       </div>
//       {/* <!-- =========End of Total Technologies Created========= --> */}
//       {/* <!-- =========Start of Total Faculty and Students Created========= --> */}
//       <div className="total-facstu">
//        <span className="material-icons">verified_user</span>
//        <div className="middle">
//         <div className="left">
//          <h3>Total Faculties Connected</h3>
//          <h1>69</h1>
//         </div>
//        </div>
//        <small className="text-muted">Last 24 Hours</small>
//       </div>
//       {/* <!-- =========End of Total Faculty and Students Created========= --> */}
//       {/* <!-- =========Start of Total Admins Created========= --> */}
//       <div className="total-facstu">
//        <span className="material-icons">admin_panel_settings</span>
//        <div className="middle">
//         <div className="left">
//          <h3>Total Students Connected</h3>
//          <h1>15</h1>
//         </div>
//        </div>
//        <small className="text-muted">Last 24 Hours</small>
//       </div>
//       {/* <!-- =========End of Total Students Created========= --> */}
//       {/* <!-- =========Start of Total Admins Created========= --> */}
//       <div className="total-facstu">
//        <span className="material-icons">admin_panel_settings</span>
//        <div className="middle">
//         <div className="left">
//          <h3>Total Admins Alloted</h3>
//          <h1>15</h1>
//         </div>
//        </div>
//        <small className="text-muted">Last 24 Hours</small>
//       </div>
//       {/* <!-- =========End of Total Admins Created========= --> */}
//      </div>
//      {/* <!-- =========End of Insights========= --> */}
//      {/* <!-- =========Start of All Admins Table========= --> */}
//      <div className="recent-orders">
//       <h2>Admins</h2>
//       <table>
//        <thead>
//         <tr>
//          <th>Sl No.</th>
//          <th>Admin Name</th>
//          <th>Email</th>
//          <th>Contact Number</th>
//          <th>Actions</th>
//         </tr>
//        </thead>
//        <tbody id="adminsTableBody"></tbody>
//       </table>
//      </div>
//      {/* <!-- =========End of All Admins Table========= --> */}
//     </main>
//     {/* <!-- =========End of Main========= --> */}
//     {/* <!-- =========Start of last========= --> */}
//     <div className="right">
//      <div className="top">
//       <button id="menu-btn" onClick={responsiveBtn}>
//        <span className="material-icons">menu</span>
//       </button>
//       <div className="dark_mode">
//        <input
//         className="dark_mode_input"
//         type="checkbox"
//         id="darkmode-toggle"
//         onChange={toggleTheme}
//         defaultChecked={selectedTheme === "dark"}
//        />
//        <label className="dark_mode_label" htmlFor="darkmode-toggle">
//         <img src={Sun} className="sun" alt="69" />
//         <img src={Moon} className="moon" alt="69" />
//        </label>
//       </div>
//       <div className="profile">
//        <div className="info">
//         <p>
//          Hey,<b>Bhabani</b>
//         </p>
//         <small className="text-muted">Admin</small>
//        </div>
//        <div className="profile-photo">
//         <img src={profilesimg} alt="Error-69" />
//        </div>
//       </div>
//      </div>
//     </div>
//     {/* <!-- =========End of last========= --> */}
//    </div>
//   </>
//  );
// };
// export default AdminPanel;
