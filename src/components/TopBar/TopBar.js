import React from 'react'
import './TopBar.scss'
import {Person,Mail} from '@material-ui/icons'
function TopBar({menuOpen,setMenuOpen}){
    return(
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#work" className="logo">Looser.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+91 9999999999</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>Looser@dev.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopBar