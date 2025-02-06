import React, { useState } from 'react';
import "./score.css";
const Score = ({score, scoreType}) => {

  return (
    <div className='score'>
        <div className='score_container'>
            <p>{scoreType}</p>
            <p data-testid="score">{score}</p>            
        </div>
    </div>
  )
}

export default Score