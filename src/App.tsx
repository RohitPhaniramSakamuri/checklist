import React, { useState } from 'react';
import './App.css';
import InputFields from './components/InputFields';
import ToDoList from './components/ToDoList';
import { Task } from './models';
import TaskBox from './components/TaskBox';

var idCount : number = 0;

const App : React.FC = () => {

  // use state being used now :P

  const [toDo, setToDo ] = useState<string>(""); //general template for each task
  const [tasks, setTasks] = useState<Task[]>([]);

  //defining the function that adds task to task list

  const addTask = (e : React.FormEvent) =>
    {
      e.preventDefault();

      if(toDo)
        {
          idCount++;
          setTasks([...tasks, {id: idCount, toDo : toDo, status : false}]);
          setToDo("");
        }
    };

  console.log(toDo)
  console.log(tasks)

  return (
    <div className="App">
      {/* <span> tag is used to markup part of text/doc, easily manipulated with JavaScript using the class or id attribute. */}
      <span className="heading">TaskMaster</span>  {/* span.heading  + enter*/}
      <InputFields toDo = {toDo} setToDo = {setToDo} addTask = {addTask}/>
      <ToDoList tasks = {tasks} setTasks = {setTasks}/>
    </div>
  );
} //returns JSX element. The type of App is React functional component (React.FC)

export default App;
