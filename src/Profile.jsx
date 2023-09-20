import React, { useEffect, useState } from "react";

const Profile=()=>{
   
   const[changecolor, setChangecolor]=useState('black');
  
   const handleClick= (changecolor) =>{ 
    setChangecolor(changecolor)
    
   }
  useEffect(()=>{
document.body.style.backgroundColor=changecolor

  },[changecolor])
   
return(
    <div className="bgc">
        <h1>d</h1>
        
        <button onClick={()=>handleClick('orange')}>Click me</button>
        
    </div>
);
}
  export default Profile;