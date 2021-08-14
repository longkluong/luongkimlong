import React from 'react'
import kebabCase from 'lodash.kebabcase'
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import BlogCard from "../components/BlogCard"

const BlogCategory = ({ data, pageContext }) => {
  const { allMdx } = data
  return (
    <Layout>
      <h1>Categories:</h1>
      {pageContext.allCategories.map((cat) => (
        <Link key={cat} to={`/category/${kebabCase(cat)}`}>{cat}</Link>
      ))}
      <br />
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
          const category = kebabCase(pageContext.category)
          const link =
            index === 1
              ? `/category/${category}`
              : `/category/${category}/page/${index}`
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

export default BlogCategory

export const query = graphql`
  query blogPostsListByCategory($category: String, $skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] }, draft: { eq: false } } }
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