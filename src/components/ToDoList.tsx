import React from 'react'
import { Task } from '../models' 
import TaskBox from './TaskBox';

interface Props 
{
    tasks : Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const ToDoList : React.FC<Props> = ({tasks, setTasks}) => {
  return (
    <div className='todos'>
        {tasks.map((toDo) => (
            <TaskBox toDo = {toDo} key = {toDo.id} tasks = {tasks} setTasks = {setTasks}/>
        ))}
    </div>
  )
}

export default ToDoList