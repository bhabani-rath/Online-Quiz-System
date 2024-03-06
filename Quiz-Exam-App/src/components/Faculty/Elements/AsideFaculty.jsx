import { React, useState, useEffect } from "react";
import logo from "../assetsFaculty/questprobelogo.svg";
import { Link } from "react-router-dom";
import { CategorySelectUser } from "../../Services/UserService";
import axios from "axios";

const AsideFaculty = () => {
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
    // console.log(response.data);
   })
   .catch((error) => console.log(error));

  role = "faculty";
  CategorySelectUser(role)
   .then((response) => {
    setUser(response.data);
    setTeacher(response.data.length);
    // console.log(response.data);
   })
   .catch((error) => console.log(error));

  try {
   const response = await axios.get(
    "http://localhost:8080/api/questions/getAllQuestion"
   );
   setQues(response.data.length);
   //    console.log("Question: " + response.data);
  } catch (error) {
   setError("Failed to fetch questions");
  }

  try {
   const response = await axios.get("http://localhost:8080/api/quizzes");
   setQuiz(response.data.length);
   //    console.log("Quizz: " + response.data);
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

 //  console.log(student);
 //  console.log(teacher);
 //  console.log(user);
 //  console.log(error);
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
      to="/facultypanel/facultydashboard"
      className={
       location.pathname === "/facultypanel/facultydashboard" ? "active" : ""
      }
     >
      <span className="material-icons"> dashboard </span>
      <h3>Dashboard</h3>
     </Link>
     <Link
      to="/facultypanel/alltechs"
      className={location.pathname === "/facultypanel/alltech" ? "active" : ""}
     >
      <span className="material-icons"> find_in_page </span>
      <h3>
       Techs <span className="message-count">40+</span>
      </h3>
     </Link>
     <Link
      to="/facultypanel/allstudent"
      className={
       location.pathname === "/facultypanel/allstudent" ? "active" : ""
      }
     >
      <span className="material-icons"> verified_user </span>
      <h3>
       Students <span className="message-count">{student}</span>
      </h3>
     </Link>
     <Link
      to="/facultypanel/generatequiz"
      className={
       location.pathname === "/facultypanel/generatequiz" ? "active" : ""
      }
     >
      <span className="material-icons"> tips_and_updates </span>
      <h3>Generate Quiz</h3>
     </Link>
     <Link
      to="/facultypanel/generatequestion"
      className={
       location.pathname === "/facultypanel/generatequestion" ? "active" : ""
      }
     >
      <span className="material-icons"> post_add </span>
      <h3>Generate Question</h3>
     </Link>
     <Link
      to="/facultypanel/facultyprofile"
      className={
       location.pathname === "/facultypanel/facultyprofile" ? "active" : ""
      }
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

export default AsideFaculty;
