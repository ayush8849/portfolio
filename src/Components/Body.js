import React from 'react';
import pic from '../images/pic.png';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Body = ()=>{
    const [text] = useTypewriter({
        words : ['Frontend Developer','React Developer', 'Software Developer'],
        loop : {},
        typeSpeed : 40,
        deleteSpeed : 50,
        delaySpeed : 1000
    })
    return(
        <div class=" bg-gradient-to-r from-cyan-500 to-blue-500 w-100%">
        <div className='grid grid-flow-col m-auto' >
            <div className='grid'>
                <h1 className='font font-bold text-6xl mt-5 text-gray-900'>My Name is Ayush Srivastava</h1>
            <h1 className='text-5xl'>I am a <span className='font-bold text-5xl text-red-900'>{text}</span>
            <span className='text-red-900'><Cursor/></span></h1>
            
            <p className='text-2xl text-wrap'>
who is responsible for building web applications using React, managing state, fetching data from APIs, implementing routing, and testing components. They collaborate with designers and backend developers, continuously learning and staying updated with React trends. Proficiency in JavaScript, React fundamentals, and component-based architecture is crucial. They handle frontend tooling, version control with Git, and debugging effectively. Skills in CSS, responsive design, and testing using Jest and Enzyme are essential. Knowledge of the React ecosystem, modern web technologies, performance optimization, accessibility standards, and cross-browser compatibility is integral to their role.</p>
    </div>
            <img className='rounded-full' src={pic} alt='logo'/>
        </div></div>
    );
};
export default Body;