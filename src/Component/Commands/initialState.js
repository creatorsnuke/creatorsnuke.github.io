import React from 'react'

const linkStyle = {
  color: 'inherit'
}

export const initialState = {
    help: (
      <span>List of command: about, contact, skills, experience, education</span>
    ),
    about: (
      <span>Hello there,
        <br/>
        I'm Jessie Tarrosa a web developer in Cebu
      </span>
    ),
    education: (
      <span>Cebu Technological University - Tuburan Campus
        <br/>
        Bachelor of Science in Information and Communication Technology
      </span>
    ),
    skills: (
      <span>Framework: React, Vue, Laravel
        <br/>
        Languages: JavaScript, PHP, HTML, CSS, C
      </span>
    ),
    contact: (
      <span>
        You can contact me on any of following links:
        <br/>
        <a href="https://www.facebook.com/tarrosa.jessie" style={linkStyle}>Facebook</a>
        <br/>
        <a href="https://www.instagram.com/majessietic" style={linkStyle}>Instagram</a>
        <br/>
        <a href="https://www.twitter.com/majessietic" style={linkStyle}>Twitter</a>
      </span>
    ),
    something: (
      <span>
        Bazinga!!!
      </span>
    ),
    experience: (
      <span>
        Hire me please...
      </span>
    )
  }
