import React, { useEffect } from 'react'
import axios from 'axios'; 
import { useState } from'react'
import './App.css'

function App() {
  const [data,setdata] = useState([]);
  useEffect(()=>{
    axios.get("https://reactnd-books-api.udacity.com/books",
    { headers: { 'Authorization': 'whatever-you-want' }})
    .then((res)=>{
      setdata(res.data.books)
      console.log(res.data)
    })
    .catch((err)=>{
       console.log(err)
     })
  },[])
  return (
    <>
    {data.map((ele,i)=>{
      return (
      <div key={i} className='book'>
        <h1 style={{textAlign:"center"}}>
          {ele.title}
        </h1 >
        <h3 style={{textAlign:"center"}}>
          {ele.authors}
        </h3>
        <img src={ele.imageLinks.smallThumbnail} />
        <p>{ele.description}</p>
      </div>
      )
    })}
      
    </>
  )
}

export default App
