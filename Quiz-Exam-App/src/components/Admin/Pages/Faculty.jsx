import { React, useState, useEffect, useMemo } from "react";
import AdminPanel from "../AdminPanel";
import { useNavigate } from "react-router-dom";
import { CategorySelectUser, DeleteUser } from "../../Services/UserService";
import axios from "axios";

const Faculty = () => {
 /*<---=========Backend Start=========---> */

 const navigate = useNavigate();
 const [users, setUsers] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");
 const [filterTechnology, setFilterTechnology] = useState("");
 const [pageIndex, setPageIndex] = useState(0);
 const [pageSize, setPageSize] = useState(10); // Default page size
 const role = "faculty";

 useEffect(() => {
  categoryselectuser(role);
 }, []);

 const categoryselectuser = (Role) => {
  CategorySelectUser(Role)
   .then((response) => {
    setUsers(response.data);
    console.log(response.data);
   })
   .catch((error) => console.log(error));
 };

 const handleUpdateUser = (id) => {
  navigate(`/admin/update-user/${id}`);
 };

 const handleDeleteUser = (id) => {
  console.log(id);
  DeleteUser(id)
   .then(() => {
    categoryselectuser(role);
   })
   .catch((error) => {
    console.log(error);
   });
 };
 /*<---=========Backend End=========---> */
 // Filter and search data
 const filteredData = useMemo(() => {
  let filteredUsers = [...users];

  // Apply technology filter
  if (filterTechnology) {
   filteredUsers = filteredUsers.filter(
    (quiz) => quiz.technology === filterTechnology
   );
  }

  // Apply search term filter
  if (searchTerm) {
   const lowerCaseSearchTerm = searchTerm.toLowerCase();
   filteredUsers = filteredUsers.filter(
    (quiz) =>
     quiz.quizName.toLowerCase().includes(lowerCaseSearchTerm) ||
     quiz.technology.toLowerCase().includes(lowerCaseSearchTerm)
   );
  }

  return filteredUsers;
 }, [users, filterTechnology, searchTerm]);

 // Calculate the number of pages correctly
 const pageCount = Math.ceil(filteredData.length / pageSize);

 // Slice the data based on pagination
 const paginatedData = useMemo(() => {
  const startIndex = pageIndex * pageSize;
  const endIndex = startIndex + pageSize;
  return filteredData.slice(startIndex, endIndex);
 }, [filteredData, pageIndex, pageSize]);

 // Clear search term
 const handleClearSearch = () => {
  setSearchTerm("");
 };

 // Options for page size
 const pageSizeOptions = [5, 10, 15];

 return (
  <AdminPanel>
   <main>
    <div className="recent-orders">
     <h1>Student Details</h1>
     <div className="filters">
      <input
       type="text"
       placeholder="🔍Search by Quiz Name or Technology"
       value={searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
       <button className="clear-button" onClick={handleClearSearch}>
        <i className="fa-solid fa-xmark"></i>
       </button>
      )}
     </div>
     <table>
      <thead>
       <tr>
        <th>Sl No.</th>
        <th>UserName</th>
        <th>Email</th>
        <th>Password</th>
        <th>Action</th>
       </tr>
      </thead>
      <tbody className="adminsTableBody">
       {paginatedData.map((user) => (
        <tr key={user.id}>
         <td>{user.id}</td>
         <td>{user.username}</td>
         <td>{user.email}</td>
         <td>{user.password}</td>
         <td>
          <button
           style={{ cursor: "pointer" }}
           className="primary"
           onClick={() => handleUpdateUser(user.id)}
          >
           Update
          </button>
          <button
           style={{ cursor: "pointer", marginLeft: "10px" }}
           className="danger"
           onClick={() => handleDeleteUser(user.id)}
          >
           Delete
          </button>
         </td>
        </tr>
       ))}
      </tbody>
     </table>
     <div className="button-pagination">
      <button onClick={() => setPageIndex(0)}>First Page</button>
      <button
       disabled={pageIndex >= pageCount - 1}
       onClick={() => setPageIndex((prev) => prev + 1)}
      >
       Next Page
      </button>
      <button
       disabled={pageIndex === 0}
       onClick={() => setPageIndex((prev) => prev - 1)}
      >
       Previous Page
      </button>
      <button onClick={() => setPageIndex(pageCount - 1)}>Last Page</button>
      <select
       value={pageSize}
       onChange={(e) => setPageSize(parseInt(e.target.value))}
      >
       {pageSizeOptions.map((option) => (
        <option key={option} value={option}>
         {option}
        </option>
       ))}
      </select>
     </div>
    </div>
   </main>
  </AdminPanel>
 );
};

export default Faculty;
