import { React, useState, useEffect } from "react";
import AdminPanel from "../AdminPanel";
import { useLocation } from "react-router-dom";
import { CategorySelectUser } from "../../Services/UserService";
import AdminDetails from "../../TableData/AdminDetails";
import axios from "axios";
import logo from "../assetsAdmin/questprobelogo.svg";

const Dashboard = ({ usersname, role }) => {
 // Backend Connection Start
 const [user, setUser] = useState([]);
 const [teacher, setTeacher] = useState(0);
 const [student, setStudent] = useState(0);
 const [error, setError] = useState("");
 const [ques, setQues] = useState(0);
 const [quiz, setQuiz] = useState(0);
 const [tech, setTech] = useState([]);
 const [admin, setAdmin] = useState("");
 const [username, setUsername] = useState("");

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
  role = "admin";
  CategorySelectUser(role)
   .then((response) => {
    setUser(response.data);
    setAdmin(response.data.length);
    // console.log(response.data);
   })
   .catch((error) => console.log(error));
  try {
   const response = await axios.get(
    "http://localhost:8080/api/questions/getAllQuestion"
   );
   setQues(response.data.length);
   //    console.log("Questions" + response.data);
  } catch (error) {
   setError("Failed to fetch questions");
  }
  try {
   const response = await axios.get("http://localhost:8080/api/quizzes");
   setQuiz(response.data.length);
   //    console.log("Quizz" + response.data);
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
 const getcurrenttime = () => {
  var Time = new Date();
  return Time.getHours();
 };

 const getgreeting = () => {
  var time = getcurrenttime();
  var greeting = "";
  if (time > 4 && time < 12) greeting = "Morning";
  else if (time >= 12 && time < 16) greeting = "Afternoon";
  else if (time >= 16 && time < 20) greeting = "Evening";
  else greeting = "Night";

  return "Good " + greeting;
 };
 //  console.log(student);
 //  console.log(teacher);
 //  console.log(user);
 //  console.log(error);
 // Backend Connection End
 return (
  <AdminPanel>
   {/* <!-- =========Start of Main========= --> */}
   <main>
    <h1>Dashboard</h1>
    <div className="welcome-logo-txt">
     <img src={logo} alt="error" />
     <h1>
      QUEST
      <span className="primary">PROBE</span>
     </h1>
    </div>
    <div className="insights">
     {/* <!-- =========Start of Total Quizzes Created========= --> */}
     <div className="total-quiz">
      <span className="material-icons">travel_explore</span>
      <div className="middle">
       <div className="left">
        <h3>Total Quizzes Created</h3>
        <h1>{quiz}</h1>
       </div>
      </div>
      <small className="text-muted">Last 24 Hours</small>
     </div>
     {/* <!-- =========End of Total Quizzes Created========= --> */}
     {/* <!-- =========Start of Total Questions Created========= --> */}
     <div className="total-questions">
      <span className="material-icons">quiz</span>
      <div className="middle">
       <div className="left">
        <h3>Total Questions Created</h3>
        <h1>{ques}</h1>
       </div>
      </div>
      <small className="text-muted">Last 24 Hours</small>
     </div>
     {/* <!-- =========End of Total Questions Created========= --> */}
     {/* <!-- =========Start of Total Technologies Created========= --> */}
     <div className="total-tech">
      <span className="material-icons">find_in_page</span>
      <div className="middle">
       <div className="left">
        <h3>Total Technologies Created</h3>
        <h1>{tech}</h1>
       </div>
      </div>
      <small className="text-muted">Last 24 Hours</small>
     </div>
     {/* <!-- =========End of Total Technologies Created========= --> */}
     {/* <!-- =========Start of Total Faculty and Students Created========= --> */}
     <div className="total-facstu">
      <span className="material-icons">verified_user</span>
      <div className="middle">
       <div className="left">
        <h3>Total Faculties Connected</h3>
        <h1>{teacher}</h1>
       </div>
      </div>
      <small className="text-muted">Last 24 Hours</small>
     </div>
     {/* <!-- =========End of Total Faculty and Students Created========= --> */}
     {/* <!-- =========Start of Total Students Created========= --> */}
     <div className="total-facstu">
      <span className="material-icons">wc</span>
      <div className="middle">
       <div className="left">
        <h3>Total Students Connected</h3>
        <h1>{student}</h1>
       </div>
      </div>
      <small className="text-muted">Last 24 Hours</small>
     </div>
     {/* <!-- =========End of Total Students Created========= --> */}
     {/* <!-- =========Start of Total Students Created========= --> */}
     <div className="total-facstu">
      <span className="material-icons">security</span>
      <div className="middle">
       <div className="left">
        <h3>Total Admins Connected</h3>
        <h1>{admin}</h1>
       </div>
      </div>
      <small className="text-muted">Last 24 Hours</small>
     </div>
     {/* <!-- =========End of Total Students Created========= --> */}
    </div>
    {/* <!-- =========End of Insights========= --> */}
   </main>
   {/* <!-- =========End of Main========= --> */}
   <h6
    style={{
     textAlign: "center",
     marginTop: "5rem",
     color: "var(--color-dark)"
    }}
   >
    @Designed By Bhabani
   </h6>
  </AdminPanel>
 );
};

export default Dashboard;
