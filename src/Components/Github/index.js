import React from 'react'

export const Github = (props) => {
  return (
    <div>
      <div className='author'>
        <a href='https://github.com/oreoseenoevil' 
          target='_blank' rel='noopener noreferrer' 
          title="Link to author's Github Profile"
        >
          {props.name}
        </a>
      </div>
    </div>
  )
}
