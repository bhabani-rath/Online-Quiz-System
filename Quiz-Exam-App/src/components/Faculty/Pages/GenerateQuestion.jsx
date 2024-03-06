import React from "react";
import FacultyPanel from "../FacultyPanel";

const GenerateQuestion = () => {
 return (
  <>
   <FacultyPanel>
    <main>
     <h1>GenerateQuestion</h1>
     <div className="form-addques">
      <div className="div-addques">
       <form className="addques-section ">
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
        <div className="btn-div">
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
