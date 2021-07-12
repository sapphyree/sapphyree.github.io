import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Nav() {

    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            display
          }
        }
    
        allNavbarYaml {
          nodes {
            name
            link
          }
        }
      }
    `)

    const { display } = data.site.siteMetadata
    const items = data.allNavbarYaml.nodes

    return (
        <NavBar>
          <NavBrand title={display}></NavBrand>
          <NavMenu>
            <NavStart items={items}></NavStart>
          </NavMenu>
        </NavBar>
      )
}

function NavBar ({ children }) {
    return (
        <div className="navbar is-primary">
            {children}
        </div>
    )
}

function NavBrand ({ title }) {
    return (
        <div className="navbar-brand">
            <div className="navbar-item">{title}</div>
        </div>
    )
}

function NavMenu ({ children }) {
    return (
        <div className="navbar-menu">{children}</div>
    )
}

function NavStart ({ items }) {
    return (
        <div className="navbar-start">
            {items.map((item, index) => {
                if (item.link[0] === "/") {
                    return (
                        <Link
                            to={item.link}
                            className="navbar-item"
                        >
                            {item.name}
                        </Link>
                    )
                } else {
                    return (
                        <a href={item.link} className="navbar-item">{item.name}</a>
                    )
                }
            })}
        </div>
    )
}






