import * as React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
// import { Children } from "react"
import PostHeader from "../components/PostHeader"
import { Article, Wrapper } from "../components/Layout.style"
import TableOfContents from "../components/TableOfContents"

export function Head({data}) {
  return (
    <>
      <title>{data.mdx.frontmatter.title}</title>
      <meta name="description" content={data.mdx.frontmatter.description}/>
    </>
  )
}

const BlogPostTemplate = ({ data, location, children }) => {
  const post = data.mdx
  const image = post.frontmatter.image.childImageSharp.gatsbyImageData
  const aspectRatio = post.frontmatter.image.childImageSharp.resize.aspectRatio
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <>
      <Layout
        location={location}
        title={siteTitle}
        image={image}
      >
        {/* <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        /> */}
        <PostHeader post={post} image={image} aspectRatio={aspectRatio} />
        <Wrapper>
        {/* <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        > */}
        {/* Check if there are items in TOC */}
          {post?.tableOfContents?.items && (
            <TableOfContents items={post.tableOfContents.items} />
          )}
          <Article>
          {children}
          <Bio />
          </Article>
        {/* </article> */}
        </Wrapper>
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      tableOfContents
      frontmatter {
        title
        category
        tags
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          childImageSharp {
            gatsbyImageData
            resize {
              aspectRatio
            }
          }
        }
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData
            resize {
              aspectRatio
            }
          }
        }
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData
            resize {
              aspectRatio
            }
          }
        }
      }
    }
  }
`
