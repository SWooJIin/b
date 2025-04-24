import React from 'react'
import { TodoContext, TodoDispatchContext } from '../pages/Home'
import { useContext } from 'react'
import { useNavigate} from 'react-router-dom';

function List() {
const {todos,data} =useContext(TodoContext);
const {editText,deleteText}=useContext(TodoDispatchContext)
const navigate = useNavigate();

  return (
    <>
    <div className='list'>
    {data?.map((item)=> (
      <div>
        <div onClick={()=>navigate(`${item._id}`)} key={item._id}>
            {item.text}
            {item._id}
            </div>
            <button onClick={()=> editText(item)}>수정</button>
            <button onClick={()=> deleteText(item)}>삭제</button>
      </div>
    ))}
    </div>
</>
  )
}

export default List
