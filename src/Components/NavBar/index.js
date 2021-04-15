import React from 'react'
import PropTypes from 'prop-types'

export function NavBar ({ title }) {
  return (
    <nav className="nav-bar">
      <h3 className="title">{title}</h3>
    </nav>
  )
}

NavBar.defaultProps = {
  title: 'Me'
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired
}
