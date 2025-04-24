import React from 'react'
import { TodoContext, TodoDispatchContext } from '../pages/Home';
import { useContext} from 'react';

function InputForm() {
    const {value,edit,data} =useContext(TodoContext)
    const{onCreateTodo,onChange}=useContext(TodoDispatchContext)
  return (
    <div>
           
        <label htmlFor="todo">todo</label>
        <input type="text" id='todo' 
            value={value} 
            placeholder='입력' 
            onChange={onChange}
            />
        {edit ? (<button type='button' onClick={(e)=>onCreateTodo(data._id)}>수정</button>) 
            :(<button type='submit'>생성</button>)}
       
    </div>
  )
}

export default InputForm
