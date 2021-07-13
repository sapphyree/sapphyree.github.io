import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Nav from "../components/nav"

export default function Hero() {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }      
    `)
    const { title, description } = data.site.siteMetadata

    return (
        <section className="hero is-primary">
            <div className="hero-head">
                <Nav />
            </div>
            <div className="hero-body has-text-centered">
                <div className="container is-lower-case">
                    <h1 className="title is-1">{title}</h1>
                    <h3 className="subtitle is-5">{description}</h3>
                </div>
            </div>
        </section>
    )
}