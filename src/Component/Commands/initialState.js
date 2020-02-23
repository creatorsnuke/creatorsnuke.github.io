import React from 'react'

const linkStyle = {
  color: 'inherit',
  textDecoration: 'none'
}

export const initialState = {
  help: (
    <span>List of command: about, contact, skills, experience, education</span>
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
    <span>Framework: Nodejs, Express, MongoDB, React, Vue and Laravel
      <br/>
      Languages: JavaScript, PHP, HTML, CSS and C
      <br/>
      Tools: Vscode & Adobe (Ai, Ps & Id)
    </span>
  ),
  contact: (
    <span>
      Feel free to reach me at:
      <br/>
      <a href='https://www.facebook.com/tarrosa.jessie' style={linkStyle}>Facebook</a>
      <br/>
      <a href='https://www.instagram.com/majessietic' style={linkStyle}>Instagram</a>
      <br/>
      <a href='https://www.twitter.com/majessietic' style={linkStyle}>Twitter</a>
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
