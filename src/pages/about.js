import * as React from 'react'
import Full from "../layouts/basic"
import "../styles/global.scss"

export default function AboutPage () {
  return (
    <Full>
      <section className="section">
        <h1 className="title has-text-white"><span className="glowPink">Victoria Tilley</span></h1>
        <div className="box">
          <div className="block">Heya! I'm Victoria - I go by "Sapphyre" or some derivation of that on most places on the internet.</div>
          <div className="block">I'm a 19 year old Computer Science student and software engineer-cross-game designer from the United Kingdom interested in fullstack development,
            computer graphics, game engines, and all other things tech and computers.</div>
          <div className="block">I really like programming, climbing, longboarding and getting into all sorts of trouble in videogames.</div>
        </div>
      </section>
      <section className="section">
        <h1 className="title has-text-white"><span className="glowPink">About</span></h1>
        <div className="box">
          <p>This website was made by me through utilisation of Gatsby, Bulma and Github Pages. The code is available <a href="https://github.com/sapphyree/sapphyree.github.io">HERE</a> on the dev branch.</p>
        </div>
      </section>
    </Full>
  )
}