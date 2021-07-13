import React from "react"
import Full from "../layouts/basic"
import { Link, graphql } from "gatsby"

export default function Blog ({data}) {
    return (
        <Full>
            <div className="content">
                <h1 className="title has-text-white">Blog</h1>
                <p>{data.allMarkdownRemark.totalCount} Posts</p> 
                {data.allMarkdownRemark.edges.map(({node}) => (
                    <div class="box has-background-primary" key={node.id}>
                        <Link to={node.fields.slug}>
                            <h3>{node.frontmatter.title}{" "} - {node.frontmatter.date}</h3>
                        </Link>
                        <p>{node.excerpt}</p>
                    </div>
                ))}
            </div>
        </Full>
    )
}


export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`