import React, { useState } from 'react'
import './Contact.scss'
import shake from '../Images/shake.svg'
export default function Contact() {
    const [message, setMessag] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setMessag(true)

    }
    return (
        <div className="contact" id="contact">
            <div className='left'>
                <img src={shake}  alt=""/>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP</span>}
                </form>
            </div>
        </div>
    )
}
