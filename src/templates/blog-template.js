import React from "react"
import { graphql } from "gatsby"
import Full from "../layouts/basic"

export default function BlogPost({ data }) {
    const post = data.markdownRemark
  return (
    <Full>
      <div className="columns">
      <div className="column has-background-primary is-half">
          <div className="content">
            <h1 className="title">{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
          </div>
      </div>
      </div>
    </Full>
  )
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`