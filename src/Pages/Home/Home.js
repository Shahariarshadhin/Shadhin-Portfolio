import React from 'react';
import myImage from '../../images/myImage.png'
import resume from '../../document/Shahariar Hasan Shadhin-WD-N.pdf'
import About from '../About/About';
import MyProject from '../../MyProject/MyProject';
import HireMe from '../../HireMe/HireMe';

const Home = () => {
    return (
        <div>
            <div class="hero min-h-screen text-white text-left ">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div>
                        <h1 className='text-[#D2D5D6]'>Welcome To My World</h1>
                        <h1 class="text-5xl font-bold font-black">Hi, I’m <br></br>Shahariar Hasan Shadhin</h1>
                        <h1 class="py-6 text-5xl font-bold font-black text-[#C21E56]">Junior Web Developer</h1>

                        <a href={resume} target="_blank">
                            <button class="btn btn-warning mt-8">Download Resume</button>
                        </a>

                    </div>
                    <div class="avatar">
                        <div class="lg:w-[500px] rounded-[150px]">
                            <img src={myImage} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                        </div>
                    </div>

                </div>
            </div>
            <About></About>
            <MyProject></MyProject>
            <HireMe></HireMe>
        </div>
    );
};

export default Home;