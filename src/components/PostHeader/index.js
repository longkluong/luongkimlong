import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import kebabCase from "lodash.kebabcase"
import { PostHeaderWrapper, PostHeaderContent } from "./PostHeader.style"

const GatsbyImgageWithOrient = ({ aspectRatio, className, ...props }) => {
  let orientation
  if (aspectRatio > 1) orientation = "landscape"
  else orientation = "portrait"

  return <GatsbyImage className={`${className} ${orientation}`} {...props} />
}

const PostHeader = ({ image, post, aspectRatio }) => {
  let landscape
  aspectRatio > 1 ? (landscape = true) : (landscape = false)
  return (
    <div className="full-bleed">
      <PostHeaderWrapper landscape={landscape}>
        <PostHeaderContent>
          <Link
            className={"category"}
            to={`/category/${kebabCase(post.frontmatter.category)}`}
          >
            {post.frontmatter.category}
          </Link>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <div>
            {post.frontmatter.tags.map(tag => {
              return (
                <Link className={"tag"} key={tag} to={`/tag/${kebabCase(tag)}`}>
                  {tag}
                </Link>
              )
            })}
          </div>
        </PostHeaderContent>
        <GatsbyImgageWithOrient
          image={image}
          aspectRatio={aspectRatio}
          alt={post.frontmatter.title}
          className="post-header-image"
        />
      </PostHeaderWrapper>
    </div>
  )
}

export default PostHeader
