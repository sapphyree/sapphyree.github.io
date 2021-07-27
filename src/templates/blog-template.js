import React from "react"
import { graphql } from "gatsby"
import Full from "../layouts/basic"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Full>
      <div className="columns">
      <div className="column">
          <div className="content">
            <h1 className="title has-text-white is-3"><span className="glowPink">{post.frontmatter.title}</span></h1>
            <h1 className="subtitle has-text-white is-5"><span className="glowBlue">{post.frontmatter.date}</span></h1>
            <div className="box has-text-white">
              <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </div>
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
        date (formatString: "YYYY-MM-DD // DD MMMM YYYY")
      }
    }
  }
`