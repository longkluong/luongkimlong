import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import CardLoop from "../components/CardLoop"
import BlogCard from "../components/BlogCard"
import Seo from "../components/Seo"
import Pagination from "../components/Pagination"
import ArchiveSection from "../components/ArchiveSection"

const BlogPostList = ({ data, pageContext, location }) => {
  const { allMdx } = data
  return (
    <>
      <Layout location={location}>
        <Seo title="Welcome to the blog of Lương Kim Long" />
        <ArchiveSection title="Latest Posts" />
        <CardLoop>
          {allMdx.edges.map(({ node }) => {
            return (
              <BlogCard
                key={node.fields.slug}
                id={node.fields.slug}
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
        </CardLoop>
        <Pagination
          currentPage={pageContext.currentPage}
          numPages={pageContext.numPages}
        />
      </Layout>
    </>
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
