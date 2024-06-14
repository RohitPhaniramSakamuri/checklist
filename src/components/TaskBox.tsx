import React from 'react'
import { Task } from '../models'
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineDownloadDone } from "react-icons/md";

interface Props
{
    toDo : Task;
    tasks : Task[];
    setTasks : React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskBox : React.FC<Props> = ({toDo, tasks, setTasks}) => {
  return (
    <form className='taskBox'>
        <span className="taskBox--text">
            {toDo.toDo}
        </span>
        <div className="Icons">
            <span className="editIcon">
                <MdOutlineModeEditOutline />
            </span>
            <span className="trashIcon">
                <FaRegTrashAlt />
            </span>
            <span className="checkIcon">
                <MdOutlineDownloadDone />
            </span>
        </div>
    </form>
  )
}

export default TaskBox