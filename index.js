await fetch("http://localhost:8000", {
    method: "POST",
    headers:{
        "Content-Type":"application/json",
    },
    body: JSON.stringify({title:"s",text:"s"})
})
.then((res)=>res.json())
.then((res)=>console.log(res))
.catch((e)=>console.error(e.message))