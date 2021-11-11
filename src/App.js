import './App.css';
import React, { useState, useEffect }from 'react'
import Sticky from './Sticky'

function App() {
  //Consts
  const [color,setColor] = useState('white')
  const [stickiesArr,setStickiesArr] = useState([])
  const URL = 'http://localhost:3000/stickies'
  const [text,setText] = useState("")
  console.log(text)

//Fetches
  useEffect(() => {
    fetch(URL)
    .then(r => r.json())
    .then(stickies => {
        setStickiesArr(stickies)
    })
},[]);

//handlers
function handleStickyPost(e){
  e.preventDefault()
  const data ={
    text:text
  };

fetch(URL, {
  method: 'POST',
  headers:{
    "Content-Type":"application/json",
  },
  body: JSON.stringify(data),

})
.then((r)=>r.json())

}

const stickiesComponents = stickiesArr.map((sticky) => {
  return(
    <Sticky 
    text = {sticky.text}
    id = {sticky.id}
    key = {sticky.id}
    URL = {URL}
    />
  )
})


  
  return (

    <div className="canvas">
      {stickiesComponents}
      <form className="new-form" onSubmit={handleStickyPost}>
      <input placeholder="type here" value={text} onChange={(e) => setText(e.target.value)}/>
      <button variant="light" type="submit">submit!</button>
      </form>
   
    </div>
  );
}

export default App;
