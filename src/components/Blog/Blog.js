import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog'>
            <div className="article">
                <h2>Q1: How Does React Work ?</h2>
                <p>React uses something that is called a virtual dom.
                    A virtual dom is a lightweight JavaScript object that is a copy of the real dom. What react does under the hood?
                    When you program ui changes / events in react, it applies changes to virtual dom and then changes real dom for the virtual one.</p>
            </div>

            <div className="article">
                <h2>Q2: What are the differences between props and state?</h2>
                <p>React Props:The Data is passed from one component to another.It is Immutable (cannot be modified).Props can be used with state and functional components. </p>
                <p>React State:The Data is passed within the component only. It is Mutable ( can be modified). State can be used only with the state components/class component (Before 16.0). </p>
            </div>

            <div className="article">
                <h2>Q3: What else useeffect does in react except data fetching?</h2>
                <p>The useEffect Hook allows you to perform side effects in your components. </p>
                <p>Useeffec uses: Running once on mount: fetch API data
                    Running on state change: validating input field
                    Running on state change: live filtering
                    Running on state change: trigger animation on new array value
                    Running on props change: update paragraph list on fetched API data update
                    Running on props change: updating fetched API data to get BTC updated price</p>
            </div>
        </div>
    );
};

export default Blog;