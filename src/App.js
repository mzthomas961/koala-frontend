import './App.css';
import React, { useState, useEffect }from 'react'
import Sticky from './Sticky'

function App() {
  //Consts
  const [color,setColor] = useState('white')
  const [stickiesArr,setStickiesArr] = useState([])
  const URL = 'http://localhost:3000/stickies'
  console.log(stickiesArr)

//Fetches
  useEffect(() => {
    fetch(URL)
    .then(r => r.json())
    .then(stickies => {
        setStickiesArr(stickies)
    })
},[]);

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
   
    </div>
  );
}

export default App;
