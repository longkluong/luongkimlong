import React from 'react'
import kebabCase from 'lodash.kebabcase'
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import { Tag } from "../components/Label"
import BlogCard from '../components/BlogCard'

const BlogTag = ({ data, pageContext }) => {
  const { allMdx } = data
  return (
    <Layout>
      <h1>All Tags:</h1>
      {pageContext.allTags.map((tag) => (
        <Tag key={tag} to={`/tag/${kebabCase(tag)}`}>{tag}</Tag>
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
          const tags = kebabCase(pageContext.tags)
          const link =
            index === 1
              ? `/tag/${tags}`
              : `/tag/${tags}/page/${index}`
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

export default BlogTag

export const query = graphql`
  query blogPostsListByTag($tag: String, $skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { eq: false } } }
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