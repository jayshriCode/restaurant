import React, { useEffect, useState } from 'react'
import "./style.css"

const UseEffect = () => {
    const initialData = 0;
    const [myNum, setMyNum] = useState(initialData);
    useEffect(()=>{
        document.title = `chats(${myNum})`;
    }) //This will run whenever there is change in state . (will render each time we increament the myNum i.e. state value)

    // useEffect(()=>{
    //     document.title = `chats(${myNum})`;
    // }, [])
    // adding array dependency to useEffect function: It will run each time when we visit the site (only once after every visit)
   
  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={()=>{setMyNum(myNum+1)}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
    
      </div>
    </>
  )
}

export default UseEffect
