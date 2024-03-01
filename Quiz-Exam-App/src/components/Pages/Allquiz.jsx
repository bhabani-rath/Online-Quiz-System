import { React, useMemo, useState, useEffect } from "react";
import AdminPanel from "../Admin/AdminPanel";
import axios from "axios";

const Allquiz = () => {
 /*<---=========Backend Start=========--->*/
 const [quizz, setQuizzes] = useState([]);
 const [error, setError] = useState("");

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
   console.log(id);
   await axios.delete(`http://localhost:8080/api/quizzes/${id}`);
   fetchQuizzes(); // Refresh the question list
  } catch (error) {
   setError("Failed to delete question");
  }
 };
 /*<---=========Backend End=========--->*/

 // Pagination state
 const [pageIndex, setPageIndex] = useState(0);
 const [pageSize, setPageSize] = useState(10); // Set your desired page size

 // Slice the data based on pagination
 const paginatedData = useMemo(() => {
  const startIndex = pageIndex * pageSize;
  const endIndex = startIndex + pageSize;
  return quizz.slice(startIndex, endIndex);
 }, [quizz, pageIndex, pageSize]);

 return (
  <AdminPanel>
   {/* <!-- =========Start of All Admins Table========= --> */}
   <main>
    <div className="recent-orders">
     <h2>Quizzes</h2>
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
       {paginatedData.map((quizz) => (
        <tr key={quizz.id}>
         <td>{quizz.id}</td>
         <td>{quizz.quizName}</td>
         <td>{quizz.technology}</td>
         <td>
          <button
           style={{ cursor: "pointer" }}
           className="danger"
           onClick={() => handleDeleteQuizzes(quizz.id)}
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
       disabled={pageIndex >= Math.ceil(quizz.length / pageSize) - 1}
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
      <button
       onClick={() => setPageIndex(Math.ceil(quizz.length / pageSize) - 1)}
      >
       Last Page
      </button>
     </div>
    </div>
   </main>
   {/* <!-- =========End of All Admins Table========= --> */}
  </AdminPanel>
 );
};

export default Allquiz;
