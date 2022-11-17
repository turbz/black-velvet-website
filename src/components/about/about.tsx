import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import "./about.css"

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { frontmatter: { date: ASC } }
        filter: { frontmatter: { title: { eq: "About Us" } } }
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              image
              date(formatString: "MMMM YYYY")
            }
            html
          }
        }
      }
    }
  `)

  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node

  return (
    <section className="about">
      <div className="content">
        <h2>{frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
      <figure>
        <img src={frontmatter.image} alt="green-image" />
      </figure>
    </section>
  )
}
