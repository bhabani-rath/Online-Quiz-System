import React from "react";
import profilesimg from "../assetsAdmin/profile-4.jpg";
import Sun from "../assetsAdmin/sun.png";
import Moon from "../assetsAdmin/moon.png";
import LoginPageQuizApp from "../../Login/LoginPageQuizApp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Profile = ({ username, role }) => {
 const responsiveBtn = () => {
  const sideMenu = document.querySelector("aside");
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  menuBtn.addEventListener("click", () => {
   sideMenu.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
   sideMenu.style.display = "none";
  });
 };
 const setDarkMode = () => {
  document.querySelector("body").setAttribute("data-theme", "dark");
  localStorage.setItem("selectedTheme", "dark");
 };
 const setLightMode = () => {
  document.querySelector("body").setAttribute("data-theme", "light");
  localStorage.setItem("selectedTheme", "light");
 };
 const selectedTheme = localStorage.getItem("selectedTheme");
 if (selectedTheme === "dark") {
  setDarkMode();
 }
 const toggleTheme = (e) => {
  if (e.target.checked) {
   setDarkMode();
   const suns = document.getElementById("suns");
   const moons = document.getElementById("moons");
   suns.style.display = "none";
   moons.style.display = "block";
   suns.style.cursor = "pointer";
   moons.style.cursor = "pointer";
  } else {
   setLightMode();
   const suns = document.getElementById("suns");
   const moons = document.getElementById("moons");
   suns.style.display = "block";
   moons.style.display = "none";
   suns.style.cursor = "pointer";
   moons.style.cursor = "pointer";
  }
 };

 return (
  <div>
   {/* <!-- =========Start of last========= --> */}
   <div className="right">
    <div className="top">
     <button id="menu-btn" onClick={responsiveBtn}>
      <span className="material-icons">menu</span>
     </button>
     <div className="dark_mode">
      <input
       className="dark_mode_input"
       type="checkbox"
       id="darkmode-toggle"
       onChange={toggleTheme}
       defaultChecked={selectedTheme === "dark"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
       <img src={Sun} className="sun" id="suns" alt="69" />
       <img src={Moon} className="moon" id="moons" alt="69" />
      </label>
     </div>
     <div className="profile">
      <div className="info">
       <p>
        Hey, <b>{username}</b>
       </p>
       <small className="text-muted">{role}</small>
      </div>
      <div className="profile-photo">
       <img src={profilesimg} alt="Error-69" />
      </div>
     </div>
    </div>
   </div>
   {/* <!-- =========End of last========= --> */}
  </div>
 );
};

export default Profile;
