import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminPanel from "../AdminPanel";

const AllTechnology = () => {
 const [tech, setTech] = useState([]);
 const [error, setError] = useState("");

 useEffect(() => {
  fetchTech();
 }, []);

 const fetchTech = async () => {
  try {
   const res = await axios.get(
    "http://localhost:8080/api/questions/getAllQuestion"
   );
   const distinctTech = [...new Set(res.data.map((tech) => tech.technology))];
   setTech(distinctTech);
  } catch (error) {
   setError("Failed to fetch technologies");
  }
 };

 return (
  <AdminPanel>
   <div className="tech-div-admin">
    <h1>Technologies</h1>
    <div className="cardview-techs">
     {tech.length > 0 ? (
      tech.map((value, id) => (
       <Link key={id} to={`/admin/question/${value}`} className="card-c">
        <h1>{value}</h1>
       </Link>
      ))
     ) : (
      <div className="text-danger mt-2">{error}</div>
     )}
    </div>
   </div>
  </AdminPanel>
 );
};

export default AllTechnology;
