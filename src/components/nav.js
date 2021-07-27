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
            <NavEnd items={items}></NavEnd>
          </NavMenu>
        </NavBar>
      )
}

function NavBar ({ children }) {
    return (
        <div className="navbar is-spaced is-transparent">
            {children}
        </div>
    )
}

function NavBrand ({ title }) {
    return (
        <div className="navbar-brand">
            <div className="navbar-item is-size-4">
                <Link to="/" ><span class="glowBlue">{title.substring(0,1)}</span><span class="glowPink">{title.substring(1,11)}</span><span class="glowBlue">{title.substring(11,12)}</span></Link>
            </div>
        </div>
    )
}

function NavMenu ({ children }) {
    return (
        <div className="navbar-menu is-active is-transparent">{children}</div>
    )
}

function NavEnd ({ items }) {
    return (
        <div className="navbar-end">
            {items.map((item, index) => {
                if (item.link[0] === "/") {
                    return (
                        <Link
                            to={item.link}
                            className="navbar-item is-tab is-size-5"
                            activeClassName="is-active"
                        >
                            <span class="glowBlue">{item.name}</span>
                        </Link>
                    )
                } else {
                    return (
                        <a href={item.link} className="navbar-item is-size-5"><span class="glowBlue">{item.name}</span></a>
                    )
                }
            })}
        </div>
    )
}






