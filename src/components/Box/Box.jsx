import React from 'react';
import "./box.css";

const Box = ({color}) => {
  return (
    <div className='box'>
        <div 
            style={{backgroundColor: `#${color}`}} 
            className='box_container' 
            data-testid="colorBox"
        >            
        </div>
    </div>    
  )
}

export default Box