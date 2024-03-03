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
 const toastTheme = {
  backgroundColor: "var(--color-background)",
  color: "var(--color-white)"
 };
 /*<---=========Backend Start=========---> */
 const [role, setRole] = useState("faculty");
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
   return <h1 className="text-center">Update User</h1>;
  } else {
   return <h1 className="text-center">Add User</h1>;
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
     navigate("/admin/viewusers");
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
     setRole("faculty");

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
  const passwordRegex =
   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passwordRegex.test(password)) {
   toast.error(
    "Password must contain at least 8 characters, including a lowercase letter, an uppercase letter, a number, and a special character."
   );
   return;
  }
 };
 /*<---=========Backend End=========---> */
 const resetForm = () => {
  setUsername("");
  setPassword("");
  setEmail("");
 };

 return (
  <AdminPanel>
   <main>
    <h1>{pageTitle()}</h1>
    <div className="form-addorupdate">
     <div className="div-adduserform">
      <form className="form-section" onSubmit={saveOrUpdate}>
       <p className="p3" style={{ fontSize: "1.9rem", fontWeight: "500" }}>
        {pageTitle()}
       </p>
       <p className="p2">{pageTitles()}</p>
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
         type="password"
         name="password"
         id="adduser-inp-3"
         className="adduser-inp-3"
         placeholder="Password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         required
        />
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
        <button className="btn-user-1" type="submit">
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
    theme={toastTheme}
    transition:slide
    limit="5"
   />
  </AdminPanel>
 );
};

export default AddUser;
