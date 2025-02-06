import React from 'react';
import "./button.css";

const Button = ({btnColor, correctColor, resetColor, updateCount, showMessage, count, endGame}) => {
    const checkCorrectColor = () => {    
        if (count < 10) {
            if (btnColor === correctColor) {            
                updateCount(true);
                showMessage("Correct");
                resetColor();            
            } else {            
                updateCount(false);
                showMessage("Wrong")
                resetColor();
            }
        } else {
            if (btnColor === correctColor) {            
                updateCount(true)
                showMessage("Correct");
                setTimeout(() => {
                    endGame()
                },700)                             
            } else {
                updateCount(false);
                showMessage("Wrong");
                setTimeout(() => {
                    endGame()
                },700) 
            }
                      
        }                
    }

  return (
    <button 
        className='button' 
        style={{backgroundColor: `#${btnColor}`}}
        onClick={() => checkCorrectColor(btnColor)}
        data-testid="colorOption"
    >        
    </button>
  )
}

export default Button