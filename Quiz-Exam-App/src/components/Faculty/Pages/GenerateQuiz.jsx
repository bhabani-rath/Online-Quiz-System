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
          <option value="react">React</option>
          <option value="nodejs">Node.Js</option>
          <option value="Angular">Angular</option>
          <option value="preact">Preact</option>
          <option value="vue">Vue</option>
          <option value="vanila">Vanila</option>
          <option value="vite">Vite</option>
          <option value="threejs">Three.Js</option>
          <option value="nextjs">Next.Js</option>
          <option value="driverjs">Driver.Js</option>
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
