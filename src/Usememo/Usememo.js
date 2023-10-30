import React, { useState } from "react"
const Usememo=()=>{
    const[count,setCount]=useState(0)
    const[item,setItem]=useState(0)
    const Multicount=()=>{
        return(
            
                count*5
            
        )
    }
    return(
        <>
        <div>
            <h1>hello</h1>
            <h2>Count: {count}</h2>
            <h2>Item :{item}</h2>
            <h2>{Multicount()}</h2>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
           
            <button onClick={()=>setItem(item*10)}>Update Item</button>

        </div>
        </>
    )
} 
export default Usememo