import { React, useState, useEffect, useMemo } from "react";
import AdminPanel from "../AdminPanel";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserResponse = () => {
 const navigate = useNavigate();
 const [searchTerm, setSearchTerm] = useState("");
 const [pageIndex, setPageIndex] = useState(0);
 const [pageSize, setPageSize] = useState(10); // Default page size
 const [responses, setResponses] = useState([]);
 const [error, setError] = useState("");
 const [page, setPage] = useState(1);

 useEffect(() => {
  fetchUserResponses();
 }, []);

 const fetchUserResponses = async () => {
  try {
   const response = await axios.get("http://localhost:8080/api/user-answers");
   setResponses(response.data);
  } catch (error) {
   setError("Failed to fetch user responses");
  }
 };

 const filteredData = useMemo(() => {
  let filteredResponses = [...responses];

  // Apply search term filter
  if (searchTerm) {
   const lowerCaseSearchTerm = searchTerm.toLowerCase();
   filteredResponses = filteredResponses.filter((response) => {
    const username = response.users?.username.toLowerCase() || "";
    const questionText = response.questions?.questionText.toLowerCase() || "";
    const correctOption = response.questions?.correctOption;
    // Ensure correctOption is a string before calling toLowerCase()
    const correctOptionLowerCase =
     typeof correctOption === "string" ? correctOption.toLowerCase() : "";

    return (
     username.includes(lowerCaseSearchTerm) ||
     questionText.includes(lowerCaseSearchTerm) ||
     correctOptionLowerCase.includes(lowerCaseSearchTerm)
    );
   });
  }

  return filteredResponses;
 }, [responses, searchTerm]);

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
       placeholder="🔍 Search by Username, Question Text, or Correct Option"
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
        <th>Questions</th>
        <th>Selected Option</th>
        <th>Correct Option</th>
       </tr>
      </thead>
      <tbody className="adminsTableBody">
       {paginatedData.map((response, index) => (
        <tr key={response.id}>
         <td>{index + 1 + pageIndex * pageSize}</td>
         <td>{response.users?.username}</td>
         <td>{response.questions?.questionText}</td>
         <td>{response.selectedOption}</td>
         <td>{response.questions?.correctOption}</td>
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
   <ToastContainer
    position="top-right"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={true}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    transition:slide
    limit="5"
    bodyClassName="toastBody"
    progressClassName="toastBody"
   />
  </AdminPanel>
 );
};

export default UserResponse;
