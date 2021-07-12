import * as React from 'react'
import Full from "../layouts/basic"
import { StaticImage } from 'gatsby-plugin-image'
import "../styles/global.scss"

export default function AboutPage () {
  return (
    <Full>
     <div className="columns">
       <div className="column">
         <div className="box has-text-black has-background-info">
             <h1 className="title is-5">About</h1>
             This site was made by me using Bulma, Gatsby and Github Pages.
         </div>
       </div>
     </div>
   </Full>
  )
}