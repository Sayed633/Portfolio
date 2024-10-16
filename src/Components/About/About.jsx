// eslint-disable-next-line no-unused-vars
import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import image_profile from '../../assets/image_profile.jpg'

const About = () => {
  return (
    <div id='about-me' className='about'>
<div className="about-title">
    <h1>About me</h1>
    <img src={theme_pattern} alt="" />
</div>
<div className="about-sections">
<div className="about-left">
    <img src={image_profile} alt="" />
</div>
<div className="about-right">
  <div className="about-para">
    <p>I specialize in creating dynamic, user-friendly web applications using modern technologies like HTML, CSS, JavaScript, and frameworks like React. I thrive on turning ideas into responsive, interactive, and visually appealing websites</p>
    <p>I am a passionate frontend developer who thrives on building engaging and user-centered web experiences. </p>
  </div>
  <div className="about-skills">
    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>

    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>

    <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
    <div className="about-skill"><p>Node Js</p><hr style={{width:"50%"}}/></div>
  </div>
</div>
</div>

<div className="about-achievements">
  <div className="about-achievement">
    <h1>10+</h1>
    <p>Projects</p>
  </div>
  <hr />
  <div className="about-achievement">
    <h1>5+</h1>
    <p>Major Projects</p>
  </div>
  <hr />

  <div className="about-achievement">
    <h1>15+</h1>
    <p> User-friendly Projects</p>
  </div>
</div>
    </div>
  )
}

export default About