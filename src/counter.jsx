import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
    const inc = () => {
        setCount(count + 1);
    }
    const dec = () => {
        if(count<=0){
            setCount(count);  

        }
        else{
            setCount(count - 1);
        }
        
    }
  return (
    <div>
    <div><h1 >Counter</h1></div>   
    <div className='bu'>
      
       <button class="btn" onClick={inc}>+</button>
       <div id="demo">{count}</div>
       <button class="btn" onClick={dec}>-</button>
    </div>
    </div>
  )
}

export default Counter