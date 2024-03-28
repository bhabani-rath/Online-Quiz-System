import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FacultyPanel from "../FacultyPanel";
import optionsData from "../../TableData/Technology JS Data";

const GenerateQuestion = () => {
 const [options, setOptions] = useState([]);
 const [question,setQuestion] = useState("");
 const [option1, setOption1] = useState("");
 const [option2, setOption2] = useState("");
 const [option3, setOption3] = useState("");
 const [option4, setOption4] = useState("");
 const [correctSolution, setCorrectSolution] = useState("");
 const [technology, setTechnology] = useState("");
 const [error, setError] = useState("");

 const location = useLocation();
 const username = location.state?.username;

 useEffect(() => {
  setOptions(optionsData.map((item) => item.options));
 }, []);

 return (
  <>
   <FacultyPanel>
    <main>
     <h1>GenerateQuestion</h1>
     <div className="form-addques">
      <div className="div-addques">
       <form className="addques-section">
        <h1>Add Question</h1>
        <p className="p2">Fill For Generate Questions</p>
        <div className="enter-ques">
         <label>Write the Question:-</label>
         <input type="text" placeholder="Write Question" />
        </div>
        <div className="enter-opt">
         <label className="label-opt">Write The Options:-</label>
        </div>
        <div className="opt-all">
         <div className="opts1">
          <input type="text" placeholder="Option 1" />
          <input type="text" placeholder="Option 2" />
         </div>
         <div className="opts2">
          <input type="text" placeholder="Option 3" />
          <input type="text" placeholder="Option 4" />
         </div>
        </div>
        <div className="label-opt-s">
         Enter The Technology and Correct Option:-
        </div>
        <div className="correct-opt-tech-select">
         <select name="opt-select" id="opt-select">
          <option value="default" hidden>
           Select Correct Option
          </option>
          <option value="opt1">Option 01</option>
          <option value="opt2">Option 02</option>
          <option value="opt3">Option 03</option>
          <option value="opt4">Option 04</option>
         </select>
         <select name="tech-select" id="tech-select">
          <option value="default" hidden>
           Select Technology
          </option>
          {options.map((option, index) => (
           <option key={index} value={option}>
            {option}
           </option>
          ))}
         </select>
        </div>
        <div className="btn-div-correct-opt">
         <button type="submit">Add Question</button>
         <button type="reset">Reset</button>
        </div>
       </form>
      </div>
     </div>
    </main>
   </FacultyPanel>
  </>
 );
};

export default GenerateQuestion;
