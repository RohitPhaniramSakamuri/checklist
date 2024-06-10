import React from 'react'

const InputFields = () => {
  return (
    <form className = "taskInput">
        <input type="text" placeholder = "Enter task" className="input_box" />
        <button className='inputConfirm' type='submit'>Go!</button>
    </form>
  )
}

export default InputFields