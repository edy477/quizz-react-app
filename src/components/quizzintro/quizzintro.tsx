import React from 'react';
import { Link } from 'react-router-dom';
const QuizzIntro = () => {

    return(
        <div className="intro">
            <div className="intro__text">
                <h1>Quiz Game</h1>
                <p>Do you want to play a game?</p>
            </div>

            <Link to="/quizzpart">
            <button className="intro__button">Start the game </button>
            </Link>
        </div>
    )
}
export default QuizzIntro;
