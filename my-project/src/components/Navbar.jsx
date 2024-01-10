import React, { useState } from "react";
import logo from "../assets/logo.png"
import facebook from "../assets/icons/facebook.png"
import youtube from "../assets/icons/youtube.png"
import instagram from "../assets/icons/instagram.png"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen)
    };

    return (
        <>
            <nav className="flex justify-center w-100 bg-[--yellow] py-10 monserrat">
                <div className="lg:w-[80%] md:w-[60%] sm:w-[50%]">
                    <a href="#">
                        <img className="  mt-10 " src={logo} alt="" />
                    </a>
                </div>
                <div className="flex flex-wrap items-center justify-evenly py-4 md:py-0 px-2 text-lg text-gray-700">
                    <button onClick={handleMenuToggle}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="menu-button"
                            className="h-6 w-6 cursor-pointer lg:hidden block"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>

                    <div className={` w-full lg:flex lg:flex-col lg:items-center lg:w-auto 2 text-lg text-gray-700 ${
          isMenuOpen ? 'lg:flex' : 'lg:flex-col lg:items-center lg:w-auto hidden'
        }`} id="menu">
                        <ul className="py-4 text-xl text-[--brown] md:flex md:justify-between md:pt-0 font-bold">
                            <li>
                                <a className="md:p-4 py-2 block hover:text-gray-500" href="#aceituna">
                                    ACEITUNA
                                </a>
                            </li>
                            <li>
                                <a className="md:p-4 py-2 block hover:text-gray-500" href="#talleres">
                                    TALLERES
                                </a>
                            </li>
                            <li>
                                <a className="md:p-4 py-2 block hover:text-gray-500" href="#suscripiones">
                                    SUSCRIPCIONES
                                </a>
                            </li>
                            <li>
                                <a className="md:p-4 py-2 block hover:text-gray-500" href="#galeria">
                                    GALERÍA
                                </a>
                            </li>
                            <li>
                                <a className="md:p-4 py-2 block hover:text-gray-500" href="#calendario">
                                    CALENDARIO
                                </a>
                            </li>
                            <li>
                                <a className="md:p-4 py-2 block hover:text-gray-500" href="#contacto">
                                    CONTACTO
                                </a>
                            </li>
                        </ul>

                        <ul className="flex w-full lg:justify-end items-center gap-10 border-t-4 pt-7 pe-7 md:justify-center border-[--brown]">
                            <li className="transition hover:scale-110">
                                <a href="https://www.instagram.com/aceitunaexperience?fbclid=IwAR3c9t6cBUB4XIWyC-kTT8xa3Vo81tv8nbt2JJdmpz1qmFz34UizYX6eIeE" target="_blank">
                                    <img src={instagram} alt="" />
                                </a>
                            </li>
                            {/* <li className="transition hover:scale-110">
                                <a href="">
                                    <img src={youtube} alt="" />
                                </a>
                            </li> */}
                            <li className="transition hover:scale-110">
                                <a href="https://www.facebook.com/profile.php?id=61554323523242" target="_blank">
                                    <img src={facebook} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    );
};

export default Navbar;
