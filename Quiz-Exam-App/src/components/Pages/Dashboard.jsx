import { React, useState, useEffect } from "react";
import AdminPanel from "../Admin/AdminPanel";
import { Link } from "react-router-dom";
import { CategorySelectUser } from "../Services/UserService";
import AdminDetails from "../TableData/AdminDetails";
import axios from "axios";

const Dashboard = () => {
 // Backend Connection Start
 const [user, setUser] = useState([]);
 const [teacher, setTeacher] = useState(0);
 const [student, setStudent] = useState(0);
 const [error, setError] = useState("");
 const [ques, setQues] = useState(0);
 const [quiz, setQuiz] = useState(0);

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
   console.log("Questions" + response.data);
  } catch (error) {
   setError("Failed to fetch questions");
  }

  try {
   const response = await axios.get("http://localhost:8080/api/quizzes");
   setQuiz(response.data.length);
   console.log("Quizz" + response.data);
  } catch (error) {
   setError("Failed to fetch quizz");
  }
 };

 console.log(student);
 console.log(teacher);
 console.log(user);
 console.log(error);
 // Backend Connection End
 return (
  <AdminPanel>
   {/* <!-- =========Start of Main========= --> */}
   <main>
    <h1>Dashboard</h1>
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
        <h1>40+</h1>
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
    </div>
    {/* <!-- =========End of Insights========= --> */}
    {/* <!-- =========Start of All Admins Table========= --> */}
    <div className="recent-orders">
     <h2>Faculties</h2>
     <table>
      <thead>
       <tr>
        <th>Sl No.</th>
        <th>Admin Name</th>
        <th>Email</th>
        <th>Contact Number</th>
        <th>Actions</th>
       </tr>
      </thead>
      <tbody id="adminsTableBody">
       {AdminDetails.map((AdminDetails) => (
        <tr key={AdminDetails.slno}>
         <td>{AdminDetails.slno}</td>
         <td>{AdminDetails.adminName}</td>
         <td>{AdminDetails.adminEmail}</td>
         <td>{AdminDetails.contactNumber}</td>
         <td>
          <button
           type="submit"
           style={{
            cursor: "pointer",
            border: "none",
            padding: "5px 5px 5px 5px"
           }}
          >
           <Link className="primary" to="/profile">
            Details
           </Link>
          </button>
         </td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
    {/* <!-- =========End of All Admins Table========= --> */}
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
