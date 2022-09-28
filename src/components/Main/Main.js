import React from 'react';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faRunning } from '@fortawesome/free-solid-svg-icons';
const Main = () => {
    return (
        <div className='main'>
            <div className='header'>
                <div>
                    <span><FontAwesomeIcon icon={faRunning} /></span>
                    <h1>Run For Your Life</h1>
                </div>
                <p>Select Today's Excercise !</p>
            </div>
            <div className="card-section">

            </div>
      
        </div>
    );
};

export default Main;