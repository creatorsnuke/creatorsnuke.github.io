import React from 'react'
import PropTypes from 'prop-types'

export const OreWaDesu = (props) => {

  return (
    <div className="profile-info">
      <div className="profile-image"></div>
      <span className="profile-name">{props.name}</span>
      <span className="profile-job">{props.job}</span>
    </div>
  )
}

OreWaDesu.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
}
