import React, {useReducer, useState, useRef, createContext, useEffect} from 'react'
import List from '../component/List';
import InputForm from '../component/InputForm';
import A from './A';

export const TodoContext= createContext();
export const TodoDispatchContext= createContext();

function todoReducer(state, action){
    let nextState;
    switch(action.type){
        case "INIT":
            return action.data;
        case "CREATE":
            {nextState = [...state, action.payload];}
            break;
        case "UPDATE":
            {nextState = state.map((item)=>
            item.id === action.payload.id ? action.payload : item)};
            break;
        case "D":
            {nextState= state.filter((item)=> 
            item.id !== action.payload.id)}
            break;
        default:
            return state;
    }
localStorage.setItem("content",JSON.stringify(nextState))
return nextState
}

function Home() {

const initialState=[];
const [value, setValue] = useState("");
const [todos, dispatch] =useReducer(todoReducer, initialState);
const [edit, setEdit] =useState(false);
const [editNum, setEditNum]= useState(null);
const [data, setData] = useState([]);

useEffect(()=>{
const storedData= localStorage.getItem("content");
if(!storedData){
    return;
}
const parsedData= JSON.parse(storedData);
// dispatch({
//     type:"INIT",
//     data: parsedData,
// })
function getData(){
    async function fetchAPI(){
        try {
            await fetch('http://localhost:8000',{
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
    
const ref = useRef(null);
const onCreateTodo = (e, id)=>{
    // e.preventDefault();
    console.log(id)
    if(edit){
        // dispatch({
        //     type:"UPDATE",
        //     payload:{id: editNum, title: "title1", text: value},
        // });
        // function getData(){

        //     async function fetchAPI(){
        //         try {
        //             await fetch(`http://localhost:8000/${id}`,{
        //                 method:"PUT",
        //                 headers:{
        //                     "Content-Type" : "application/json"
        //                 },
        //                 body : JSON.stringify(data)
        //             })
        //             .then(data => data.json())
        //             .then(data => console.log(data))
        //             .then(res => setData(res))
        //         } catch (error) {
        //             console.error(error.message)
        //         }
        //     console.log(data)
        //     }    
        //     fetchAPI();
        // }  
        // getData();
        setEdit(false);
    }else{
        // dispatch({
        //     type:"CREATE",
        //     payload : { id: ref.current++, title:"title1", text:value }
        // })
        function getData(){
            const data = {
                title: "title",
                text:value,
            };
            async function fetchAPI(){
                try {
                    await fetch('http://localhost:8000',{
                        method:"POST",
                        headers:{
                            "Content-Type" : "application/json"
                        },
                        body : JSON.stringify(data)
                    })
                    .then(data => data.json())
                    .then(data => console.log(data))
                    .then(res => setData(res))
                } catch (error) {
                    console.error(error.message)
                }
            
            }    
            fetchAPI();
        }    
        getData()
    }
        setValue("");
}

const editText =(item)=>{
setEdit(true);
setEditNum(item.id);
}

const deleteText =(item)=>{
// dispatch({
//     type:"D",
//     payload:{id: item.id},
// });
function getData(){
    console.log(item._id)
    async function fetchAPI(){
        try {
            await fetch(`http://localhost:8000/${item._id}`,{
                method:"DELETE",
            })
            .then(data => data.json())
        } catch (error) {
            console.error(error.message)
        }
    }    
    fetchAPI();
}    
getData()
} 

const onChange = (e)=>{
    setValue(e.target.value);
}

return (
    <>
    <div>
        <h1>투두리스트</h1>
        <TodoContext.Provider value={{value, edit, todos,data}}>
            <TodoDispatchContext.Provider value={{onChange,onCreateTodo,editText,deleteText}}>
            <InputForm/>
            <List/>
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    </div>
    </>
  )
}

export default Home
