import React, { useContext, useEffect, useRef, useState } from 'react'
import './home.css'
import fornax from './assets/fornax.jpg'
import university from './assets/university.jpg'
import web1 from './assets/web1.gif'
import web2 from './assets/web2.gif'
import web3 from './assets/web3.gif'
import web4 from './assets/web4.gif'
import cv from './assets/cv.pdf'
import { GiClick } from "react-icons/gi";
import { TiDownload } from "react-icons/ti";
import { BsArrowRightShort } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { mycontext } from './context'

function Home() {

    const headref = useRef(null)
    const [visible, setvisible] = useState(false)
    const mainref = useRef(null)
    const { project, setproject, about, setabout, services, setservices } = useContext(mycontext)

    useEffect(() => {
        function mainslide() {
            if (mainref.current) {
                if (window.scrollY > 20) {
                    mainref.current.classList.add('fade-out')
                    mainref.current.classList.remove('fade-in')
                } else {
                    mainref.current.classList.add('fade-in')
                    mainref.current.classList.remove('fade-out')
                }
            }
        }
        window.addEventListener('scroll', mainslide)

        return () => {
            window.removeEventListener('scroll', mainslide)

        }
    }, [])

    // ======== about me scrolling============
    useEffect(() => {
        function sliding() {
            const elementtop = headref.current.getBoundingClientRect().top;
            const windowheight = window.innerHeight;
            if (headref.current) {
                if (elementtop < windowheight / 2) {
                    setvisible(true)
                } else {
                    setvisible(false)
                }
            }
        }

        window.addEventListener('scroll', sliding)
        return () => {
            window.removeEventListener('scroll', sliding)
        };
    }, [])

    //============= project heading scroll ================
    const projheadref = useRef(null)
    const [prhvisible, setprhvisible] = useState(false)
    useEffect(() => {

        function headscroll() {
            const headtop = projheadref.current.getBoundingClientRect().top;
            const windowheight = window.innerHeight
            if (projheadref) {
                if (headtop < windowheight) {
                    setprhvisible(true)
                } else {
                    setprhvisible(false)
                }
            }
        }

        window.addEventListener('scroll', headscroll)
        return () => {
            window.removeEventListener('scroll', headscroll)
        }
    }, [])

    //================= project sccroll================
    const projectref = useRef(null)
    const [projvisible, setprojvisible] = useState(false)
    useEffect(() => {

        function projslide() {
            const projtop = projectref.current.getBoundingClientRect().top
            const windowheight = window.innerHeight
            if (projectref) {
                if (projtop < windowheight) {
                    setprojvisible(true)
                    window.removeEventListener('scroll', projslide);
                }
            }
        }
        window.addEventListener('scroll', projslide)
        return () => {
            window.removeEventListener('scroll', projslide)
        }
    }, [])

    //========== service scroll================
    const servhead = useRef(null)
    const [servisible, setservisible] = useState(false)

    useEffect(() => {
        function servheadfun() {
            const servheadtop = servhead.current.getBoundingClientRect().top
            const windowheight = window.innerHeight
            if (servhead) {
                if (servheadtop < windowheight / 2) {
                    setservisible(true)
                } else {
                    setservisible(false)
                }
            }
        }
        window.addEventListener('scroll', servheadfun)
        return () => {
            window.removeEventListener('scroll', servheadfun)
        }
    }, [])

    const [buttonanim, setbuttonanim] = useState(false)
    function btnload() {
        setbuttonanim(true);

        setTimeout(() => {
            setbuttonanim(false)
        }, 2000);
    }

    // ============== message scroll================
    const mesheadref = useRef(null)
    const [mesheadvisible, setmesheadvisible] = useState(false)
    useEffect(() => {

        function mesheadfun() {
            const mesheadtop = mesheadref.current.getBoundingClientRect().top
            const windowheight = window.innerHeight
            if (mesheadref.current) {
                if (mesheadtop < windowheight / 2) {
                    setmesheadvisible(true)
                } else {
                    setmesheadvisible(false)
                }
            }
        }

        window.addEventListener('scroll', mesheadfun)

        return () => {
            window.removeEventListener('scroll', mesheadfun)
        }
    }, [])

    const [arrowvis, setarrowvis] = useState(false)
    const arrowref = useRef(null)
    useEffect(() => {
        function arrowfun(event) {
            if (event.type === 'mouseenter') {
                setarrowvis(true)
            } else if (event.type === 'mouseleave') {
                setarrowvis(false)
            }
        }
        arrowref.current.addEventListener('mouseenter', arrowfun)
        arrowref.current.addEventListener('mouseleave', arrowfun)

        return () => {
            arrowref.current.removeEventListener('mouseenter', arrowfun)
            arrowref.current.removeEventListener('mouseleave', arrowfun)
        }
    }, [])

    const [msgvis, setmsgvis] = useState(false)
    const contactref = useRef(null)

    function msgopen() {
        const formstyle = window.getComputedStyle(contactref.current)
        if (formstyle.visibility === 'hidden' &&
            formstyle.opacity === '0') {
            setmsgvis(true)
        } else if (formstyle.visibility === 'visible' &&
            formstyle.opacity === '1') {
            setmsgvis(false)
        }
    }

    return (
        <div className='home-container'>
            <div className='main'>

                <div className="gr1"></div>
                <div className="gr2"></div>
                <div className="grf"></div>
                <div className="gr3"></div>
                <div className="gr4"></div>
                <div className="gr4f"></div>
                <div className="gr5"></div>
                <div className="gr5f"></div>
                <div className="gr6"></div>
                <div className="gr7"></div>

                <div className="container">
                    <div className="heading">
                        <h1>
                            <span class="word1">Hi</span>
                            <span class="word2">I'm</span>
                            <span class="word3">Adam</span>
                        </h1>
                        <div ref={mainref} className="box fade-in">
                            <h1>
                                <span class="box1">Hi,</span>
                                <span class="box2">I'm</span>
                                <span class="box3">Adam</span>
                            </h1>
                        </div>
                    </div>

                    <div className="cv-dw-box">
                    <a href={cv} download='adamsCV'>
                        <button onClick={btnload}>
                            <span></span><TiDownload className={buttonanim ? 'icon download' : 'icon'} /> Download CV
                        </button>
                    </a>

                    <div className="gt-start">
                        <a href="#aboutsec">
                        <button className='gtstrt'>Get Started  <BsArrowRightShort /></button>
                        </a>
                    </div>
                </div>

                </div>
              
            </div>

            {/* =============second container starts here========= */}

            <div className="second-cont">
                {
                    about.map(dt =>
                        <div className="about-section" id='aboutsec'>
                            <div ref={headref} className={`ab-heads ${visible ? 'swipe' : ''}`}>
                                <h1>{dt.name}</h1>
                            </div>
                            <div className="ab-para">
                                <p>{dt.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>

            {/* ============== third container starts here============= */}

            <div className="third-cont">
                <div className="project-cont" id='projects'>
                    <div ref={projheadref} className={`pr-heads ${prhvisible ? 'headslide' : ''}`}>
                        <h2>Projects</h2>
                    </div>
                    <div className="projects-box">
                        {
                            project.map(data =>
                                <div ref={projectref} className={`projects ${projvisible ? 'projectfade' : ''}`}>
                                    <div className="pr-img">
                                        <a href={data.link} target='_blank' rel="noopener noreferrer"><img src={data.image} alt='project1' /> </a>
                                    </div>

                                    <div className="pr-right-sec">
                                        <div className="pr-inner-head">
                                            <h3>{data.name}</h3>
                                            <a href={data.link} target='_blank' rel="noopener noreferrer">See the project <GiClick /></a>
                                        </div>
                                        <div className="pr-desc" dangerouslySetInnerHTML={{ __html: data.description }}></div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>

            {/*============= fourth container starts here============ */}

            <div className="fourth-cont">
                <div className="service-cont" id='services'>
                    <div ref={servhead} className={`service-head ${servisible ? 'serve-h-fade' : ''}`} >
                        <h1>Services</h1>
                    </div>
                    <div className="services-box">
                        {
                            services.map(data =>
                                <div className="sv-box">
                                    <div className="sv-box-image">
                                        <img src={data.image} />
                                        <div className="overlay">
                                            <h3>{data.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>

            {/* ===========fifth container starts here========== */}

            <div className="fifth-cont">
                <div className="contact-box">
                    <div className="contact-head" id='contact'>
                        <h2>Contact Me</h2>
                    </div>
                </div>
                <div className="contact-f-h-box">
                    <div ref={mesheadref} className={`c-f-h-box ${mesheadvisible ? 'cfh-fade' : ''}`}>
                        <h1>Drop Me a Message.</h1>
                        <div ref={arrowref} onClick={msgopen} className="arrow-icon">{arrowvis ? <FaArrowAltCircleRight /> : <FaRegArrowAltCircleRight />}</div>
                    </div>

                    <div ref={contactref} className={`contact-form ${msgvis ? 'msgvisible' : ''}`}>
                        <div className="input-fields">
                            <input type='text' id='name' name='name' required />
                            <label for='name'>Name</label>
                        </div>
                        <div className="input-fields">
                            <input type='email' id='email' name='email' required />
                            <label for='email'>Email</label>
                        </div>
                        <div className="input-fields">
                            <textarea id='message' className='textarea' required cols='40' rows='3'></textarea>
                            <label for='message'>Message</label>
                        </div>
                        <div className="submit-btn">
                            <button><IoIosSend /> Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home