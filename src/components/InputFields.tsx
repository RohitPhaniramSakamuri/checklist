import React, { useRef } from 'react'

interface Props 
{
  toDo : string;
  setToDo : React.Dispatch<React.SetStateAction<string>>;
  addTask : (e : React.FormEvent) => void;
}

const InputFields = ({toDo, setToDo, addTask} : Props) => { // can also do as const InputFields : React.FC<Props> ({toDo, setToDo})\
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className = "taskInput" onSubmit={(e) => {addTask(e); inputRef.current?.blur();}}>
        <input type="text" placeholder = "Enter task" className="input_box"  value = {toDo} onChange={(Event) => setToDo(Event.target.value) }/>
        <button className='inputConfirm' type='submit'>Go!</button>

    </form>
  )
}

export default InputFields