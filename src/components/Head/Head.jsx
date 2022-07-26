import React from 'react'
import "./head.css"
import CV from "./assets/cv.pdf"
import Link from './Link'
import Danish from "./assets/Danish (2).png"
const Head = () => {
  return (
    <header>
  <p>Hello I'm</p>
  <h1>Danish Khan</h1>
  <p className='light'>Full Stack Web Developer</p>
  <div className="cta">
    
  <a className='btn btn-outline' href={CV} download>Download CV</a>
  <a className='btn btn-primary' href="#contact">Contact Me</a>
  </div>
  <Link />
  <a className='scroll' href="#contact">Scroll Down</a>
  <div className="me">

    <div className="danu">
      <h1>D</h1>
      <h1>A</h1>
      <h1>N</h1>
      <h1>I</h1>
      <h1>S</h1>
      <h1>H</h1>
    </div>
  <img src={Danish} alt="" />

  </div>
    </header>
  )
}

export default Head