import React from "react";
import { useState, useEffect } from "react";
import "../CSS/app.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import svg from "./assetsLogin/Login-Page-SVG.svg";
import "react-toastify/dist/ReactToastify.css";

const LoginPageQuizApp = () => {
 const [show, setShow] = useState(false);
 const [type, settype] = useState("password");
 //  const [spin, setspin] = useState(true);
 const navigate = useNavigate();

 //Tostify for Reset Button
 const reset = () => {
  toast.warn("Reset Successfully", {
   autoClose: 1000
  });
 };
 //handleShowPassword for Change the Type of Text in Password Field
 const handleShowPassword = () => {
  console.log("Before: show =", show);
  if (!show) {
   setShow(true);
   settype("text");
   console.log("After (visible): show =", show);
   toast.warn("Password is Visible🙉", {
    autoClose: 1000
   });
  } else {
   setShow(false);
   settype("password");
   console.log("After (hidden): show =", show);
   toast.success("Password is Protected🙈", {
    autoClose: 1000
   });
  }
 };
 //Tostify for Username Input Field
 const uname = () => {
  if (username == "") {
   toast("Enter Your Username.", {
    autoClose: 1000,
    type: "info"
   });
  } else {
   toast("Username Alredy Written✅", {
    autoClose: 1000,
    type: "info"
   });
  }
 };
 //Tostify for Password Input Field
 const pass = () => {
  if (password == "") {
   toast("Enter Your Password.", {
    autoClose: 1000,
    type: "info"
   });
  } else {
   toast("Password Already Written✅", {
    autoClose: 1000,
    type: "info"
   });
  }
 };

 // Theme Stored Start
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
  } else {
   setLightMode();
  }
 };
 // Theme Stored End
 // Camel Case of Any Word Start
 function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
 }
 // Camel Case of Any Word End
 // Backend Connection Start
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const errorShow = () => {
  toast("Invalid Username and Password!!!", { autoClose: 1000, type: "error" });
 };
 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   const response = await axios.post("http://localhost:8080/login", {
    username: username,
    password: password
   });
   //Getting role response from the backend
   const role = response.data;
   console.log(role.role);
   //Handling the response as role based
   if (role.role === "admin") {
    toast.success(
     `Welcome ${username} to ${capitalizeFirstLetter(role.role)} Panel`,
     {
      onClose: () => {
       navigate("/adminpanel/dashboard", {
        state: { username: username, role: role.role }
       });
      },
      autoClose: 500
     }
    );
   } else if (role.role === "student") {
    toast(
     `Welcome ${username} to ${capitalizeFirstLetter(role.role)} Panel`,
     { autoClose: 500, type: "success" },
     {
      onClose: () => {
       navigate("/studentpanel/studentdashboard"),
        {
         state: {
          username: username,
          userid: role.id,
          role: role.role
         }
        };
      }
     }
    );
   } else if (role.role === "faculty") {
    toast(
     `Welcome ${username} to ${capitalizeFirstLetter(role.role)} Panel`,
     { autoClose: 500, type: "success" },
     {
      onClose: () => {
       navigate("/facultypanel/facultydashboard"),
        {
         state: {
          username: username,
          userid: role.id,
          role: role.role
         }
        };
      }
     }
    );
   } else {
    toast(
     `You have not entered the correct credentials or the fields are blank.💀 `,
     {
      autoClose: 1000,
      type: "error"
     }
    );
   }
  } catch (error) {
   errorShow();
  }
 };
 // Backend Connection End
 // Hit Enter Button to Login
 useEffect(() => {
  const handleKeyUp = (e) => {
   if (e.key === "Enter") {
    handleSubmit();
   }
  };

  const inputElement = document.getElementById("inpt2");
  const inputElement1 = document.getElementById("inpt2");
  inputElement.addEventListener("keyup", handleKeyUp);
  inputElement1.addEventListener("keyup", handleKeyUp);

  // Cleanup the event listener on component unmount
  return () => {
   inputElement.removeEventListener("keyup", handleKeyUp);
   inputElement1.removeEventListener("keyup", handleKeyUp);
  };
 }, []);

 //Design Part of Website
 return (
  <>
   <div className="main-div">
    <div className="pic-div">
     <img src={svg} alt="Error69" className="image-svg" />
    </div>
    <div className="form-div">
     <p className="p1" style={{ fontSize: "2.3rem", fontWeight: "500" }}>
      Sign In
     </p>
     <p className="p2">
      Unlock Knowledge, Embrace Fun <br /> Welcome to Quizzify!
     </p>
     <form className="main-form">
      <div className="div-inp1">
       <input
        type="text"
        required
        placeholder="Username"
        className="inpt1"
        name="username"
        id="inpt1"
        autoComplete="off"
        value={username}
        onClick={uname}
        onChange={(e) => setUsername(e.target.value)}
       />
      </div>
      <div className="div-inp2">
       <input
        type={type}
        name="password"
        className="inpt2"
        placeholder="Password"
        required
        id="inpt2"
        value={password}
        onClick={pass}
        onChange={(e) => setPassword(e.target.value)}
       />
       <div onClick={handleShowPassword}>
        {show ? (
         <i className="fa-solid fa-eye-slash"></i>
        ) : (
         <i className="fa-solid fa-eye"></i>
        )}
       </div>
      </div>
      <div className="btn-div">
       <div className="div-btn-1">
        <Link onClick={handleSubmit} id="logins">
         <button className="login-btn" type="submit">
          LogIn
         </button>
        </Link>
       </div>
       <div className="div-btn-2">
        <button className="login-btn1" type="reset" onClick={reset}>
         Reset
        </button>
       </div>
      </div>
     </form>
    </div>
   </div>
   <ToastContainer
    position="top-right"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={true}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    transition:slide
    toastContainerClassName="custom-toast-container"
    limit="5"
    bodyClassName="toastBody"
    progressClassName="toastBody"
   />
  </>
 );
};

export default LoginPageQuizApp;
