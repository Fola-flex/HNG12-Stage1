import React, { useEffect, useState } from 'react';
import "./home.css";
import { Box, Button, Modal, Score } from '../../components';
import { Soundfile, fail2, finish, finish2 } from '../../assets';

const Home = () => {
    const [color, setColor] = useState("000000");
    const [colorArr, setColorArr] = useState([]);
    const [count, setCount] = useState(0);
    const [gameCount, setGameCount] = useState(1);
    const [message, setMessage] = useState("");
    const [visible, setVisible] =useState(false) 
    const success = new Audio(Soundfile);
    const failure = new Audio(fail2);
    const end = new Audio(finish);
    const end2 = new Audio(finish2);

    const generateColor = () => {               
        const result = new Set();

        while (result.size < 6) {
            const rel =  Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");       
            result.add(rel);       
        }

        const resultArr = Array.from(result)
        let col = resultArr[Math.floor(Math.random() * 6)];
        setColor(col);
        setColorArr(resultArr);                                        
    }
       
    const showResultModal = (value) => {
        value === "Correct" ? success.play() : failure.play();
        setMessage(value);
        setVisible(true)
        setTimeout(() => {
            setVisible(false)
        },1000);
    }

    const updateCount = (value) => {
        setGameCount((prev) => prev < 10 ? prev + 1 : prev);
        if (value === true) {
            setCount((count) => count+1);            
        }             
    }

    const restartGame = () => {
        setCount(0)
        generateColor()
        setGameCount(1)
        setVisible(false)
    }

    const endGame = () => {
        count > 7 ? end.play() : end2.play();
        setVisible(true);
        setMessage("Game Over");        
    }
 
    useEffect(() => {
        generateColor();                                             
    },[])

  return (
    <>
        <header>
            <nav>
                <h1 className='title'>Color Game</h1>
            </nav>
        </header>
        <main>
            {visible && <Modal message={message} count={count} restart={restartGame} /> }            
            <section className='quiz'>
                <h1 className='heading' data-testid="gameInstructions">Guess the color in the box.</h1>                
                <div className="quiz_container">
                    <Score score={count} scoreType="Score" />
                    <div className='color'>
                        <Box color={color} />
                    </div>
                    <Score score={gameCount} scoreType="Game count" />
                </div>
                
            </section>
            <section className='answer'>
                <div className='answer_container'>
                    <p>Choose the box that best matches the color in the Box above</p>
                    <div className='answer_buttons'>
                        {colorArr.map((btnColor,i) => {
                            return (                                
                                <Button 
                                    btnColor={btnColor} 
                                    key={btnColor+i} 
                                    correctColor={color} 
                                    resetColor={generateColor} 
                                    updateCount={updateCount}
                                    showMessage={showResultModal}
                                    count={gameCount} 
                                    endGame={endGame}
                                />                                
                            )
                        })}
                    </div>                        
                    <div className='answer_restart'>
                        <button 
                            className='restart_btn'
                            onClick={restartGame}
                            data-testid="newGameButton"
                        >
                            Restart game
                        </button>
                    </div>   
                </div>
            </section>            
        </main>
    </>
  )
}

export default Home