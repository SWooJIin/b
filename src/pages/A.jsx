import React, { useContext, useEffect, useState } from 'react'
import { TodoDispatchContext } from './Home'
import { useParams } from 'react-router-dom'

function A() {
  const { id }= useParams();
  const [data, setData]=useState({});
  // const {editText,deleteText}=useContext(TodoDispatchContext)
  console.log(id)
  
useEffect(()=>{
  function getData(){
    console.log(id)
    async function fetchAPI(){
        try {
            await fetch(`http://localhost:8000/${id}`,{
                method:"GET",
            })
            .then(data => data.json())
            .then(res => setData(res))
        } catch (error) {
            console.error(error.message)
        }
    }    
    fetchAPI();
}    
getData()
},[])
console.log(data)
  return ( 
    <>
    <div>
      {data.text}
    </div>
    </>
  )
}

export default A
