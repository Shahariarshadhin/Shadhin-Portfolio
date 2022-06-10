import React from 'react';
import project_111 from '../images/project_111.png'
import project_11 from '../images/project_11.png'
import project_12 from '../images/project_12.png'
import project_13 from '../images/project_13.png'
import project_14 from '../images/project_14.png'
import project_15 from '../images/project_15.png'
import project_16 from '../images/project_16.png'

const ProjectCCC = () => {
    return (
        <div>

            <h1 class="text-4xl lg:text-5xl font-bold font-black text-white mb-10 mt-4">Core Computer Castle</h1>
            <a className=' text-info text-xl' href="https://core-computer-castle.web.app/" target="_blank" rel="noreferrer">Live Preview</a>


            <div className='grid lg:grid-cols-3 gap-10 mt-28 lg:px-24'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project_111} alt="Shoes" /></figure>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project_11} alt="Shoes" /></figure>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project_12} alt="Shoes" /></figure>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project_13} alt="Shoes" /></figure>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project_14} alt="Shoes" /></figure>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project_15} alt="Shoes" /></figure>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project_16} alt="Shoes" /></figure>
                </div>

            </div>

            <div>
                <h1 class="text-2xl lg:text-2xl font-bold font-black text-white mb-10 mt-4">Project Details</h1>
                <div className='grid lg:grid-cols-4  mt-10 gap-5 lg:px-20 '>
                    <div>
                        <div class="card w-80 bg-base-100 shadow-xl">
                            <div class="card-body ">
                                <h2 class="title text-2xl font-bold text-center">Project Overview</h2>
                                <p>This is a tech electronics parts manufacturer web application
                                    using MERN Stack Technology</p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card w-80 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="title text-2xl font-bold text-center">Features</h2>
                                <ul className='text-left'>
                                    <li>● User Authentication</li>
                                    <li>● Product buying system</li>
                                    <li>● Dashboard for admin and user</li>
                                    <li>● Admin can update product quantity</li>
                                    <li>● Admin can make another user admin</li>
                                    <li>● User Can Add their Review</li>
                                    <li>● Card Payment system</li>

                                </ul>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card w-80 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="title text-2xl font-bold text-center">Technologies</h2>
                                <ul>
                                    <div className='flex gap-14'>
                                        <div className='ml-6'>
                                            <li><a className=' text-info text-xl' href="https://reactjs.org/" target="_blank" rel="noreferrer">React js</a></li>
                                            <li><a className=' text-info text-xl' href="https://daisyui.com/" target="_blank" rel="noreferrer">DaisyUi</a></li>
                                            <li><a className=' text-info text-xl' href="https://v1.tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind</a></li>
                                            <li><a className=' text-info text-xl' href="https://firebase.google.com/?hl=en&authuser=0" target="_blank" rel="noreferrer">Firebase</a></li>
                                        </div>
                                        <div>
                                            <li><a className=' text-info text-xl' href="https://www.mongodb.com/" target="_blank" rel="noreferrer">Mongobd</a></li>
                                            <li><a className=' text-info text-xl' href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node Js</a></li>
                                            <li><a className=' text-info text-xl' href="https://expressjs.com/" target="_blank" rel="noreferrer">Express Js</a></li>
                                            <li><a className=' text-info text-xl' href="https://www.heroku.com/home" target="_blank" rel="noreferrer">Heroku</a></li>

                                        </div>
                                    </div>

                                </ul>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card w-80 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="title text-2xl font-bold text-center">Source Code</h2>
                                <a className=' text-info text-xl' href="https://github.com/Shahariarshadhin/Core-Computer-Castle-Client" target="_blank" rel="noreferrer">Github - Client</a>
                                <a className=' text-info text-xl' href="https://github.com/Shahariarshadhin/Core-Computer-Castle-Server" target="_blank" rel="noreferrer">Github - Server</a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCCC;