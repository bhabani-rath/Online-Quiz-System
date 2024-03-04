import { React, useMemo, useState, useEffect } from "react";
import AdminPanel from "../AdminPanel";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Allquiz = () => {
 /*<---=========Backend Start=========--->*/
 const [quizz, setQuizzes] = useState([]);
 const [error, setError] = useState("");
 const [searchTerm, setSearchTerm] = useState("");
 const [filterTechnology, setFilterTechnology] = useState("");
 const [pageIndex, setPageIndex] = useState(0);
 const [pageSize, setPageSize] = useState(10); // Default page size

 useEffect(() => {
  fetchQuizzes();
 }, []);

 const fetchQuizzes = async () => {
  try {
   const response = await axios.get("http://localhost:8080/api/quizzes");
   setQuizzes(response.data);
  } catch (error) {
   setError("Failed to fetch questions");
  }
 };

 const handleDeleteQuizzes = async (id) => {
  try {
   //  console.log(id);
   await axios.delete(`http://localhost:8080/api/quizzes/${id}`);

   fetchQuizzes(quizz); // Refresh the question list
  } catch (error) {
   setError("Failed to delete question");
  }
 };
 /*<---=========Backend End=========--->*/

 // Filter and search data
 const filteredData = useMemo(() => {
  let filteredQuizzes = [...quizz];

  // Apply technology filter
  if (filterTechnology) {
   filteredQuizzes = filteredQuizzes.filter(
    (quiz) => quiz.technology === filterTechnology
   );
  }

  // Apply search term filter
  if (searchTerm) {
   const lowerCaseSearchTerm = searchTerm.toLowerCase();
   filteredQuizzes = filteredQuizzes.filter(
    (quiz) =>
     quiz.quizName.toLowerCase().includes(lowerCaseSearchTerm) ||
     quiz.technology.toLowerCase().includes(lowerCaseSearchTerm)
   );
  }

  return filteredQuizzes;
 }, [quizz, filterTechnology, searchTerm]);

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
 const handleOnClickOnSearchBar = () => {};

 return (
  <AdminPanel>
   {/* <!-- =========Start of All Admins Table========= --> */}
   <main>
    <div className="recent-orders">
     <h1>Quizzes</h1>
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
        <th>Quizz Name</th>
        <th>Technology Name</th>
        <th>Action</th>
       </tr>
      </thead>
      <tbody className="adminsTableBody">
       {paginatedData.map((quiz, index) => (
        <tr key={quiz.id}>
         <td>{index + 1 + pageIndex * pageSize}</td>
         <td>{quiz.quizName}</td>
         <td>{quiz.technology}</td>
         <td>
          <button
           style={{ cursor: "pointer" }}
           className="danger"
           onClick={() => handleDeleteQuizzes(quiz.id)}
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
   {/* <!-- =========End of All Admins Table========= --> */}
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
    theme="dark"
    transition:slide
    limit="5"
   />
  </AdminPanel>
 );
};

export default Allquiz;
