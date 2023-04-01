import React from 'react';
import project_21 from '../images/project_21.png'
import project_22 from '../images/project_22.png'
import project_23 from '../images/project_23.png'
import project_24 from '../images/project_24.png'
import project_25 from '../images/project_25.png'

const ProjectCamCove = () => {
    return (
        <div>

            <h1 class="text-4xl lg:text-5xl font-bold font-black text-white mb-10 mt-4">Camping Cove</h1>
            <a className=' text-info text-xl' href="https://camping-cove.web.app/" target="_blank" rel="noreferrer">Live Preview</a>


            <div className='grid lg:grid-cols-3 gap-10 mt-28 lg:px-24'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project_21} alt="Shoes" /></figure>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project_22} alt="Shoes" /></figure>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project_23} alt="Shoes" /></figure>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project_24} alt="Shoes" /></figure>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project_25} alt="Shoes" /></figure>
                </div>


            </div>

            <div>
                <h1 class="text-2xl lg:text-3xl font-bold font-black text-white mb-10 mt-12">Project Details</h1>
                <div className='grid lg:grid-cols-4  mt-10 gap-5 lg:px-20 '>
                    <div>
                        <div class="card w-80 h-96 text-white border-2 border-accent border-opacity-75  shadow-xl">
                            <div class="card-body ">
                                <h2 class="title text-2xl font-bold text-center">Project Overview</h2>
                                <p className='text-left'>This is an inventory management web application using MERN
                                    Stack Technology.Here you can find all your camping gears as wholesale.User can add new items also update quantity and delete items.There are also some Camping related guiding knowledge also added.</p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card w-80 h-96 text-white border-2 border-accent border-opacity-75 shadow-xl">
                            <div class="card-body">
                                <h2 class="title text-2xl font-bold text-center">Features</h2>
                                <ul className='text-left'>
                                    <li>● User Authentication</li>
                                    <li>● Product buying system</li>
                                    <li>● User can see their items</li>
                                    <li>● Update product quantity</li>
                                    <li>● Add New Items</li>
                                    <li>● Camping guide article</li>

                                </ul>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card w-80 h-96 text-white border-2 border-accent border-opacity-75 shadow-xl">
                            <div class="card-body">
                                <h2 class="title text-2xl font-bold text-center mb-8">Technologies</h2>
                                <ul>
                                    <div className='ml-6 '>
                                        <div className=''>
                                            <li><a className=' text-info text-xl' href="https://reactjs.org/" target="_blank" rel="noreferrer">React js</a></li>
                                            <li><a className=' text-info text-xl' href="https://react-bootstrap.github.io/" target="_blank" rel="noreferrer">React Bootstrap</a></li>
                                            <li><a className=' text-info text-xl' href="https://react-hook-form.com/" target="_blank" rel="noreferrer">React Hook Form</a></li>
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
                        <div class="card w-80 h-96 text-white border-2 border-accent border-opacity-75 shadow-xl">
                            <div class="card-body">
                                <h2 class="title  text-2xl font-bold text-center mb-8">Source Code</h2>
                                <a className=' text-info text-xl' href="https://github.com/Shahariarshadhin/Camping-Cove-Client" target="_blank" rel="noreferrer">Github - Client</a>
                                <a className=' text-info text-xl' href="https://github.com/Shahariarshadhin/Camping-Cove-Server" target="_blank" rel="noreferrer">Github - Server</a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCamCove;