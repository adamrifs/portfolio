import React, { useEffect, useRef, useState } from 'react'
import './nav.css'
import { IoMenu } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";

function Nav() {
    const navref = useRef(null)
    useEffect(() => {
        function navfun() {

            if (window.scrollY > 700) {
                navref.current.style.backgroundColor = 'black'
            } else {
                navref.current.style.backgroundColor = 'transparent'
            }
        }
        window.addEventListener('scroll', navfun)
        return () => {
            window.removeEventListener('scroll', navfun)
        }
    }, [])

    const naviconref = useRef(null)
    const navcloseref = useRef(null)
    const [isopen, setisopen] = useState(false)
    useEffect(() => {
        function navmenu() {
            if (naviconref.current) {
                setisopen(true)
            } else {
                setisopen(false)
            }
        }

        function closefun(){
            if(navcloseref.current){
                setisopen(false)
            }else{
                setisopen(true)
            }
        }
        naviconref.current.addEventListener('touchstart', navmenu)
        navcloseref.current.addEventListener('touchstart',closefun)
        return () => {

            naviconref.current.removeEventListener('touchstart', navmenu)
        }
    }, [])
             
    return (
        <div>
            <nav id="nav" ref={navref} className='nav'>
                <div class="textbox">
                    <h1><span>A</span>dam</h1>
                </div>
                <div class={`nav-links ${isopen ? 'open' : 'close'}`} id="navLinks">
                    <ul>
                        <div className="closeicon"><span ref={navcloseref}><IoIosArrowUp /></span></div>
                        <li><a href="#" onclick="hideMenu()">Home</a></li>
                        <li><a href="#about" onclick="hideMenu()">About</a></li>
                        <li><a href="#projects" onclick="hideMenu()">Projects</a></li>
                        <li><a href="#services" onclick="hideMenu()">Services</a></li>
                        <li><a href="#contact" onclick="hideMenu()">Contact</a></li>
                    </ul>
                </div>
                <div ref={naviconref} className="navicon">
                    <IoMenu />
                </div>
                {/* <i class="bi bi-list" onclick="showMenu()" id="list"></i> */}
            </nav>
        </div>
    )
}

export default Nav