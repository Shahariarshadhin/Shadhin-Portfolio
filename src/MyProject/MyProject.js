import React from 'react';
import './MyProject.css'
import project_1 from '../images/project_1.png'
import project_2 from '../images/project_2.png'
import project_3 from '../images/project_3.png'

const MyProject = () => {
    return (


        <div className='lg:px-48 text-white'>
            <h1 class="text-4xl lg:text-5xl font-bold font-black text-white">My Latest Project</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 mt-20'>
                <div class="card w-96    shadow-xl">
                    <figure class="px-10 pt-10 hoverCard">
                        <img src={project_1} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Core Computer Castle</h2>
                        <p className='text-[#B4B5B6]'>This is a tech electronics parts manufacturer web application
                            using MERN Stack Technology
                        </p>
                        <div class="card-actions">
                            <button class="btn btn-outline btn-warning">View Details</button>

                        </div>
                    </div>
                </div>



                <div class="card w-96  shadow-xl">
                    <figure class="px-10 pt-10 hoverCard">
                        <img src={project_2} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Camping Cove</h2>
                        <p className='text-[#B4B5B6]'> This is an inventory management web application using MERN
                            Stack Technology
                        </p>
                        <div class="card-actions">
                            <button class="btn btn-outline btn-warning">View Details</button>
                        </div>
                    </div>
                </div>



                <div class="card w-96  shadow-xl">
                    <figure class="px-10 pt-10 hoverCard">
                        <img src={project_3} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Travelo</h2>
                        <p className='text-[#B4B5B6]'> This is a travel guide and package providing website using react js

                        </p>
                        <div class="card-actions">
                            <button class="btn btn-outline btn-warning">View Details</button>

                        </div>
                    </div>
                </div>
            </div>
            <button class="btn  btn-warning">View More</button>
        </div>
    );
};

export default MyProject;