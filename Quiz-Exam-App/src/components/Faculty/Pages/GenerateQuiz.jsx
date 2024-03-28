import React from "react";
import FacultyPanel from "../FacultyPanel";

const GenerateQuiz = () => {
 return (
  <>
   <FacultyPanel>
    <main>
     <h1>GenerateQuiz</h1>
     <div className="form-generatequiz">
      <div className="div-generatequiz">
       <form className="generatequiz">
        <h1>Generate Quiz</h1>
        <p className="p2">
         Reacting to knowledge through the dynamic <br />s realms of quiz
         generation.
        </p>
        <div className="addquizname">
         <input type="text" placeholder="Quiz Name" />
        </div>
        <div className="techoptions">
         <select
          name="tech-selector"
          id="tech-selector"
          className="tech-selector"
         >
          <option value="default">Select Technology</option>
          <option value="C">C</option>
          <option value="C++">C++</option>
          <option value="Angular">Angular</option>
          <option value="JAVA">JAVA</option>
          <option value="Python">Python</option>
          <option value="React">React</option>
          <option value=".Net">.Net</option>
          <option value="Kotlin">Kotlin</option>
          <option value="nextjs">Next Js</option>
          <option value="driverjs">Driver JS</option>
         </select>
        </div>
        <div className="btn-generate ">
         <button type="submit" className="btn-generater-1" id="btn-generater-1">
          Submit
         </button>
         <button type="reset" className="btn-generater-1" id="btn-generater-1">
          Reset
         </button>
        </div>
       </form>
      </div>
     </div>
    </main>
   </FacultyPanel>
  </>
 );
};

export default GenerateQuiz;
