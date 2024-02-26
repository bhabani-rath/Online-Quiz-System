import React from "react";
import LoginPageQuizApp from "./components/Login/LoginPageQuizApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from "./components/Admin/AdminPanel";
import Aside from "./components/Elements/Aside";
import Profile from "./components/Elements/Profile";
import Dashboard from "./components/Pages/Dashboard";
import Allquiz from "./components/Pages/Allquiz";
import AllTechnology from "./components/Pages/AllTechnology";
import AddQuizTechnology from "./components/Pages/AddQuizTechnology";
import AllUser from "./components/Pages/AllUser";
import AddUser from "./components/Pages/AddUser";
import AllAdmin from "./components/Pages/AllAdmin";
import Profiles from "./components/Pages/Profiles";
import LandPage from "./components/LandPage/LandPage";

function App() {
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
     <Route element={<Dashboard />} path="/main" />
     <Route element={<Allquiz />} path="/allquiz"></Route>
     <Route element={<AllTechnology />} path="/alltech"></Route>
     <Route element={<AddQuizTechnology />} path="/addtech"></Route>
     <Route element={<AllUser />} path="/alluser"></Route>
     <Route element={<AddUser />} path="/adduser"></Route>
     <Route element={<AllAdmin />} path="/admin"></Route>
     <Route element={<Profiles />} path="/profiles"></Route>
     {/* <---=========Route Pages Start=========---> */}
    </Routes>
   </Router>
  </>
 );
}

export default App;
