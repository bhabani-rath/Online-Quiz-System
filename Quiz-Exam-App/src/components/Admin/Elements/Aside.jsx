import { React, useState, useEffect } from "react";
import logo from "../assetsAdmin/questprobelogo.svg";
import { Link } from "react-router-dom";
import { CategorySelectUser } from "../../Services/UserService";
import axios from "axios";

const Aside = () => {
 // Backend Connection Start
 const [user, setUser] = useState([]);
 const [teacher, setTeacher] = useState(0);
 const [student, setStudent] = useState(0);
 const [error, setError] = useState("");
 const [ques, setQues] = useState(0);
 const [quiz, setQuiz] = useState(0);
 const [tech, setTech] = useState([]);

 useEffect(() => {
  getalluser();
 }, []);

 const getalluser = async () => {
  let role = "student";
  CategorySelectUser(role)
   .then((response) => {
    setUser(response.data);
    setStudent(response.data.length);
    console.log(response.data);
   })
   .catch((error) => console.log(error));

  role = "faculty";
  CategorySelectUser(role)
   .then((response) => {
    setUser(response.data);
    setTeacher(response.data.length);
    console.log(response.data);
   })
   .catch((error) => console.log(error));

  try {
   const response = await axios.get(
    "http://localhost:8080/api/questions/getAllQuestion"
   );
   setQues(response.data.length);
   console.log("Question: " + response.data);
  } catch (error) {
   setError("Failed to fetch questions");
  }

  try {
   const response = await axios.get("http://localhost:8080/api/quizzes");
   setQuiz(response.data.length);
   console.log("Quizz: " + response.data);
  } catch (error) {
   setError("Failed to fetch quizz");
  }
  try {
   const res = await axios.get("http://localhost:8080/api/quizzes");
   setTech(res.data.length);
  } catch (error) {
   setError("Failed to fetch user responses");
  }
 };

 console.log(student);
 console.log(teacher);
 console.log(user);
 console.log(error);
 // Backend Connection End
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
     <Link
      to="/adminpanel/dashboard"
      className={location.pathname === "/adminpanel/dashboard" ? "active" : ""}
     >
      <span className="material-icons"> dashboard </span>
      <h3>Dashboard</h3>
     </Link>
     <Link
      to="/adminpanel/allquiz"
      className={location.pathname === "/adminpanel/allquiz" ? "active" : ""}
     >
      <span className="material-icons"> travel_explore </span>
      <h3>
       Quizzes <span className="message-count">{quiz}</span>
      </h3>
     </Link>
     <Link
      to="/adminpanel/alltech"
      className={location.pathname === "/adminpanel/alltech" ? "active" : ""}
     >
      <span className="material-icons"> find_in_page </span>
      <h3>
       Techs <span className="message-count">{tech}</span>
      </h3>
     </Link>
     <Link
      to="/adminpanel/allstudent"
      className={location.pathname === "/adminpanel/allstudent" ? "active" : ""}
     >
      <span className="material-icons"> verified_user </span>
      <h3>
       Students <span className="message-count">{student}</span>
      </h3>
     </Link>
     <Link
      to="/adminpanel/allfaculty"
      className={location.pathname === "/adminpanel/allfaculty" ? "active" : ""}
     >
      <span className="material-icons"> admin_panel_settings </span>
      <h3>
       Faculties <span className="message-count">{teacher}</span>
      </h3>
     </Link>
     <Link
      to="/adminpanel/adduser"
      className={location.pathname === "/adminpanel/adduser" ? "active" : ""}
     >
      <span className="material-icons"> person_add </span>
      <h3>Add Users</h3>
     </Link>
     <Link
      to="/adminpanel/userResponse"
      className={
       location.pathname === "/adminpanel/userResponse" ? "active" : ""
      }
     >
      <span className="material-icons"> assignment </span>
      <h3>Users Response</h3>
     </Link>
     <Link
      to="/adminpanel/profiles"
      className={location.pathname === "/adminpanel/profiles" ? "active" : ""}
     >
      <span className="material-icons">account_circle</span>
      <h3>Profile</h3>
     </Link>
     <Link to="/">
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
