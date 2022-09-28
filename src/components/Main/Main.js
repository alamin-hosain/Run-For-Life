import React, { useEffect, useState } from 'react';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import SingleExcersie from '../Singleexcercise/SingleExcersie';
import Runner from '../Runner/Runner';
const Main = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then( res => res.json())
        .then( data => setExercises(data))
    },[])

    return (
        <div className='main'>
            <div className="main-section">
                <div className='header'>
                    <div className='logo-section'>
                        <span className='logo-icon'><FontAwesomeIcon icon={faRunning} size="2x" /></span>
                        <h1>Run-For-Your-Life</h1>
                    </div>
                    <h3>Select Today's Excercise !</h3>
                </div>
                <div className="card-section">
                    {
                    exercises.map((exercise) =>                <SingleExcersie key={exercise.id} exercise={exercise}></SingleExcersie>) 
                    }
                </div>
            </div>
            
            <div className="runner-page">
                <Runner></Runner>
            </div>
      
        </div>
    );
};

export default Main;