import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Bio from './components/Bio'
import About from './components/About'
import Class from './components/Class'
import BioTwo from './components/BioTwo'
import {names} from './components/data.js'
import {students} from './components/data.js'
import Students from './components/Students.js'
import Form from './components/Form'
import FormTwo from './components/FormTwo'
import Books from './components/Books.js';
import Parent from './components/Parent.js'
import FormDisplay from './components/FormDisplay.js';
// import Input from './components/Input.js';


function App() {
    return (
      // <FormDisplay />
      // <Parent/>
      <Books/>
      // <FormTwo/>
      // <Form/>
      // <Students students={students}/>

      
  // const value = 100;
  // const [students, setStudents] = useState([]);
  // const [studentName, setStudentName] = useState("");
  // const [studentDegree, setStudentDegree] = useState("");

  // function addStudent (event) {
  //   event.preventDefault();
  //   // console.log("Name of student: "+studentName)
  //   // console.log("Name of student: "+studentDegree)
  //   let student = {
  //     name: studentName,
  //     degree: studentDegree
  //   }
  //   setStudents([...students, student])
  // }

  // function handleStudentName (event) {
  //     setStudentName(event.target.value)
  // };

  // function handleStudentDegree (event) {
  //   setStudentDegree(event.target.value)
  // };

  // return (
  //   <React.Fragment>
      
  //     <h1>Student Input</h1>
  //     <form onSubmit={addStudent}>
  //       <label htmlFor="studentName" >Name:</label>
  //       <input type="text" id="studentName" onChange={handleStudentName}/>
  //       <label >Degree:</label>
  //       <input htmlFor="studentDegree" type="text" id="studentDegree" onChange={handleStudentDegree}/>
  //       <input type="submit"/>
  //     </form>




  //     <Bio name={"Fi"} description={"Developer"}/>
  //     <About hobbies = {["swim","surf"]}/>
  //     <Bio name={"Mack"} description={"Digital Marketer"}/>
  //     <About/>
  //     <Class hobbies = {["swim","surf"]}/>

  //     {/* <Input /> */}
  //     <h1 className="heading">{"Fi M-D".toLowerCase()}</h1>
  //     <h2>Developer</h2>
  //     <h3>{value === 100 ? "Perfect" : "Not perfect"}</h3>
  //     <h4>Names</h4>
  //     <ul>
  //       {
  //         names.map (name => 
  //           {
  //           return <li key={name}>{name}</li>})
  //            }

  //     </ul>
  //     <BioTwo name={"New Person"} description={"New Role"}/>
  //   </React.Fragment>
  );
}

export default App;

