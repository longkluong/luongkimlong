const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts that is not a draft, sorted by date
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { draft: { eq: false } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                featured
                category
                tags
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  // Define templates
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const blogListTemplate = path.resolve(`./src/templates/blog-list.js`)
  const blogCategoryTemplate = path.resolve(`./src/templates/blog-category.js`)
  const blogTagTemplate = path.resolve(`./src/templates/blog-tag.js`)

  // All the posts
  const posts = result.data.allMdx.edges

  // Only published posts
  const publishedPosts = posts.filter(({ node }) => {
    return !node.frontmatter.draft
  })

  // Only posts that is not draft
  const nonFeaturedPosts = posts.filter(({ node }) => {
    return !node.frontmatter.featured
  })

  // Create Blog-list page
  const postsPerPage = 3

  // Calculate number of pages needed
  const numPages = Math.ceil(nonFeaturedPosts.length / postsPerPage)

  // Create Blog Listing Pages
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/page/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        numPages,
      },
    })
  })

  const categories = []
  const tags = []

  posts.forEach((post, index) => {
    post.node.frontmatter.category.forEach(cat => categories.push(cat))
    post.node.frontmatter.tags.forEach(tag => tags.push(tag))
  })

  // Results of countCategories is an Object {cat: number of posts per cat}
  const countCategories = categories.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
  }, {})

  const countTags = tags.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
  }, {})

  const kebabCase = require(`lodash.kebabcase`)
  // all Categories is an Array with all the unique categories
  const allCategories = Object.keys(countCategories)
  const allTags = Object.keys(countTags)

  allCategories.forEach((cat, i) => {
    const link = `/category/${kebabCase(cat)}`
    Array.from({
      length: Math.ceil(countCategories[cat] / postsPerPage),
    }).forEach((_, i) => {
      createPage({
        path: i === 0 ? link : `${link}/page/${i + 1}`,
        component: blogCategoryTemplate,
        context: {
          allCategories: allCategories,
          category: cat,
          limit: postsPerPage,
          skip: i * postsPerPage,
          currentPage: i + 1,
          numPages: Math.ceil(countCategories[cat] / postsPerPage),
          numPosts: countCategories[cat],
        },
      })
    })
  })

  allTags.forEach((tag, i) => {
    const link = `/tag/${kebabCase(tag)}`
    Array.from({
      length: Math.ceil(countTags[tag] / postsPerPage),
    }).forEach((_, i) => {
      createPage({
        path: i === 0 ? link : `${link}/page/${i + 1}`,
        component: blogTagTemplate,
        context: {
          allTags: allTags,
          tag: tag,
          limit: postsPerPage,
          skip: i * postsPerPage,
          currentPage: i + 1,
          numPages: Math.ceil(countTags[tag] / postsPerPage),
          numPosts: countTags[tag],
        },
      })
    })
  })

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.node.fields.slug,
        component: blogPostTemplate,
        context: {
          id: post.node.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    // const value = createFilePath({ node, getNode })
    const value = node.frontmatter.permalink
      ? node.frontmatter.permalink
      : createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "Mdx" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
