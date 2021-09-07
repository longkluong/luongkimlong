import React from "react"
import kebabCase from "lodash.kebabcase"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import BlogCard from "../components/BlogCard"
import CardLoop from "../components/CardLoop"
import Pagination from "../components/Pagination"
import Seo from "../components/Seo"
import ArchiveSection from "../components/ArchiveSection"

const BlogTag = ({ data, pageContext, location }) => {
  const { allMdx } = data
  return (
    <Layout location={location}>
      <Seo title={pageContext.tag} />
      <ArchiveSection
        title={kebabCase(pageContext.tag)}
        seeMore={pageContext.allTags.map(tag => (
          <Link key={tag} to={`/tag/${kebabCase(tag)}`} className="tag">
            {tag}
          </Link>
        ))}
        numPosts={pageContext.numPosts} 
      />
      <br />
      <CardLoop>
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
      </CardLoop>
      <Pagination
        currentPage={pageContext.currentPage}
        numPages={pageContext.numPages}
        contextPage={`tag/${kebabCase(pageContext.tag)}`}
      />
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
