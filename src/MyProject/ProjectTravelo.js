import React from 'react';
import project_31 from '../images/project_31.png'
import project_32 from '../images/project_32.png'
import project_33 from '../images/project_33.png'

const ProjectTravelo = () => {
    return (
        <div>

            <h1 class="text-4xl lg:text-5xl font-bold font-black text-white mb-10 mt-4">Travelo</h1>
            <a className=' text-info text-xl' href="https://travelo-e1cee.web.app/" target="_blank" rel="noreferrer">Live Preview</a>


            <div className='grid lg:grid-cols-3 gap-10 mt-28 lg:px-24'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project_31} alt="Shoes" /></figure>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project_32} alt="Shoes" /></figure>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project_33} alt="Shoes" /></figure>
                </div>


            </div>

            <div>
                <h1 class="text-2xl lg:text-3xl font-bold font-black text-white mb-10 mt-4">Project Details</h1>
                <div className='grid lg:grid-cols-4  mt-10 gap-5 lg:px-20 '>
                    <div>
                        <div class="card w-80 h-80 text-white border-2 border-accent border-opacity-75  shadow-xl">
                            <div class="card-body ">
                                <h2 class="title text-2xl font-bold text-center">Project Overview</h2>
                                <p className='text-left'>- This is a travel guide and package providing website using react js.Here you can get tour package with valuable price and also get guide for safe travelling.This website is fully resposive for mobile and large device.</p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card w-80 h-80 text-white border-2 border-accent border-opacity-75 shadow-xl">
                            <div class="card-body">
                                <h2 class="title text-2xl font-bold text-center">Features</h2>
                                <ul className='text-left'>
                                    <li>● User Authentication</li>
                                    <li>● Travel Package</li>
                                    <li>● Travel Guide</li>


                                </ul>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card w-80 h-80 text-white border-2 border-accent border-opacity-75 shadow-xl">
                            <div class="card-body">
                                <h2 class="title text-2xl font-bold text-center mb-8">Technologies</h2>
                                <ul>
                                    <div className='ml-6'>

                                        <li><a className=' text-info text-xl' href="https://reactjs.org/" target="_blank" rel="noreferrer">React js</a></li>
                                        <li><a className=' text-info text-xl' href="https://getbootstrap.com/" target="_blank" rel="noreferrer">BootStrap</a></li>
                                        <li><a className=' text-info text-xl' href="https://react-bootstrap.github.io/" target="_blank" rel="noreferrer">React Bootstrap</a></li>

                                        <li><a className=' text-info text-xl' href="https://firebase.google.com/?hl=en&authuser=0" target="_blank" rel="noreferrer">Firebase</a></li>


                                        <li><a className=' text-info text-xl' href="https://www.netlify.com/" target="_blank" rel="noreferrer">Netlify</a></li>


                                    </div>

                                </ul>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card w-80 h-80 text-white border-2 border-accent border-opacity-75 shadow-xl">
                            <div class="card-body">
                                <h2 class="title  text-2xl font-bold text-center mb-8">Source Code</h2>
                                <a className=' text-info text-xl' href="https://github.com/Shahariarshadhin/Travelo" target="_blank" rel="noreferrer">Github</a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectTravelo;