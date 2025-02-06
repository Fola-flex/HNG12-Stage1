import React from 'react';
import "./modal.css";

const Modal = ({message, count, restart}) => {
  return (
    <div className='modal'>
        {message === "Correct" || message === "Wrong" ? 
            ( 
                <div className='modal_container'>
                    <h1 data-testid="gameStatus">{message}</h1>                    
                </div>
            ) :
            (
                <div className='modal_container'>
                    <h1>{message}</h1>
                    {count === 10 ? 
                        (
                            <>
                                <div className='modal_score'>
                                    <p>Nice Game.</p>
                                    <p> Perfect Score</p>
                                    <p>Score: {count} / 10</p>
                                </div>                                
                                <button 
                                    className='new_game_btn' 
                                    onClick={() => {restart()}}
                                    data-testid="newGameButton"
                                >
                                    New Game
                                </button>
                            </>
                        )
                        : (
                            <>
                                <div className='modal_score'>
                                    <p>Do better.</p>
                                    <p>Score: {count} / 10</p>
                                </div>                                
                                <button 
                                    className='new_game_btn'
                                    onClick={() => {restart()}}
                                    data-testid="newGameButton"
                                >
                                    New Game
                                </button>
                            </>
                            
                        )
                    }
                    
                </div>
            )
        }
        
    </div>
  )
}

export default Modal