import React, { useState } from 'react';
import './SingleExcercise.css'

const SingleExcersie = ({exercise, exerciseTimeCalculate}) => {

    const { img, name, description, timeRequired} = exercise;

    const [toggle, setToggle] = useState(true);

    const changeButton = () =>{
        setToggle(!toggle);

    }

    return (
        <div className='single-card'>
            <img src={img} alt="" />
            <div className="card-info">
                <h3># {name} </h3>
                <p>{(description).slice(0,50)}...</p>
                <h4>Time Required: <span className="time-required">{timeRequired} Minute</span></h4>
            </div>
            <button className={(toggle ? 'addToBtn' : 'addToBtnColor')}onClick={() => {exerciseTimeCalculate(timeRequired) ; changeButton()}} >{toggle ? 'Add To Run' : 'Run Added'}</button>
        </div>
    );
};

export default SingleExcersie;