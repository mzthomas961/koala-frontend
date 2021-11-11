import React, {useEffect} from "react";

function Sticky({text,id,URL}){
    console.log(id)

    function handleDelete(e){
        fetch( `${URL}/${id}`,{
            method:'DELETE'
        })
    }
        
    
    return(
        <div>
            <p><b>{text}</b></p>
            <button onClick ={handleDelete}>Delete</button>
        </div>
        

    )
}
export default Sticky