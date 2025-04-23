import React from 'react'
import { TodoContext, TodoDispatchContext } from '../pages/Home'
import { useContext } from 'react'

function List() {
const {todos} =useContext(TodoContext);
const {editText,deleteText}=useContext(TodoDispatchContext)
  return (
    <>
    <div className='list'>
    {todos.map((item)=> (
        <div key={item.id}>
            {item.text}
            {item.id}
            <button onClick={()=> editText(item)}>수정</button>
            <button onClick={()=> deleteText(item)}>삭제</button>
        </div>
    ))}
    </div>
</>
  )
}

export default List
