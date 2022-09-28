import React from 'react';
import './Runner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning,faLocationDot} from '@fortawesome/free-solid-svg-icons';


const Runner = () => {
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
                    <span className="break ">10s</span>
                    <span className="break">20s</span>
                    <span className="break selected">30s</span>
                    <span className="break">40s</span>
                    <span className="break">50s</span>
                </div>
            </div>

            <div className="exercise-details">
                <h3>Exercise Details</h3>
                <div className="exercise-time">
                    <h4>Exercise Time</h4>
                    <p>60 Minute</p>
                </div>

                <div className="break-time">
                    <h4>Break Time</h4>
                    <p>30 Seconds</p>
                </div>
            </div>

            <div className="actively-completed">
                <button className='btn-completed'>Actively Completed</button>
            </div>
        </div>
    );
};

export default Runner;