import React from 'react'
import Typewriter from 'typewriter-effect'

export function Banner () {

  return (
    <div className="banner-terminal">
      <Typewriter
        onInit={typewriter => {
          typewriter.typeString('<span class="line"><span class="dollar"></span> hi there, i&apos;m jessie</span><br />')
          typewriter.typeString('<span class="line"><span class="dollar"></span> a web developer</span><br />')
          typewriter.typeString('<span class="line"><span class="dollar"></span> based in cebu</span><br />')
          typewriter.typeString('<span class="line"><span class="dollar"></span> love lifting heavy weights and coding</span>')
            .start()
        }}
      />
    </div>
  )
}
