import React from "react";
import AdminPanel from "../AdminPanel";
import { useEffect, useState } from "react";
import {
 GetUserById,
 InsertUser,
 UpdateUser
} from "../../Services/UserService";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../CSS/app.css";

const AddUser = () => {
 // Camel Case of Any Word Start
 function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
 }
 // Camel Case of Any Word End
 /*<---=========Backend Start=========---> */
 const [role, setRole] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [username, setUsername] = useState("");
 const { id } = useParams();
 const navigate = useNavigate();
 useEffect(() => {
  if (id) {
   GetUserById(id).then((response) => {
    console.log(response);
    setEmail(response.data.email);
    setPassword(response.data.password);
    setUsername(response.data.username);
    setRole(response.data.role);
   });
  }
 }, [id]);

 const pageTitle = () => {
  if (id) {
   return <p className="text-center">Update User</p>;
  } else {
   return <p className="text-center">Add User</p>;
  }
 };
 const pageTitles = () => {
  if (id) {
   return <p className="text-center">Update Faculty or Student or Admins</p>;
  } else {
   return <p className="text-center">Add Faculty or Student or Admins</p>;
  }
 };
 const saveOrUpdate = (e) => {
  e.preventDefault();

  const user = { email, password, username, role };

  if (id) {
   UpdateUser(user, id)
    .then((response) => {
     console.log(response.data);
     toast.success(`${capitalizeFirstLetter(role)} Updated Successfully`);
    })
    .catch((error) => {
     toast.error("Error updating user");
    });
  } else {
   InsertUser(user)
    .then((response) => {
     console.log(response);

     setEmail("");
     setPassword("");
     setUsername("");
     setRole("");

     if (response.status === 200) {
      toast.success(`New ${role} Added Successfully`);
     } else {
      toast.error("Something went wrong!");
     }
    })
    .catch((error) => {
     toast.error("Error adding new user");
    });
  }
 };
 /*<---=========Backend End=========---> */
 const resetForm = () => {
  setUsername("");
  setPassword("");
  setEmail("");
 };
 //handleShowPassword for Change the Type of Text in Password Field
 const [show, setShow] = useState(false);
 const [type, settype] = useState("password");
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
 return (
  <AdminPanel>
   <main>
    <h1>{pageTitle()}</h1>
    <div className="form-addorupdate">
     <div className="div-adduserform">
      <form className="form-section">
       <h1 className="p1">{pageTitle()}</h1>
       <h2 className="p3" style={{ fontWeight: "500" }}>
        {pageTitles()}
       </h2>
       <div className="input-mail-addUser">
        <input
         type="email"
         name="email"
         className="adduser-inp-1"
         placeholder="Email"
         id="adduser-inp-1"
         autoComplete="off"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         required
        />
       </div>
       <div className="input-username-addUser">
        <input
         type="text"
         name="text"
         id="adduser-inp-2"
         className="adduser-inp-2"
         placeholder="Username"
         autoComplete="off"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         required
        />
       </div>
       <div className="input-password-addUser">
        <input
         type={type}
         name="password"
         id="adduser-inp-3"
         className="adduser-inp-3"
         placeholder="Password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         required
        />{" "}
        <div onClick={handleShowPassword}>
         {show ? (
          <i className="fa-solid fa-eye"></i>
         ) : (
          <i className="fa-solid fa-eye-slash"></i>
         )}
        </div>
       </div>
       <div className="role-chooser">
        <select
         name="role-chooser"
         id="role-chooser"
         className="role-chooser"
         value={role}
         onChange={(e) => setRole(e.target.value)}
         required
        >
         <option value="select role" className="opt-1" hidden>
          Select Role
         </option>
         <option value="admin" className="opt-2">
          Admin
         </option>
         <option value="faculty" className="opt-3">
          Faculty
         </option>
         <option value="student" className="opt-4">
          Student
         </option>
        </select>
       </div>
       <div className="button-addorupdate">
        <button className="btn-user-1" type="submit" onClick={saveOrUpdate}>
         Submit
        </button>
        <button className="btn-user-2" type="reset" onClick={resetForm}>
         Reset
        </button>
       </div>
      </form>
     </div>
    </div>
   </main>
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
    limit="5"
    bodyClassName="toastBody"
    progressClassName="toastBody"
   />
  </AdminPanel>
 );
};

export default AddUser;
