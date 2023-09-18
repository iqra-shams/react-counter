import React from 'react';

function Count() {
var i=0;
    const inc = () => {
        i=i+1;
        document.getElementById("demo").innerHTML =i;
      }
      const dec = () => {
        i=i-1;
        if(i<0){
            i=0;
            document.getElementById("demo").innerHTML =i;
        }
        else{
            document.getElementById("demo").innerHTML =i;
        }
       
      }
    return (
        <div>
      <div><h1 >Counter</h1></div>   
      <div className='bu'>
        
         <button class="btn" onClick={inc}>+</button>
         <div id="demo">0</div>
         <button class="btn" onClick={dec}>-</button>
      </div>
      </div>
    );
  }
  export default Count;