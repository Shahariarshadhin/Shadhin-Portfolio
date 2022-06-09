import React, { useRef } from 'react';
import { HiMailOpen } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa";
import emailjs, { init } from '@emailjs/browser';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';



const HireMe = () => {

    init("SxAeglmW2zVXD_Dwm");

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        emailjs.sendForm('gmail', 'template_y44oye2', '#contact-form')
            .then((result) => {
                console.log(result.text);
                toast.success('Message Send Succefully')
            }, (error) => {
                console.log(error.text);
            });

    }

    // function sendEmail(e) {
    //     e.preventDefault();

    // }
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">


                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl ">

                        <div class="card-body">

                            <form className='w-full max-w-xs' id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                                <input className='input input-bordered input-accent w-full max-w-xs bg-[#000000] mb-4' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                                <input className='input input-bordered input-accent w-full max-w-xs bg-[#000000] mb-4' placeholder='Email ' type="email" {...register("email")} />
                                <input className='input input-bordered input-accent w-full max-w-xs bg-[#000000] mb-4' placeholder='Write a subject' type="text" {...register("subject")} />
                                <textarea className='input input-bordered input-accent w-full max-w-xs bg-[#000000] mb-4' placeholder='Your Message' {...register("message")} />
                                <input class="btn btn-outline btn-success" value="Send Message" type="submit" />
                            </form>

                        </div>
                    </div>


                    <div class="text-center lg:text-left text-white">
                        <h1 class="text-5xl lg:text-5xl font-bold font-black ">Get In touch</h1>
                        <p className='text-[#BBBABA] py-6'>Feel free to get in touch with me.<br></br> I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. </p>
                        <div className='flex items-center' >
                            <p className='text-warning text-3xl mr-4 mb-2'><FaAddressCard /></p>
                            <p className='text-xl'>Address</p>
                        </div>
                        <p className='text-[#BBBABA] px-12 mb-2'>Navy Colony-1, CEPZ, <br></br>Chattagram,Bngladesh</p>
                        <div className='flex items-center' >
                            <p className='text-warning text-3xl mr-4 mb-2'><HiMailOpen /></p>
                            <p className='text-xl'>Mail Me</p>
                        </div>
                        <p className='text-[#BBBABA] px-12 mb-2'>shadhin19shahariar@gmail.com</p>
                        <div className='flex items-center' >
                            <p className='text-warning text-3xl mr-4 mb-2'><IoIosCall /></p>
                            <p className='text-xl'>Call Me</p>
                        </div>
                        <p className='text-[#BBBABA] px-12'>+8801934905309</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HireMe;


// <form ref={form} onSubmit={sendEmail}>
//                             <div class="card-body">
//                                 <div class="form-control mb-4">

//                                     <input type="text" name='name' placeholder="Your Name" class="input input-bordered input-accent bg-[#000000]" />
//                                 </div>
//                                 <div class="form-control mb-4">

//                                     <input type="text" name='email' placeholder="Your Email" class="input input-bordered input-accent bg-[#000000]" />
//                                 </div>
//                                 <div class="form-control mb-4">

//                                     <input type="text" name='subject' placeholder="Write a Subject" class="input input-bordered input-accent bg-[#000000]" />
//                                 </div>
//                                 <div class="form-control mb-4">

//                                     <textarea type="text" name='message' placeholder="Your Message" class="input input-bordered textarea-accent bg-[#000000]" />
//                                 </div>

//                                 <div class="form-control mt-6">
//                                     {/* <button class="btn btn-outline btn-success">Send Message</button> */}
//                                     <input type="submit" class="btn btn-outline btn-success" value="Send Message" />
//                                 </div>
//                             </div>
//                         </form>