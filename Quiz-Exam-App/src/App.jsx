import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/*<---=========Import Landing Page=========---> */
import LandPage from "./components/LandPage/LandPage";
/*<---=========Import Login=========---> */
import LoginPageQuizApp from "./components/Login/LoginPageQuizApp";
/*<---=========Import Admin=========---> */
import AdminPanel from "./components/Admin/AdminPanel";
/*<---=========Import Admin/Elements=========---> */
import Aside from "./components/Admin/Elements/Aside";
import Profile from "./components/Admin/Elements/Profile";
/*<---=========Import Admin/Pages=========---> */
import AddUser from "./components/Admin/Pages/AddUser";
import Faculty from "./components/Admin/Pages/Faculty";
import Student from "./components/Admin/Pages/Student";
import Allquiz from "./components/Admin/Pages/Allquiz";
import AllTechnology from "./components/Admin/Pages/AllTechnology";
import Dashboard from "./components/Admin/Pages/Dashboard";
import Profiles from "./components/Admin/Pages/Profiles";
import UserResponse from "./components/Admin/Pages/UserResponse";
/*<---=========Import Faculty=========---> */
import FacultyPanel from "./components/Faculty/FacultyPanel";
/*<---=========Import Faculty/Elements=========---> */
import AsideFaculty from "./components/Faculty/Elements/AsideFaculty";
/*<---=========Import Faculty/Pages=========---> */
import FacultyDashboard from "./components/Faculty/Pages/FacultyDashboard";
import AllTechs from "./components/Faculty/Pages/AllTechs";
import Students from "./components/Faculty/Pages/Students";
import GenerateQuiz from "./components/Faculty/Pages/GenerateQuiz";
import GenerateQuestion from "./components/Faculty/Pages/GenerateQuestion";
import FacultyProfile from "./components/Faculty/Pages/FacultyProfile";
// import Page404 from "./components/404 Page/Page404";
import ProtectedRoute from "./components/ProtectedRouteSystem/ProtectedRoute";

function App() {
 {
  /*//  document.addEventListener("contextmenu", function (e) {
 //   e.preventDefault();
//  });*/
 }
 return (
  <>
   <Router>
    <Routes>
     {/*<---=========Import LandPage=========---> */}
     <Route element={<LandPage />} path="/landpage"></Route>
     {/*<---=========Import Login=========---> */}
     <Route element={<LoginPageQuizApp />} path="/" />
     {/* <Route element={<Page404 />} path="/*" /> */}
     {/*<---=========Import Admin/Elements=========---> */}
     <Route element={<Aside />} path="/aside" />
     <Route element={<Profile />} path="/profile" />
     {/*<Profile/> is same and used for Admin,Faculty and Student Panel.*/}
     {/* <---=========Admin Panel Route Pages Start=========---> */}
     <Route element={<ProtectedRoute  />} path="/adminpanel" />
     <Route element={<Dashboard />} path="/adminpanel/dashboard" />
     <Route element={<Allquiz />} path="/adminpanel/allquiz"></Route>
     <Route element={<AllTechnology />} path="/adminpanel/alltech"></Route>
     <Route element={<Student />} path="/adminpanel/allstudent"></Route>
     <Route element={<Faculty />} path="/adminpanel/allfaculty"></Route>
     <Route element={<AddUser />} path="/adminpanel/adduser"></Route>
     <Route element={<AddUser />} path="/adminpanel/update-user/:id" />
     <Route element={<UserResponse />} path="/adminpanel/userResponse"></Route>
     <Route element={<Profiles />} path="/adminpanel/profiles"></Route>
     {/* <---=========Admin Route Pages End=========---> */}
     {/* <---=========Faculty Route Elements Start=========---> */}
     <Route element={<AsideFaculty />}></Route>
     {/* <---=========Faculty Route Elements End=========---> */}
     {/* <---=========Faculty Route Pages Start=========---> */}
     <Route element={<FacultyPanel />} path="/facultypanel"></Route>
     <Route
      element={<FacultyDashboard />}
      path="/facultypanel/facultydashboard"
     ></Route>
     <Route element={<AllTechs />} path="/facultypanel/alltechs"></Route>
     <Route element={<Students />} path="/facultypanel/allstudent"></Route>
     <Route
      element={<GenerateQuiz />}
      path="/facultypanel/generatequiz"
     ></Route>
     <Route
      element={<GenerateQuestion />}
      path="/facultypanel/generatequestion"
     ></Route>
     <Route
      element={<FacultyProfile />}
      path="/facultypanel/facultyprofile"
     ></Route>
     {/* <---=========Faculty Route Pages End=========---> */}
    </Routes>
   </Router>
  </>
 );
}

export default App;
