import React from 'react'
import Typewriter from 'typewriter-effect'

export function Banner () {

  return (
    <div className="banner">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <div className="banner-terminal">
        <Typewriter
          options={{
            delay: 60
          }}
          onInit={typewriter => {
            typewriter.typeString('<span class="line"><span class="dollar"></span> hi there, i&apos;m jessie</span><br />')
            typewriter.typeString('<span class="line"><span class="dollar"></span> a web developer</span><br />')
            typewriter.typeString('<span class="line"><span class="dollar"></span> based in cebu</span><br />')
            typewriter.typeString('<span class="line"><span class="dollar"></span> pursuing aesthetics in designing and</span><br />')
            typewriter.typeString('<span class="line"><span class="dollar"></span> also love lifting heavy stuff and coding</span>')
              .start()
          }}
        />
      </div>
    </div>
  )
}
