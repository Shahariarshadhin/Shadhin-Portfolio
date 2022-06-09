import React from 'react';

import aboutImage from '../../images/about.png'

const About = () => {
    return (
        <div class="hero min-h-screen text-white text-left ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="avatar">
                    <div class="lg:w-[400px] rounded-full">
                        <img src={aboutImage} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    </div>
                </div>

                <div>

                    <h1 class="text-5xl font-bold font-black">About Me</h1>
                    <p class="lg:py-6 text-warning">A Lead Web Developer based in Bangladesh</p>
                    <p>I'm a front‑end web developer focused on crafting clean & user‑friendly experiences,<br></br> I am passionate about building excellent Web application that improves the lives of those around me.</p>

                </div>

            </div>
        </div>
    );
};

export default About;