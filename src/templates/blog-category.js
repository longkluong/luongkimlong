import React from "react"
import kebabCase from "lodash.kebabcase"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import BlogCard from "../components/BlogCard"
import CardLoop from "../components/CardLoop"
import Pagination from "../components/Pagination"
import Seo from "../components/Seo"
import ArchiveSection from "../components/ArchiveSection"

const BlogCategory = ({ data, pageContext, location }) => {
  const { allMdx } = data
  return (
    <Layout location={location}>
      <Seo
          title={pageContext.category}
        />
      <ArchiveSection title={kebabCase(pageContext.category)} numPosts={pageContext.numPosts} seeMore={pageContext.allCategories.map(cat => (
         <Link key={cat} to={`/category/${kebabCase(cat)}`} className="tag">
           {cat}
         </Link>
      ))}/>
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
      <Pagination currentPage={pageContext.currentPage} numPages={pageContext.numPages} contextPage={`category/${kebabCase(pageContext.category)}`}/>
    </Layout>
  )
}

export default BlogCategory

export const query = graphql`
  query blogPostsListByCategory($category: String, $skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { category: { in: [$category] }, draft: { eq: false } }
      }
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
