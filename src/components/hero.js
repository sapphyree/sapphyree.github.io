import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Nav from "../components/nav"

export default function Hero() {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
            description
          }
        }
      }      
    `)
    const { author, description } = data.site.siteMetadata

    return (
        <section className="hero is-primary">
            <div className="hero-head">
                <Nav />
            </div>
            <div className="hero-body has-text-centered">
                <div className="container">
                    <h1 className="title is-size-1">{author}</h1>
                    <h3 className="subtitle is-5">{description}</h3>
                </div>
            </div>
        </section>
    )
}