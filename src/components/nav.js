import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { string } from "prop-types"

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
            <div className="navbar-item is-size-5">
                <h1><span class="glow_blue">{title.substring(0,1)}</span><span class="glow_pink">{title.substring(1,11)}</span><span class="glow_blue">{title.substring(11,12)}</span></h1>
            </div>
        </div>
    )
}

function NavMenu ({ children }) {
    return (
        <div className="navbar-menu is-active is-primary">{children}</div>
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






