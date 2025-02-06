import React, { useState } from 'react';
import "./score.css";
const Score = ({score, scoreType}) => {

  return (
    <div className='score'>
        <div className='score_container' data-testid="score">
            <p>{scoreType}</p>
            <p>{score}</p>            
        </div>
    </div>
  )
}

export default Score