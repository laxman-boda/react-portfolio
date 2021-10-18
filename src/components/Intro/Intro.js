import React, { useEffect, useRef } from 'react'
import './Intro.scss'
import man from '../Images/man.png'
import down from '../Images/down.png'
import {init} from 'ityped'
export default function Intro() {
    const textRef = useRef()
    useEffect(() => {
        init(textRef.current, {
            showCursor:true,
            backDelay:1500,
            backSpeed:50,
            strings: ["Developer","Designer"]
        })
    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgeContainer">
                    <img src={man} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Laxman Boda</h1>
                    <h3>UI  <span ref={textRef}></span> </h3>
                </div>
                <a href="#portfolio">
                    <img src={down} alt=""/>
                </a>
            </div>
        </div>
    )
}
