import * as React from 'react'
import Full from "../layouts/basic"
import "../styles/global.scss"

export default function ProjectsPage () {
  return (
    <Full>
        <h1 className="title has-text-white"><span className="glowPink">Projects</span></h1>
            <section className="section">
                <p className="title has-text-white is-4"><span className="glowBlue">Fullstack Projects</span></p>
                <div className="box">
                Nothing to see here for now!
                </div>
            </section>
            <section className="section">
                <p className="title has-text-white is-4"><span className="glowBlue">GameDev Projects</span></p>
                <div className="box">
                Nothing to see here for now!
                </div>
            </section>
            <section className="section">
                <p className="title has-text-white is-4"><span className="glowBlue">Events</span></p>
                <div className="box">
                Nothing to see here for now!
                </div>
            </section>
    </Full>
  )
}