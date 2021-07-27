import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Socials from "./socials"

export default function Footer() {
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
        <footer className="footer">
            <nav className="level">
                <div className="level-left">
                    <p>© {author} 2021</p>
                </div>
                <div className="level-right">
                    <Socials />
                </div>
            </nav>
        </footer>
    )
}