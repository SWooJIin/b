import React from 'react'
import { TodoContext, TodoDispatchContext } from '../pages/Home';
import { useContext} from 'react';

function InputForm() {
    const {value,edit} =useContext(TodoContext)
    const{onCreateTodo,onChange}=useContext(TodoDispatchContext)
  return (
    <div>
            <form onSubmit={onCreateTodo}>
        <label htmlFor="todo">todo</label>
        <input type="text" id='todo' 
            value={value} 
            placeholder='입력' 
            onChange={onChange}
            />
        {edit ? (<button type='submit'>수정</button>) 
            :(<button type='submit'>생성</button>)}
        </form>
    </div>
  )
}

export default InputForm
