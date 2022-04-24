import React from "react"
import MyDp from './images/my-dp.png'
import logo from './images/icon.png'
import logo2 from './images/Vector.png'
import "./style.css"

export default function Header() {
    return (
        
            <nav className="Info-data">
             <img src={MyDp}/>
             <h1>Abhishek Bhaskar</h1>
             <h3>Full Stack Developer</h3>
             <div className="btn">
             <button  href='https://google.com'><img src={logo}/>Email</button>
             {/* <a href="default.asp" target="_blank" className="btn1">Email</a> */}
             <button className="btn2"><img src={logo2}/>linkedln</button>
             </div>
             
            </nav>
      
    )
}
