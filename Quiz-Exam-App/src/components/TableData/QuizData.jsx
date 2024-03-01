import { Link, useState, useEffect } from "react";
import axios from "axios";

const QuizComponent = () => {
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
   console.error("Fetch Quizzes Error:", error);
  }
 };

 const handleDeleteQuizzes = async (id) => {
  try {
   console.log("Deleting quiz with ID:", id);
   await axios.delete(`http://localhost:8080/api/quizzes/${id}`);
   fetchQuizzes(); // Refresh the question list
  } catch (error) {
   setError("Failed to delete question");
   console.error("Delete Quiz Error:", error);
  }
 };

 return (
  <div>
   {/* Display the fetched quizzes here */}
   {quizz.map((quiz) => (
    <tbody>
     <tr key={quiz.id}>
      <td>{quiz.quiz_name}</td>
      <td>{quiz.technology}</td>
     </tr>
     <button onClick={() => handleDeleteQuizzes(quiz.id)}>Delete</button>
    </tbody>
   ))}
  </div>
 );
};

export default QuizComponent;
