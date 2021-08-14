import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import BlogCard from "../components/BlogCard"

const BlogPostList = ({ data, pageContext }) => {
  const { allMdx } = data
  return (
    <Layout>
      {allMdx.edges.map(({ node }) => {
        return (
          <BlogCard 
            slug={node.fields.slug}
            image={node.frontmatter.image.childImageSharp.gatsbyImageData}
            category={node.frontmatter.category}
            title={node.frontmatter.title}
            author={node.frontmatter.author}
            tags={node.frontmatter.tags}
            excerpt={node.excerpt}
            date={node.frontmatter.date}
          />
        )
      })}
      <ul>
        {Array.from({ length: pageContext.numPages }).map((item, i) => {
          const index = i + 1
          const link = index === 1 ? "/" : `/page/${index}`
          return (
            <li key={index}>
              {pageContext.currentPage === index ? (
                <span>{index}</span>
              ) : (
                <Link to={link}>{index}</Link>
              )}
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}
export default BlogPostList

export const query = graphql`
  query blogPostsList($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { featured: { eq: false }, draft: { eq: false } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 160)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            author
            category
            tags
            image {
              childImageSharp {
                gatsbyImageData(width: 630)
              }
            }
          }
        }
      }
    }
  }
`
