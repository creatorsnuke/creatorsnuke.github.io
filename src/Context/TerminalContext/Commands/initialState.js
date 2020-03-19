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
    <span>List of commands:
      <br/>
      <br/>
      <table>
        <tbody>
          <tr>
            <td>about</td>
            <td>introduction or about me</td>
          </tr>
          <tr>
            <td>showcase</td>
            <td>projects and some stuffs</td>
          </tr>
          <tr>
            <td>skills</td>
            <td>tools and techs</td>
          </tr>
          <tr>
            <td>clear or cls</td>
            <td>delete history logs</td>
          </tr>
          <tr>
            <td>contact</td>
            <td>information or getting in touch</td>
          </tr>
          <tr>
            <td>experience</td>
            <td>job history</td>
          </tr>
          <tr>
            <td>education</td>
            <td>affiliated University</td>
          </tr>
          <tr>
            <td>help</td>
            <td>by the name itself</td>
          </tr>
        </tbody>
      </table>
    </span>
  ),
  about: (
    <span>Hello there,
      <br/>
      <br/>
      I&apos;m Jessie Tarrosa a certain handsome random guy who&apos;s having a little bit skills in web developing 
      and also have a passion about creating and designing things. 
      <br/>
      <br/>
      Swipe right if you want to know more... just kidding
    </span>
  ),
  education: (
    <span>Cebu Technological University - Tuburan Campus
      <br/>
      Bachelor of Science in Information and Communication Technology
    </span>
  ),
  skills: (
    <span>Tools and Technologies:
      <br/>
      <br/>Express, React, Vue, Laravel, Bootstrap, Bulma, Materialize, MongoDB, MySQL, JavaScript, JSON, PHP, HTML, CSS, SASS, Objective-C, Nodejs
      <br/>Postman, Git, Vscode and Adobe (Ai, Ps & Id)
    </span>
  ),
  contact: (
    <span>
      Get in touch with me at:
      <br/>
      <br/>
      <a href='https://www.facebook.com/tarrosa.jessie' style={linkStyle} >
        <span style={textStyle}><FaFacebookSquare /></span> - majessietic
      </a>
      <br/>
      <a href='https://www.instagram.com/majessietic' style={linkStyle}>
        <span style={textStyle}><FaInstagram /></span> - majessietic
      </a>
      <br/>
      <a href='https://www.twitter.com/majessietic' style={linkStyle}>
        <span style={textStyle}><FaTwitterSquare /></span> - majessietic
      </a>
      <br/>
      <a href='mailto:creators.nuke@gmail.com' style={linkStyle}>
        <span style={textStyle}><FaEnvelope /></span> - creators.nuke@gmail.com
      </a>
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
  ),
  showcase: (
    <span>
      <a href='https://creatorsnuke.github.io/react-calculator/' style={linkStyle}>
        react-calculator
      </a>
      <br/>
      <a href='https://majessietic.github.io/react-tictactoe/' style={linkStyle}>
        react-tictactoe
      </a>
      <br />
      <a href='https://majessietic.github.io/react-todo/' style={linkStyle}>
        react-todo
      </a>
      <br/>
      <br/>
      <span>WIP...</span>
    </span>
  )
}
