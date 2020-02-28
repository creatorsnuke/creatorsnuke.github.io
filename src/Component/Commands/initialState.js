import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaEnvelope } from 'react-icons/fa'

const linkStyle = {
  color: 'inherit',
  textDecoration: 'none',
}

const textStyle = {
  display: 'inline-flex',
  verticalAlign: 'middle'
}


export const initialState = {
  help: (
    <span>List of command: 
      <br/>about
      <br/>contact
      <br/>experience
      <br/>education
      <br/>skills
    </span>
  ),
  about: (
    <span>Hello there,
      <br/>
      I&apos;m Jessie Tarrosa a web developer living in Cebu
    </span>
  ),
  education: (
    <span>Cebu Technological University - Tuburan Campus
      <br/>
      Bachelor of Science in Information and Communication Technology
    </span>
  ),
  skills: (
    <span>Framework/Library/DB: Express, React, Vue, Laravel, Bootstrap, Bulma, Materialize, MongoDB and MySQL
      <br/>
      <br/>
      Languages: JavaScript, PHP, HTML, CSS and C
      <br/>
      <br/>
      Tools: Nodejs, Git, Vscode, Browsers, Adobe (Ai, Ps & Id) & xampp
    </span>
  ),
  contact: (
    <span>
      Get in touch with me at:
      <br/>
      <br/>
      <a href='https://www.facebook.com/tarrosa.jessie' style={linkStyle} ><span style={textStyle}><FaFacebookSquare /></span> - majessietic</a>
      <br/>
      <a href='https://www.instagram.com/majessietic' style={linkStyle}><span style={textStyle}><FaInstagram /></span> - majessietic</a>
      <br/>
      <a href='https://www.twitter.com/majessietic' style={linkStyle}><span style={textStyle}><FaTwitterSquare /></span> - Twitter</a>
      <br/>
      <a href='mailto:creators.nuke@gmail.com' style={linkStyle}><span style={textStyle}><FaEnvelope /></span> - creators.nuke@gmail.com</a>
    </span>
  ),
  something: (
    <span>
      Bazinga!!!
    </span>
  ),
  experience: (
    <span>
      Hire me to unlock experience...
    </span>
  )
}
