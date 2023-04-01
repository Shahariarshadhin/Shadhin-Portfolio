import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { HashLink } from 'react-router-hash-link';



const Navbar = () => {

    const menubar = <>

        <li className=' hover:text-amber-400'><Link to="/">Home</Link></li>

        <li className='hover:text-amber-400'>
            <HashLink
                to="/home#about"
                activeClassName="selected"
                activeStyle={{ color: 'red' }}

            >About</HashLink>
        </li>

        <li className=' hover:text-amber-400'>
            <HashLink
                to="/home#myProject"
                activeClassName="selected"
                activeStyle={{ color: 'red' }}

            >Projects</HashLink>
        </li>

        <li className=' hover:text-amber-400'>
            <HashLink
                to="/home#contact"
                activeClassName="selected"
                activeStyle={{ color: 'red' }}

            >Contact</HashLink>
        </li>

        <li className=' hover:text-amber-400'><Link to="/blogs">Blogs</Link></li>




    </>
    return (
        <div className="navbar text-white">
            <div className="navbar-left lg:mx-12">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-[#17202A]">

                        {menubar}

                    </ul>
                </div>

            </div>

            <div className="navbar-center hidden  lg:flex ">
                <div className="">
                    <ul className="menu menu-horizontal p-0 text-xl font-bold">
                        {menubar}
                    </ul>
                </div>
                <div className="lg:ml-[600px] lg:flex mt-4 text-xl">

                    <a className='hover:text-amber-400   mr-6 mb-2' href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebook /></a>
                    <a className='hover:text-amber-400   mr-6 mb-2' href="https://www.instagram.com/" target="_blank" rel="noreferrer"><BsInstagram /></a>
                    <a className='hover:text-amber-400   mr-6 mb-2' href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
                    <a className='hover:text-amber-400   mr-6 mb-2' href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><GrLinkedinOption /></a>
                    <a className='hover:text-amber-400   mr-6 mb-2' href="https://github.com/Shahariarshadhin" target="_blank" rel="noreferrer"><BsGithub /></a>


                </div>
            </div>


        </div>
    );
};

export default Navbar;