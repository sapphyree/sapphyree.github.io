import React from "react"
import Full from "../layouts/basic"
import { Link, graphql } from "gatsby"

export default function Blog ({data}) {
    return (
        <Full>
            <div className="content">
                <h1 className="title has-text-white"><span className="glowPink">Blog</span></h1>
                <p>{data.allMarkdownRemark.totalCount} Posts</p> 
                {data.allMarkdownRemark.edges.map(({node}) => (
                    <div class="box has-text-white" key={node.id}>
                        <Link to={node.fields.slug}>
                            <h1 className="title has-text-white is-4">{node.frontmatter.title}{" "}</h1>
                            <h2 className="subtitle has-text-white is-6">{node.frontmatter.date}</h2>
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
    allMarkdownRemark ( sort: {fields: frontmatter___date, order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
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