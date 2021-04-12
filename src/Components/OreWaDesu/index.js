import React from 'react'

export const OreWaDesu = (props) => {

  return (
    <div className='profile-inner'>
      <div className='circleButton'></div>
      <h1 className='profile-name'>{props.name}</h1>
      <h2 className='profile-job'>{props.title}</h2>
    </div>
  )
}
