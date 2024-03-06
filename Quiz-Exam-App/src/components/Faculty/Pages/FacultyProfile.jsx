import React from "react";
import FacultyPanel from "../FacultyPanel";

const FacultyProfile = () => {
 return (
  <FacultyPanel>
   <main>
    <h1>Profile</h1>
    <div className="form-profile">
     <div className="div-profile">
      <form className="profile-form">
       <h1>Hello! Bhabani07</h1>
       <p className="p2">Update Your Profile</p>
       <div className="inp-div-profile">
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
       </div>
       <div className="div-btn-profile">
        <button type="submit">Update</button>
        <button type="reset">Reset</button>
       </div>
      </form>
     </div>
    </div>
   </main>
  </FacultyPanel>
 );
};

export default FacultyProfile;
