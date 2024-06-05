import React from 'react'

import { useState } from "react";

import { Link, NavLink } from 'react-router-dom';

import { TfiMenu } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";

import "./Nav.css"

function Nav() {


    const [click, setclick] = useState(false)


    const handelclick=()=>{

        setclick(!click)
    }

    return (
        <>


            <nav className="navbar">




                <span className='brandname'>CodeBucks</span>



                <ul className="navmanub">

                    <li>

               

                    </li>
                    <li>about</li>

                    <li>blog</li>
                    <li>card</li>
                    <li>ccount</li>
                    <li>contact</li>


                </ul>


                

                <ul className={click?"navmanuactive":"navmanuc"}>

                    <li>home</li>
                    <li>about</li>
                    <li>blog</li>
                    <li>card</li>
                    <li>ccount</li>
                    <li>contact</li>


                </ul>



                {click ? (
                    <div >

                        <span className='icon'>
                            <TfiClose onClick={handelclick}/>

                        </span>

                    </div>

                ) : (

                    <div>

                        <span className='icon'>
                            <TfiMenu onClick={handelclick}/>

                        </span>

                    </div>

                )

                }

            </nav>

        </>
    )
}

export default Nav
