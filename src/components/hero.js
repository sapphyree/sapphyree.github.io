import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Nav from "../components/nav"
import Socials from "../components/socials"
import Footer from "./footer"

export default function Hero() {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            display
            author
            description
          }
        }
      }      
    `)
    const { author, description, display } = data.site.siteMetadata

    return (
        <section className="hero is-fullheight">
            <div className="hero-head">
               <Nav />
            </div>
            <div className="hero-body">
                <div className="container">
                    <p className="title is-1 is-spaced"><span class="glowBlue">{display.substring(0,1)}</span><span class="glowPink">{display.substring(1,11)}</span><span class="glowBlue">{display.substring(11,12)}</span></p>
                    <p className="subtitle is-3"> Hi! I'm {author}.</p>
                    <p className="subtitle is-5">{description}</p>
                    <Socials></Socials>
                </div>
            </div>
        </section>
    )
}