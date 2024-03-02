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
import AddQuizTechnology from "./components/Admin/Pages/AddQuizTechnology";
import AddUser from "./components/Admin/Pages/AddUser";
import Faculty from "./components/Admin/Pages/Faculty";
import Student from "./components/Admin/Pages/Student";
import Allquiz from "./components/Admin/Pages/Allquiz";
import AllTechnology from "./components/Admin/Pages/AllTechnology";
import Dashboard from "./components/Admin/Pages/Dashboard";
import Profiles from "./components/Admin/Pages/Profiles";

function App() {
 //  document.addEventListener("contextmenu", function (e) {
 //   e.preventDefault();
 //  });
 return (
  <>
   <Router>
    <Routes>
     <Route element={<LoginPageQuizApp />} path="/" />
     <Route element={<AdminPanel />} path="/adminpanel" />
     <Route element={<Aside />} path="/aside" />
     <Route element={<Profile />} path="/profile" />
     <Route element={<LandPage />} path="/landpage"></Route>
     {/* <---=========Admin Panel Route Pages Start=========---> */}
     <Route element={<Dashboard />} path="/dashboard" />
     <Route element={<Allquiz />} path="/allquiz"></Route>
     <Route element={<AllTechnology />} path="/alltech"></Route>
     <Route element={<AddQuizTechnology />} path="/addtech"></Route>
     <Route element={<Student />} path="/allstudent"></Route>
     <Route element={<AddUser />} path="/adduser"></Route>
     <Route element={<Faculty />} path="/allfaculty"></Route>
     <Route element={<Profiles />} path="/profiles"></Route>
     {/* <---=========Route Pages Start=========---> */}
    </Routes>
   </Router>
  </>
 );
}

export default App;
