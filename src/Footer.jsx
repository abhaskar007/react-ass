import React from "react"
import img1 from "./images/Twitter Icon.png"
import img2 from "./images/Facebook Icon.png"
import img3 from "./images/GitHub Icon.png"
import img4 from "./images/Instagram Icon.png"

export default function Footer() {
    return (
        <footer>
            <div className="logo-footer">
            <img src={img1}/>
            <img src={img2}/>
            <img src={img3}/>
            <img src={img4}/>
            </div>
        </footer>
    )
}