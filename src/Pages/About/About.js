import React from 'react';

import aboutImage from '../../images/about.png'

const About = () => {
    return (
        <div class="hero min-h-screen text-white text-left " id='about'>
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="avatar">
                    <div class="lg:w-[400px] rounded-full">
                        <img src={aboutImage} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    </div>
                </div>

                <div>

                    <h1 class="text-5xl font-bold font-black">About Me</h1>
                    <p class="lg:py-6 text-warning">A Lead Web Developer based in Bangladesh</p>
                    <p>I'm Shahariar Hasan Shadhin.<br></br> I'm a front‑end web developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent Web application that improves the lives of those around me.I'm a hardworking person and Love to coding steadily.I'm trying to be a honest person and also a good human being </p>

                </div>


            </div>
        </div>
    );
};

export default About;