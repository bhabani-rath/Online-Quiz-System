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
     <Route element={<Aside />} path="/aside" />
     <Route element={<Profile />} path="/profile" />
     <Route element={<LandPage />} path="/landpage"></Route>
     {/* <---=========Admin Panel Route Pages Start=========---> */}
     <Route element={<AdminPanel />} path="/adminpanel" />
     <Route element={<Dashboard />} path="/adminpanel/dashboard" />
     <Route element={<Allquiz />} path="/adminpanel/allquiz"></Route>
     <Route element={<AllTechnology />} path="/adminpanel/alltech"></Route>
     <Route element={<AddQuizTechnology />} path="/adminpanel/addtech"></Route>
     <Route element={<Student />} path="/adminpanel/allstudent"></Route>
     <Route element={<AddUser />} path="/adminpanel/adduser"></Route>
     <Route path="/adminpanel/update-user/:id" element={<AddUser />} />
     <Route element={<Faculty />} path="/adminpanel/allfaculty"></Route>
     <Route element={<Profiles />} path="/adminpanel/profiles"></Route>
     {/* <---=========Route Pages Start=========---> */}
    </Routes>
   </Router>
  </>
 );
}

export default App;
