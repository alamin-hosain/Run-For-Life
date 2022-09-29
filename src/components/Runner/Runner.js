import React, { useState } from 'react';
import './Runner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';



const Runner = ({exerciseTime}) => {

    const [toggle, setToggle] = useState(true);
    const [rest, setRest] = useState(0);
    const [selected, setSelected] = useState('not-selected');

    const colorSet = () => {
        setSelected(!selected);
    }

    const calculateRest = (e) => {
        const restTime = parseInt(e.target.innerText);
        setRest(restTime);
    }

    const addToast = () =>{
        Swal.fire(
            'You Did It!',
            'Congratulations for your Awesome Run!',
            'success'
          )
        
    }



    return (
        <div className='runner-info'>
            <div className="runner-bio">
                <img src="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3028&q=80" alt="" />
                <div className="bio-details">
                    <h3>John Doe</h3>
                    <p><span className='location-dot'><FontAwesomeIcon icon={faLocationDot} /></span>New York, America</p>
                </div>
            </div>

            <div className="runner-body">
                <div className="weight">
                    <h3>75<small>kg</small></h3>
                    <p>Weight</p>
                </div>
                <div className="height">
                    <h3>6.5</h3>
                    <p>Height</p>
                </div>
                <div className="age">
                    <h3>25<small>yrs</small></h3>
                    <p>Age</p>
                </div>
            </div>

            <div className="add-a-break">
                <h3>Add A Break</h3>
                <div className="break-selection">
                    <span style={{selected }} className="break" onClick={(e) => calculateRest(e)}>10s</span>
                    <span className="break" onClick={(e) => calculateRest(e)}>20s</span>
                    <span className="break" onClick={(e) => calculateRest(e)}>30s</span>
                    <span className="break" onClick={(e) => calculateRest(e)}>40s</span>
                    <span className="break" onClick={(e) => calculateRest(e)}>50s</span>
                </div>
            </div>

            <div className="exercise-details">
                <h3>Exercise Details</h3>
                <div className="exercise-time">
                    <h4>Exercise Time</h4>
                    <p>{exerciseTime} Minute</p>
                </div>

                <div className="break-time">
                    <h4>Break Time</h4>
                    <p>{rest} Seconds</p>
                </div>
            </div>

            <div className="actively-completed">
                <button onClick={() => {addToast(); setToggle(!toggle)}} className='btn-completed' style={toggle ? {backgroundColor: 'rgb(226,135,67)'} : {backgroundColor: '#3498db'}}>{toggle ? 'Actively Completed' : 'Well Done'}</button>
            </div>
        </div>
    );
};

export default Runner;  