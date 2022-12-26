/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react"

export default function Navbar() {
    return (
        <nav className="Navbar">
            <img src="messiu.png" className="portrait" alt="" />
            <h1 className="name">Lionel Messi</h1>
            <h4 className="name">Footballer</h4>
            <a href="https://www.instagram.com/leomessi/" target="_blank" rel="noreferrer" title="Direct to Messi Instagram">
                <button className="Insta">
                    <img src="Instagram.png" className="InstaIcon" alt=""></img>
                </button>
            </a>
            <a href="https://www.facebook.com/leomessi/" target="_blank" rel="noreferrer" title="Direct to Messi Facebook">
                <button className="Face">
                    <img src="Facebook.png" className="FacebookIcon" alt=""></img>
                </button>
            </a>
        </nav>
    )
}