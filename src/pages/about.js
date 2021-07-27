import * as React from 'react'
import Full from "../layouts/basic"
import "../styles/global.scss"

export default function AboutPage () {
  return (
    <Full>
      <div className="content">
        <h1 className="title has-text-white"><span className="glowPink">About</span></h1>
        <p>This website was made by me through utilisation of Gatsby, Bulma and Github Pages.</p>
      </div>
      
    </Full>
  )
}