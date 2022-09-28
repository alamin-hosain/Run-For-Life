import React from 'react';
import './SingleExcercise.css'

const SingleExcersie = ({exercise}) => {
    const { id, img, name, description, timeRequired} = exercise;
    return (
        <div className='single-card'>
            <img src={img} alt="" />
            <div className="card-info">
                <h3>Run Type: {name} </h3>
                <p>{(description).slice(0,50)}...</p>
                <h4>Time Required: <span className="time-required">{timeRequired} Minute</span></h4>
            </div>
            <button className='addToBtn'>Add To List</button>
        </div>
    );
};

export default SingleExcersie;